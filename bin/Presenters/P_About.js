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
define(["require", "exports", "../ScreenMastah/BasePresenter", "../Views/V_About", "./P_Creators"], function (require, exports, BasePresenter_1, V_About_1, P_Creators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var P_About = /** @class */ (function (_super) {
        __extends(P_About, _super);
        function P_About() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._ID = "ABOUT";
            _this._viewType = V_About_1.V_About;
            _this._view = _this._view;
            return _this;
        }
        P_About.prototype.onCreate = function () {
            var _this = this;
            this._view.onCreatorsClick = function () {
                var _a;
                (_a = _this._fatherNavigation) === null || _a === void 0 ? void 0 : _a.pushScreen(P_Creators_1.P_Creators);
            };
        };
        return P_About;
    }(BasePresenter_1.BasePresenter));
    exports.P_About = P_About;
});
