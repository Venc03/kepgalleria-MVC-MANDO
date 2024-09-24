export default class Kartya{

    #kep
    #szuloElem

    constructor(adat, szuloElem){ 
        this.#kep = adat
        this.#szuloElem = szuloElem
        this.kepMutat()
    }

    kepMutat(){
        this.#szuloElem.append(`
            <div class="k">
                <div class="card-body">
                <h3 class="k-title">${this.#kep}</h3>
                </div>
            </div>
        `)
    }

}