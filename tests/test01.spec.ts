import { test, expect } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LoginPageMethods } from '../pages/login-page/login-page.methods';
import { LoginPageData } from '../pages/login-page/login-page.data';
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';


const userCredentials = LoginPageData.credentials;

test('Login', async ({ page }) => {

    // se instancia las clases donde se encuentran los metodos
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)

    //se ingresan los metodos
    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickOnLoginButton()
    //await commonPageMethods.openMenu()
    await productsPageMethods.clickOnAddToCart("Sauce Labs Backpack")
    await productsPageMethods.clickOnCartIcon()
    await page.waitForTimeout(4000)
 
  });
