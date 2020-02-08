define(["require", "exports", "lib/jquery"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScreenDataTypeEnum;
    (function (ScreenDataTypeEnum) {
        ScreenDataTypeEnum[ScreenDataTypeEnum["FROM_FATHER"] = 0] = "FROM_FATHER";
        ScreenDataTypeEnum[ScreenDataTypeEnum["FROM_SON"] = 1] = "FROM_SON";
    })(ScreenDataTypeEnum = exports.ScreenDataTypeEnum || (exports.ScreenDataTypeEnum = {}));
    class BaseCompatScreen {
        constructor() {
            this.fatherData = null;
            this.sonData = null;
            this.container = null;
            this.navigation = null;
            this.WHERE_CALL_FROM = ScreenDataTypeEnum.FROM_FATHER;
            this.F = {};
        }
        setData(data) {
            if (!data) {
                return this;
            }
            if (data.TYPE == ScreenDataTypeEnum.FROM_FATHER) {
                this.fatherData = data;
            }
            else if (data.TYPE == ScreenDataTypeEnum.FROM_SON) {
                this.sonData = data;
            }
            return this;
        }
        ;
        setContainer(container) {
            this.container = container;
            return this;
        }
        setNavigation(navigation) {
            this.navigation = navigation;
            return this;
        }
        draw() {
            var _a;
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.load(this.HTML_VIEW_PATH, (responseText, textStatus, jqXHR) => {
                if (textStatus == "success") {
                    this.F = this.findFields();
                    this.onViewLoad();
                }
                else {
                    throw new Error("Imposible cargar html: " + this.HTML_VIEW_PATH);
                }
            });
            return this;
        }
        // Called when screen goes background due to a new screen push
        onBackground() {
            return this;
        }
        // Called when screen goes foreground due to the pop of the front screen
        // It tells if screen has been called from father or son
        onForeground(where) {
            this.WHERE_CALL_FROM = where;
            return this;
        }
        // Called when screen is poped
        onClose() {
            return this;
        }
        findFields() {
            var _a;
            let obj = {};
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.find("[id*=__]").each((_, a) => {
                obj[a.id] = $(a);
            });
            return obj;
        }
    }
    exports.BaseCompatScreen = BaseCompatScreen;
    class Navigation {
        constructor(container) {
            this.screenStack = [];
            this.container = container;
        }
        pushScreen(inScreen, data) {
            let screenData;
            if (this.screenStack.length > 0) {
                let lastScreen = this.screenStack[this.screenStack.length - 1];
                lastScreen.onBackground();
            }
            let nowScreen = inScreen.setContainer(this.container)
                .setNavigation(this);
            if (data !== undefined) {
                screenData = {
                    TYPE: ScreenDataTypeEnum.FROM_FATHER,
                    data: data
                };
                nowScreen.setData(screenData);
            }
            this.screenStack.push(nowScreen.onForeground(ScreenDataTypeEnum.FROM_FATHER).draw());
        }
        popScreen(data) {
            var _a;
            let screenData;
            (_a = this.screenStack.pop()) === null || _a === void 0 ? void 0 : _a.onClose();
            let newScreen = this.screenStack[this.screenStack.length - 1];
            if (data) {
                screenData = {
                    TYPE: ScreenDataTypeEnum.FROM_SON,
                    data: data
                };
                newScreen.setData(screenData);
            }
            newScreen.onForeground(ScreenDataTypeEnum.FROM_SON).draw();
        }
    }
    exports.Navigation = Navigation;
});
