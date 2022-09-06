

let viewPaymentLinkPage= ()=>{
  cy.visit('/payment-links')
  cy.get('[class="d-none d-sm-block m-0"]').contains("Payment Links (Invoices)").should('be.visible');
  cy.get('[class="card-body"]').should('be.visible');
}

let clickCreatePaymentLinkButton= (amount)=>{
  cy.get('[id="create-payment-link"]').click()
  cy.get('h1').contains("Create Payment Link").should('be.visible')
  cy.get('[class="payment-links-create-page-container container"]').should('be.visible')
  cy.wait(2000)
  cy.get('[name="referenceId"]').invoke('val').should('not.be.empty')
  cy.get('[value="TOTAL_AMOUNT"]').should('be.checked')
  cy.get('[id="payment-link-submit-btn"]').should('be.disabled')
}

let createSinglePaymentLinkShowingTotalAmountDue =(amount,description) =>{
  var externalID
  clickCreatePaymentLinkButton(amount)

  if(amount===null)
  {
    cy.get('[id="payment-link-submit-btn"]').should('be.disabled')
  }
  else if(amount===0)
  {
    cy.get('[name="amountDue"]').type(amount)
    cy.get('[id="payment-link-submit-btn"]').should('be.enabled')
    cy.get('[id="payment-link-submit-btn"]').click()
    cy.get('[class="alert-text"]').contains('There was an error with the format submitted to the server.').should('be.visible')
 }
  else{
    
    cy.get('[name="referenceId"]').invoke('val').then((eID)=>{
      externalID = eID
      cy.get('[name="amountDue"]').type(amount)
      cy.get('[id="payment-link-submit-btn"]').should('be.enabled')
      if(description!=null) cy.get('[name="description"]').type(description)
      cy.get('[id="payment-link-submit-btn"]').click()
      cy.get('[class="modal-subtitle"]').should('be.visible')
      cy.get('[alt="close_button"]').click()
      cy.get('[class="table"]').contains(externalID)
      if(description!=null) cy.get('[class="table"]').contains(description)
  
    })
  
  
  }
  

  
}
   

export {
  viewPaymentLinkPage,
  createSinglePaymentLinkShowingTotalAmountDue
}
