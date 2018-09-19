export default class GooglePage {
    constructor() {
        this.txtSearch = '#lst-ib'
        this.txtResultSearch = '#resultStats'
    }

    visit() {
        return cy.visit('https://google.com')
    }
    
    clickGoogleSearchBar() {
        return cy.get(this.txtSearch).click()
    }

    fillGoogleSearchBar(search) {
        return cy.get(this.txtSearch).type(search)
    }

    pressEnterKeyBoard(){
        return cy.get(this.txtSearch).type('{enter}')
    }

    searchResult(){
        return cy.get(this.txtResultSearch).should('be.visible')
    }
}