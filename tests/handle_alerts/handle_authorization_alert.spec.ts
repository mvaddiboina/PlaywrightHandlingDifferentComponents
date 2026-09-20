import { test, expect } from '@playwright/test';

test('Handle authrization alerts', async ({ page }) => {
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');


    await page.waitForTimeout(5000);

});


test.only('Handle authrization alerts using credentials', async ({ browser }) => {

    const context = await browser.newContext({ httpCredentials: { username: "admin", password: "admin" } });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await page.waitForTimeout(5000);

});