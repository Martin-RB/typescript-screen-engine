import { BasePresenter } from "../ScreenMastah/BasePresenter";
import { V_Home } from "../Views/V_Home";

export class P_Home extends BasePresenter{
    _ID: string = "HOME";
    _viewType: any = V_Home;
}