import { AppPage } from './app.po';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should navigate to Schedule tab', async () => {
        page.navigateTo();
        let element = await page.getMenuToggle();
        element.click();
        let schedule = await page.getScheduleButton();
        schedule.click();
        expect(page.getScheduleTitle()).toBeTruthy();
    });

    it('should navigate to About tab', async () => {
        page.navigateTo();
        let element = await page.getMenuToggle();
        element.click();
        let about = await page.getAboutButton();
        about.click();
        expect(page.getAboutTitle()).toBeTruthy();
    });

    it('should navigate to Speaker tab', async () => {
        page.navigateTo();
        let element = await page.getMenuToggle();
        element.click();
        let speaker = await page.getSpeakersButton();
        speaker.click();
        expect(page.getSpeakersTitle()).toBeTruthy();
    });

    it('should navigate to Support tab', async () => {
        page.navigateTo();
        let element = await page.getMenuToggle();
        element.click();
        let support = await page.getSupportButton();
        support.click();
        expect(page.getSupportAck()).toBeTruthy();
    });
});
