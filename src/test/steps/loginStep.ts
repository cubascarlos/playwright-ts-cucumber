
import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';


        Given('user navigates to the application', async function() {
            pageFixture.page.goto('https://bookcart.azurewebsites.net/');
        });

        Given('user click on the login link', async function() {
            await pageFixture.page.getByRole('button', {name: 'Login'}).click();
        });

        Given('user enter the username as {string}', async function(string) {
            await pageFixture.page.getByPlaceholder('Username').fill(string);
        });

        Given('user enter the password as {string}', async function(string) {
            await pageFixture.page.getByPlaceholder('Password').fill(string);
        });

        When('user click on the login button', async function() {
          console.log('hola 2')
        });

        Then('login should be success', async function() {
            console.log('hola 2')
        });

        Then('login should be fail', async function() {
            console.log('hola 2')
        });