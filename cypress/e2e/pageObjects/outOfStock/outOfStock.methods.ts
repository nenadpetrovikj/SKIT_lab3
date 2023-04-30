import { OutOfStockElement } from "./outOfStock.elements";

export class OutOfStockElementMethods {
    searchItem(text:string) {
        OutOfStockElement.SearchItemElement.getSearchIcon().click();
        OutOfStockElement.SearchItemElement.getInput().type(text);
        OutOfStockElement.SearchItemElement.getSoldOutRibbon().should('have.text', 'Sold Out');
    }
    addItemToCart() {
        OutOfStockElement.SearchItemElement.getAddButton().click();
        OutOfStockElement.SearchItemElement.getMessage().should('have.text', 'We are out of stock! Sorry for the inconvenience.');
    }
}