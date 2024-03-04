export default class SACItemSheet extends ItemSheet {
    get template() {
        return `systems/spirit-and-caos/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}