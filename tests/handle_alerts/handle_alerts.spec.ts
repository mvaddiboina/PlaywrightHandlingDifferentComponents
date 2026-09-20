import { test, expect } from '@playwright/test';

test('Handle simple alert ok', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog", async (dialog) => {
        console.log(await dialog.type());
        console.log(await dialog.message());

        await dialog.accept();

    })

    await page.getByText('Simple Alert').click();

    await page.waitForTimeout(5000);

});


test('Handle simple alert dismiss', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog", async (dialog) => {
        console.log(await dialog.type());
        console.log(await dialog.message());

        await dialog.dismiss();

    })

    await page.getByText('Simple Alert').click();

    await page.waitForTimeout(5000);

});



test('Handle confirmation alert ok', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog", async (dialog) => {
        console.log(await dialog.type());
        console.log(await dialog.message());

        await dialog.accept();

    })

    await page.getByText('Confirmation Alert').click();

    await page.waitForTimeout(5000);

    expect(await page.getByText('You pressed OK!').innerText()).toBe("You pressed OK!");


});


test('Handle confirmation alert dismiss', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog", async (dialog) => {
        console.log(await dialog.type());
        console.log(await dialog.message());

        await dialog.dismiss();

    })

    await page.getByText('Confirmation Alert').click();

    await page.waitForTimeout(5000);

    expect(await page.getByText('You pressed Cancel!').innerText()).toBe("You pressed Cancel!");


});


test('Handle prompt alert accept', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog", async (dialog) => {
        console.log(await dialog.type());
        console.log(await dialog.message());

        await dialog.accept("Test");

    })

    await page.getByText('Prompt Alert').click();

    await page.waitForTimeout(5000);

    expect(await page.getByText('Hello Test! How are you today?').innerText()).toBe("Hello Test! How are you today?");


});


test.only('Handle prompt alert dismiss', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on("dialog", async (dialog) => {
        console.log(await dialog.type());
        console.log(await dialog.message());

        await dialog.dismiss();

    })

    await page.getByText('Prompt Alert').click();

    await page.waitForTimeout(5000);

    expect(await page.getByText('User cancelled the prompt.').innerText()).toBe("User cancelled the prompt.");


});