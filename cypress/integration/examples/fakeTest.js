/// <reference types="Cypress" />

describe ('My First Test Suite',function()

{

it('My FirstTest Case', function()

{

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

   
    cy.intercept({
        
    method : 'GET',
    url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    
    
    } , 
    
    {
        statusCode :200,
        body: [{
            "book_name": "RobotFramework",
            "isbn": "984353",
            "aisle": "982053"  }] 

    }).as('bookretrievals')
    cy.get("button[class='btn btn-primary']").click()
   cy.wait('@bookretrievals').should(({request,response}) =>
   {

    cy.get('tr').should('have.length', response.body .length +1)
    response.body .length 
   })











cy.get('p').should('have.text','Oops only 1 Book available')


//length of the response array = rows of table






})
})


