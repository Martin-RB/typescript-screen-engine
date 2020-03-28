import { BasePopup } from "../../lib/ScreenMastah/PopupCommon/BasePopup";
import { BaseView } from "../../lib/ScreenMastah/ScreenDynamicCommon/BaseView";
import { PopupCloseInfo } from "../../lib/ScreenMastah/PopupCommon/PopupCloseInfo";

export class YesNoPopup extends BasePopup<YesNoPopupView>{
    protected viewType: new (container: JQuery<HTMLElement>) => YesNoPopupView = YesNoPopupView;
    
    /*
        TUTO:::
        Es importante que se pongan los CloseState (_CS)
        Esto principalmente para poder identificar con facilidad y sin ambiguedad
            el motivo por el cual un popup se ha cerrado.
            Ejemplo: Si se ha cerrado por hacer click en si (YES_CS), o click en no (NO_CS)
                o, en un supuesto, el usuario lo cerro (USER_CLOSE_CS)
    */
    static YES_CS = "0";
    static NO_CS = "1";
    
    /**
     * TUTO:::
     * Open se llama cuando se abre el popup. Como es async, detendra la ejecucion hasta que 
     * se resuelva (res()) la promesa
     */
    async Open(): Promise<PopupCloseInfo> {

        let title = this.ppData["title"];
        let text = this.ppData["text"];
        
        this.View.setTexts(title, text);

        return new Promise((res, rej) => {

            // Aqui se declaran los eventos que marcaran el cierre del popup

            this.View.OnYesClickEvent = () => {
                res(new PopupCloseInfo(YesNoPopup.YES_CS));
            }

            this.View.OnNoClickEvent = () => {
                res(new PopupCloseInfo(YesNoPopup.NO_CS));
            }
        });
    }

}

/**
 * TUTO:::
 * La vista del popup funciona de la misma manera que las vistas de los presentadores
 */
export class YesNoPopupView extends BaseView{
    public pathScreen: string = "html/popup/yesNo.html";

    private onYesClickEvent: (() => void) | undefined;
    private onNoClickEvent: (() => void) | undefined;

    set OnYesClickEvent(event: () => void){
        this.onYesClickEvent = event;
    }
    
    set OnNoClickEvent(event: () => void){
        this.onNoClickEvent = event;
    }

    setTexts(title:string, text:string){
        this.F["__pop_title"].html(title);
        this.F["__pop_text"].html(text);
    }

    OnDraw(){
        console.log(this.F["__pop_yes"]);
        
        this.F["__pop_yes"].click(() => {
            this.onYesClickEvent?.call(this);
        });
        this.F["__pop_no"].click(() => {
            this.onNoClickEvent?.call(this);
        });
    }

}