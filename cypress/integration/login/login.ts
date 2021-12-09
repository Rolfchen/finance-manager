import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Then('I see that I need to login', () => {
  cy.findByRole('textbox', { name: 'Username' }).should('exist');
});
