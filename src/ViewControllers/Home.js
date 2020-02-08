define(["require", "exports", "src/Classes/CompatScreen", "src/ViewControllers/Register", "./Info"], function (require, exports, Compat, Register_1, Info_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HomeController extends Compat.BaseCompatScreen {
        constructor() {
            super();
            this.HTML_VIEW_PATH = "./Views/home.html";
        }
        onViewLoad() {
            var _a;
            this.setEvents();
            if (this.WHERE_CALL_FROM == Compat.ScreenDataTypeEnum.FROM_SON) {
                this.F["__usr"].html((_a = this.sonData) === null || _a === void 0 ? void 0 : _a.data["usr"]);
            }
            this.fillList();
        }
        setEvents() {
            this.F["__reg"].click(() => {
                var _a;
                this.navigation.pushScreen(new Register_1.RegisterController(), { idUser: 123, usr: (_a = this.sonData) === null || _a === void 0 ? void 0 : _a.data["usr"] });
            });
            this.F["__info"].click(() => {
                this.navigation.pushScreen(new Info_1.Info());
            });
        }
        fillList() {
            let html = "<p>:a:</p>";
            fetch("http://localhost:3001/users", { method: "get" })
                // It works?
                .then((v) => {
                if (!v.ok) {
                    throw new Error("Error descargando información");
                }
                return v.json();
            })
                // Works
                .then((responseJson) => {
                let tHtml = "";
                responseJson.forEach(el => {
                    tHtml += html.replace(":a:", el);
                });
                this.F["__list"].html(tHtml);
            })
                // Dont
                .catch((e) => {
                console.log(e);
            });
        }
    }
    exports.HomeController = HomeController;
});
