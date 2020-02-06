import * as Compat from "./Classes/CompatScreen";
import {HomeController} from "./ViewControllers/Home";

// Start owo
let navigation = new Compat.Navigation($(".screen"));
navigation.pushScreen(new HomeController());