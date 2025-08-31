import { Page } from "@playwright/test";
import {LoginPageElements} from "./login-page.elements"
 export class LoginPageMethods{
        private page:Page
        private loginPageElements: LoginPageElements

        constructor(page:Page){
            this.page=page
            this.loginPageElements = new LoginPageElements(page)
        }

        // insertar
        async insertUsername(username:string){
            await this.loginPageElements.textBoxes.username.fill(username)
        }

        async insertPassword(password:string){
            await this.loginPageElements.textBoxes.password.fill(password)
        }

        //click

        async clickOnLoginButton(){
            await this.loginPageElements.buttons.login.click()
        }
}