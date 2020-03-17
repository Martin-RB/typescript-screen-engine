import { BasePresenter } from "../ScreenMastah/BasePresenter";
import { V_About } from "../Views/V_About";
import { P_Creators } from "./P_Creators";

export class P_About extends BasePresenter{
    _ID: string = "ABOUT";
    _viewType: any = V_About;
    _view: V_About = (this._view as V_About);

    onCreate(){
        this._view.onCreatorsClick = () => {
            this._fatherNavigation?.pushScreen(P_Creators);
        }
    }
}