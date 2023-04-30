import { AuthenticationElements } from "./authentication.elements";

export class AuthenticationMethods {
    navigateToPage(page: string){
        cy.visit(page);
        AuthenticationElements.AuthenticationElement.getBtnCloseDialog().click();
        AuthenticationElements.AuthenticationElement.getBtnCookies().click();
    }
    login(email:string, password:string){
        AuthenticationElements.AuthenticationElement.getTxtEmail().type(email);
        AuthenticationElements.AuthenticationElement.getTxtPassword().type(password);
        AuthenticationElements.AuthenticationElement.getBtnLogin().click();
    }
    verifyUserSuccessfullyLogin(){
        AuthenticationElements.AuthenticationElement.getBtnShoppingBasket().should('exist');
    }
    logout(){
        AuthenticationElements.AuthenticationElement.getBtnAccount().click();
        AuthenticationElements.AuthenticationElement.getBtnLogout().click();
    }
    verifyUserSuccessfullyLogout(){
        AuthenticationElements.AuthenticationElement.getBtnShoppingBasket().should('not.exist');
    }
}