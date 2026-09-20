import { test, expect } from "@playwright/test"

test("Intercept the response to have only 1 fruit", async ({ page }) => {

    await page.route("https://demo.playwright.dev/api-mocking/api/v1/fruits", 
        async (route) => {
        const cusomFruits = [{ name: "Fruit1", id: 101 }, { name: "Fruit2", id: 102 }];

        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(cusomFruits)
        });
    },
);

    await page.goto("https://demo.playwright.dev/api-mocking/");

    await page.waitForTimeout(5000);

});


test.only("Intercept the response to have only 0 fruit", async ({ page }) => {

    await page.route("https://demo.playwright.dev/api-mocking/api/v1/fruits", 
        async (route) => {
        const cusomFruits = null;

        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(cusomFruits)
        });
    },
);

    await page.goto("https://demo.playwright.dev/api-mocking/");

    await page.waitForTimeout(5000);

});