import { BaseView } from "../ScreenMastah/BaseView";

export class V_About extends BaseView{
    pathScreen: string = "html/about.html";
    private _onCreatorsClick: (() => void) | undefined;
    
    protected onDraw(): void {
        this.F["__creators"].click(() => {
            this._onCreatorsClick?.call(this);
        });
    }

    public set onCreatorsClick(event: (() => void) | undefined){
        this._onCreatorsClick = event;
    }

    
}