import Model from "../model/Model.js";
import Kartya from "../view/Kartya.js";
import Kartyak from "../view/Kartyak.js";
import Tarolo from "../view/Tarolo.js";

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
        const KARTYAK = new Kartya();
        const KEPEK = new Kartyak($(".kepekTarolo"), KARTYAK.kepMutat())
    }

}

export default Control;