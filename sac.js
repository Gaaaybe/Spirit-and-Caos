import SACItemSheet from "./module/sheets/SACItemSheet.js";
//import { SaC } from "./module/config.js";

Hooks.once("init", function() {
    console.log("SAC | Iniciando sistema Espirito e Caos...")

//    CONFIG.SaC = SaC;

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("spirit-and-caos", SACItemSheet, {makeDefault: true})
})