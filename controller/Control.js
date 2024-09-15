import Model from "../model/Model.js";
import Tarolo from "../view/tarolo.js";

class Control {
    constructor(){

        const MODEL = new Model;
        const KEP = new Tarolo($(".fotarolo"), MODEL.getAktKep())
        $(window).on("bal", () => {
            MODEL.bal();
            let akt = MODEL.getAktKep();
            KEP.kepSet(akt);
        })
        $(window).on("jobb", () => {
            MODEL.jobb();
            let akt = MODEL.getAktKep();
            KEP.kepSet  (akt);
        })
    }

}

export default Control;