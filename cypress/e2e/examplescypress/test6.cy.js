/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My 6th testcase',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")



//Mouse Hover
 
//cy.get('div.mouse-hover-content').invoke('show') (using jquery) (make it visible)
cy.contains('Top').click({force:true}) // cypress 
cy.url().should('include','top')


})
 
 
})
 
 

 