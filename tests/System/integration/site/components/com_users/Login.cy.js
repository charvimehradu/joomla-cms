describe('Test the login view', () => {
  it('can log in for test user', () => {
    cy.db_createUser({
      name: 'test user', username: 'test', email: 'test@example.com', password: '098f6bcd4621d373cade4e832627b4f6',
    })
      .then(() => cy.db_createMenuItem({ title: 'login', link: 'index.php?option=com_users&view=login', path: '?option=com_users&view=login' }))
      .then(() => {
        cy.visit('index.php?option=com_users&view=login');

        cy.get('#username').type('test');
        cy.get('#password').type('test');
        cy.get('#remember').check();
        cy.get('.controls > .btn').click();

        cy.get('.alert-wrapper').should('contain.text', 'You have been logged in.');
      });
  });

  it('testing log in for test user through menu item', () => {
    cy.db_createUser({
      name: 'test user', username: 'test', email: 'test@example.com', password: '098f6bcd4621d373cade4e832627b4f6',
    })
      .then(() => cy.db_createMenuItem({ title: 'login', link: 'index.php?option=com_users&view=login&id=1&layout=default', path: '?option=com_users&view=login&id=1&layout=default' }))
      .then(() => {
        cy.visit('/');

        cy.get('a:contains(login)').click();
        cy.get('#username').type('test');
        cy.get('#password').type('test');
        cy.get('#remember').check();
        cy.get('.controls > .btn').click();

        cy.get('.alert-wrapper').should('contain.text', 'You have been logged in.');
      });
  });
});
