describe("verify orangeHRM addemp functionolity", () => {
  it("verify addemployee", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Time at Work").should("be.visible");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.contains("Employee Information").should("be.visible");
    cy.get('li[class="oxd-topbar-body-nav-tab"]').first().click();
    cy.contains("Employee Full Name").should("be.visible");
  });

  it("verify addemployee whith mandetory details", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Time at Work").should("be.visible");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.get('li[class="oxd-topbar-body-nav-tab"]').first().click();
    cy.get('input[name="firstName"]').type("Maheggfsh");
    cy.get('input[name="lastName"]').type("Bgf N");
    cy.get('input[class="oxd-input oxd-input--active"]')
      .last()
      .clear()
      .type('35465657');
    cy.get('button[type="submit"]').click();
    cy.contains("Maheggfsh Bgf N").should("be.visible");
  });

  it("verify addemployee with give the name more then 30 charecters", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Time at Work").should("be.visible");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.get('li[class="oxd-topbar-body-nav-tab"]').first().click();
    cy.get('input[name="firstName"]').type(
      "Maheshjvmvmvjhgjgmchfdrdykhjjddhcnchfj"
    );
    cy.get('input[name="lastName"]').type(
      "B jfhjfjyfkhdtfhfgfsgshggjhgkgmhfjhjhjhN"
    );
    cy.contains("Should not exceed 30 characters").should("be.visible");
  });

  it("verify addemployee with same employee id 2 times", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Time at Work").should("be.visible");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.get('li[class="oxd-topbar-body-nav-tab"]').first().click();
    cy.get('input[name="firstName"]').type("Mahesh");
    cy.get('input[name="lastName"]').type("B N");
    cy.get('input[class="oxd-input oxd-input--active"]')
      .last()
      .clear()
      .type("1111111111");
    cy.contains("Employee Id already exists").should("be.visible");
  });

  it("verify addemployee without entering the details", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Time at Work").should("be.visible");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.get('li[class="oxd-topbar-body-nav-tab"]').first().click();
    cy.get('input[name="firstName"]');
    cy.get('input[name="lastName"]');
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("be.visible");
  });

  it("verify addemployee without entering the details", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Time at Work").should("be.visible");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    
    cy.get('li[class="oxd-topbar-body-nav-tab"]').first().click();
    cy.contains("Employee Full Name").should("be.visible");
    cy.get('input[name="firstName"]').type("hgfvnxhffkujghr");
    cy.get('input[name="lastName"]').type("zmbvmzxfkuadsgf");
    cy.get('button[type="button"]').last().click();
    cy.contains("Employee Information").should("be.visible");
  });
});
