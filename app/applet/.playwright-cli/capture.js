import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:3000');
  
  // Wait or click skip
  try {
    const skip = await page.waitForSelector('text=Skip', { timeout: 3000 });
    if (skip) await skip.click();
  } catch (e) {
    // intro might already have finished
  }
  await page.waitForTimeout(1000);

  // 1. Mobile (375x667)
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: '.playwright-cli/mobile-navbar-clean.png' });

  // 2. Tablet (768x1024)
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: '.playwright-cli/tablet-navbar-clean.png' });

  // 3. Desktop (1440x900)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: '.playwright-cli/desktop-navbar-clean.png' });

  await browser.close();
  console.log('Screenshots captured successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
