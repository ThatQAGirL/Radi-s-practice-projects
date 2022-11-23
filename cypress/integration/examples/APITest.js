/// <reference types="Cypress" />

describe ('My First Test Suite',function()

{

it('My FirstTest Case', function()

{


    cy.request ('POST','http://216.10.245.166/Library/Addbook.php', {

        "name":"Learn Cypress Automation ",
        "isbn":"bcdfra",
        "aisle":"227059",
        "author":"Johng foe"
        }).then (function(response)

{
expect(response.body).to.have.property("Msg", "successfully added")
expect(response.status).to.eq(200)
})
})
})
