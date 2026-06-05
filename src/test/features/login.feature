Feature: Login test

    Background: User click on the login link
        Given user navigates to the application
        And user click on the login link

    @smoke @reg
    Scenario: Login should be success
        And user enter the username as "ortoni"
        And user enter the password as "Pass1234"
        When user click on the login button
        Then login should be success

    @smoke @reg
    Scenario: Login should be success
        And user enter the username as "ortoni"
        And user enter the password as "Pass1234asas"
        When user click on the login button
        Then login should be fail
