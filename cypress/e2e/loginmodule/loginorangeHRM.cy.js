
import data1 from "../../fixtures/logindata.json"
import obj from "../../pageobjectmodel/login.po"

describe('orangeHRM login functionolity',{retries:2},() =>{
    
    before("beforerunning all the testcases",()=>{
        cy.log("excution started")
    })
    beforeEach("url launching",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    after("after excution completed",()=>{
        cy.log("excution completed")
    })
   
    it('verify login with valid credentiols' ,() =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(obj.usrenamelocater()).type(data1.username)
    cy.get(obj.passwordlocater()).type(data1.password)
    cy.get(obj.loginbuttonlocater()).click()
    cy.contains('Time at Work').should ('be.visible')

    })

    it('verify login with invalid credentiols' ,() =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(obj.usrenamelocater()).type(data1.wrongusername)
        cy.get(obj.passwordlocater()).type(data1.wrongpassword)
        cy.get(obj.loginbuttonlocater()).click()
        cy.contains('Invalid credentials').should ('be.visible')
    
        })

        it('verify login with invalid user name valid password' ,() =>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get(obj.usrenamelocater()).type('Admin123')
            cy.get(obj.passwordlocater()).type('admin123')
            cy.get(obj.loginbuttonlocater()).click()
            cy.contains('Invalid credentials').should ('be.visible')
        
            })

            it('verify login with valid user name invalid password' ,() =>{

                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get(obj.usrenamelocater()).type('Admin')
                cy.get(obj.passwordlocater()).type('admin12345')
                cy.get(obj.loginbuttonlocater()).click()
                cy.contains('Invalid credentials').should ('be.visible')
            
                })

                it('verify login with no details' ,() =>{

                    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                    cy.get(obj.usrenamelocater())
                    cy.get(obj.passwordlocater())
                    cy.get(obj.loginbuttonlocater()).click()
                    cy.contains('Required').should ('be.visible')
                
                    })

})