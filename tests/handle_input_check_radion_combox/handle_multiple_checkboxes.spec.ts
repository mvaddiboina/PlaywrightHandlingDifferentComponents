import { test } from '@playwright/test';

test('Handle multiple check boxes', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');
    await page.getByRole("checkbox", { name: "One" }).check();

    let checkboxes = await page.locator("//input[@type='checkbox']").all();


    for (let checkbox of checkboxes) {

        if (!(await checkbox.isChecked())) {
            await checkbox.check();

        }

    }

    await page.waitForTimeout(5000);
});