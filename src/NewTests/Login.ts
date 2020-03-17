import { BasePresenter } from "../ScreenMastah/PresenterCommon/BasePresenter";
import { BaseView } from "../ScreenMastah/ScreenDynamicCommon/BaseView";
import { LoadOriginType } from "../ScreenMastah/NavigationCommon/LoadOriginType";
import { PlatformPresenter } from "./Platform";
import { PopetMaster } from "../ScreenMastah/PopupCommon/PopetMaster";
import { YesNoPopup } from "./YesNoPopup";
import { IHashMap } from "../ScreenMastah/Common/IHashMap";

export class LoginPresenter extends BasePresenter<LoginView>{
    protected _ID: string = "LOGIN";
    protected viewType: new (container: JQuery<HTMLElement>) => LoginView = LoginView;

    username: string | undefined;
    password: string | undefined;

    OnCreate(){
        this.View.OnSubmit = (username, password) => {
            this.username = username;
            this.password = password;
            this.navigation.PushScreen(PlatformPresenter);
        }
    }

    OnStart(origin: LoadOriginType){        
        if(this.username != undefined && this.password != undefined){
            this.View.SetInfo(this.username, this.password);
        }
    }

    async OnClose(){
        let data: IHashMap<any> = {
            title: "Espera!",
            text: "Estas seguro quieres cerrar sesión?"
        }
        let result = await PopetMaster.OpenPopup(YesNoPopup, data);
        return result.CloseStatus == YesNoPopup.YES_CS;
    }
}

export class LoginView extends BaseView{
    public pathScreen: string = "html/login.html";
    private _onSubmit: ((username: string, password: string) => void) | undefined;
    
    OnDraw(){
        this.F["login"].click(() => {
            this._onSubmit?.call(this, this.F["user"].val() as string, 
                                        this.F["password"].val() as string);
        });
    }

    set OnSubmit(event : (username: string, password: string) => void){
        this._onSubmit = event;
    }

    SetInfo(username: string, password: string){
        console.log(this.F["user"], username);
        
        this.F["user"].val(username);
        this.F["password"].val(password);
    }

    GetInfo(){
        return {username: this.F["user"].val(), password: this.F["password"].val()};
    }
}