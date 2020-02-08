define(["require", "exports", "src/Classes/CompatScreen", "./Contact"], function (require, exports, CompatScreen_1, Contact_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Info extends CompatScreen_1.BaseCompatScreen {
        constructor() {
            super();
            this.HTML_VIEW_PATH = "./Views/info.html";
        }
        onViewLoad() {
            this.setEvents();
        }
        setEvents() {
            this.F["__back"].click(() => {
                this.navigation.popScreen();
            });
            this.F["__contact"].click(() => {
                this.navigation.pushScreen(new Contact_1.Contact());
            });
        }
    }
    exports.Info = Info;
});
