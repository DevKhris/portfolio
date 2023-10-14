import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("has title", async ({ page }) => {
    await expect(page).toBeTruthy();
  });
});

