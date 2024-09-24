

describe("verify the internet login details", () => {

   it("verify login with valid details", () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.contains('Logout').should('be.visible')
   })
  
   it("verify login with invalid details", () => {
    cy.visit("https://the-internet.herokuapp.com/login")
    cy.get('input[name="username"]').type('tomsmithgg')
    cy.get('input[name="password"]').type('SuperSecretPasswohgnbrd!')
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!').should('be.visible')
  })
  
  it("verify login with valid user name invalid password", () => {
    cy.visit("https://the-internet.herokuapp.com/login")
    cy.get('input[name="username"]').type('tomsmith')
    cy.get('input[name="password"]').type('SuperSecretPasswgcchhjohgnbrd!')
    cy.get('button[type="submit"]').click()
    cy.contains('Your password is invalid!').should('be.visible')
  })
  
  it("verify login with invalid user name valid password", () => {
    cy.visit("https://the-internet.herokuapp.com/login")
    cy.get('input[name="username"]').type('tomsmigjhjhghthgg')
    cy.get('input[name="password"]').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!').should('be.visible')
  })
  
  it("verify logout functionolity",
  () => {
    
    cy.visit("https://the-internet.herokuapp.com/login")
    cy.get('input[id="username"]').type('tomsmith')
    cy.get('input[id="password"]').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('Logout').should('be.visible')
    cy.get('a[class="button secondary radius"]').click()
    cy.contains('You logged out of the secure area!').should('be.visible')


    
  })
  
  
  })