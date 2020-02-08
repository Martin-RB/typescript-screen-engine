define(["require", "exports", "../Classes/CompatScreen"], function (require, exports, Compat) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RegisterController extends Compat.BaseCompatScreen {
        constructor() {
            super();
            this.HTML_VIEW_PATH = "./Views/register.html";
        }
        onViewLoad() {
            this.F["__txt"].val(this.fatherData.data["usr"]);
            this.setEvents();
        }
        setEvents() {
            this.F["__back"].click(() => {
                var _a;
                (_a = this.navigation) === null || _a === void 0 ? void 0 : _a.popScreen({ usr: this.F["__txt"].val() });
            });
            this.F["__register"].click(() => {
                fetch("http://localhost:3001/users", {
                    method: "post",
                    mode: "cors",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ d: this.F["__txt"].val().toString() })
                })
                    .then((v) => {
                    var _a;
                    if (!v.ok) {
                        return;
                    }
                    (_a = this.navigation) === null || _a === void 0 ? void 0 : _a.popScreen({ usr: this.F["__txt"].val() });
                })
                    .catch((e) => {
                    console.log(e);
                });
            });
            this.F["__idUser"].html(this.fatherData.data.idUser);
        }
    }
    exports.RegisterController = RegisterController;
});
