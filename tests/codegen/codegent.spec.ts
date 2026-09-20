import { test, expect, devices } from '@playwright/test';

test('test case 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_suace');
  await page.locator('[data-test="login-button"]').click();
});


test('test case 2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_suace');
  await page.locator('[data-test="login-button1"]').click();
});