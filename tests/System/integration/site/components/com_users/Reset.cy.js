describe('Test the Reset view for test user ', () => {
  it('can get a reset link successfully via e-mail', () => {
    cy.db_createUser({
      name: 'automated test user',
      username: 'test',
      email: 'test@example.com',
      password: '098f6bcd4621d373cade4e832627b4f6',
    }).then(() => {
      cy.visit('http://localhost/joomla-cms/index.php?option=com_users&view=reset');
      cy.get('#jform_email').type('test@example.com');
      cy.get('.controls > .btn').click();
      cy.get('.alert-wrapper').should('contain.text', 'If the email address you entered is registered on this site you will shortly receive an email with a link to reset the password for your account.');
    });
  });
});
