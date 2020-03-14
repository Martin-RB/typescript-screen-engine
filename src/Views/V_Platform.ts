import { BaseView, INavigableView } from "../ScreenMastah/BaseView";

export class V_Platform extends BaseView implements INavigableView{
    pathScreen: string = "html/platform.html";
    private _onAboutClicked: (() => void) | undefined;
    private _onHomeClicked: (() => void) | undefined;
    private _onPage1Clicked: (() => void) | undefined;
    private _onPage2Clicked: (() => void) | undefined;
    
    protected onDraw(): void {
        this.setEvents();
    }
    
    setEvents(){
        this.F["__home"].click(() => {
            this._onHomeClicked?.call(this);
        });
        this.F["__about"].click(() => {
            this._onAboutClicked?.call(this);
        });
        this.F["__page1"].click(() => {
            this._onPage1Clicked?.call(this);
        });
        this.F["__page2"].click(() => {
            this._onPage2Clicked?.call(this);
        });
        this.F["__logout"].click(() => {
            this.onBackEvent?.call(this);
        });
    }
    
    getNavigationContainer(): JQuery<HTMLElement> {
        return this.F["__container"];
    }

    public set onAboutClicked(event : () => void) {
        this._onAboutClicked = event;
        
    }

    public set onHomeClicked(event : () => void) {
        this._onHomeClicked = event;
    }

    public set onPage1Clicked(event : () => void) {
        this._onPage1Clicked = event;
    }

    public set onPage2Clicked(event : () => void) {
        this._onPage2Clicked = event;
    }
}