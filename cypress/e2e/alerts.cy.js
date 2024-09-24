describe("working with the alerts", function () {
  it("verify simple alerts ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //cy.wait(10000)

    cy.get('button[onclick="jsAlert()"]').click();
    cy.on("window:alert", () => {
      return true;
    })
    //cy.wait(10000)
    cy.contains("You successfully clicked an alert").should("be.visible");

  });
  it("verify confirm alerts click on ok ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", () => {
      return true;
    });

    cy.contains("You clicked: Ok").should("be.visible");
  });

  it("verify conform alerts with click on cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", () => {
      return false;
    });

    cy.contains("You clicked: Cancel").should("be.visible");
  });

  it("verify prompt alerts ", function () {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.wait(2000);
    cy.window().then((name1) => {
      cy.stub(name1,"prompt").returns("mahesh");
      cy.contains("Click for JS Prompt").click();
    });
  });

  // it("basic auth", () => {
  //   // cy.visit(" https://admin:admin@the-internet.herokuapp.com/basic_auth")

  //   cy.request({
  //     method: "GET",
  //     url: " https://the-internet.herokuapp.com/basic_auth",
  //     auth: {
  //       user: "admin",
  //       pass: "admin",
  //     },
  //   }).then((res) => {
  //     expect(res.status).to.eq(200);
  //   });


  // });

  
});
