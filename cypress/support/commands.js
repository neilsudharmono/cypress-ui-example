

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


Cypress.Commands.add("login", () => {
  // this to open testing page
      
  //login process
  cy.visit("/login");
  cy.get('[name="email"]').type(Cypress.env("username"))
  cy.get('[name="password"]').type(Cypress.env("password"))
  cy.get('[type="submit"]').contains('Log in').click();

  //login validation
  cy.get('[class="header-business-logo rounded-circle"]').should('be.visible')
  cy.get('[id="lhs-main-menu"]').should('be.visible')
     
})