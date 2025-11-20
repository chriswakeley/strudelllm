
const { chromium } = require('playwright');

(async () => {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    console.log('Navigating to Strudel...');
    await page.goto('http://localhost:4321/');

    console.log('Waiting for editor...');
    await page.waitForSelector('.cm-content');

    const content = await page.textContent('.cm-content');
    console.log('Editor content:', content);

    if (content.includes('note("c3 e3 g3").play()')) {
        console.log('Verified default code.');
    } else {
        console.error('Default code mismatch!');
    }

    console.log('Running code (Ctrl+Enter)...');
    await page.keyboard.press('Control+Enter');

    console.log('Playing... capturing screenshots...');

    // Capture a sequence to show movement/highlighting
    for (let i = 1; i <= 3; i++) {
        await page.waitForTimeout(1000); // Wait 1 second
        const filename = `playback_${i}.png`;
        await page.screenshot({ path: filename });
        console.log(`Captured ${filename}`);
    }

    await browser.close();
    console.log('Done.');
})();
