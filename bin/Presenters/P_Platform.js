var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../ScreenMastah/BasePresenter", "../Views/V_Platform", "./P_Home", "./P_About"], function (require, exports, BasePresenter_1, V_Platform_1, P_Home_1, P_About_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var P_Platform = /** @class */ (function (_super) {
        __extends(P_Platform, _super);
        function P_Platform() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._ID = "P_PLATFORM";
            _this._viewType = V_Platform_1.V_Platform;
            _this._view = _this._view;
            return _this;
        }
        P_Platform.prototype.onCreate = function () {
            var _a;
            (_a = this._sonNavigation) === null || _a === void 0 ? void 0 : _a.pushScreen(P_Home_1.P_Home);
            this.setViewEvents();
        };
        P_Platform.prototype.setViewEvents = function () {
            var _this = this;
            this._view.onHomeClicked = function () {
                var _a;
                if ((_a = _this._sonNavigation) === null || _a === void 0 ? void 0 : _a.tryPopAllScreens()) {
                    _this._sonNavigation.pushScreen(P_Home_1.P_Home);
                }
            };
            this._view.onAboutClicked = function () {
                var _a;
                if ((_a = _this._sonNavigation) === null || _a === void 0 ? void 0 : _a.tryPopAllScreens()) {
                    _this._sonNavigation.pushScreen(P_About_1.P_About);
                }
            };
            this._view.onPage1Clicked = function () {
                var _a;
                if ((_a = _this._sonNavigation) === null || _a === void 0 ? void 0 : _a.tryPopAllScreens()) {
                    _this._sonNavigation.pushScreen(P_Home_1.P_Home);
                }
            };
        };
        return P_Platform;
    }(BasePresenter_1.BasePresenter));
    exports.P_Platform = P_Platform;
});
