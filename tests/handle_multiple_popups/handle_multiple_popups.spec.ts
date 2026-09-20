import { test, Page } from '@playwright/test';

test('Handle multiple popups', async ({ browser }) => {

    const context = await browser.newContext();

    const parentPage = await context.newPage();

    await parentPage.goto('https://testautomationpractice.blogspot.com/');

    const pages: Page[] = [];

    parentPage.on("popup", async (popup) => {
        pages.push(popup);
    })

    await parentPage.getByText('Popup Windows').click();

    await parentPage.waitForTimeout(3000);

    for (let page of pages) {
        const pageTitle = await page.title();

        if (pageTitle.includes("Selenium")) {
            console.log(await page.getByText("Selenium automates browsers. That's it!").innerText());
        }

    }

    await parentPage.waitForTimeout(5000);

});