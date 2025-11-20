
const { chromium } = require('playwright');

(async () => {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    console.log('Navigating to Live Environment...');
    await page.goto('http://localhost:8080/');

    console.log('Clicking Start Audio...');
    await page.click('#start');

    console.log('Waiting for code display...');
    await page.waitForFunction(() => document.getElementById('code-display').innerText.includes('note'));

    const content = await page.textContent('#code-display');
    console.log('Initial content:', content);

    if (content.includes('note("c3 e3 g3 b3")')) {
        console.log('Verified initial code load.');
    } else {
        console.error('Initial code mismatch!');
    }

    console.log('Taking screenshot...');
    await page.screenshot({ path: 'live_env_verification.png' });

    await browser.close();
    console.log('Done.');
})();
