
import {
  searchInvoice,
  searchInvoiceNotFound
} from './search_payment_links.method.js'

import {
  viewPaymentLinkPage
} from './create_payment_links.method.js'

const invoice = {
  externalID: "invoice-1662356971",
  id: "63158df04492e72802acf1f2",
  payerEmail: "johndoe@example.com",
  description: "Invoice Demo #123",
  paymentDestination: "1328286217848"
}

describe('Payment Links Create', function () {

      beforeEach(() => {
        cy.session('user', () => {
            cy.login();
          })

      viewPaymentLinkPage()
    })

//POSITIVE TEST CASES

    it('View all Invoice', {scrollBehavior: false},function () { 
      
      cy.get('[class="table-row-vertical-align-middle table-clickable-row"]').should('be.visible')

    })

    it('Search Invoice by External ID', {scrollBehavior: false},function () { 
      
      searchInvoice(invoice,invoice.externalID)

    })

    it('Search Invoice by  ID', {scrollBehavior: false},function () { 
      
      searchInvoice(invoice,invoice.id)

    })

    it('Search Invoice by description', {scrollBehavior: false},function () { 
      
      searchInvoice(invoice,invoice.description)

    })

    it('Search Invoice by payer email', {scrollBehavior: false},function () { 
      
      searchInvoice(invoice,invoice.payerEmail)

    })

    it('Search Invoice by payment destination', {scrollBehavior: false},function () { 
      
      searchInvoice(invoice,invoice.paymentDestination)

    })


//NEGATIVE TEST CASES

it('Search Invoice by inexistent param', {scrollBehavior: false},function () { 
      
  searchInvoiceNotFound('notfoundid')

})



    


    
    
})

