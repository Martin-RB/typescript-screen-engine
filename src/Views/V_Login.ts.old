import { BaseView } from "../ScreenMastah/BaseView";

export class V_Login extends BaseView{
    pathScreen: string = "html/login.html";
    private _onLogin : ((username: string, password: string)=>void) | undefined;
    constructor(container:any) {
        super(container);
    }

    onDraw(){
        this.setEvents();
    }

    setEvents(){
        this.F["__login"].on("click", () => {
            if (this._onLogin !== undefined) {
                this._onLogin(this.F["__user"].val() as string, this.F["__password"].val() as string)
            }
        });
    }

    setOnLogin(callback: (username: string, password: string)=>void){
        this._onLogin = callback;
    }
}