describe('Test the remind view',() => {
    it('can open the reminder form in the default layout', () => {
      cy.db_createUser({ name: 'test user', username: 'test', email: 'test@example.com', password: '098f6bcd4621d373cade4e832627b4f6' })
        .then(() => cy.db_createMenuItem({ title: 'remind', link: 'index.php?option=com_users&view=remind', path: '?option=com_users&view=remind' }))
        .then(() => {
          cy.visit('http://localhost/joomla');
          cy.get('a:contains(remind)').click();
          cy.get('#jform_email').type('test@example.com');
          cy.get('.controls > .btn').click();
          cy.get('#system-message-container').should('contain.text', 'Could not instantiate mail function.','If the email address you entered is registered on this site you will shortly receive an email with a link to reset the password for your account.');
        });
    });
  
  
    it('can display the remind view for test user', () =>{
      cy.db_createUser({ name: 'test user', username: 'test', email: 'test@example.com', password: '098f6bcd4621d373cade4e832627b4f6'})
      .then(() => {
        cy.visit('http://localhost/joomla/index.php?option=com_users&view=remind');
  
        cy.get('#jform_email').type('test@example.com');
        cy.get('.controls > .btn').click();
        cy.get('#system-message-container').should('contain.text', 'Could not instantiate mail function.','If the email address you entered is registered on this site you will shortly receive an email with a link to reset the password for your account.');
      });
    });
  })
  