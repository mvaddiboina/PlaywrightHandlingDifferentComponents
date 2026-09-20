import { test, expect } from '@playwright/test';

test('Mouse hover in Playwright', async ({ page }) => {

    test.slow();
    
    await page.goto('https://demoqa.com/menu');

    const menuItem2 = page.getByText('Main Item 21');

    await menuItem2.hover();

    await page.waitForTimeout(5000);
});


// test('Mouse double click in Playwright', async ({ page }) => {
//     await page.goto('https://demoqa.com/buttons');

//     const doubleClickElement = page.getByText("Double Click Me");

//     await doubleClickElement.dblclick();

//     expect(await page.locator('#doubleClickMessage').innerText()).toBe('You have done a double click');

//     await page.waitForTimeout(5000);
// });


// test.only('Mouse right click in Playwright', async ({ page }) => {
//     await page.goto('https://demoqa.com/buttons');

//     const rightClickElement = page.getByText("Right Click Me");

//     await rightClickElement.click({button:"right"});

//     const text = await page.locator('#rightClickMessage').innerText();

//     expect(text).toBe("You have done a right click1");

//     await page.waitForTimeout(5000);
// });