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
define(["require", "exports", "../ScreenMastah/BaseView"], function (require, exports, BaseView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var V_About = /** @class */ (function (_super) {
        __extends(V_About, _super);
        function V_About() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pathScreen = "html/about.html";
            return _this;
        }
        V_About.prototype.onDraw = function () {
            var _this = this;
            this.F["__creators"].click(function () {
                var _a;
                (_a = _this._onCreatorsClick) === null || _a === void 0 ? void 0 : _a.call(_this);
            });
        };
        Object.defineProperty(V_About.prototype, "onCreatorsClick", {
            set: function (event) {
                this._onCreatorsClick = event;
            },
            enumerable: true,
            configurable: true
        });
        return V_About;
    }(BaseView_1.BaseView));
    exports.V_About = V_About;
});
