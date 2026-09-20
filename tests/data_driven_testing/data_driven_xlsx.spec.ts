import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx'


const workbook = XLSX.readFile('test_data.xlsx');
const sheetName = workbook.SheetNames[0];
const workSheet = workbook.Sheets[sheetName];

const jsonData: any = XLSX.utils.sheet_to_json(workSheet);


test.describe("Sauce demo login use cases", async () => {
    for (let credentials of jsonData) {
        test(`Sauce demo login ${credentials.user_name}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('#user-name').fill(credentials.user_name);
            await page.locator('#password').fill(credentials.password);
            await page.locator('#login-button').click();
        });

    }

 });


