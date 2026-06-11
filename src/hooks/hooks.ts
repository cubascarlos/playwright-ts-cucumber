import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { BeforeAll, AfterAll, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
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

After(async function () {
    await pageFixture.page.close();
    await browser.close();
});

AfterAll(async function () {
    await browser.close();
})

