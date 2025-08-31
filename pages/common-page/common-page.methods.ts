import { Page } from '@playwright/test';
import {CommonPageElements} from './common-page.elements'


//metodo
export class CommonPageMethods{
    private page:Page
    private commonPageElements : CommonPageElements
    constructor(page){
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }
    async navigateToTheApplication(){
        await this.page.goto("https://www.saucedemo.com/v1/index.html")
    }


    async openMenu(){
        await this.commonPageElements.buttons.openMenu.click()
    }
}