
describe("Before method", () => {
let data;

    before (() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log(`Open "Form Layouts" page ...`);
      //cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Modal & Overlays"]').click();
      cy.get('[title="Toastr"]').click();
      cy.fixture('data').then(function (data) {
        user.data = data
    })
    })

      
  it("Open drop down list", () => { 
    cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
    cy.get('#nb-option-26').click();
      });

  it("Fill Hello",function () {
    cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium').clear().type(user.data.title);
    cy.get('body').click(50, 50, { force: true }); 
      });

  it("Content",function () {
    cy.get('label').contains('Content:').next().clear().type(user.data.content);
      });
  
  it("Time to hide toast",function () {
    cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium').clear().type(user.data.time);
      }); 

  it("Toast type list", () => {
    cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click();
    cy.get('#nb-option-34').click();
      });

  
  it("Click button", () => {
    cy.get('button').contains('Show toast').click();
      });

})