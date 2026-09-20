import { test, expect } from '@playwright/test';

test('Handle multi file upload', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    await page.setInputFiles("input[type='file']", ["testdata/file1.pdf", "testdata/file2.pdf"]);

    await page.waitForTimeout(5000);
});