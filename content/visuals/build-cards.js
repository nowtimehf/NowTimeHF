// Builds objection cards from cards.json into 1080x1080 PNGs.
//
//   npm install playwright        (once per machine; Chromium is already present)
//   node content/visuals/build-cards.js            # all cards
//   node content/visuals/build-cards.js 07 09      # only matching slugs
//
// The layout is fixed furniture — palette, tick rule, chevron, footer, spacing.
// Only the two text blocks change per card. See content/reference/visual-style.md.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(c) {
  const qSize = c.questionSize || 66;
  const aSize = c.answerSize || 50;
  return `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face{font-family:Mont;src:url('fonts/m1.ttf');font-weight:500}
  @font-face{font-family:Mont;src:url('fonts/m2.ttf');font-weight:600}
  @font-face{font-family:Mont;src:url('fonts/m3.ttf');font-weight:700}
  @font-face{font-family:Mont;src:url('fonts/m4.ttf');font-weight:800}
  :root{
    --navy:#0B1A2E; --wedge:#132840; --gold:#C9A227;
    --white:#FFFFFF; --slate:#8FA3BF; --slate-bright:#C6D2E3; --margin:90px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  .inner > *{flex:0 0 auto}
  html,body{width:1080px;height:1080px}
  body{background:var(--navy);font-family:Mont,'Liberation Sans',sans-serif;
       position:relative;overflow:hidden}
  .wedge{position:absolute;top:0;right:0;width:520px;height:520px;
         background:var(--wedge);clip-path:polygon(100% 0,100% 100%,0 0);opacity:.85}
  .inner{position:relative;height:100%;padding:0 var(--margin);
         display:flex;flex-direction:column}
  .tick{width:120px;height:9px;background:var(--gold);margin-top:84px}
  .eyebrow{margin-top:32px;font-weight:600;font-size:21px;letter-spacing:.30em;
           color:var(--slate);white-space:nowrap}
  .eyebrow .lead{color:var(--slate-bright)}
  .eyebrow .sep{padding:0 .35em}
  .question{margin-top:58px;font-weight:800;font-size:${qSize}px;line-height:1.15;
            color:var(--white);letter-spacing:-.015em}
  .divider{display:flex;align-items:center;gap:26px;margin-top:52px}
  .divider .rule{flex:1;height:2px;background:var(--slate);opacity:.55}
  .label{margin-top:38px;font-weight:600;font-size:21px;letter-spacing:.30em;color:var(--gold)}
  .answer{margin-top:18px;font-weight:700;font-size:${aSize}px;line-height:1.2;
          color:var(--gold);letter-spacing:-.005em}
  .footer{margin-top:auto;padding-bottom:74px}
  .footer .hr{height:2px;background:var(--slate);opacity:.45;margin-bottom:30px}
  .footer .co{font-weight:700;font-size:31px;letter-spacing:.045em;color:var(--white)}
  .footer .cred{margin-top:12px;font-weight:500;font-size:24px;letter-spacing:.035em;
                color:var(--slate)}
</style>
<div class="wedge"></div>
<div class="inner">
  <div class="tick"></div>
  <div class="eyebrow"><span class="lead">${esc(c.eyebrowLead)}</span><span class="sep">/</span>${esc(c.eyebrowRest)}</div>
  <div class="question">${esc(c.question)}</div>
  <div class="divider">
    <svg width="118" height="62" viewBox="0 0 118 62" style="flex:0 0 auto" fill="none">
      <path d="M0 24 L59 0 L118 24 L118 40 L59 16 L0 40 Z" fill="#C9A227"/>
      <path d="M0 46 L59 22 L118 46 L118 62 L59 38 L0 62 Z" fill="#C9A227"/>
    </svg>
    <div class="rule"></div>
  </div>
  <div class="label">${esc(c.label)}</div>
  <div class="answer">${esc(c.answer)}</div>
  <div class="footer">
    <div class="hr"></div>
    <div class="co">NOW TIME HEALTH + FITNESS</div>
    <div class="cred">USMC Veteran-Owned &nbsp;·&nbsp; SDVOSB Certified &nbsp;·&nbsp; nowtimehf.com</div>
  </div>
</div>`;
}

(async () => {
  const cards = JSON.parse(fs.readFileSync(path.join(DIR, 'cards.json'), 'utf8'));
  const filters = process.argv.slice(2);
  const todo = filters.length
    ? cards.filter((c) => filters.some((f) => c.slug.includes(f)))
    : cards;

  if (!todo.length) {
    console.error('No cards matched:', filters.join(' '));
    process.exit(1);
  }

  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });

  for (const c of todo) {
    const htmlPath = path.join(DIR, `card-${c.slug}.html`);
    fs.writeFileSync(htmlPath, html(c));
    await page.goto('file://' + htmlPath, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(350);

    // The bottom quarter must stay empty; warn if the text blocks crowd it.
    const bottom = await page.evaluate(
      () => document.querySelector('.answer').getBoundingClientRect().bottom
    );
    if (bottom > 830) {
      console.warn(
        `  ! ${c.slug}: answer ends at ${Math.round(bottom)}px (>830). ` +
          `Reduce questionSize/answerSize — the empty bottom is part of the design.`
      );
    }

    await page.screenshot({ path: path.join(DIR, `card-${c.slug}.png`) });
    console.log(`✓ card-${c.slug}.png`);
  }

  await browser.close();
})().catch((e) => {
  console.error('ERR', e.message);
  process.exit(1);
});
