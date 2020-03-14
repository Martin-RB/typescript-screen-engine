import { BasePresenter } from "../ScreenMastah/BasePresenter";
import { V_Platform } from "../Views/V_Platform";
import { P_Home } from "./P_Home";
import { P_About } from "./P_About";

export class P_Platform extends BasePresenter{
    _ID: string = "P_PLATFORM";
    _viewType: any = V_Platform;
    _view: V_Platform = (this._view as V_Platform);

    onCreate(){
        this._sonNavigation?.pushScreen(P_Home);
        this.setViewEvents();
    }

    setViewEvents(){
        this._view.onHomeClicked = () => {
            if(this._sonNavigation?.tryPopAllScreens()){
                this._sonNavigation.pushScreen(P_Home);
            }
        }
        this._view.onAboutClicked = () => {             
            if(this._sonNavigation?.tryPopAllScreens()){
                this._sonNavigation.pushScreen(P_About);
            }
        }
        this._view.onPage1Clicked = () => {
            if(this._sonNavigation?.tryPopAllScreens()){
                this._sonNavigation.pushScreen(P_Home);
            }
        }
    }
}