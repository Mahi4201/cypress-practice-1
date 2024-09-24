

describe("working with drag and drop",()=>{


    Cypress.on("uncaught:exception",()=>{
        return false
    })

    it("working with drag and drop using datatransfer",()=>{
        
   cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")

   const dataTransfer = new DataTransfer()
   cy.get('#menu-fried-chicken').trigger("dragstart",{dataTransfer})
   cy.get('#plate-items').trigger('drop',{dataTransfer})


   cy.get('#menu-hamburger').trigger("dragstart",{dataTransfer})
   cy.get('#plate-items').trigger('drop',{dataTransfer})


   cy.get('#menu-ice-cream').trigger("dragstart",{dataTransfer})
   cy.get('#plate-items').trigger('drop',{dataTransfer})



    })
})