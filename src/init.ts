import { Navigation } from "./ScreenMastah/NavigationCommon/Navigation";
import { LoginPresenter } from "./NewTests/Login";

let masterNav = new Navigation($("#app"));
masterNav.PushScreen(LoginPresenter);