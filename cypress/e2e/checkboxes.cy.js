

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

})