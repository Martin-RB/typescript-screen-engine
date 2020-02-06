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
        this.container?.load(this.HTML_VIEW_PATH, (html_element: any, respTxt: any, txtStatus: any, jqXHR: any) => {
            this.F = this.findFields();
            this.onViewLoad(html_element, respTxt, txtStatus, jqXHR);
        })
        return this;
    }
    abstract onViewLoad(html_element: any, respTxt: any, txtStatus: any, jqXHR: any): void;

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
    onClose(): BaseCompatScreen {
        return this;
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

    pushScreen(inScreen: BaseCompatScreen, data?: MapArray): void {
        let screenData: IScreenData;
        if(this.screenStack.length > 0){
            let lastScreen = this.screenStack[this.screenStack.length - 1];
            lastScreen.onBackground();
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

        this.screenStack.pop()?.onClose();
        let newScreen = this.screenStack[this.screenStack.length - 1];
        
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