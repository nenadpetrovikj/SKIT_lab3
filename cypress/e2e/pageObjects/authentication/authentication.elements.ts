export class AuthenticationElements {
    
    static get AuthenticationElement() {
        return{
            getBtnCloseDialog: () => cy.get('#mat-dialog-0 > app-welcome-banner > div > div:nth-child(3) > button.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted'),
            getBtnCookies: () => cy.get('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override-1934802758 > div > a'),
            getTxtEmail: () => cy.get('#email'),
            getTxtPassword: () => cy.get('#password'),
            getBtnLogin: () => cy.get('#loginButton'),
            getBtnShoppingBasket: () => cy.get('[aria-label="Show the shopping cart"]'),
            getBtnAccount: () => cy.get('#navbarAccount'),
            getBtnLogout: () => cy.get('#navbarLogoutButton')
        }
    }
}