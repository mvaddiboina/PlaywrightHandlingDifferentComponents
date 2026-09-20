import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { parse } from 'csv-parse/sync'

const rawFileData = fs.readFileSync('test_data.csv', 'utf-8');

const loginData: any = parse(rawFileData, { columns: true, skip_empty_lines: true });


test.describe("Sauce demo login use cases", async () => {
    for (let credentials of loginData) {
        test(`Sauce demo login ${credentials.user_name}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('#user-name').fill(credentials.user_name);
            await page.locator('#password').fill(credentials.password);
            await page.locator('#login-button').click();
        });

    }

});


