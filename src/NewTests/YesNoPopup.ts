import { BasePopup } from "../ScreenMastah/PopupCommon/BasePopup";
import { BaseView } from "../ScreenMastah/ScreenDynamicCommon/BaseView";
import { PopupCloseInfo } from "../ScreenMastah/PopupCommon/PopupCloseInfo";

export class YesNoPopup extends BasePopup<YesNoPopupView>{
    protected viewType: new (container: JQuery<HTMLElement>) => YesNoPopupView = YesNoPopupView;
    
    static YES_CS = "0";
    static NO_CS = "1";
    
    async Open(): Promise<PopupCloseInfo> {

        let title = this.ppData["title"];
        let text = this.ppData["text"];
        console.log(title, text);
        
        this.View.setTexts(title, text);

        return new Promise((res, rej) => {
            this.View.OnYesClickEvent = () => {
                res(new PopupCloseInfo(YesNoPopup.YES_CS));
            }

            this.View.OnNoClickEvent = () => {
                res(new PopupCloseInfo(YesNoPopup.NO_CS));
            }
        });
    }

}

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