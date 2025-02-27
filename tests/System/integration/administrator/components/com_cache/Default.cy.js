describe('Test in backend that the cache', () => {
  beforeEach(() => {
    cy.doAdministratorLogin();
    cy.visit('/administrator/index.php?option=com_cache&view=cache');
  });

  it('has a title', () => {
    cy.get('h1.page-title').should('contain.text', 'Maintenance: Clear Cache');
  });

  it('can display message', () => {
    cy.get('div.alert.alert-info').should('contain.text', 'Select the Clear Expired Cache button');
  });

  it('can display a list of cached items', () => {
    cy.get('tr.row0').should('contain.text', '_media_version');
  });

  it('can clear expired cache', () => {
    cy.get('#toolbar-delete2').click();
    cy.get('body').then(($body) => {
      if ($body.find('div.buttons-holder button[data-button-ok]').length > 0) {
        cy.get('div.buttons-holder button[data-button-ok]').click();
      }
    });
    cy.checkForSystemMessage('Expired cached items have been cleared');
  });

  it('can delete all', () => {
    cy.get('#toolbar-delete1').click();
    cy.checkForSystemMessage('All cache group(s) have been cleared');
  });
});
