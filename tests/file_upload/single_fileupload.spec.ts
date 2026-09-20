import { test, expect } from '@playwright/test';

test('Handle single file upload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

   await page.setInputFiles("#file-upload","testdata/sample.pdf");

   await page.locator('#file-submit').click();

   await expect(page.getByText("File Uploaded!")).toBeVisible();

    await page.waitForTimeout(5000);
});