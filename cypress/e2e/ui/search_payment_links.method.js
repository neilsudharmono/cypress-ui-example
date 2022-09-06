require('cypress-plugin-tab');


let searchInvoice= (objectParam,param)=>{
  cy.get('[placeholder="Search for a transaction"]').type(param).tab()
  cy.wait(5000)
  cy.get('[class="table"]').contains(objectParam.externalID)
  cy.get('[class="table"]').contains(objectParam.payerEmail)
  cy.get('[class="table"]').contains(objectParam.description)

}

let searchInvoiceNotFound= (param)=>{
  cy.get('[placeholder="Search for a transaction"]').type(param+'{enter}')
  cy.get('[class="empty-card-caption font-weight-bold text-lg"]').contains("No Payment Links Yet :(").should('be.visible')

}


   

export {
  searchInvoice,
  searchInvoiceNotFound
}
