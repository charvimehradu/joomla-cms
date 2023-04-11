describe('Test the articles category module', () => {
  it('can load in frontend and showing the title of the articles', () => {
    cy.db_createCategory({ extension: 'com_content' })
      .then(async (categoryId) => {
        await cy.db_createArticle({ title: 'automated test article', catid: categoryId });
        await cy.db_createModule({ module: 'mod_articles_category', params: JSON.stringify({ catid: categoryId }) });
      })
      .then(() => {
        cy.visit('/');

        cy.contains('li', 'automated test article');
      });
  });
});
