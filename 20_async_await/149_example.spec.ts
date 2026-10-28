import { test, expect } from '@playwright/test';

// Helper function defined before use — clear and scoped
async function getExampleValue(): Promise<string> {
    return 'abc';
}

test.describe('Async/Await in Playwright', () => {
    test('uses await in a Playwright test', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);

        const value = await getExampleValue();
        expect(value).toBe('abc');
    });
});
