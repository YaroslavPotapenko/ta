import elements from '../pageobjects/elements';
import LoginPage from '../pageobjects/login.page';
import mainPage from '../pageobjects/main.page';

describe('My first test automation framework', () => {
    it('Open required site', async () => {
        await mainPage.open('/elements');
    });

    it('Wait it to be loaded', async () => {
        await mainPage.bodyOfThePage.waitForDisplayed();
    });

    it('Wait it to be loaded', async () => {
        await expect(await elements.firstElementInExpandedDropdown).toBeExisting();
        await expect(await elements.firstElementInExpandedDropdown).toBeClickable();
    });
});


