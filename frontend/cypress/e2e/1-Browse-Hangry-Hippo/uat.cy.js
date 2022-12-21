describe('Shows Appeteasers', () => {
    it('Connect to Dev Server', () => {
        cy.visit('http://hangry-web-dev.us-east-1.elasticbeanstalk.com/');
    });
    it('selects Handhelds', () => {
        cy.contains('Handhelds').click();
        cy.contains('Cheese Burger');
        cy.contains('Fajita Tacos');
    });
    it('selects Appeteasers', () => {
        cy.contains('Appeteasers').click();
        cy.contains('Tater Tots');
        cy.contains('Buffalo Wings');
        cy.contains('Cheese Burger').should('not.exist');
        cy.contains('Fajita Tacos').should('not.exist');
    });
});
