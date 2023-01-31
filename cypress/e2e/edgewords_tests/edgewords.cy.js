/// <reference types="cypress" />

describe("test on the edgewords demo site", () => {

    beforeEach(() => {
        cy.visit("https://www.edgewordstraining.co.uk/demo-site/")
        cy.dismissCookies()
        cy.fixture("credentials").then(creds => {
            cy.signIn(creds.username, creds.password)
        })
    })

    afterEach(() => {
        cy.goTo("cart")
        cy.emptyCart()
        cy.goTo("my account")
        cy.logout()
    })

    it("add an item to the basket", () => {
        cy.goTo("shop")
        cy.addToBasket("cap")
        
        cy.wait(500)
        
        // Assert that there is an aitem in the basket
        cy.get("span.count")
        .invoke("text")
        .then(text => {
            const numOfItems = parseInt(text)
            expect(numOfItems).to.be.greaterThan(0)
        })
    })
})