define(["require", "exports", "jquery"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScreenDataTypeEnum;
    (function (ScreenDataTypeEnum) {
        ScreenDataTypeEnum[ScreenDataTypeEnum["FROM_FATHER"] = 0] = "FROM_FATHER";
        ScreenDataTypeEnum[ScreenDataTypeEnum["FROM_SON"] = 1] = "FROM_SON";
    })(ScreenDataTypeEnum || (ScreenDataTypeEnum = {}));
    class Navigation {
        constructor(container) {
            this.screenStack = [];
            this.container = container;
        }
        pushScreen(inScreen, data) {
            let screenData;
            if (this.screenStack.length > 0) {
                let lastScreen = this.screenStack[this.screenStack.length - 1];
                lastScreen.onSuspend();
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
            this.screenStack.push(nowScreen.draw());
        }
        popData(data) {
            var _a, _b;
            let screenData;
            let nowScreen = (_a = this.screenStack.pop()) === null || _a === void 0 ? void 0 : _a.onClose();
            if (data) {
                screenData = {
                    TYPE: ScreenDataTypeEnum.FROM_SON,
                    data: data
                };
            }
            (_b = nowScreen) === null || _b === void 0 ? void 0 : _b.draw();
        }
    }
    var navigation = new Navigation($("body"));
});
