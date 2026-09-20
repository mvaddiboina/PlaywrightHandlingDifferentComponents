import { test, expect } from '@playwright/test';

const loginData: string[][] = [
    ['standard_user', 'secret_sauce'],
    ['locked_out_user', 'secret_sauce'],
    ['problem_user', 'secret_sauce'],
    ['performance_glitch_user', 'secret_sauce'],
]


test.describe("Sauce demo login use cases", async () => {
    for (let [username, password] of loginData) {
        test(`Sauce demo login ${username}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('#user-name').fill(username);
            await page.locator('#password').fill(password);
            await page.locator('#login-button').click();
        });

    }

});


