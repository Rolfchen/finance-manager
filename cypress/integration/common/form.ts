import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';

When(
  `I opt to submit the information that I've added in {string}`,
  (formName: string) => {
    cy.findByRole('form', { name: formName }).submit();
    cy.wait(4000);
  }
);
