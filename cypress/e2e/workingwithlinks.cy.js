

describe("working with links",()=>{
    Cypress.on("uncaught:exception",()=>{
        return false
    })

    it("working with links",()=>{

    cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")

    cy.get('a').should("have.length",3)
    })

    
    //how will you get the text from an element or link


   it("to get the text from an element or link",()=>{

    cy.visit("https://trello.com/")

cy.get('button[type="submit"]').first().then((name1)=>{
    let arr=name1.text()
    cy.log(arr)
    expect(arr).to.equal("Sign up - it’s free!")



         })

    })

    
})