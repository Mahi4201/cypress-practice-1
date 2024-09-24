describe("working with tabeles",()=>{

    it("how maney rows and colums to cougunt",()=>{

     cy.visit("https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices")
     cy.get("tr").should("have.length",33)
     cy.get('table[class="dataTable"]>tbody>tr:nth-child(2)>td').should("have.length",6)

    })

    it("how maney rows and colums to cougunt",()=>{

  cy.visit("https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices")

  cy.get('table[class="dataTable"]>tbody>tr:nth-child(2)>td:nth-child(4)').then((txt)=>{

    let arr=txt.text()
    cy.wait(3000)
    expect(Number(arr)).to.be.within(2000,4000)
    cy.log(arr)
          })
       })

       it("how maney rows and colums to cougunt",()=>{

        cy.visit("https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices")

        cy.get('table[id="allpage_links"]>tbody>tr:nth-child(2)').each((name2)=>{

       cy.wrap(name2).within((name3)=>{
        var arr1=name3.text()
        cy.log(arr1)

        })
      })
    
    })


    it.only("counght the entair row or colum total",()=>{

      cy.visit("https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices")
      var  total;
      cy.get('.dataTable> tbody > tr >td:nth-child(4)')
          .each((col) => {

              cy.wrap(col).within((celldata) => {

                var x = celldata.text()
                var y = Number(x)

                  total = total+y
                  
              })
          })
      
          cy.log(total)

    })

})