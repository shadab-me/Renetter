# Renetter: client acquisition plan (v3)

**Market:** US, UK and Gulf (UAE, Saudi, Qatar) small and mid-size businesses, startups and creators.
**Budget:** $1,000+ per month in ads, plus your time for outbound.
**Offer:** websites and web apps, AI automation, SEO and growth marketing.
**Goal for the first 90 days:** 3 paying clients, 1 published case study, a repeatable weekly lead engine.

How to read the numbers: anything marked **(benchmark)** comes from a public source linked in section 15. Anything marked **(assumption)** is my planning guess. Replace every assumption with your real data after the first 30 days. Nothing here is a promise of results.

---

## 1. The honest starting position

1. **You have no published proof yet.** No named clients, no case studies, no reviews. Cold paid traffic to an unknown agency with no proof converts poorly. So the plan builds proof in parallel with traffic, and leans on channels where *you* are the proof (founder-led outbound, WhatsApp, LinkedIn).
2. **$1,000/month is a learning budget, not a scaling budget.** Agency keywords are expensive (math in section 8). Expect ads to teach you which message works while outbound and referrals bring the first clients.
3. **Your edge is small, senior, founder-answered.** The site promises "our founder replies, not a salesperson", fixed scope, weekly demos. Every ad and message should sell that, not "we do everything".

## 1b. How to get your first client as fast as possible (14-day sprint)

**Reality check (assumption):** with no published proof, the quickest path to money is *people who already know you*, then *people you contact directly*. Ads come last, because cold strangers rarely buy from an unproven agency in week one. A realistic aim is **first conversations in days 1 to 5, first signed project in days 14 to 30**. Nobody can promise a date.

### Days 1 to 2: set up the basics (about 4 hours)
1. Deploy the site (`npm run build`, then `npm run deploy`; the build now prerenders every page). Confirm `https://renetter.com` loads and `/thank-you` fires the lead event.
2. Submit `https://renetter.com/sitemap.xml` in **Google Search Console** and **Bing Webmaster Tools**; request indexing for `/`, `/services`, `/free-audit`.
3. Create the **Google Business Profile**, the **LinkedIn company page** (logo, banner, the one-line pitch) and update your own LinkedIn headline to the pitch: *"I help [segment] get more enquiries with websites, AI automation and SEO."*
4. Put a **WhatsApp link** (`wa.me/919411078560?text=Hi%2C%20I%27d%20like%20a%20free%20website%20review`) in your LinkedIn, email signature and Instagram bio.
5. Make a lead sheet: name, company, source, date, stage, next step, value.

### Days 1 to 7: warm network first (highest odds, zero cost)
Send a personal message (not a broadcast) to **30 people**: former colleagues and managers at the companies in your experience (AltCampus, Leverage Edu, BigBinary, Q3 Technologies, Girikon), founders you know, YouTubers and creators you know, freelancers who turn down work.

> Hey [Name], I've started Renetter, a small senior team that builds websites, AI automation and SEO for growing businesses. I'm taking on 2 or 3 projects this month. If you or anyone you know needs a site fixed, a process automated or more enquiries from search, I'd love to help. Happy to do a free 15-minute review of your site first. Who should I talk to?

Expect 5 to 10 replies and 1 to 3 real conversations from 30 messages **(assumption)**. Ask each person for *one* introduction even if they do not need anything.

### Days 3 to 14: audit-led outbound (20 touches a day, see 6.1)
- **Choose one segment: A (local and service businesses) in UAE and UK.** Smallest buyer pool to research, easiest message.
- Build 100 accounts from Google Maps and LinkedIn. Open their site on your phone and note one specific problem.
- Send the 4-line message from 6.1, offering the **free 3-fix audit**. Record a 2-minute Loom for every reply.
- Send the audit within one business day. Follow up on day 3, 7, 14, then stop.

### Days 5 to 14: marketplaces for quick yes/no (optional, pick one)
- **Upwork or Contra:** create a "website + automation" profile with the AltCampus case study as the portfolio; send 5 tailored proposals a day to US/UK jobs under $5k. Fast feedback, low pride, and the first review helps everything else.
- **LinkedIn Services page** and relevant Facebook/WhatsApp founder groups: answer questions for free; take conversations to a 15-minute call.

### Day 7 onward: switch on a small paid test (only after the audit page converts)
- **Google Search, UAE + UK, $15 to $25/day**, exact and phrase match on 8 to 10 high-intent keywords (see 6.3), landing on `/free-audit`. Review search terms daily for the first week and add negatives.
- **Click-to-WhatsApp ad, UAE only, $5 to $10/day**, offering the free website review.
- Do not scale anything until you have at least 30 clicks per ad and one real lead. If you have zero leads after $300, change the offer or landing page before spending more.

### Day 10 to 14: close with a small, fast offer
Do not quote a big project to a stranger first. Offer a **fixed-price starter** (rung 2 in section 5), a short written scope, 50% upfront, one revision round, delivered in 7 to 10 days. For the first 2 clients, trade a discount for a **testimonial and a published case study** (section 7).

### Every day (non-negotiable, 90 minutes)
| Block | Minutes | Output |
|---|---|---|
| Warm follow-ups and replies | 20 | Every reply answered within hours |
| 20 outbound touches | 45 | 10 LinkedIn, 10 email |
| One LinkedIn post or comment thread | 15 | Teardown, lesson or before/after |
| Update the lead sheet | 10 | Know your numbers |

### What to measure after 14 days
Messages sent, replies, calls booked, audits sent, proposals sent, signed. If replies are under 3%, change the *message*. If calls happen but nobody signs, change the *offer or price*. If nobody visits `/free-audit`, change the *channel*. Fix one thing at a time.

---

## 2. What the site does now (so the plan matches it)

- **Dark header and hero, light body**, as BigBinary does. Footer and closing call-to-action band are dark.
- **No illustrations or mockups.** Only small line icons and real client logos (AltCampus, Leverage Edu, BigBinary, Q3 Technologies, Girikon). Nothing is invented.
- **Case studies** show one real draft (AltCampus) in the BigBinary pattern: client, services, situation, what we built, what the client needed. Three clearly labelled fictional sample write-ups show the format. Add results and quotes only when you can stand behind them (`CASE_STUDIES` in `src/data/site.js`).
- **Contact us** is always visible in the header. `/free-audit` is a separate ad landing page, not in the main menu. On mobile a sticky "Talk to us" bar appears once the hero scrolls out of view.
- **SEO is in place:** every route is prerendered to static HTML at build time (crawlers and link previews see real content), unique titles and descriptions, canonical URLs, Organization, WebSite, Service, Article, FAQ and Breadcrumb structured data, sitemap, robots, `llms.txt`.
- **Conversion event:** view of `/thank-you` (fires GA4 `generate_lead`, Meta `Lead`, LinkedIn conversion).

## 3. Competitor and ad-library findings

**BigBinary (reference site):** one call to action, Contact us. Contact page has no form, just "our founder will reply, not a salesperson", what happens next, and the problems it takes on. Heavy use of named-client proof, case studies and visuals.

**Meta Ad Library, Dubai and UK (checked earlier):**
- Dubai: price hooks ("AED 1,499 up to 5 pages"), "1 year free maintenance", WhatsApp as the main call to action.
- UK: free digital audits (one agency values theirs at £2,500+), "from £999" and "from $3,000/mo" anchors, a 7-day money-back guarantee, free 30-minute calls.
- **Not checked yet:** US Meta Ad Library and Google Ads Transparency Center. Spend 30 minutes on both before launching US copy.

**What the winners share:** a concrete free thing (audit or call), a price anchor, a risk reverser (guarantee, no lock-in), and a low-friction contact method (WhatsApp in the Gulf, a short form or call booking in the UK/US).

## 4. Positioning: one sentence per audience

Do not pitch "websites, AI and SEO" to everyone. Lead with one problem per segment.

| Segment | Who | Lead message | Lead service |
|---|---|---|---|
| A. Local and service businesses (clinics, real estate, trades, education) in UK, UAE, US | Owner, marketing manager | "Your site should bring in enquiries, not just exist. Free 3-fix audit." | Website + local SEO |
| B. Startups and SaaS | Founder, product lead | "Marketing site and MVP in weeks, with a founder who replies." | Web app / website |
| C. Ops-heavy SMBs (agencies, e-commerce, logistics, education) | Ops lead, COO, founder | "Find one process AI can take off your team this month." | AI automation |
| D. Creators and YouTubers | Creator, channel manager | "A site, funnel and automation for your audience, built by people who ship." | Website + automation |

**Start with A and C.** A has the biggest buyer pool and simplest message. C has the least agency competition and a differentiated offer. Add B after one shipped example. D is a referral-and-community play (section 7), not a paid-ads play.

## 5. The offer ladder

Remove the decision from the first conversation. Give people a small yes first.

| Rung | Offer | Price | Purpose |
|---|---|---|---|
| 0 | Free 3-fix audit with a Loom walkthrough | Free | Ad and outbound entry point |
| 1 | Automation teardown: 30-min call, one process mapped, fixed quote | Free | Segment C entry point |
| 2 | Starter project: 5-page conversion site, or one automation | **(assumption) $1,500 to $4,000** | First project, fixed scope |
| 3 | Growth retainer: SEO, small changes, reporting | **(assumption) $750 to $2,000/mo** | Stable revenue |
| 4 | Build project: web app, multi-flow automation | **(assumption) $5,000 to $20,000** | Higher ticket, from referrals |

**Price anchors are common in Dubai and UK ads.** Pick real numbers and put a "from" price on the ad and the services pages once you decide. Confirm your minimum project size first.

**Risk reversers to consider (only ones you will honour):** fixed-scope quote before work starts, a written scope and acceptance criteria, pay in milestones, you own the code and accounts, a 14-day fix window after launch, "no lock-in" on retainers.

**Audit standard (deliver it fast, it is your best sales call):** 10 to 15 minutes per site. One-page summary: speed and mobile, message clarity and calls to action, search basics, one automation to try. A 2 to 3 minute Loom. Send within one business day. Log it in the lead sheet.

## 6. Channel plan, ranked by payoff for you

| # | Channel | Cost | Why | Use for |
|---|---|---|---|---|
| 1 | **Founder-led outbound** (LinkedIn + email) | Time | Highest intent-per-dollar when you have no proof yet; teaches objections fast | A, C, B |
| 2 | **WhatsApp click-to-chat** | Free, plus Meta ads later | Gulf buyers expect it; your number is already on the contact page | A in UAE/Saudi |
| 3 | **Google Search** | $500 to $700/mo | Captures people already searching for what you sell | A, C |
| 4 | **LinkedIn retargeting, then a small cold test** | $150 to $250/mo | Re-engages site visitors; reaches founders and ops leads | B, C |
| 5 | **Meta (Instagram/Facebook)** | $0 to $200/mo | Click-to-WhatsApp in UAE; retargeting; creators | A, D |
| 6 | **Partnerships and referrals** | Time | Agencies, freelancers, consultants, creator communities | All |
| 7 | **Content and SEO** | Time | Compounds; supports every other channel | All |
| 8 | **Directories and reviews** (Clutch, GoodFirms, Google Business Profile) | Free to low | Trust signals buyers check before replying | All |

### 6.1 Founder-led outbound (start day one)

**Volume:** 20 personalised touches per working day (about 400/month): 10 LinkedIn connection notes or DMs, 10 emails.

**List building:** 100 target accounts per segment in a sheet. For A: businesses with a slow or dated site (check speed and mobile in a minute). For C: companies with visible manual processes (many support emails, forms, spreadsheets, hiring for coordinators). For B: seed or pre-seed startups with a placeholder site.

**Message structure (4 lines):** (1) something specific you noticed on their site or business, (2) why it likely costs them enquiries or hours, (3) the free thing (audit or teardown), (4) one question. No attachments, no pitch deck.

Example, segment A:
> Hi [Name], I looked at [site] on my phone. The contact button is below the fold and the page takes about [X] seconds to load, which probably costs you some enquiries. I'm happy to record a 2-minute walkthrough with three fixes, free. Want me to send it?

Example, segment C:
> Hi [Name], I noticed [process, e.g. every quote request arrives by form and gets answered manually]. We build small AI workflows that qualify and reply to those within minutes. If useful I'll map yours in a 30-minute call and give a fixed quote. Worth a look?

**Follow-up sequence:** day 0 first message, day 3 short bump with one extra useful detail, day 7 send the audit unprompted if you did one, day 14 a polite close ("I'll leave it here"). Then stop.

**Targets (assumption, typical for personalised outbound):** 5% to 10% reply rate, 1% to 2% of touches become a call. At 400 touches that is roughly 4 to 8 calls per month. Track your real rate and adjust the list, not the volume.

### 6.2 Gulf: WhatsApp first

- Keep a pinned WhatsApp number on the site (already on the contact page).
- Run a **click-to-WhatsApp** Meta ad for UAE and Saudi: a price-anchored hook plus a free mini-audit offer, opening a pre-filled message ("Hi, I'd like a free website review").
- Reply within minutes during Gulf business hours. Use a saved-reply set: greeting, three qualifying questions (business, current site, goal), audit offer, booking link.
- English first; add Arabic ad copy and an Arabic landing page only after English shows demand.
- Check local requirements for ads and business claims before running in each country.

### 6.3 Google Search

**Structure:** one campaign per country (US, UK, UAE), one ad group per theme, exact and phrase match only, location set to "people in" the location, Search network only, no Display expansion.

**Starting keyword themes (verify volume and CPC in Keyword Planner before spending):**
- Websites: "web development agency [city]", "custom website development company", "website redesign services", "website design for [clinics / real estate / restaurants]"
- AI: "AI automation agency", "business process automation services", "AI chatbot for business", "whatsapp automation for business"
- SEO: "SEO agency for small business", "local SEO services [city]"
- Startup: "MVP development company", "hire react developers"

**Negative keywords from day one:** jobs, careers, salary, free, course, tutorial, template, DIY, how to, open source, internship, near me (unless local), wordpress theme, wix, squarespace.

**Bidding:** start on manual CPC or maximise clicks with a cap, switch to maximise conversions only after 20 or more conversions. Run ads only in business hours of the target country at first.

### 6.4 LinkedIn

- **Month 1:** retargeting only (site visitors, `/services` and `/free-audit` viewers). Cheap, warm, and shows you whether traffic is even coming.
- **Month 2 onward:** one cold audience test: owners and founders at companies of 2 to 50 people, in target countries, job functions that match the segment. Offer the audit or the teardown, not "contact us".
- **Organic:** you post 3 times a week from real work: a teardown, a before and after, a lesson. Founder posts outperform company-page posts. This also warms outbound targets before they read your DM.

### 6.5 Meta

- UAE and Saudi: click-to-WhatsApp, interest and location targeting, owners and managers.
- Retargeting: video viewers and site visitors with the audit offer.
- Creators: a lookalike of your first few creator clients once you have them.

### 6.6 Partnerships and referrals

- **Who:** freelance designers, brand agencies, SEO consultants, bookkeepers, web hosts, Shopify and Webflow freelancers, coaches and creator communities. Anyone whose clients need what you build but who does not build it.
- **Offer:** a clear referral fee (assumption 10% of first project) or white-label delivery at a wholesale rate.
- **Creator route:** pitch 10 mid-size YouTubers directly with a free audit of their channel site, link-in-bio or funnel. Creators talk to each other, so one good result travels.
- Ask every happy client for **two introductions** at handover.

### 6.7 Directories and reviews

Create a Google Business Profile (if you have a registered address), Clutch and GoodFirms profiles, and request a review from every early client. Buyers check these before replying to an ad.

### 6.8 Content and SEO

**On-site SEO is done (build-time prerender, unique titles and descriptions, structured data, sitemap).** The remaining work is off-site and content:

1. **Search Console and Bing:** submit the sitemap, then check Pages and Core Web Vitals weekly.
2. **One useful post per week** from real delivery. Priority topics: "What a website redesign should include", "Automating lead follow-up with n8n or Make", "Website speed fixes that matter", "How we scope a fixed-price project". Only publish facts you can source and only name clients with permission.
3. **Service-plus-place pages** once you have proof, for example "Web development for clinics in Dubai". One strong page per niche beats many thin ones.
4. **Backlinks that are realistic:** Clutch, GoodFirms, Google Business Profile, Product Hunt-style launches of anything you build, guest posts on small-business blogs, partner agencies linking to you, client sites linking to "Built by Renetter" (with permission).
5. **Keep title tags under about 60 characters and descriptions near 150 to 160**, one H1 per page, and update `public/sitemap.xml` whenever you add a page or post.
6. **Reviews:** ask every client for a Google and Clutch review at handover.

## 7. Proof-building plan (the real bottleneck)

You need case studies faster than you need more traffic.

1. **Discounted pilot projects.** Offer 2 or 3 businesses or creators a heavily reduced fixed-scope project in exchange for: a written testimonial, permission to publish a case study with real numbers, and two referrals. This is a marketing cost, so budget it.
2. **Instrument from day one.** Before building, record the client's baseline (traffic, enquiries, response time, hours spent). Without a baseline you cannot publish a result.
3. **Case-study template (matches the site):** Client, industry, stack, services, situation, what we built, result (real numbers only), a short quote.
4. **Publish loop:** after launch, wait 30 days, measure, write it up in a day, get the client's sign-off, add to `CASE_STUDIES`, post it on LinkedIn, use it as the creative in a Meta or LinkedIn test.
5. **Screenshots and logos:** only with written permission.

## 8. Budget and funnel math

### 8.1 Benchmarks to anchor on

- Google Ads search, all industries: average CPC about **$5.42**, cost per lead about **$66.69** **(benchmark)**. Agency and software keywords cost more than the all-industry average, so plan higher.
- LinkedIn: average CPC about **$6.50** **(benchmark)**, B2B cost per lead commonly **$75 to $300** **(benchmark)**. Roundups differ a lot; treat as a range.
- Your own numbers replace these after about $300 of spend.

### 8.2 Worked example, month 1 at $1,000 **(assumptions, edit in a sheet)**

| Step | Assumption | Result |
|---|---|---|
| Google budget | $700 | |
| CPC on agency keywords | $10 | 70 clicks |
| Landing page conversion (audit form or WhatsApp tap) | 5% | 3.5 leads |
| Cost per lead | | about $200 |
| LinkedIn / Meta retargeting | $200 at about $120 CPL | about 1.5 leads |
| Reserve | $100 | |
| **Total paid leads** | | **about 5** |
| Lead to booked call | 50% | 2.5 calls |
| Call to proposal | 60% | 1.5 proposals |
| Proposal to won | 30% | **about 0.5 clients** |

**Reading it:** at $1,000/month, ads alone give roughly one client every two months, at a cost of about $2,000 per client. That is fine against a $1,500 to $4,000 starter project *only if* it becomes a retainer or a referral source. It is not fine as a one-off. This is why outbound runs in parallel and why you do not scale spend until the numbers beat this example.

### 8.3 Outbound math, same month (assumptions)

400 touches, 7% reply = 28 conversations, 25% accept a call = 7 calls, 60% proposal = 4, 30% win = **about 1 client** for time only.

### 8.4 Budget scenarios

| Monthly paid budget | Split | Expected role |
|---|---|---|
| **$1,000** (start here) | Google $700, LinkedIn/Meta retarget $200, reserve $100 | Learn which keywords and message work |
| **$2,500** (after 3 or more good leads at under $150 CPL) | Google $1,500 across 2 countries, LinkedIn cold $500, Meta/WhatsApp $300, reserve $200 | Steady 8 to 12 leads a month |
| **$5,000** (after 2 paying clients from ads and 1 case study) | Google $2,500, LinkedIn $1,000, Meta $800, content/creative $400, reserve $300 | Scale the winning country and segment only |

### 8.5 When to spend more, hold, or cut

- **Cut:** a keyword, ad or audience with about $150 to $200 spent and no leads.
- **Hold:** leads arriving but cost per call above target. Fix the landing page or message, not the budget.
- **Scale:** raise budget about 20% a week on a channel while cost per lead holds for two consecutive weeks.

## 9. Ad creative and copy

**Google Search: websites**
- Headlines: "Websites That Bring In Enquiries", "Fixed-Scope Website Projects", "Free 3-Fix Website Audit", "Fast Mobile-First Web Development", "Founder Replies Within A Day"
- Descriptions: "Small senior team. Clear scope, weekly demos, no surprises. Get a free audit with three specific changes." / "Websites and web apps built to convert. Send us your site and see what we would fix."

**Google Search: AI automation**
- Headlines: "Automate Repetitive Work With AI", "AI Workflows For Your Team", "Free Automation Teardown"
- Descriptions: "We find one process AI can take over, then build it. Start with a free 30-minute call." / "Lead follow-up, support triage, reporting. Fixed scope and a working demo each week."

(Only run "fixed scope", "weekly demos" and "founder replies" once you are sure they are true.)

**Meta / LinkedIn creatives (build from the site's SVG mockups, or in Canva from templates):**
1. *Audit offer:* image of a mock audit summary. Text: "Send us your site. Get three specific changes back that bring in more enquiries. Free, no obligation." CTA: Get my audit.
2. *Automation:* the automation-flow mockup. Text: "Every enquiry answered in minutes, logged in your CRM, call booked. We build it." CTA: See how.
3. *Founder video (best performer type for services):* 30 to 45 seconds, you on camera: one site problem you often see and the fix. Captions on. CTA: free audit.
4. *Price-anchor (Gulf/UK test):* "Websites from $X. Fixed price. Founder-led." CTA: WhatsApp us.
5. *Retargeting:* "Still thinking about your site? Your free audit is one form away."

All links carry UTM tags: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.

## 10. Landing page and conversion tests

Run these in order, one change at a time, at least 100 visits each:

1. **Primary call to action:** form only vs form + WhatsApp button (UAE) vs form + "book a 15-min call".
2. **Form length:** name, email, site URL (3 fields) vs adding a "what do you want to fix" field.
3. **Headline:** problem-led ("Is your site losing enquiries?") vs outcome-led ("Three fixes that bring more enquiries").
4. **Proof block:** once you have a quote or case study, add it above the form and measure.
5. **Speed:** keep mobile load under about 2.5 seconds; check in PageSpeed Insights.
6. **Thank-you page:** add a booking link and a short "what happens next" so the lead takes a second step.

## 11. Tracking (set up before spending a dollar)

1. GA4 property and tag; mark `generate_lead` as a key event.
2. Meta Pixel and LinkedIn Insight Tag in `index.html` (the thank-you page already fires the lead events).
3. Google Ads conversion imported from GA4 or tagged on `/thank-you`.
4. Set `VITE_FORM_ENDPOINT` (Formspree, Web3Forms or similar) so submissions reach your inbox and a sheet. Without it the form opens WhatsApp as a fallback.
5. UTMs on every link; call tracking is optional.
6. **Lead sheet columns:** date, source, campaign, name, company, country, segment, service, audit sent (Y/N), call date, proposal value, status, lost reason, won value.
7. Weekly dashboard (Looker Studio or a sheet): spend, leads, cost per lead, calls, proposals, wins, cost per client.

## 12. KPIs and weekly cadence

**KPIs:** cost per lead (by channel and country), lead to call rate, call to proposal, proposal to won, **cost per client**, landing page conversion, time to first reply (aim for under a few hours in business time), audits sent per week, outbound reply rate.

**Weekly rhythm (about 5 hours of marketing time):**
- Monday: review last week's numbers, decide one change per channel.
- Daily: outbound block (45 minutes), reply to leads within hours, send audits.
- Wednesday: one post or page from real work.
- Friday: update the lead sheet, move deals, note objections you heard.

**Monthly:** rewrite ads using the exact words leads used, prune keywords, review pricing against what people accept.

## 13. 90-day roadmap

**Days 1 to 14: foundation**
- Confirm the promises on the site and decide prices and the minimum project size.
- Connect the form endpoint, GA4, Meta, LinkedIn tags. Test a lead end to end.
- Build the lead sheet, audit template and Loom routine, saved WhatsApp replies.
- Build the outbound lists (100 per segment A and C). Start 20 touches a day.
- Launch Google Search for one segment in one country (UK or UAE first).
- Create Google Business Profile, Clutch and GoodFirms profiles. Check US Meta Ad Library and Google Transparency.

**Days 15 to 30: first data**
- Add a second country and the retargeting audience. Launch click-to-WhatsApp in the UAE.
- Run audits for every lead within one business day; book calls.
- Sign the first discounted pilot project (section 7). Start recording baselines.
- Pitch 10 creators and 10 partner agencies.

**Days 31 to 60: learn and tighten**
- Keep winning keywords and ads, cut the rest. Rewrite copy with leads' own words.
- Run the first landing page tests. Ship the pilot.
- Publish the first real case study and add real client names to the site (permission first).
- Add a LinkedIn or Meta test with the case study as the creative. Start the founder video series.

**Days 61 to 90: scale what works**
- Raise budget on the best channel by about 20% a week while cost per lead holds.
- Launch the automation teardown as a paid offer if outbound shows demand.
- Add the referral ask and partner referral fee. Launch the growth retainer to every finished client.
- Decide: move to the $2,500 tier only if you have 3 or more leads under about $150 each.

**Success at day 90 (targets, assumptions):** 3 paying clients, at least one retainer, one published case study, a known cost per lead and cost per client, a lead sheet with 60 or more rows.

## 14. Risks and how to reduce them

| Risk | Reduction |
|---|---|
| No proof, so ads convert badly | Pilots and baselines first; lean on outbound and WhatsApp |
| Expensive clicks | Exact and phrase match, negatives, one country at a time, cut fast |
| Slow replies lose leads | Reply within hours; saved replies; WhatsApp notifications |
| Over-promising in ads | Only claim what you will deliver; no invented numbers or clients |
| Capacity: audits and calls eat build time | Cap audits per week (for example 10), batch calls on two days |
| Scope creep on fixed-price work | Written scope and acceptance criteria; change requests priced separately |
| Platform rules (ad policy, local law, messaging consent) | Check each country's rules; get consent before messaging; keep claims truthful |

## 15. Sources (benchmarks, directional only)

- Google Ads search CPC and CPL (WordStream/LocaliQ 2026 data as reported): [PPC Land](https://ppc.land/google-ads-cpl-drops-for-first-time-since-2020-as-cpc-hits-5-42/), [WordStream 2026 benchmarks](https://www.wordstream.com/blog/2026-google-ads-benchmarks)
- LinkedIn CPC and CPL ranges: [Webtonic](https://www.webtonic.io/blog/fintech-linkedin-ads-statistics), [FoundryCRO](https://foundrycro.com/blog/linkedin-ads-benchmarks-by-industry-2026/), [ClickMinded](https://www.clickminded.com/linkedin-ads-benchmarks/)
- I found no 2026 benchmark specific to web agencies or software services. Real keyword costs come from your own Keyword Planner and first $300 of spend.

## 16. Things only you can confirm

- Real client names (including creators and YouTubers), approval to show them, case-study details and quotes, logos or screenshots.
- Whether to name the engineers on the team (the About page describes the team without names).
- Whether "fixed-scope quotes", "weekly demos", "you own everything" and "founder replies" are promises you will keep.
- Your pricing and minimum project size (section 5 and 8 depend on it).
- Which tools and stacks you really offer (the tech strip and example-project stack lists on the site).
- Phone, hours, a registered business address if you want a Google Business Profile.
- Ad account access (Google, LinkedIn, Meta), tracking IDs, the form endpoint.
- Whether you can personally handle WhatsApp replies in Gulf hours.
- That the social handles carried over from the old site are real.
