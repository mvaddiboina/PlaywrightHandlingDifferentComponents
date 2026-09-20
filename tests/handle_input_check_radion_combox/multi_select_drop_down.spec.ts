import { test } from '@playwright/test';

test('Handle multiselect drop down', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const multiSelectColorDropDwon = page.locator('#colors');

    //await multiSelectColorDropDwon.selectOption(["Red", "Blue"]);
    //await multiSelectColorDropDwon.selectOption([{value:"green"}, {value:"yellow"}]);
    //await multiSelectColorDropDwon.selectOption([{index:5}, {index:6}]);
    await multiSelectColorDropDwon.selectOption([{label:"Red"}, {label:"Blue"}]);

    await page.waitForTimeout(5000);
});