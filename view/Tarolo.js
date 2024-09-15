class Tarolo {
    #kep
    constructor(szuloElem, kep){
        this.#kep = kep;
        this.szuloElem = szuloElem
        this.htmlCreate()
        this.jobbBtnElem = $(".jobb")
        this.balBtnElem = $(".bal")
        this.BigElem = $("#Big")
        this.kepElem = $("#kepElem")
        this.balBtnElem.on("click", () => {
            this.#actionCreate("bal");
        })
        this.jobbBtnElem.on("click", () => {
            this.#actionCreate("jobb");
        })
    }

    kepSet(kep){
        this.kepElem.attr({"src":kep, "alt":kep})
    }

    #actionCreate(esemenynev){
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem);
    }

    htmlCreate(){
        let txt = "";
        txt += `<button class = "bal"> << </button>`
        txt += `<div class = "fotarolo"><img id = "kepElem" src = "${this.#kep}" alt = "${this.#kep}"></div>`
        txt += `<button class = "jobb"> >> </button>`
        this.szuloElem.html(txt);
    }
}

export default Tarolo;