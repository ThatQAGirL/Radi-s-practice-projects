/// <reference types="Cypress" />
 ///<reference types="Cypress-iframe" />
//Iframe
 import 'cypress-iframe'
describe('My 8th Test Suite', function() 
{
 
it('My 8th case',function() {
 


cy.visit(Cypress.env('url') + "/AutomationPractice/")

cy.frameLoaded("#courses-iframe")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.wait(5000)
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


})
})

 
 