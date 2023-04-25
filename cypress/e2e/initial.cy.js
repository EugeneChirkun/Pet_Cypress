/// <reference types='Cypress' />

describe('initial test', () => {
    it('open web-site', () => {
cy.visit('https://demoqa.com/');
cy.get('.card.mt-4.top-card').should('have.length', 6);
    });
}); 