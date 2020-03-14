import { Navigation, LoadOriginType, IHashMap } from "./Navigation";
import { BaseView, INavigableView } from "./BaseView";

export abstract class BasePresenter<T extends (BaseView)> {
    protected abstract _ID: string;
    private _inner_view: T | undefined;
    private _container: JQuery|undefined;
    private _fatherData: IHashMap<any>|undefined;
    private _sonData: IHashMap<any>|undefined;
    protected _fatherNavigation: Navigation|undefined;
    protected _sonNavigation: Navigation|undefined;
    protected abstract _viewType: new(container: JQuery) => T;
    
    public get fatherNavigation(): Navigation| undefined{
        return this._fatherNavigation;
    }

    public get sonNavigation(): Navigation|undefined{
        return this._sonNavigation;
    }
    
    public get ID() : string {
        return this._ID;
    }
    
    protected get container(): JQuery{        
        if(this._container == undefined){
            throw new EvalError("Called container when _container was not set, call setContainer(container) first.")
        }
        return this._container;
    }

    setData(type: LoadOriginType, data: IHashMap<any>){
        if(type == LoadOriginType.FROM_FATHER){
            this._fatherData = data;
        }
        else{
            this._sonData = data;
        }
    }

    setContainer(__container: JQuery){
        this._container = __container;
    }

    setNavigation(navigation: Navigation){
        this._fatherNavigation = navigation;
    }

    init(){
        if(this._container != undefined){
            this._inner_view = new this._viewType(this._container);
            this._inner_view.setOnBackEvent(() => {
                this._fatherNavigation?.tryPopScreen();
            });
        }
        else{
            throw new EvalError("Called init() when _container was not set. Call setContainer() first.");
        }
    }

    async draw(){
        if(this._inner_view !== undefined){
            await this._view.draw();
            if("getNavigationContainer" in this._inner_view){
                let sonContainer = (this._inner_view as unknown as INavigableView).getNavigationContainer();
                this._sonNavigation = new Navigation(sonContainer);
            }
        }
        else{
            throw new EvalError("Called draw() when _inner_view was not set. Call init() first.")
        }
    }

    protected get _view(): T{
        if(this._inner_view == undefined){
            throw new EvalError("Requested view when _inner_view was not set. Call init() first.");
        }
        return this._inner_view;
    }

    onCreate(){

    }

    onStart(origin: LoadOriginType){

    }

    onSuspend(){

    }

    protected onBack(){

    }

    async onClose(): Promise<boolean>{
        return true;
    }
}