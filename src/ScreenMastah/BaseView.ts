import { IHashMap } from "./Navigation";

export abstract class BaseView {
    abstract pathScreen: string;
    private _onBackEvent: ((data?: IHashMap<any>) => void) | undefined = undefined;
    protected _container : JQuery;
    protected F: IHashMap<JQuery>;

    constructor(container: JQuery) {
        this._container = container;
        this.F = {};
    }

    async draw(){
        await this.loadScreen();
        this.findFields();
        this.onDraw();
    }

    protected abstract onDraw(): void;
    
    public setOnBackEvent(value : (data?: IHashMap<any>) => void) {
        this._onBackEvent = value;
    }

    protected get onBackEvent(): ((data?: IHashMap<any>) => void) | undefined{
        return this._onBackEvent;
    }
    
    private findFields(){
        this._container.find("[id*=__]").each((_, a) => {
            this.F[a.id] = $(a);
        })
    }

    private loadScreen() : Promise<void> {
        return new Promise<any>((resolve, reject)=>{
            this._container.load(this.pathScreen, (v,d,a) => {
                if(a.statusText == "OK"){
                    resolve();
                }
                else{
                    reject();
                }
            });
        })
    }
}

export interface INavigableView{
    getNavigationContainer():JQuery;
}