
describe("verify the page title",()=>{
    it("verify title",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.title().should("eq","The Internet")
 
    })
    
    it("get the text from an element",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains("Basic Auth").then((name1)=>{
         let arr=name1.text()
         cy.log(arr)

        })
    })

})