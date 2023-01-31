/// <reference types="cypress" />

describe("Accessibility Tests", () => {

    beforeEach(() => {
        cy.visit("https://www.edgewordstraining.co.uk/demo-site/")
        cy.dismissCookies()
    })

    it("verifies the login/register page meets the WCAG 2 AA accessibility standards", () => {
        cy.goTo("my account")
        cy.injectAxe()
        cy.checkA11y()
    })
})

describe("Accessibility Tests", () => {

    beforeEach(() => {
        cy.visit("https://www.edgewordstraining.co.uk/demo-site/")
        cy.dismissCookies()
        cy.fixture("credentials").then(creds => {
            cy.signIn(creds.username, creds.password)
        })
    })

    it("verifies the Home page meets the WCAG 2 AA accessibility standards", () => {
        cy.goTo("home")
        cy.injectAxe()
        cy.checkA11y()
    })

    it("verifies the Shop page meets the WCAG 2 AA accessibility standards", () => {
        cy.goTo("shop")
        cy.injectAxe()
        cy.checkA11y()
    })

    it("verifies the My Account page meets the WCAG 2 AA accessibility standards", () => {
        cy.goTo("my account")
        cy.injectAxe()
        cy.checkA11y()
    })
})