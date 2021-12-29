/**
 * Put anything relating to communicating information to
 * an user here. I.e. notification, alerts, tooltip, info
 */

import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';

// Assertions
Then(
  `I am alerted by {string} that there is an {string} error`,
  (alertTitle: string, errorMessage: string) => {
    cy.findByRole('alert', { name: alertTitle })
      .findByText(errorMessage)
      .should('exist');
  }
);
