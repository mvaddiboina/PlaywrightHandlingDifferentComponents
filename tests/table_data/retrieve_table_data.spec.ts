import { test } from '@playwright/test';

test('Retrive data from table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const rows = await page.locator("table[name='BookTable'] tr:not(:first-child)").all();

    const books = [];

    for (const tr of rows) {
        const columns = await tr.locator("td").all();

        books.push(
            {
                bookName: await columns[0].innerText(),
                author: await columns[1].innerText(),
                subject: await columns[2].innerText(),
                price: await columns[3].innerText()

            });

    }

    console.log(books);



    await page.waitForTimeout(5000);
});