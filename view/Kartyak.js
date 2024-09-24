import Kartya from "./Kartya.js"

export default class Kartyak {

    #lista=[]
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.kartyaKiir()
    }

    kartyaKiir(){
        this.#lista.forEach((elem) => {
            new Kartya(elem, this.#szuloElem)
        })
        
    }
    
}