import 'cypress-file-upload';
import { it } from 'mocha';
require('cypress-xpath');

describe('SQA Demo tests', () => {

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Log the error for debugging, but don't fail the test
      console.error(err);
      return false; // prevents Cypress from failing the test
    });
    cy.visit('/');
    cy.get('.btn-signin').click();
    cy.xpath("//div[@class='email-address-main-div']//input[@type='email']").type('');
    cy.get('input[type="password"]').should('exist').type('');
    cy.get('.signin-first-div').click() 


  });

  // beforeEach(() => {
  //   // const baseUrl=Cypress.env('baseUrl')
  //   cy.visit('/');
   
  // });

  // it('Login Test',()=>{
 
  //   cy.get('.btn-signin').click();
  //   cy.xpath("//div[@class='email-address-main-div']//input[@type='email']").type('abdulrehman03365@gmail.com');
  //   cy.get('input[type="password"]').should('exist').type('Password#1');
  //   cy.get('.signin-first-div').click()
  // })

  // it('Game UI Test',()=>{
  //   // cy.fixture('example').then((data)=>{
  //   // cy.visit(data.contestUrl)
  //   // cy.get('.enter-btn-div').click()
  //   // cy.contains('$10').click({ force: true });
   

  //   })
  // })

  

  it('Demo test broken links', () => {
    cy.get('a').each($el => {
      const href = $el.prop('href'); 
      if (href && !href.includes('x.com')) { 
        cy.request(href).then((response) => {
          expect(response.status).to.eq(200); 
        });
      } else {
        cy.log('Skipped URL:', href);
      }
    });
  });

  it("Demo  entry test", ()=>{
    
  })
});
