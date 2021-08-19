Feature: RETAIL ECOMMERCE MOBILE WEBSITE

  Background:

    Given user is on HUGO BOSS mobile website
  
  Scenario: As a guest user, I can reach payment checkout using mobile
  
    When guest user adds an item to the shopping bag on mobile website
    Then guest user should be able to proceed to payment checkout on mobile website
	
  Scenario: As a guest user, I can create an account using mobile
  
    When guest user creates an account on mobile website
    Then user should see logout button on mobile website
