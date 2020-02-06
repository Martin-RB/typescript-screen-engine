define(["require", "exports", "src/Classes/CompatScreen", "src/ViewControllers/Home"], function (require, exports, Compat, Home_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Start owo
    let navigation = new Compat.Navigation($(".screen"));
    navigation.pushScreen(new Home_1.HomeController());
});
