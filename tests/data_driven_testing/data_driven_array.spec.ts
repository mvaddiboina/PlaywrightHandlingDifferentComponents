import { test, expect } from '@playwright/test';
import * as fs from 'fs';


const rawFileData = fs.readFileSync("test_data.json", "utf-8");

const userData = JSON.parse(rawFileData);


test.describe("Sauce demo login use cases", async () => {
    for (let credentials of userData) {
        test(`Sauce demo login ${credentials.userName}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('#user-name').fill(credentials.userName);
            await page.locator('#password').fill(credentials.password);
            await page.locator('#login-button').click();
        });

    }

});


