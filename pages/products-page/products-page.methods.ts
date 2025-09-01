import { Page, expect } from "@playwright/test";
import { ProductsPageElements } from "./products-page.elements";

export class ProductsPageMethods{
    private page:Page
    private productsPageElements : ProductsPageElements

    constructor(page){
        this.page=page
        this.productsPageElements = new ProductsPageElements(page)

    }

    async clickOnAddToCart(productName:string) {
        await this.productsPageElements.addCartButton(productName).click()
        
    }

    async clickOnCartIcon(){
        await this.productsPageElements.icons.cart.click()
    }

    async verifyProductsPageIsDisplayed(){
        const elementsCount = await this.productsPageElements.otherElements.pageTitle.count()

        // si encuentra uno solo 
        expect (elementsCount).toEqual(1)
    }
}