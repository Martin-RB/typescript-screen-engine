import { BasePresenter } from "../ScreenMastah/PresenterCommon/BasePresenter";
import { BaseView } from "../ScreenMastah/ScreenDynamicCommon/BaseView";
import { Navigation } from "../ScreenMastah/NavigationCommon/Navigation";
import { LoginPresenter } from "./Login";

export class PlatformPresenter extends BasePresenter<PlatformView>{
    protected viewType: new (container: JQuery<HTMLElement>) => PlatformView = PlatformView;
    protected _ID: string = "PLATFORM";
    innerNavigation: Navigation | undefined;

    OnCreate(){
        this.innerNavigation = new Navigation(this.View.GetInnerNavigationContainer());
        this.innerNavigation.PushScreen(LoginPresenter);

        this.View.OnLogoutClicked = () => {
            this.navigation.TryPopScreen();
        }
    }
    async OnClose() : Promise<boolean>{
        if(this.innerNavigation == undefined){
            return true;
        }
        return await this.innerNavigation.TryPopScreen();
    }
}

export class PlatformView extends BaseView{
    pathScreen: string = "html/platform.html";

    homeClickedEvent: (() => void) | undefined;
    aboutClickedEvent: (() => void) | undefined;
    page1ClickedEvent: (() => void) | undefined;
    page2ClickedEvent: (() => void) | undefined;
    logoutClickedEvent: (() => void) | undefined;

    OnDraw(): void {
        this.F["home"].click(() => {
            this.homeClickedEvent?.call(this);
        });        
        this.F["logout"].click(() => {
            this.logoutClickedEvent?.call(this);
        });
    }

    GetInnerNavigationContainer(): JQuery<HTMLElement> {
        return this.F["container"];
    }
    
    set OnHomeClicked(event : () => void){
        this.homeClickedEvent = event;
    }
    set OnAboutClicked(event : () => void){
        this.aboutClickedEvent = event;
    }
    set OnPage1Clicked(event : () => void){
        this.page1ClickedEvent = event;
    }
    set OnPage2Clicked(event : () => void){
        this.page2ClickedEvent = event;
    }
    set OnLogoutClicked(event : () => void){
        this.logoutClickedEvent = event;
    }
}