import * as Compat from "src/Classes/CompatScreen";
import {RegisterController} from "src/ViewControllers/Register"
import { Info } from "./Info";

export class HomeController extends Compat.BaseCompatScreen{
    HTML_VIEW_PATH: any = "./Views/home.html";
    onViewLoad(): void {
        this.setEvents();
        if(this.WHERE_CALL_FROM == Compat.ScreenDataTypeEnum.FROM_SON){
            this.F["__usr"].html(this.sonData?.data["usr"]);
        }

        this.fillList();
    }

    setEvents():void{        
        this.F["__reg"].click(() => {
            this.navigation.pushScreen(new RegisterController(), {idUser: 123, usr: this.sonData?.data["usr"]});
        });
        this.F["__info"].click(() => {
            this.navigation.pushScreen(new Info());
        });
    }

    fillList(){
        let html = "<p>:a:</p>";
        
        fetch("http://localhost:3001/users", {method: "get"})
            // It works?
            .then((v)=>{
                if(!v.ok){
                    throw new Error("Error descargando información");
                }

                return v.json();
            })
            // Works
            .then((responseJson) => {
                let tHtml = "";
                responseJson.forEach(el => {
                    tHtml += html.replace(":a:", el);
                });
                this.F["__list"].html(tHtml);
            })
            // Dont
            .catch((e) => {
                console.log(e);
            })
    }

    constructor() {
        super();
    }
}