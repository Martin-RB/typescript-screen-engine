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
define(["require", "exports", "./ScreenMastah/BaseView"], function (require, exports, BaseView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var V_Login = /** @class */ (function (_super) {
        __extends(V_Login, _super);
        function V_Login(container) {
            var _this = _super.call(this, container) || this;
            _this.pathScreen = "views/login.html";
            return _this;
        }
        V_Login.prototype.onDraw = function () {
            this.setEvents();
        };
        V_Login.prototype.setEvents = function () {
            var _this = this;
            this.F["__login"].on("click", function () {
                if (_this._onLogin !== undefined) {
                    _this._onLogin(_this.F["__user"].val(), _this.F["__password"].val());
                }
            });
        };
        V_Login.prototype.setOnLogin = function (callback) {
            this._onLogin = callback;
        };
        return V_Login;
    }(BaseView_1.BaseView));
    exports.V_Login = V_Login;
});
