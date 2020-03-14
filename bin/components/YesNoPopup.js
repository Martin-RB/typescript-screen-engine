define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var YesNoPopup = /** @class */ (function () {
        function YesNoPopup(_container, _title, _text) {
            var _this = this;
            this._container = _container;
            this._title = _title;
            this._text = _text;
            this.pathScreen = "html/popup/yesNo.html";
            this.choosePromise = new Promise(function (resolve, reject) {
                _this._container.find(".XD").load("html/popup/yesNo.html", function () {
                    _this._container.find("#__pop_title").html(_this._title);
                    _this._container.find("#__pop_text").html(_this._text);
                    console.log(_this._container.find("__pop_yes"));
                    _this._container.find("#__pop_yes").click(function () {
                        resolve(true);
                        _this._container.find(".XD").remove();
                    });
                    _this._container.find("#__pop_no").click(function () {
                        resolve(false);
                        _this._container.find(".XD").remove();
                    });
                });
            });
            _container.append("<div class=\"XD\"></div>");
        }
        YesNoPopup.prototype.waitUserChoose = function () {
            return this.choosePromise;
        };
        return YesNoPopup;
    }());
    exports.YesNoPopup = YesNoPopup;
});
