// Builds both card systems into 1080x1080 PNGs.
//
//   npm install playwright        (once per machine; Chromium is already present)
//   node content/visuals/build-cards.js              # everything
//   node content/visuals/build-cards.js objection    # one system
//   node content/visuals/build-cards.js 07 budget    # matching slugs
//
// System A — objection cards  (cards.json  -> card-<slug>.png)
//   B2B sales assets. Numbered series, question in white, answer in gold,
//   full credential block. See content/reference/visual-style.md.
//
// System D — stat cards      (stats-cards.json -> stat-<slug>.png)
//   B2B, LinkedIn. Oversized figure in gold, claim in white, implication in
//   gold, source credited in muted. Only figures from content/reference/stats.md.
//
// System C — quote cards      (quotes.json -> quote-<slug>.png)
//   Consumer/social. Same palette and chevron, no series number, no SDVOSB
//   line (a federal procurement credential means nothing to an individual).
//
// Layout is fixed furniture in both. Only the text blocks change per card.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const BASE = `
  @font-face{font-family:Mont;src:url('fonts/m1.ttf');font-weight:500}
  @font-face{font-family:Mont;src:url('fonts/m2.ttf');font-weight:600}
  @font-face{font-family:Mont;src:url('fonts/m3.ttf');font-weight:700}
  @font-face{font-family:Mont;src:url('fonts/m4.ttf');font-weight:800}
  :root{
    --navy:#0B1B3D; --wedge:#13264F; --gold:#DCA43B;
    --white:#FFFFFF; --slate:#9AA3B2; --margin:90px;
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
  .footer .hr{height:2px;background:var(--slate);opacity:.45;margin-bottom:30px}
  .footer .co{font-weight:700;letter-spacing:.045em;color:var(--white)}
  .footer .cred{font-weight:500;letter-spacing:.035em;color:var(--slate)}
`;

const CHEVRON = (w, h) => `
  <svg width="${w}" height="${h}" viewBox="0 0 118 62" style="flex:0 0 auto" fill="none">
    <path d="M0 24 L59 0 L118 24 L118 40 L59 16 L0 40 Z" fill="#DCA43B"/>
    <path d="M0 46 L59 22 L118 46 L118 62 L59 38 L0 62 Z" fill="#DCA43B"/>
  </svg>`;

function objectionHtml(c) {
  const qSize = c.questionSize || 66;
  const aSize = c.answerSize || 50;
  return `<!doctype html><meta charset="utf-8"><style>${BASE}
  .tick{width:120px;height:9px;background:var(--gold);margin-top:84px}
  .eyebrow{margin-top:32px;font-weight:600;font-size:21px;letter-spacing:.30em;
           color:var(--slate);white-space:nowrap}
  .eyebrow .sep{padding:0 .35em}
  .question{margin-top:58px;font-weight:800;font-size:${qSize}px;line-height:1.15;
            color:var(--white);letter-spacing:-.015em}
  .divider{display:flex;align-items:center;gap:26px;margin-top:52px}
  .divider .rule{flex:1;height:2px;background:var(--slate);opacity:.55}
  .label{margin-top:38px;font-weight:600;font-size:21px;letter-spacing:.30em;color:var(--gold)}
  .answer{margin-top:18px;font-weight:700;font-size:${aSize}px;line-height:1.2;
          color:var(--gold);letter-spacing:-.005em}
  .footer{margin-top:auto;padding-bottom:74px}
  .footer .co{font-size:31px}
  .footer .cred{margin-top:12px;font-size:24px}
</style>
<div class="wedge"></div>
<div class="inner">
  <div class="tick"></div>
  <div class="eyebrow"><span class="lead">${esc(c.eyebrowLead)}</span><span class="sep">/</span>${esc(c.eyebrowRest)}</div>
  <div class="question">${esc(c.question)}</div>
  <div class="divider">${CHEVRON(118, 62)}<div class="rule"></div></div>
  <div class="label">${esc(c.label)}</div>
  <div class="answer">${esc(c.answer)}</div>
  <div class="footer">
    <div class="hr"></div>
    <div class="co">NOW TIME HEALTH + FITNESS</div>
    <div class="cred">USMC Veteran-Owned &nbsp;·&nbsp; SDVOSB Certified &nbsp;·&nbsp; nowtimehf.com</div>
  </div>
</div>`;
}

function quoteHtml(c) {
  const lSize = c.lineSize || 74;
  const dSize = c.landSize || 54;
  return `<!doctype html><meta charset="utf-8"><style>${BASE}
  .mark{margin-top:96px}
  .quote{margin-top:auto;padding-bottom:200px}
  .line{font-weight:800;font-size:${lSize}px;line-height:1.14;color:var(--white);
        letter-spacing:-.015em}
  .land{margin-top:30px;font-weight:700;font-size:${dSize}px;line-height:1.22;
        color:var(--gold);letter-spacing:-.005em}
  .footer{padding-bottom:74px}
  .footer .co{font-size:27px}
  .footer .cred{margin-top:10px;font-size:22px}
</style>
<div class="wedge"></div>
<div class="inner">
  <div class="mark">${CHEVRON(96, 50)}</div>
  <div class="quote">
    <div class="line">${esc(c.line)}</div>
    <div class="land">${esc(c.land)}</div>
  </div>
  <div class="footer">
    <div class="hr"></div>
    <div class="co">NOW TIME HEALTH + FITNESS</div>
    <div class="cred">USMC Veteran-Owned &nbsp;·&nbsp; nowtimehf.com</div>
  </div>
</div>`;
}

function statHtml(c) {
  const fSize = c.figureSize || 168;
  const cSize = c.claimSize || 44;
  const lSize = c.landSize || 46;
  return `<!doctype html><meta charset="utf-8"><style>${BASE}
  .tick{width:120px;height:9px;background:var(--gold);margin-top:84px}
  .eyebrow{margin-top:32px;font-weight:600;font-size:21px;letter-spacing:.30em;
           color:var(--slate);white-space:nowrap}
  .eyebrow .sep{padding:0 .35em}
  .figure{margin-top:54px;font-weight:800;font-size:${fSize}px;line-height:.95;
          color:var(--gold);letter-spacing:-.03em}
  .claim{margin-top:14px;font-weight:700;font-size:${cSize}px;line-height:1.2;
         color:var(--white);letter-spacing:-.01em}
  .divider{display:flex;align-items:center;gap:26px;margin-top:44px}
  .divider .rule{flex:1;height:2px;background:var(--slate);opacity:.55}
  .land{margin-top:34px;font-weight:700;font-size:${lSize}px;line-height:1.2;
        color:var(--gold);letter-spacing:-.005em}
  .source{margin-top:24px;font-weight:500;font-size:22px;letter-spacing:.16em;
          color:var(--slate)}
  .footer{margin-top:auto;padding-bottom:74px}
  .footer .co{font-size:31px}
  .footer .cred{margin-top:12px;font-size:24px}
</style>
<div class="wedge"></div>
<div class="inner">
  <div class="tick"></div>
  <div class="eyebrow">${esc(c.eyebrowLead)}<span class="sep">/</span>${esc(c.eyebrowRest)}</div>
  <div class="figure">${esc(c.figure)}</div>
  <div class="claim">${esc(c.claim)}</div>
  <div class="divider">${CHEVRON(118, 62)}<div class="rule"></div></div>
  <div class="land">${esc(c.land)}</div>
  <div class="source">SOURCE: ${esc(String(c.source).toUpperCase())}</div>
  <div class="footer">
    <div class="hr"></div>
    <div class="co">NOW TIME HEALTH + FITNESS</div>
    <div class="cred">USMC Veteran-Owned &nbsp;·&nbsp; SDVOSB Certified &nbsp;·&nbsp; nowtimehf.com</div>
  </div>
</div>`;
}

const SETS = [
  { name: 'objection', file: 'cards.json', prefix: 'card', render: objectionHtml,
    limit: { sel: '.answer', max: 830 } },
  { name: 'stat', file: 'stats-cards.json', prefix: 'stat', render: statHtml,
    limit: { sel: '.source', max: 860 } },
  { name: 'quote', file: 'quotes.json', prefix: 'quote', render: quoteHtml,
    limit: { sel: '.land', max: 880 } },
];

(async () => {
  const args = process.argv.slice(2);
  const setNames = args.filter((a) => SETS.some((s) => s.name === a));
  const slugFilters = args.filter((a) => !setNames.includes(a));

  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });

  let n = 0;
  for (const set of SETS) {
    if (setNames.length && !setNames.includes(set.name)) continue;
    const items = JSON.parse(fs.readFileSync(path.join(DIR, set.file), 'utf8'))
      .filter((c) => !slugFilters.length || slugFilters.some((f) => c.slug.includes(f)));

    for (const c of items) {
      const htmlPath = path.join(DIR, `${set.prefix}-${c.slug}.html`);
      fs.writeFileSync(htmlPath, set.render(c));
      await page.goto('file://' + htmlPath, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(300);

      // The empty lower area is part of the design — warn if text crowds it.
      const bottom = await page.evaluate(
        (sel) => document.querySelector(sel).getBoundingClientRect().bottom,
        set.limit.sel
      );
      if (bottom > set.limit.max) {
        console.warn(
          `  ! ${set.prefix}-${c.slug}: text ends at ${Math.round(bottom)}px ` +
            `(> ${set.limit.max}). Reduce the size override in ${set.file}.`
        );
      }

      await page.screenshot({ path: path.join(DIR, `${set.prefix}-${c.slug}.png`) });
      console.log(`✓ ${set.prefix}-${c.slug}.png`);
      n++;
    }
  }

  await browser.close();
  if (!n) {
    console.error('Nothing matched.');
    process.exit(1);
  }
})().catch((e) => {
  console.error('ERR', e.message);
  process.exit(1);
});
