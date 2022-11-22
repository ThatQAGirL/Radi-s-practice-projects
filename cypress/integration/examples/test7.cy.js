/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My 7th testcase',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


cy.get('#opentab').then(function(e1)

{
    const url=e1.prop('href')
    cy.log(url)
    cy.visit(url)
})


})
})

 
 

 