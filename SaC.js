import SaCItemSheet from "./module/sheets/SaCItemSheet.js";
import { SaC } from "./module/config.js";

Hooks.once("init", function() {
    console.log("SaC | Iniciando sistema Espirito e Caos...")

    CONFIG.SaC = SaC;

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("SaC", SaCItemSheet, {makeDefault: true})
})