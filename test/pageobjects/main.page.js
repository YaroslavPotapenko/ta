import Page from './page';

class MainPage extends Page {

    get inputUsername () {
        return $$('div.card-up');
    }

    async clickCardByIndex( index ) {
        await this.inputUsername[index].click();
    }

    get bodyOfThePage() {
        return $("div.body-height");
    }

    open () {
        return super.open('elements');
    }
}

export default new MainPage();
