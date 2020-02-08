import {BaseCompatScreen} from "src/Classes/CompatScreen";
import { Contact } from "./Contact";

export class Info extends BaseCompatScreen{
    HTML_VIEW_PATH: string = "./Views/info.html";
    onViewLoad(): void {
        this.setEvents();
    }
    setEvents(){
        this.F["__back"].click(()=> {
            this.navigation.popScreen();
        });
        this.F["__contact"].click(() => {
            this.navigation.pushScreen(new Contact());            
        });
    }
    constructor() {
        super();
    }
}