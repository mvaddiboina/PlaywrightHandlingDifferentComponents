import { test, expect } from '@playwright/test';

test("Sauce Demo Login Test", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    expect(await page.getByText("Swag Labs").textContent()).toBe("Swag Labs");

});

test("Get by data test id", async ({ page }) => {

    await page.goto("https://playground.promptqa.dev/signup");
    await page.getByTestId('signup-name').fill("Test user");
    await page.waitForTimeout(5000);

});


// test("All playwright locators", async ({ page }) => {

//     await page.goto("file:///C:/Users/selen/PLAYWRIGHT_TRAINING/UK_25_JUN_6PM_2026/PW_DAY_003/playwright_locators.html");
    
//     let getByText = await page.getByText("Note: This text is spanning multiple tags.").textContent();
//     console.log(getByText);
   
//      await page.getByLabel("Username").fill("test user");

//     let getByAltText = await page.getByAltText('Primary User Avatar').getAttribute("src");
//     console.log(getByAltText);

//    let getByTitle =  await page.getByTitle('Last updated 2 mins ago').textContent();
//     console.log(getByTitle);

//     await page.waitForTimeout(5000);




// });