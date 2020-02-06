import * as Compat from "src/Classes/CompatScreen";
import {HomeController} from "src/ViewControllers/Home";

// Start owo
let navigation = new Compat.Navigation($(".screen"));
navigation.pushScreen(new HomeController());