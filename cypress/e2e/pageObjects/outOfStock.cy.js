import {AuthenticationMethods} from './authentication/authentication.methods';
import {OutOfStockElementMethods} from './outOfStock/outOfStock.methods';

describe('template spec', () => {
    const authentication = new AuthenticationMethods();
    const outOfStockElement = new OutOfStockElementMethods();

    beforeEach(() => {
        // Login page
        authentication.navigateToPage('https://juice-shop.herokuapp.com/#/login');

        // Credentials
        authentication.login('admin@juice-sh.op', 'admin123');

        // Successful log in - check
        authentication.verifyUserSuccessfullyLogin();
    })

    afterEach(() => {
        // Logout
        authentication.logout();

        // Successful log out - check
        authentication.verifyUserSuccessfullyLogout();
    })

    it('search out of stock item and validate that it cant be added to cart with POM', () => {
         // Search for out-of-stock item
         //  Item marked as out-of-stock - check
         outOfStockElement.searchItem('Facemask{enter}');
 
         // Add item to cart
         // Error message displayed - check
         outOfStockElement.addItemToCart();
    })
})