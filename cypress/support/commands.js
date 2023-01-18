// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("signIn", (username, password) => {
    cy.get("a").contains("Dismiss").click()
    cy.get("a").contains("My account").click()
    cy.get("[name='login']").should("be.visible")
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get("[name='login']").click()
    cy.get("a").contains("Logout").should("have.text", "Logout")
})

Cypress.Commands.add("logout", () => {
    cy.get("a")
    .contains("Logout", {matchCase: false})
    .click()
})

Cypress.Commands.add("goTo", (navbarItem) => {
    cy.get("[id^=menu-item] > a")
        .contains(navbarItem, {matchCase: false})
        .click()
})

Cypress.Commands.add("addToBasket", (itemName) => {
    cy.get(".products")
    .find("li > a > h2")
    .contains(itemName, {matchCase: false})
    .parent()
    .parent()
    .find("a")
    .contains("add to cart", {matchCase: false})
    .click()
})

Cypress.Commands.add("emptyCart", () => {
    cy.get("a[aria-label='Remove this item']")
    .each(() => {
        cy.get("a[aria-label='Remove this item']")
        .last()
        .click()
    })
})
