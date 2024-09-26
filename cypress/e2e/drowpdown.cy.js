// describe("working with drowpdowns",()=>{

//     // it("verify dsrow drowns ",()=>{
//     //     cy.visit("https://webflow.com/made-in-webflow/website/subdropdown")
//     //     cy.get('div[class="maindroptog w-dropdown-toggle w--open"]').select("MainLink")

//     // })

//     it("verify in a drop down select value selected or not",()=>{

//     cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
//     cy.get('select[name^="DOB_Day"]').select("10")
//     cy.get('select[name^="DOB_Year"]').select("2002").should("have.value","2002")
//     var arr=[]
//     cy.get('select[name^="city"]').each((txt)=>{
//         var values=txt.text()
//         cy.log(values)
//         arr.push(values)
//     })
//     cy.log(arr)
//     for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]==="Bangalore"){
//         cy.log("banglore is present")
//     }
//     else{
//         cy.log("ffbgfhnvjhtjy")
//     }
// }
//     })








// })

// describe("Working with dropdowns", () => {

//     // Test to verify the selection in a dropdown
//     it("Verify in a dropdown that the selected value is correct", () => {

//         // Visit the registration page
//         cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");

//         // Select '10' from the day dropdown and '2002' from the year dropdown
//         cy.get('select[name^="DOB_Day"]').select("10");
//         cy.get('select[name^="DOB_Year"]').select("2002").should("have.value", "2002");

//         // Initialize an array to store the city names
//         var arr = [];

//         // Get all options from the city dropdown and log each value
//         cy.get('select[name^="city"] option').each((element) => {
//             var value = element.text();
//             //cy.log(value);
//             arr.push(value);
//         }).then(() => {
//             // Log the array of city names
//             //cy.log(arr);

//             // Iterate through the array to check if 'Bangalore' is present
//             let isBangalorePresent = false;
//             for(let i = 0; i < arr.length; i++) {
//                 if(arr[i] === "Bangalore") {
//                     cy.log("Bangalore is present");
//                     isBangalorePresent = true;
//                     break;
//                 }
//             }

//             if(!isBangalorePresent) {
//                 cy.log("Bangalore is not present in the dropdown");
//             }
//         });
//     });

// });

describe("working with drowpdowns",()=>{

     it("verify drop downs ",()=>{
        
        cy.visit("https://www.dezlearn.com/webtable-example/")

      cy.get('table>tbody>tr:nth-child(2)>td:nth-child(5)>select').select("Hatchback")

      cy.get(':nth-child(2) > :nth-child(5) > select').select("Sedan")


    })
})






