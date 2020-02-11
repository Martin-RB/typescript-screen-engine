import "lib/jquery";

export enum ScreenDataTypeEnum{
    FROM_FATHER = 0,
    FROM_SON = 1
}

export interface IScreenData {
    TYPE: ScreenDataTypeEnum;
    data: MapArray;
}

export abstract class BaseCompatScreen {
    protected fatherData: IScreenData|null = null;
    protected sonData: IScreenData|null = null;
    protected container: JQuery|null = null;
    protected navigation: Navigation|null = null;
    protected WHERE_CALL_FROM: ScreenDataTypeEnum = ScreenDataTypeEnum.FROM_FATHER;
    abstract HTML_VIEW_PATH: string;
    protected F: JQueryArray = {};

    setData(data?: IScreenData): BaseCompatScreen {
        if(!data){
            return this;
        }

        if(data.TYPE == ScreenDataTypeEnum.FROM_FATHER){
            this.fatherData = data;
        }
        else if(data.TYPE == ScreenDataTypeEnum.FROM_SON){
            this.sonData = data;
        }
        return this;
    };
    setContainer(container: JQuery): BaseCompatScreen {
        this.container = container;
        return this;
    }
    setNavigation(navigation: Navigation): BaseCompatScreen {
        this.navigation = navigation;
        return this;
    }
    draw(): BaseCompatScreen{
        this.container?.load(this.HTML_VIEW_PATH, (responseText: string, textStatus: JQuery.Ajax.TextStatus, jqXHR: JQuery.jqXHR<any>) => {
            if(textStatus == "success"){
                this.F = this.findFields();
                this.onViewLoad();
            }
            else{
                throw new Error("Imposible cargar html: " + this.HTML_VIEW_PATH);
            }
        })
        return this;
    }
    abstract onViewLoad(): void;

    // Called when screen goes background due to a new screen push
    onBackground(): BaseCompatScreen {
        return this;
    }
    // Called when screen goes foreground due to the pop of the front screen
    // It tells if screen has been called from father or son
    onForeground(where: ScreenDataTypeEnum): BaseCompatScreen {
        this.WHERE_CALL_FROM = where;
        return this;
    }
    // Called when screen is poped
    onClose(): boolean {
        return true;
    }

    findFields() : JQueryArray{
        let obj : JQueryArray = {};
        this.container?.find("[id*=__]").each((_, a) => {
            obj[a.id] = $(a);
        })
        return obj;
    }

}

export interface JQueryArray{
    [key: string]: JQuery
}

export interface MapArray{
    [key: string]: any
}

export class Navigation  {
    container: JQuery;
    screenStack: Array<BaseCompatScreen> = [];

    private lastScreen() {
        return this.screenStack[this.screenStack.length - 1];
    }

    pushScreen(inScreen: BaseCompatScreen, data?: MapArray): void {
        let screenData: IScreenData;
        if(this.screenStack.length > 0){
            this.lastScreen().onBackground();
        }

        let nowScreen = inScreen.setContainer(this.container)
                                .setNavigation(this);
        if(data !== undefined){
            screenData = {
                TYPE: ScreenDataTypeEnum.FROM_FATHER,
                data: data
            };
            nowScreen.setData(screenData);
        }

        this.screenStack.push(nowScreen.onForeground(ScreenDataTypeEnum.FROM_FATHER).draw());
    }
    popScreen(data?: MapArray) : void{
        let screenData: IScreenData;

        if(!this.lastScreen().onClose()){
            return;
        }
        this.screenStack.pop();
        let newScreen = this.lastScreen();
        
        if(data){
            screenData = {
                TYPE: ScreenDataTypeEnum.FROM_SON,
                data: data
            }
            newScreen.setData(screenData);
        }
        newScreen.onForeground(ScreenDataTypeEnum.FROM_SON).draw();
    }

    

    

    constructor(container:JQuery) {
        this.container = container;
    }
}