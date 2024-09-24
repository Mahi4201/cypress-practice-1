
describe("working with shodow elements",()=>{

    it("working with shodow elements",()=>{
    //  cy.visit("http://watir.com/examples/shadow_dom.html")
    //  cy.contains("scroll.html").click()
    //  cy.contains("top").should('be.visible')
    //  cy.go(-1)

    // })

    cy.visit('http://watir.com/examples/shadow_dom.html');

    //cy.get("input[type='text']").type("cypress");

    cy.get('#shadow_host').shadow().find("input[type='text']").type("mahesh")

     cy.get('#shadow_host').shadow().find('[type="checkbox"]').check()

    


  })
})