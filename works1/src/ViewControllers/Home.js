define(["require", "exports", "../Classes/CompatScreen", "../ViewControllers/Register"], function (require, exports, Compat, Register_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HomeController extends Compat.BaseCompatScreen {
        constructor() {
            super();
            this.HTML_VIEW_PATH = "./Views/home.html";
        }
        onViewLoad(html_element, respTxt, txtStatus, jqXHR) {
            this.setEvents();
        }
        setEvents() {
            this.F["__reg"].click(() => {
                this.navigation.pushScreen(new Register_1.RegisterController(), { idUser: 123 });
            });
        }
    }
    exports.HomeController = HomeController;
});
