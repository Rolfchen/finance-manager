import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to the {string} page', (pageSlug: string) => {
  switch (pageSlug) {
    case 'dashboard home':
      cy.visit('/');
      break;
    default:
      cy.visit(`/${pageSlug}`);
      break;
  }
});

When(`I click on the {string} link`, (linkName: string) => {
  cy.findByRole('link', { name: linkName }).click();
});
