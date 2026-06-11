import { Browser, chromium, Page } from '@playwright/test';
import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { pageFixture } from './pageFixture';

let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    pageFixture.page = page;
    
});

AfterAll(async function () {
    await pageFixture.page.close();
    await browser.close();
});

