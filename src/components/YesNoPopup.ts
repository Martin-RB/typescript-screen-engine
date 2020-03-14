import { BasePresenter } from "../ScreenMastah/BasePresenter";

export class PopetMaster{
    pathScreen: string = "html/popup/yesNo.html";

    constructor(private _container: JQuery, private _title: string, private _text:string){
        _container.append(`<div class="XD"></div>`);
    }

    async aaa(): Promise<any>{
        return new Promise((resolve)=> resolve("asd"))
    }

    private choosePromise: Promise<boolean> = new Promise<boolean>((resolve, reject) => {
        this._container.find(".XD").load("html/popup/yesNo.html", ()=>{
            this._container.find("#__pop_title").html(this._title);
            this._container.find("#__pop_text").html(this._text);
            console.log(this._container.find("__pop_yes"));
            
            this._container.find("#__pop_yes").click(() => {
                resolve(true);
                this._container.find(".XD").remove();
            })
            this._container.find("#__pop_no").click(() => {
                resolve(false);
                this._container.find(".XD").remove();
            })
        });
    });

    waitUserChoose(): Promise<boolean>{
        return this.choosePromise;
    }
    
}