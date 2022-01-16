import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

When('I provide {string} as my username', (email: string) => {
  cy.findByRole('textbox', { name: 'Username' }).type(email);
});

When('I provide {string} as my password', (password: string) => {
  cy.findByLabelText('Password').type(password);
});

// Assertions
Then('I see that I need to login', () => {
  cy.findByRole('textbox', { name: 'Username' }).should('exist');
  cy.findByLabelText('Password').should('exist');
});

Then('I see that I am able to send password reset email', () => {
  cy.findByRole('heading', { name: 'Send password reset email' }).should(
    'exist'
  );
  cy.findByRole('textbox', { name: 'Username' }).should('exist');
});
