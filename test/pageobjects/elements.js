import Page from './page';

class ElementInternalsPage extends Page {

    get firstElementInExpandedDropdown () {
        return $("//div[@class='element-list collapse show']//li[@id='item-0']");
    }
}

export default new ElementInternalsPage();
