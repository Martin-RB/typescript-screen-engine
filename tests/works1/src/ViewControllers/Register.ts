import * as Compat from "../Classes/CompatScreen";

export class RegisterController extends Compat.BaseCompatScreen{
    HTML_VIEW_PATH: any = "./Views/register.html";
    onViewLoad(html_element: any, respTxt: any, txtStatus: any, jqXHR: any): void {
        this.setEvents();
    }

    setEvents():void{
        this.F["__back"].click(() => {            
            this.navigation?.popScreen();
        });
        this.F["__register"].click(() => {
            alert("Hola, buenas tardes");
        });
        this.F["__idUser"].html(this.fatherData.data.idUser);
    }

    constructor() {
        super();
    }
}