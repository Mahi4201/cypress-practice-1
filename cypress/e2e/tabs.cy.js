

describe("verify the tabs or windows", ()=>{
   Cypress.on("uncaught:exception",()=>{
    return false
   })
    

  //   it("switching the same tabe",{retries:1},()=>{

  //   cy.visit("https://demoqa.com/browser-windows",{
  //     onbeforeLoad(name1){
  //     cy.stub(name1,'open')
  //     }
  //   }
  // )
      
  //   cy.get('iframe[title="Criteo GUM iframe"]').then((name1)=>{
  //       let arr=name1.contents().find('button[id="tabButton"]')
  //       cy.wrap(arr).click({force:true})
  //   })

  //   //cy.get('button[id="tabButton"]').should('have.attr', 'href')
   
  //     cy.contains("This is a sample page").should("be.visible")

     
  //   })

    it("switching the same tabe",{retries:1},()=>{

       cy.visit("https://demoqa.com/browser-windows"
      ,{
        onbeforeLoad(name1){
        cy.stub(name1,'open')
        }

      })
    cy.get('button[id="tabButton"]').click()
    
    // cy.contains("This is a sample page").should("be.visible")
    // cy.get("#sampleHeading").then((name1)=>{
    //  let arr=name1.text()
    //  cy.log(arr)
    // })
  })
  
  })
