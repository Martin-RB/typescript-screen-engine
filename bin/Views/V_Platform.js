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
    var V_Platform = /** @class */ (function (_super) {
        __extends(V_Platform, _super);
        function V_Platform() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pathScreen = "html/platform.html";
            return _this;
        }
        V_Platform.prototype.onDraw = function () {
            this.setEvents();
        };
        V_Platform.prototype.setEvents = function () {
            var _this = this;
            this.F["__home"].click(function () {
                var _a;
                (_a = _this._onHomeClicked) === null || _a === void 0 ? void 0 : _a.call(_this);
            });
            this.F["__about"].click(function () {
                var _a;
                (_a = _this._onAboutClicked) === null || _a === void 0 ? void 0 : _a.call(_this);
            });
            this.F["__page1"].click(function () {
                var _a;
                (_a = _this._onPage1Clicked) === null || _a === void 0 ? void 0 : _a.call(_this);
            });
            this.F["__page2"].click(function () {
                var _a;
                (_a = _this._onPage2Clicked) === null || _a === void 0 ? void 0 : _a.call(_this);
            });
            this.F["__logout"].click(function () {
                var _a;
                (_a = _this.onBackEvent) === null || _a === void 0 ? void 0 : _a.call(_this);
            });
        };
        V_Platform.prototype.getNavigationContainer = function () {
            return this.F["__container"];
        };
        Object.defineProperty(V_Platform.prototype, "onAboutClicked", {
            set: function (event) {
                this._onAboutClicked = event;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(V_Platform.prototype, "onHomeClicked", {
            set: function (event) {
                this._onHomeClicked = event;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(V_Platform.prototype, "onPage1Clicked", {
            set: function (event) {
                this._onPage1Clicked = event;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(V_Platform.prototype, "onPage2Clicked", {
            set: function (event) {
                this._onPage2Clicked = event;
            },
            enumerable: true,
            configurable: true
        });
        return V_Platform;
    }(BaseView_1.BaseView));
    exports.V_Platform = V_Platform;
});
