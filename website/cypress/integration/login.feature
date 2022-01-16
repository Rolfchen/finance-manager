Feature: Login
  Scenario: See login page if not logged in
    Given I navigate to the "dashboard home" page
    Then I see that I need to login

  Scenario: See error message when I provide the wrong credentials
    Given I navigate to the "login" page
    And I provide "fakename@fakeuser.com" as my username
    And I provide "1234" as my password
    When I opt to submit the information that I've added in "User login"
    Then I am alerted by "login result" that there is an "Firebase: Error (auth/user-not-found)." error

  Scenario: Forgot password link to password reset request
    Given I navigate to the "login" page
    When I click on the "Forgot your password?" link
    Then I see that I am able to send password reset email
