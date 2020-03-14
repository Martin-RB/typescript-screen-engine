define(["require", "exports", "./ScreenMastah/Navigation", "./Presenters/P_Login"], function (require, exports, Navigation_1, P_Login_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new Navigation_1.Navigation($("body")).pushScreen(P_Login_1.P_Login);
});
