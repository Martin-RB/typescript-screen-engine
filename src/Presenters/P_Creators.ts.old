import { BasePresenter } from "../ScreenMastah/BasePresenter";
import { V_Creators } from "../Views/V_Creators";

export class P_Creators extends BasePresenter<V_Creators>{
    _viewType: new (container: JQuery<HTMLElement>) => V_Creators = V_Creators;
    _ID: string = "CREATORS";
    canClose = false;

    onCreate(){

        this._view.onCheckMarked = ()=>{
            this.canClose = true;
        }
    }

    onStart(){
        let data = [
            {
                name: "ROGER",
                age: 15,
                address: {
                    street: "A",
                    CP: 22812
                }
            }
        ];

        this._view.fillCreators(data);
    }

    async onClose(): Promise<boolean>{
        return await this._view.waitUserExitSolicitude() || true;
    }

}