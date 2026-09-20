import { test, expect } from '@playwright/test';

test('Handle frames', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const bottomFrame = page.frameLocator("frame[name='frame-bottom']");

    console.log(await bottomFrame.getByText("BOTTOM").innerText());

    await page.waitForTimeout(5000);

});


test.only('Handle frames by frame name', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const leftFrame = page.frame("frame-left");

    if (leftFrame) {
        console.log(await leftFrame.getByText("LEFT").innerText());

    }


    await page.waitForTimeout(5000);

});