import { BaseView } from "../ScreenMastah/BaseView";

export class V_Home extends BaseView{
    pathScreen: string = "html/home.html";
    
    protected onDraw(): void {
        setInterval(() => {this.loopMember()}, 500);
    }

    private loopMember(){
        let num = Math.random() * 100;
        
        this.F["__loop"].html(num.toString());
    }

}