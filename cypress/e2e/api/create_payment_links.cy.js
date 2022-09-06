
import {
  viewPaymentLinkPage,
  createSinglePaymentLinkShowingTotalAmountDue
} from './create_payment_links.method.js'

describe('Payment Links Create', function () {

      beforeEach(() => {
        cy.session('user', () => {
            cy.login();
          })

      viewPaymentLinkPage()
    })

//POSITIVE TEST CASES

    it('Create Single Payment Link with "showing total amount due only"', {scrollBehavior: false},function () { 
      
      createSinglePaymentLinkShowingTotalAmountDue(1000000,"This is payment link triggered by automation")

    })

    it.only('Create Single Payment Link with "showing total amount due only and mandatory fields only"', {scrollBehavior: false},function () { 
      
      createSinglePaymentLinkShowingTotalAmountDue(1000000,null)

    })





    


    
    
})

