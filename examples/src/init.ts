/*
    TUTO:::
    Los directorios de los .ts no requieren al prefijo home dado que, al compilarse,
    los archivos .js mantienen la misma esctructura de carpetas que la de los .ts
*/

import { Navigation } from "../../lib/ScreenMastah/NavigationCommon/Navigation";
import { LoginPresenter } from "./Login";

// TUTO:::
/* 
    Este archivo se ejecutara cuando el html llame la funcioon require(["home/examples/src/init"])

    No es obligatorio inicializar asi. Se puede inicializar de cualquier otra manera

*/

// Se crea la instancia Navigation con el contenedor #app en el index.html
let masterNav = new Navigation($("#app"));
// Se inserta el presentador de pantalla LoginPresenter
masterNav.PushScreen(LoginPresenter);