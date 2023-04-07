import './commands';
import 'joomla-cypress';

before(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`err :${err}`);
    console.log(`runnable :${runnable}`);
    return false;
  });
});

afterEach(() => {
  cy.checkForPhpNoticesOrWarnings();
  cy.task('cleanupDB');
});
