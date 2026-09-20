import { test } from '@playwright/test';

test('Create account in promptqa', async ({ page }) => {
    await page.goto('https://playground.promptqa.dev/signup');
    await page.getByText("Skip tour").click();
    await page.getByTestId('signup-name').fill("Test User");
    await page.getByTestId('signup-email').fill("test@gmail.com");
    await page.getByRole("textbox", { name: "Password" }).nth(0).fill("test1234");
    await page.getByRole("textbox", { name: "Confirm password" }).fill("test1234");

    const countryDropDwon = page.locator('#signup-country');

    await countryDropDwon.selectOption('United States');
    await countryDropDwon.selectOption({ value: "IN" });
    await countryDropDwon.selectOption({ label: "United Kingdom" });
    await countryDropDwon.selectOption({ index: 5 });

    const maleRadioButton = page.getByTestId('signup-gender-male');
    console.log(`is radio button enabled: ${await maleRadioButton.isEnabled()}`);
    console.log(`is radio button visible: ${await maleRadioButton.isVisible()}`);
    console.log(`is radio button checked: ${await maleRadioButton.isChecked()}`);

    if (!(await maleRadioButton.isChecked())) {
        await maleRadioButton.check();
    }

    await page.getByText('I agree to the (dummy) Terms and Privacy Policy', { exact: true }).check();

    await page.getByText('Create account').nth(0).click();






    await page.waitForTimeout(5000);

});