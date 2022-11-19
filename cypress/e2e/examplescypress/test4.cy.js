/// <reference types="Cypress" />
 
describe('My fourth Test Suite', function() 
{
 
it('My fourth test case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Handling alerts

cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
cy.on('window:alert', (str)=> 
{
    //mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str)=> 
{
    //mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

cy.get('#opentab').invoke('removeAttr', 'target').click();

cy.url().should('include', 'rahulshetty')
 
cy.go('back')



})
})
