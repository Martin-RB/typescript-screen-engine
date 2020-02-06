import "jquery";

enum ScreenDataTypeEnum{
    FROM_FATHER = 0,
    FROM_SON = 1
}

interface IScreenData {
    TYPE: ScreenDataTypeEnum;
    data: object;
}

interface ICompatScreen {
    setData(data?: IScreenData): ICompatScreen;
    setContainer(container: JQuery): ICompatScreen;
    setNavigation(navigation: Navigation): ICompatScreen;
    draw(): ICompatScreen;
    onSuspend(): ICompatScreen;
    onChange(): ICompatScreen;
    onClose(): ICompatScreen;

}

class Navigation  {
    container: JQuery;
    screenStack: Array<ICompatScreen> = [];

    pushScreen(inScreen: ICompatScreen, data?: object): void {
        let screenData: IScreenData;
        if(this.screenStack.length > 0){
            let lastScreen = this.screenStack[this.screenStack.length - 1];
            lastScreen.onSuspend();
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

        this.screenStack.push(nowScreen.draw());
    }
    popData(data?: IScreenData) : void{
        let screenData: IScreenData;

        let nowScreen = this.screenStack.pop()?.onClose();
        
        if(data){
            screenData = {
                TYPE: ScreenDataTypeEnum.FROM_SON,
                data: data
            }
        }
		nowScreen?.draw();
    }

    constructor(container:JQuery) {
        this.container = container;
    }
}

var navigation = new Navigation($("body"));

