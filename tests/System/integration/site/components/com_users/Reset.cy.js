describe('Test the reset view', () => {
  it('can display the reset view for test user', () => {
    cy.db_createUser({ email: 'test@example.com' })
      .then(() => {
        cy.visit('index.php?option=com_users&view=reset');

        cy.get('#jform_email').type('test@example.com');
        cy.get('.controls > .btn').click();

        cy.get('#system-message-container').should('contain.text', 'If the email address you entered is registered on this site you will shortly receive an email with a link to reset the password for your account.');
      });
  });

  it('testing reset form for test user through menu item', () => {
    cy.db_createUser({ email: 'test@example.com' })
      .then(() => cy.db_createMenuItem({ title: 'Automated test reset', link: 'index.php?option=com_users&view=reset' }))
      .then(() => {
        cy.visit('/');

        cy.get('a:contains(Automated test reset)').click();
        cy.get('#jform_email').type('test@example.com');
        cy.get('.controls > .btn').click();

        cy.get('#system-message-container').should('contain.text', 'If the email address you entered is registered on this site you will shortly receive an email with a link to reset the password for your account.');
      });
  });
});
