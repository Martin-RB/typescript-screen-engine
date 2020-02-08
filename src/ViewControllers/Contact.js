define(["require", "exports", "src/Classes/CompatScreen"], function (require, exports, CompatScreen_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Contact extends CompatScreen_1.BaseCompatScreen {
        constructor() {
            super();
            this.HTML_VIEW_PATH = "./Views/contact.html";
        }
        onViewLoad() {
            this.setEvents();
        }
        setEvents() {
            this.F["__back"].click(() => {
                this.navigation.popScreen();
            });
        }
    }
    exports.Contact = Contact;
});
