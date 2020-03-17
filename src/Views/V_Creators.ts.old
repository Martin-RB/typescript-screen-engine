import { BaseView } from "../ScreenMastah/BaseView";
import { YesNoPopup } from "../components/YesNoPopup";

export type Creator = {
    name: string,
    age: number,
    address: {
        street: string,
        CP: number
    }
}

export class V_Creators extends BaseView{
    pathScreen: string = "html/creators.html";
    private _onCheckMarked: (()=>void) | undefined;
    
    protected onDraw(): void {
        this.F["__back"].click(() => {
            this.onBackEvent?.call(this);
        });

        this.F["__check"].click((e)=> {
            this._onCheckMarked?.call(this);
            (e.target as HTMLButtonElement).value = "Checked :D";
        })
    }

    fillCreators(list: Array<Creator>){
        list.forEach(el => {
            this.F["__cList"].append(`<li>
                    ${el.name} ${el.age} : ${el.address.street} ${el.address.CP}
                </li>`);
        });
    }

    
    public set onCheckMarked(event : (()=>void)) {
        this._onCheckMarked = event;
    }

    public async waitUserExitSolicitude(): Promise<boolean>{
        let popup = new YesNoPopup(this._container, "hoals", "lorem XD");
        return popup.waitUserChoose();
    }
    
}