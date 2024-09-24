import data1 from "../fixtures/logindata.json"
import obj from "../pageobjectmodel/login.po"
const addjobtitles = [
    {
        name:"addedjobtitle/jobtitle1",
        context:"title1"
    },
    {
        name:"addedjobtitle/jobtitle2",
        context:"title2"  
    },
    {
        name:"addedjobtitle/jobtitle3",
        context:"title3"  
    }
]

describe("verify the datadreven testing", function(){

addjobtitles.forEach((text1)=>{
    describe(text1.context,()=>{
        before(function(){
            cy.fixture(text1.name).then(function(data){
                this.data=data
            })

        })
    

    it("verify the datadreven testing with multiple set of data", function(){


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(obj.usrenamelocater()).type(data1.username)
        cy.get(obj.passwordlocater()).type(data1.password)
        cy.get(obj.loginbuttonlocater()).click()
        cy.contains('Time at Work').should ('be.visible')
        cy.contains("Admin").click()
        cy.contains("System Users").should('be.visible')
       
        cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()
        cy.contains("Job Titles").click()
        cy.get('div[class="orangehrm-header-container"]>div>button').click()
        cy.get('input[class="oxd-input oxd-input--active"]').last().type(this.data.jobtitle)
        cy.get('textarea[placeholder="Type description here"]').type(this.data.jobdiscription)
        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Saved').should('be.visible')


    })

})
})
})
