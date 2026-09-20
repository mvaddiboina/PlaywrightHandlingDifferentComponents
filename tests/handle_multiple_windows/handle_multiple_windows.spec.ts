import { test, expect } from '@playwright/test';

test('Handle multiple widnows', async ({ browser }) => {

    const context = await browser.newContext();

    const parentPage = await context.newPage();

    await parentPage.goto('https://the-internet.herokuapp.com/windows');


    const [childPage] = await Promise.all([context.waitForEvent('page'), await parentPage.getByText('Click Here').click()]);

    console.log(await childPage.getByText("New Window").innerText());
});