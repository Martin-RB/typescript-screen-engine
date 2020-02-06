import * as Compat from "src/Classes/CompatScreen";
import {RegisterController} from "src/ViewControllers/Register"

export class HomeController extends Compat.BaseCompatScreen{
    HTML_VIEW_PATH: any = "./Views/home.html";
    onViewLoad(html_element: any, respTxt: any, txtStatus: any, jqXHR: any): void {
        this.setEvents();
    }

    setEvents():void{        
        this.F["__reg"].click(() => {
            this.navigation.pushScreen(new RegisterController(), {idUser: 123});
        })
    }

    constructor() {
        super();
    }
}