describe("working with different domine or origin",()=>{

    it("working with origin",()=>{
     
     cy.visit("https://trello.com/")
     cy.contains("Get Trello for free").click()
     cy.origin("https://id.atlassian.com/",()=>{
     cy.get('input[name="email"]').type("ghgjhgkgfnghghg")

     })

    })

    //working with mouse events

    it("working with origin",()=>{
     
        cy.visit("https://trello.com/")
        cy.contains("About Trello").scrollIntoView().click()



    })
})