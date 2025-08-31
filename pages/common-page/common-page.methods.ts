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

    // clic para abrir el menu que está al lado izquierdo
    async openMenu(){
        await this.commonPageElements.buttons.openMenu.click()
    }

    // para menu izquierdo, al dar clic, se abrirá todas las opciones
    async clickOnAllItemsOption(){
        await this.commonPageElements.leftMenu.allItems.click()
    }

    // clic en "acerca" opción
    async clickOnAboutOption(){
        await this.commonPageElements.leftMenu.about.click()
    }

    async clickOnLogOutOption(){
        await this.commonPageElements.leftMenu.logout.click()
    }

    async clickOnResetAppStateOption(){
        await this.commonPageElements.leftMenu.resetAppState.click()
    }



}