import {BaseCompatScreen} from "src/Classes/CompatScreen";

export class Contact extends BaseCompatScreen{
    HTML_VIEW_PATH: string = "./Views/contact.html";

    onViewLoad(): void {
        this.setEvents();
    }

    setEvents(){
        this.F["__back"].click(()=>{
            this.navigation.popScreen();
        });
    }

    constructor(){
        super();
    }
}