export default class SaCItemSheet extends ItemSheet {
    get template() {
        return `systems/SaC/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}