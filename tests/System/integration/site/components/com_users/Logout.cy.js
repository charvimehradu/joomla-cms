describe('Test in frontend that the users logout view ', () => {
  it('can log out the user without a menu item', () => {
    cy.doFrontendLogin();
    cy.visit('index.php?option=com_users&view=login&layout=logout&task=user.menulogout');

    cy.get('#system-message-container').should('contain.text', 'You have been logged out.');
  });

  it('can log out the user in a menu item', () => {
    cy.db_createMenuItem({ title: 'Automated logout', link: 'index.php?option=com_users&view=login&layout=logout&task=user.menulogout' })
      .then(() => {
        cy.doFrontendLogin();
        cy.visit('/');
        cy.get('a:contains(Automated logout)').click();

        cy.get('#system-message-container').should('contain.text', 'You have been logged out.'); 
      });
  });
});
