import { BasePresenter } from "../../lib/ScreenMastah/PresenterCommon/BasePresenter";
import { BaseView } from "../../lib/ScreenMastah/ScreenDynamicCommon/BaseView";
import { LoadOriginType } from "../../lib/ScreenMastah/NavigationCommon/LoadOriginType";
import { PlatformPresenter } from "./Platform";
import { PopetMaster } from "../../lib/ScreenMastah/PopupCommon/PopetMaster";
import { YesNoPopup } from "./../src/YesNoPopup";
import { IHashMap } from "../../lib/ScreenMastah/Common/IHashMap";

/**
 * Este es un presentador
 * El presentador se encarga de atender los eventos y los estados de la pantalla.
 * Hereda de BasePresenter<VistaDeLaPantalla>
 */
export class LoginPresenter extends BasePresenter<LoginView>{
    /**
     * Un ID para la pantalla. Si quisieras identificiarla
     */
    protected _ID: string = "LOGIN";

    /**
     * Aqui de nuevo se ingresa el tipo de la vista de la pantalla.
     * Esto para que la constante this.View tenga el tipo de la pantalla y sea mas comodo
     * manipularla
     */
    protected viewType: new (container: JQuery<HTMLElement>) => LoginView = LoginView;


    /**
     * Atributos privados
     */
    private username: string | undefined;
    private password: string | undefined;

    /**
     * TUTO:::
     * OnCreate() se ejecuta cuando la pantalla se ha creado. Aqui usualmente se declaran variables,
     * se establecen eventos y demas funcionalidades que solo deberian ejecutarse una vez
     */
    OnCreate(){
        this.View.OnSubmit = (username, password) => {
            this.username = username;
            this.password = password;
            this.navigation.PushScreen(PlatformPresenter);
        }
    }

    /**
     * TUTO:::
     * OnStart(origin: LoadOriginType) se ejecuta cuando la pantalla se ha iniciado. Es distinto a crear.
     * Se puede iniciar una pantalla multiples veces (al terminar de ser creada [FROM_FATHER] 
     * o cuando la pantalla vuelve a estar activa [FROM_SON]).
     * Usualmente aqui se ejecutan las operaciones hacia la vista como llenar campos, establecer estados y demas
     * cosas que se ejecutarian cada vez que se dibuja la vista
     */
    OnStart(origin: LoadOriginType){        
        if(this.username != undefined && this.password != undefined){
            this.View.SetInfo(this.username, this.password);
        }
    }

    /**
     * OnSuspend() se ejecuta cuando la pantalla actual va a cambiarse por otra. Usualmente aqui
     * se guardan los valores de los campos para cuando la pantalla vuelva a estar activa.
     */
    OnSuspend(){  }

    /**
     * OnClose() se ejecuta cuando se va a cerrar la pantalla definitivamente.
     * Como es async, se esperara a que el promise se resuelva.
     * El proceso de cerrar pantalla puede cancelarse si el promise es resuelto con
     * un false.
     * En este caso, se utilizo un popup para preguntarle al usuario si realmente quiere
     * cerrar la pantalla
     */
    async OnClose(){
        let data: IHashMap<any> = {
            title: "Espera!",
            text: "Estas seguro quieres cerrar sesión?"
        }
        let result = await PopetMaster.OpenPopup(YesNoPopup, data);
        return result.CloseStatus == YesNoPopup.YES_CS;
    }
}

export class LoginView extends BaseView{
    // TUTO:::
    /*  
        Para el html, se usa una ruta normal dado que los html mantienen su estructura de
        carpetas
    */
    public pathScreen: string = "html/login.html";

    /**
     * Atributos privados
     */
    private _onSubmit: ((username: string, password: string) => void) | undefined;

    /**
     * Para que la vista pueda comunicarse con el presentador, es necesario usar eventos.
     * El presentador le manda una funcion lambda a esta funcion.
     * La funcion lambda es guardada por la vista y ejecutada cuando la vista requiera 
     * comunicarle algo al presentador.
     * En este caso, la vista le informara al presentador que el usuario ya realizo el formulario
     */
    set OnSubmit(event : (username: string, password: string) => void){
        this._onSubmit = event;
    }

    /**
     * OnDraw() se ejecuta cuando la vista ya ha sido dibujada y esta lista para ser modificada.
     * Aqui usualmente se colocan los eventos, alteraciones de la vista y demas.
     */
    OnDraw(){
        /**
         * Aqui, el evento de click del boton #login hara que se ejecute la funcion lambda guardada,
         * comunicandole al presentador que el usuario hizo login con los datos: user y password.
         * El presentador se encargara de hacer algo con ello
         */
        this.F["login"].click(() => {
            this._onSubmit?.call(this, this.F["user"].val() as string, 
                                        this.F["password"].val() as string);
        });
    }

    /**
     * Para que el presentador se comunique con la vista. Se utilizan funciones normales.
     * En esta, la vista permite que el presentador modifique los campos con esta funcion
     */
    SetInfo(username: string, password: string){        
        this.F["user"].val(username);
        this.F["password"].val(password);
    }

    GetInfo(){
        return {username: this.F["user"].val(), password: this.F["password"].val()};
    }
}