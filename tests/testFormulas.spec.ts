// import { test, expect } from '@playwright/test';

// // test('Login', async({page})=>{
// //     await page.goto('https://www.saucedemo.com/');
// // })


// // test('Login', async({page})=>{
// //     await page.goto('https://www.saucedemo.com/v1/index.html');
// //     // test('Login', async({page})=>{
// //     //     await page.goto('https://www.saucedemo.com/');
// //     // })

// //   /*await page.pause()*/
// //     await page.locator('[data-test="username"]').fill("standard_user")
// //     await page.locator('[data-test="password"]').fill("secret_sauce")
// //     await page.locator("#login-button").click()

// //    // guardando la variable    await page.waitForTimeout(5000)

// //    const productsTitleCount = await page.locator('.product_label').count()
// //    expect(productsTitleCount).toEqual(1)
// // })

// // CON GENERATOR
// // test('test', async ({ page }) => {
// //     await page.goto('https://www.saucedemo.com/v1/index.html');
// //     await page.locator('[data-test="username"]').click();
// //     await page.locator('[data-test="username"]').fill('standard_user');
// //     await page.locator('[data-test="password"]').click();
// //     await page.locator('[data-test="password"]').fill('secret_sauce');
// //     await page.getByRole('button', { name: 'LOGIN' }).click();
// //     await page.getByText('Products').click();
// //   });



// // test('checkbox', async ({ page }) => {
// //     await page.goto('https://the-internet.herokuapp.com/checkboxes');
// //     await page.waitForTimeout(2000)
// //     await page.locator("(//form[@id='checkboxes']//input)[1]").check()
// //     await page.waitForTimeout(2000)

// //   });


// // dropdown m select
// //   test('dropdown', async ({ page }) => {
// //     await page.goto('https://the-internet.herokuapp.com/dropdown');
// //     await page.waitForTimeout(2000)
// //     await page.locator("#dropdown").selectOption('Option 2')
// //     await page.waitForTimeout(2000)

// //   });

//   // realizar doble click


// //   // dropdown m select
// //   test('double click', async ({ page }) => {
// //     await page.goto('https://demoqa.com/buttons');
// //     await page.waitForTimeout(2000)
// //     await page.locator("#doubleClickBtn").dblclick()
// //     await page.waitForTimeout(2000)

// //   });


//     // // type = fill  m select
//     // test('type', async ({ page }) => {
//     //     await page.goto('https://www.saucedemo.com/v1/index.html');
//     //     await page.waitForTimeout(2000)
//     //     await page.locator("#user-name").fill("hola")
//     //     await page.waitForTimeout(2000)
    
//     //   });



//     //       // OBTENER EL TEXTO
//     // test('obtener texto', async ({ page }) => {
//     //     await page.goto('https://the-internet.herokuapp.com/');
//     //     await page.waitForTimeout(2000)
//     //     const text =  await page.locator(".heading").textContent()
//     //     console.log("est es el texto"+ text)
    
//     //   });

//               // COMPARAR EL TEXTO
//     test('comparar  texto', async ({ page }) => {
//         await page.goto('https://the-internet.herokuapp.com/');
//         await page.waitForTimeout(2000)
//         await expect( page.locator(".heading")).toHaveText("Welcome to the-internet")
//         //
//         const text =  await page.locator(".heading").textContent()
//         await expect(text).toEqual("Welcome to the-internet")
//       });


//       // que contenga cierta cadena de caracteres

//       test('contenga algo de texto', async ({ page }) => {
//         await page.goto('https://the-internet.herokuapp.com/');
//         await page.waitForTimeout(2000)
//         await expect( page.locator(".heading")).toContainText("Welcome")
    
//       });

//            // to have attribute para verificar un atributo de un elemento como type=submit

//            test('atributo', async ({ page }) => {
//             await page.goto('https://www.saucedemo.com/v1/');
//             await page.waitForTimeout(2000)
//             await expect( page.locator("#login-button")).toHaveAttribute('type','submit')
        
//           });