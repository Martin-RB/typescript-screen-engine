import { BasePresenter } from "../ScreenMastah/BasePresenter";
import { V_Login } from "../Views/V_Login";
import { LoadOriginType } from "../ScreenMastah/Navigation";
import { P_Platform } from "./P_Platform";

export class P_Login extends BasePresenter{
    _ID: string = "P_Login";
    _viewType = V_Login;
    constructor() {
        super();
    }

    // Launched once. When screen creates
    onCreate(){
        this._view.setOnLogin((username: string, password: string) => {
            alert(username + " se logeó con la contraseña " + password);
            this._fatherNavigation?.pushScreen(P_Platform);
        });
    }
}