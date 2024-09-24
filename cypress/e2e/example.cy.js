describe("verify the tabs or windows", ()=>{
    // Cypress.on("uncaught:exception",()=>{
    //  return false
    // })

    it("verify the tabs or windows", ()=>{

    cy.visit("https://nichethyself.com/tourism/home.html")
    cy.contains("Customized tours").invoke("removeAttr","target").click()
    cy.get('button[type="submit"]').first().click()
    cy.on("window:alret",()=>{
        return true
    })


    })

})