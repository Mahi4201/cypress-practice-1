describe("verify the page title", ()=>{

    it("verify the page title",()=>{

    cy.visit("https://jqueryui.com/checkboxradio/")

      cy.get('iframe[class="demo-frame"]').then((name1)=>{

     let variablename=name1.contents().find('label[for="checkbox-4"]')

     cy.wrap(variablename).click()//.should("be.checked")


      })

    })

})