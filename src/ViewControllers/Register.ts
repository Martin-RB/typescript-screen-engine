import * as Compat from "../Classes/CompatScreen";

export class RegisterController extends Compat.BaseCompatScreen{
    HTML_VIEW_PATH: any = "./Views/register.html";
    onViewLoad(): void {
        this.F["__txt"].val(this.fatherData.data["usr"]);
        this.setEvents();
    }

    setEvents():void{
        this.F["__back"].click(() => {            
            this.navigation?.popScreen({usr: this.F["__txt"].val()});
        });
        this.F["__register"].click(() => {
            fetch("http://localhost:3001/users", 
                {
                    method: "post",
                    mode: "cors",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({d: this.F["__txt"].val().toString()})
                })
                .then((v) => {
                    if(!v.ok){
                        return;
                    }
                    this.navigation?.popScreen({usr: this.F["__txt"].val()});
                })
                .catch((e) => {
                    console.log(e);
                })
        });
        this.F["__idUser"].html(this.fatherData.data.idUser);
    }

    onClose(){
        if(this.F["__txt"].val() == ""){
            return false;
        }
        return true;
    }

    constructor() {
        super();
    }
}