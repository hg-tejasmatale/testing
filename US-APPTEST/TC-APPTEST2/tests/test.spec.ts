import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('POM smoke: user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step('Open the app', async () => { await loginPage.open(); });
  await test.step('Log in', async () => {
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
  });
  await test.step('Verify login', async () => {
    await expect(page).not.toHaveURL(/login/i);
  });
});
