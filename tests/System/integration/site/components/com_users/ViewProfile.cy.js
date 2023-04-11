describe('Test the user profile view', () => {
  it('can display user profile for test user', () => {
    cy.db_createUser({ username: 'test', password: '098f6bcd4621d373cade4e832627b4f6' })
      .then(() => {
        cy.visit('http://localhost/Joomla_tests/index.php?option=com_users&view=profile');

        cy.get('#username').type('test');
        cy.get('#password').type('test');
        cy.get('#remember').check();
        cy.get('.controls > .btn').click();

        cy.get('#system-message-container').should('contain.text', 'You have been logged in.');
        cy.get('#users-profile-core > legend').should('contain.text', 'Profile');
      });
  });

  it('testing user profile display for test user through menu item', () => {
    cy.db_createUser({ username: 'test', password: '098f6bcd4621d373cade4e832627b4f6' })
      .then(() => cy.db_createMenuItem({ title: 'Automated test user profile', link: 'index.php?option=com_users&view=profile' }))
      .then(() => {
        cy.visit('http://localhost/Joomla_tests');

        cy.get('a:contains(Automated test user profile)').click();
        cy.get('#username').type('test');
        cy.get('#password').type('test');
        cy.get('#remember').check();
        cy.get('.controls > .btn').click();

        cy.get('#system-message-container').should('contain.text', 'You have been logged in.');
        cy.get('#users-profile-core > legend').should('contain.text', 'Profile');
      });
  });
});
