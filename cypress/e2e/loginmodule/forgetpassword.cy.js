describe('orangeHRM forget password functionolity',() =>{

    it('verify orangeHRM forget password button' ,() =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('div[class="orangehrm-login-forgot"]').click()
    cy.contains('Reset Password').should ('be.visible')

    })

    it('verify orangeHRM forget password with user name' ,() =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('div[class="orangehrm-login-forgot"]').click()
        cy.contains('Reset Password').should ('be.visible')
        cy.get('input[name="username"]').type('Admin')
        cy.get('button[type="submit"]').click()
        cy.contains('Reset Password link sent successfully').should('be.visible')
        
        })

        it('verify orangeHRM forget password cancel button' ,() =>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('div[class="orangehrm-login-forgot"]').click()
            cy.contains('Reset Password').should ('be.visible')
            cy.get('button[type="button"]').click()
            cy.contains('Login').should('be.visible')
            
            })

       it('verify orangeHRM forget password with invalid user name' ,() =>{

                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get('div[class="orangehrm-login-forgot"]').click()
                cy.contains('Reset Password').should ('be.visible')
                cy.get('input[name="username"]').type('123123123123123123123123123123')
                cy.get('button[type="submit"]').click()
                cy.contains('Reset Password link sent successfully').should('be.visible')
                
                })

       it('verify orangeHRM forget password without user name' ,() =>{

                    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                    cy.get('div[class="orangehrm-login-forgot"]').click()
                    cy.contains('Reset Password').should ('be.visible')
                    cy.get('input[name="username"]')
                    cy.get('button[type="submit"]').click()
                    cy.contains('Required').should('be.visible')
                    
                    })
     
})