class Urlap{
    #adat={};
    constructor(adat,szuloElem){
    this.szuloElem=szuloElem
    this.szuloElem.html("<form>");
    this.formElem=this.szuloElem.children("form")
    this.#adat=adat
    this.#urlapletrehozas();
    //this.tevekenysegelem=tevekenysegelem.children("tervekenyseg")
    //this.hataridoelem=hataridoelem.children("hatarido")
    this.submitelem=this.formElem.children("div").children("#submit")
    console.log(this.submitelem)
    this.submitelem.on("click", (event)=>{
        console.log("kat")
        event.preventDefault()
        this.#adatGyujto()
        this.#esemenyTrigger("submit")
        
    });
    };

    #urlapletrehozas(){
        let txt="";
        for (const key in this.#adat){
            txt += `<div class="form-group">
                <label for=${key}> ${this.#adat[key]}</label>
                <input type="text class="from-control" id="${key}" name="${key}" value="${this.#adat[key]}">
                </div>`;
        }
        txt += `<div>
        <input type="submit" class="btn btn-primary" id="submit" value="Hozzáad"></div>
        `
        this.formElem.html(txt)
    }
#adatGyujto(){
    for (const key in this.#adat) {
            this.#adat[key] = $(`#${key}`).val();
    }
    console.log(this.#adat);
}

    #esemenyTrigger(esemenynev){
        const EV=new CustomEvent(esemenynev,{detail: this.#adat})
        window.dispatchEvent(EV);
    }


}
export default Urlap