import { TODOLIST2 } from "../adatok.js";
class Model{
    #list=[]
    #index;
    constructor(szuloElem,index){
    this.#index=index
    this.#list=TODOLIST2;
    this.tablaElem = szuloElem;
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.torolElem = this.sorElem.children("td").children(".torol");
    this.megseElem = this.sorElem.children("td").children(".megse");
    this.megseElem.css("display", "none");
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
            this.sorElem.css("background-color", "lightgreen");
            /*  this.megseElem.css("visibility", "visible");
            this.keszElem.css("visibility", "hidden"); */
            this.megseElem.css("display", "inline");
            this.keszElem.css("display", "none");
        });
        this.megseElem.on("click", () => {
            this.sorElem.css("background-color", "white");
            /*  this.keszElem.css("visibility", "visible");
            this.megseElem.css("visibility", "hidden"); */
            this.keszElem.css("display", "inline");
            this.megseElem.css("display", "none");
        });
        this.torolElem.on("click", () => {
            this.sorElem.remove();
            this.#esemenyTrigger();
        });
    }
    ujAdat(obj){
        this.#list.push(obj)
    }
    getList(){
        return this.#list;
    }
    
    #esemenyTrigger() {
        const esemenyem = new CustomEvent("torles", { detail: this.#index });
        window.dispatchEvent(esemenyem);
    }
    Modositas(){
        
    }
}
export default Model