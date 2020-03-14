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
define(["require", "exports", "../ScreenMastah/BasePresenter", "../Views/V_Home"], function (require, exports, BasePresenter_1, V_Home_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var P_Home = /** @class */ (function (_super) {
        __extends(P_Home, _super);
        function P_Home() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._ID = "HOME";
            _this._viewType = V_Home_1.V_Home;
            return _this;
        }
        return P_Home;
    }(BasePresenter_1.BasePresenter));
    exports.P_Home = P_Home;
});
