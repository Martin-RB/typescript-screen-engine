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
define(["require", "exports", "./ScreenMastah/BasePresenter", "./V_Login"], function (require, exports, BasePresenter_1, V_Login_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var P_Login = /** @class */ (function (_super) {
        __extends(P_Login, _super);
        function P_Login() {
            var _this = _super.call(this) || this;
            _this._ID = "P_Login";
            _this._viewType = V_Login_1.V_Login;
            return _this;
        }
        // Launched once. When screen creates
        P_Login.prototype.onCreate = function () {
            this._view.setOnLogin(function (username, password) {
                alert(username + " se logeó con la contraseña " + password);
            });
        };
        // Launched when screen opens (even if is restored)
        P_Login.prototype.onStart = function (origin) {
        };
        return P_Login;
    }(BasePresenter_1.BasePresenter));
    exports.P_Login = P_Login;
});
