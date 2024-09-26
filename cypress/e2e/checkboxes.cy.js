

describe("working with checkboxes",()=>{

    it("verify checkboxes ",()=>{
        cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
        cy.get('input[id="tecnologia1"]').check().should('be.checked')


    })

    it("verify checkboxes",()=>{
        cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
        cy.get('input[id="tecnologia1"]').uncheck().should('not.be.checked')

    })

    it("verify only few checkboxes check",()=>{
        cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
        cy.get('input[type="checkbox"]').check(['HTML','CSS','Javascript']).should('be.checked')

    })

    
    
        it('should check the first 4 checkboxes', () => {
       
          cy.visit('https://www.dezlearn.com/webtable-example/');
      
         
          cy.get('input[type="checkbox"]').each((checkbox, index) => {
            if (index < 4) {
              cy.wrap(checkbox).check();
            }
          });
        });

        it('should check the 5th to 8th checkboxes', () => {
            
            cy.visit('https://www.dezlearn.com/webtable-example/');
        
            
            cy.get('input[type="checkbox"]').each((checkbox, index) => {
              if (index >= 4 && index <= 7) {
                cy.wrap(checkbox).check();
              }
            });
          });
   

})