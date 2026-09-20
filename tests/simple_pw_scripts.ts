import {chromium} from "@playwright/test"

(async()=>
{
    const browser = await chromium.launch();

    const context= await browser.newContext();

     const page = await context.newPage();

     await page.goto("https://www.saucedemo.com/");

     await page.waitForTimeout(5000);

})();