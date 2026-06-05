
    import { Given, When, Then } from '@cucumber/cucumber'

    //export class LoginStep {

        Given('user navigates to the application', async function() {
            // Write code here that turns the phrase above into concrete actions
            await console.log('Hola')
        });

        Given('user click on the login link', function() {
            // Write code here that turns the phrase above into concrete actions
            console.log('Hola 2222222')
        });

        Given('user enter the username as {string}', function(string) {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        });

        Given('user enter the password as {string}', function(string) {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        });

        When('user click on the login button', function() {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        });

        Then('login should be success', function() {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        });

        Then('login should be fail', function() {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
        });
    //}