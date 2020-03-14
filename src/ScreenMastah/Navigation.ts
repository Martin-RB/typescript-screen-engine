import $ from "jquery";
import { BasePresenter } from "./BasePresenter";
import { BaseView } from "./BaseView";

export interface IHashMap<T>{
    [key: string]: T;
}

export enum LoadOriginType{
    FROM_FATHER = 0,
    FROM_SON = 1
}

export class Navigation {
    private _screenStack: Array<BasePresenter<any>>;

    constructor(private container : JQuery) {
        this._screenStack = [];
    }

    async pushScreen(presenterType: (new() => BasePresenter<any>), data?: IHashMap<any>){

        let screen = new presenterType();
        if(!this.isBasePresenter(screen)){
            throw new TypeError(`Screen pushed (${screen.ID}) is not BasePresenter type`);
        }


        this.getLastScreen()?.onSuspend();
        this._screenStack.push(screen);

        screen.setContainer(this.container);
        screen.setNavigation(this);
        if(data){
            screen.setData(LoadOriginType.FROM_FATHER, data);
        }
        screen.init();
        await screen.draw();
        
        screen.onCreate();
        screen.onStart(LoadOriginType.FROM_FATHER);
    }

    async tryPopScreen(data?: IHashMap<any>) : Promise<boolean>{
        let screen = this.getLastScreen();
        if(screen == undefined){
            return true;
        }


        if(!(await screen.onClose())){
            return false;
        }

        this._screenStack.pop();
        screen = this.getLastScreen();

        if(screen == undefined){
            return true;
        }
        

        if(data){
            screen.setData(LoadOriginType.FROM_SON, data);
        }
        screen.draw();
        screen.onStart(LoadOriginType.FROM_SON);
        return true;
    }

    async tryPopAllScreens() : Promise<boolean>{
        while(this.hasScreensOnStack()){
            if(! (await this.tryPopScreen()) ){
                return false;
            }
        }
        return true;
    }

    hasScreensOnStack() : boolean{
        return this._screenStack.length > 1;
    }

    private getLastScreen() : BasePresenter<any> | undefined{
        return this._screenStack[this._screenStack.length - 1];
    }

    private isBasePresenter(type: any){
        return (type instanceof BasePresenter);
    }
}