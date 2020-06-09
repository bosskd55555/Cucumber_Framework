Feature: FreeCRM application test

Scenario: Validate Login page

	Given user opens browser
	Then user is on login page
	Then user enters username and password
	And Validate Homepage title
	Then Logout from the application 
	
