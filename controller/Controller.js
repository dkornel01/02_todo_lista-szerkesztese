import Urlap from "../view/urlap.js";
import Megjelenit from "../view/Megjelenit.js";
import Model from "../model/Model.js";

class Controller{
    constructor(){
        const szuloELEM = $(".tarolo");
        const szuloELEM2 = $(".tervekenyseg");
        new Urlap({tevekenyseg:"",hatarido:""},szuloELEM2);
        const MODEL=new Model(szuloELEM);
        new Megjelenit(MODEL.getList(), szuloELEM);
    
        $(window).on("torles", (event) => {
            console.log(event.detail);
        });
        $(window).on("submit",(event)=>{
            console.log(event.detail);
            MODEL.ujAdat(event.detail)
            szuloELEM.empty()
            new Megjelenit(MODEL.getList(),szuloELEM)
        })
    }
}
export default Controller;