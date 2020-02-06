define(["require", "exports", "../Classes/CompatScreen"], function (require, exports, Compat) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RegisterController extends Compat.BaseCompatScreen {
        constructor() {
            super();
            this.HTML_VIEW_PATH = "./Views/register.html";
        }
        onViewLoad(html_element, respTxt, txtStatus, jqXHR) {
            this.setEvents();
        }
        setEvents() {
            this.F["__back"].click(() => {
                var _a;
                (_a = this.navigation) === null || _a === void 0 ? void 0 : _a.popScreen();
            });
            this.F["__register"].click(() => {
                alert("Hola, buenas tardes");
            });
            this.F["__idUser"].html(this.fatherData.data.idUser);
        }
    }
    exports.RegisterController = RegisterController;
});
