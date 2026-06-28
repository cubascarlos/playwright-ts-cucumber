import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { BeforeAll, AfterAll, setDefaultTimeout, Before, After, AfterStep } from '@cucumber/cucumber';
import { pageFixture } from './pageFixture';

setDefaultTimeout(30 * 1000)

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
    browser = await chromium.launch({headless: false});
})

Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
});

After(async function (result) {
    const img = await pageFixture.page.screenshot({ 
        path: "./test-evidence/screenshots/"+result.pickle.name, type:"png" });
        this.attach(img, "image/png");
    await pageFixture.page.close();
});

AfterStep(async function () {
    console.log("I am a afterStep")
});

AfterAll(async function () {
    await browser.close();
});

