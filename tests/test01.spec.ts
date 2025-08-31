import { test, expect } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LoginPageMethods } from '../pages/login-page/login-page.methods';

test('Login', async ({ page }) => {

    // se instancia las clases donde se encuentran los metodos
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    //abre la aplicación
    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername("standar_user")
    await page.waitForTimeout(4000)
 
  });
