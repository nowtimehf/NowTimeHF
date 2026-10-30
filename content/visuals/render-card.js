const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox','--disable-dev-shm-usage','--allow-file-access-from-files'],
  });
  const p = await b.newPage({ viewport:{width:1080,height:1080}, deviceScaleFactor:1 });
  const src = process.argv[3] || (process.argv[2]||'').replace(/.png$/,'.html');
  await p.goto('file://' + require('path').resolve(src), { waitUntil:'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(700);
  await p.screenshot({ path: process.argv[2] || 'out.png' });
  await b.close();
  console.log('rendered');
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
