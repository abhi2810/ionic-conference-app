import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://localhost/app');
  }

  async getMenu() {
    const el = this.getElement('app-root ion-menu');
    await this.waitForSelector(el);
    return el;
  }

  async getFirstSlide() {
    const el = this.getElement('app-root ion-slides ion-slide:first-child');
    await this.waitForSelector(el);
    return el.getTagName();
  }

  async getRouter() {
    const el = this.getElement('app-root ion-router-outlet');
    await this.waitForSelector(el);
    return el;
  }

  async getMenuToggle() {
    const el = this.getElement('#main-content > page-about > ion-content > ion-header > ion-toolbar > ion-buttons.buttons-first-slot.sc-ion-buttons-md-h.sc-ion-buttons-md-s.md.hydrated > ion-menu-button');
    await this.waitForSelector(el);
    return el;
  }

  async getAboutButton() {
    const el = this.getElement('body > app-root > ion-app > ion-split-pane > ion-menu > ion-content > ion-list:nth-child(1) > ion-menu-toggle:nth-child(5) > ion-item');
    await this.waitForSelector(el);
    return el;
  }

  async getAboutTitle() {
    const el = this.getElement('#main-content > ng-component > ion-tabs > div > ion-router-outlet > page-about > ion-content > div.about-info > h3:nth-child(1)');
    await this.waitForSelector(el);
    return el;
  }

  async getScheduleButton() {
    const el = this.getElement('body > app-root > ion-app > ion-split-pane > ion-menu > ion-content > ion-list:nth-child(1) > ion-menu-toggle:nth-child(2) > ion-item');
    await this.waitForSelector(el);
    return el;
  }

  async getScheduleTitle() {
    const el = this.getElement('#main-content > ng-component > ion-tabs > div > ion-router-outlet > page-schedule > ion-header > ion-toolbar.in-toolbar.md.toolbar-title-default.hydrated > ion-title');
    await this.waitForSelector(el);
    return el;
  }

  async getSpeakersButton() {
    const el = this.getElement('body > app-root > ion-app > ion-split-pane > ion-menu > ion-content > ion-list:nth-child(1) > ion-menu-toggle:nth-child(3) > ion-item');
    await this.waitForSelector(el);
    return el;
  }

  async getSpeakersTitle() {
    const el = this.getElement('#main-content > ng-component > ion-tabs > div > ion-router-outlet > page-speaker-list > ion-header > ion-toolbar > ion-title');
    await this.waitForSelector(el);
    return el;
  }

  async getSupportButton() {
    const el = this.getElement('body > app-root > ion-app > ion-split-pane > ion-menu > ion-content > ion-list:nth-child(2) > ion-menu-toggle:nth-child(3) > ion-item');
    await this.waitForSelector(el);
    return el;
  }

  async getSupportTextBox() {
    const el = this.getElement('#main-content > page-support > ion-content > form > ion-list > ion-item > ion-textarea');
    await this.waitForSelector(el);
    return el;
  }

  async getSupportSubmit() {
    const el = this.getElement('#main-content > page-support > ion-content > form > div > ion-button');
    await this.waitForSelector(el);
    return el;
  }

  async getSupportAck() {
    const el = this.getElement('ion-toast');
    await this.waitForSelector(el);
    return el;
  }

  async waitForSelector(el: ElementFinder) {
    return browser.wait(ExpectedConditions.presenceOf(el), 3000);
  }

  getElement(selector) {
    return element(by.css(selector));
  }
}
