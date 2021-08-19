Feature: RETAIL ECOMMERCE WEBSITE

  Background:

    Given user is on HUGO BOSS website
  
  Scenario: As a guest user, I can reach payment checkout
  
    When guest user adds an item to the shopping bag
    Then guest user should be able to proceed to payment checkout
	
  Scenario: As a guest user, I can create an account
  
    When guest user creates an account
    Then user should see logout button
