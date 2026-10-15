# EagleSafar — implementation plan

## Product goal
Build a trusted, Malaysia-first travel and services marketplace prototype for visitors, students, workers and families, starting with Bangladesh–Malaysia–India–Pakistan audiences and designed to expand globally. The first release is a shareable phone-installable PWA preview; it is not a native app-store release or a live booking/payment system. Business registration, contacts, domain, live suppliers and merchant accounts will be supplied later by the owner.

## Brand and original copy
Use the joined brand **EagleSafar** and owner-provided tagline **“Create Today, Beyond Tomorrow”**. Create an original, minimal eagle-wing/globe-route mark and brand-specific copy; do not copy competitors' text/logos or add a visible “AI-generated”/“copied” label. Do not claim human authorship or misrepresent the service if directly asked. Keep all marketing claims verifiable and avoid invented ratings, providers, addresses, phone numbers, prices or permits.

## Malaysia-first product structure
Organize discovery around four intentions: Visit, Study, Work, and Stay/Move. The initial content can cover Malaysia-focused tour and hotel/apartment requests, Airbnb-style stays, ground transport/vehicles, tourist/student/work/calling/dependent/child/schooling/parents-dependent visa guidance, education planning and job-information requests, plus Bangladesh and regional/international destinations. This preview has no connected live inventory. All visa, employment and provider content must stay informational and non-promissory.

## Languages
Place a language selector where visitors can reach it on mobile. Start with Bengali, English, Hindi, Urdu and Malay; ensure Urdu direction can be RTL. Keep the locale list extensible, but do not claim every language is already translated. Legal, visa and job material must use reviewed human translations before business use.

## PWA and shareable phone preview
Implement an application-owned manifest, 192/512 icons, standalone display, install guidance for Android and iPhone, and a small service worker for public static assets. Do not cache `/api`, OAuth, `/chairman`, private responses, forms or personal task data. Share the HTTPS Preview URL for testing; allow the owner and invitees to install it from their browsers. Explain that the preview link is temporary and that installing a PWA is not the same as publishing a native Play Store/App Store app.

## Personal on-device To-do list
Add a simple “My list” screen/panel to the app. Each visitor's notes/tasks are saved only in that same browser/app installation on that device (local storage), with add/complete/edit/delete and clear-all actions. Never send or sync those tasks to the website server. Explain that clearing browser/app data can erase them and they do not follow the shared link to another phone. Do not enter passwords, passport/NID numbers, card data or similarly sensitive information because browser storage is not encrypted.

## Chairman-only access
The user explicitly wants a private chairman area for one owner, not employee, partner or other admin accounts. Public visitors and prospective vendors can use public pages/forms without admin access. A real `/chairman` route should use the project's Manus OAuth identity and server-side owner-only role checks; it must fail closed if the authenticated account is not the project owner. Never create a shared/default password or rely only on hiding the URL.

The project currently has `server:false` and `database:false`. Real OAuth-backed owner access, saved inquiries, or persistent AI workflows require managed Server/Database. Enabling those is one-way and can make development/public data share the same database. Do not enable them or store business records in this phase; require explicit owner approval after explaining the boundary.

## EagleSafar AI — phased, supervised
Phase 1 (after backend/model setup approval): branded, multilingual FAQ and travel-planning assistant that answers only from an owner-reviewed knowledge base, states uncertainty, minimizes data sent, and does not retain chats by default. Do not request passports, identity documents, card details or credentials.

Phase 2: owner-only chairman console may review inquiries and AI-drafted responses, partner applications, content suggestions and operational alerts. General low-risk FAQs may be auto-answered after testing; visa outcomes, job offers, contracts, payments, refunds, bookings/cancellations and policy changes must be escalated for owner review. The AI may draft improvements but must not rewrite production code, change fees/permissions, approve suppliers, publish pages or deploy itself. No separate staff/admin account is in scope.

An API identity/credential belongs to the chosen runtime/model provider, not a public “AI ID”; never expose it in the browser. Sandbox model credentials are not production credentials. Before live AI, identify the production provider, enable the required server capability, publish a privacy notice covering processing, and obtain any required account credentials through protected input.

## Payments and social channels
Plan country-aware methods: cards, Bangladesh wallets, Malaysia FPX/DuitNow/Touch 'n Go, Indian UPI and verified Pakistan methods. Do not promise one gateway supports all markets or enable live charges before the operating/settlement jurisdiction, merchant account, provider eligibility, fee/refund rules and owner approval are known. No card information may be stored by EagleSafar.

Prepare genuine profile-link slots for Facebook, Instagram, WhatsApp Business, TikTok, YouTube and LinkedIn, plus share metadata. Until the owner creates pages and provides their URLs, do not invent profiles, create public accounts, post content or load tracking pixels.

## Research and release
A public-source scan of 10 travel platforms and the four initial payment markets is underway. Use the findings to inspire original features, not copied text or designs. Type-check, build and verify the installable preview and on-device checklist. Keep production publishing disabled; deliver only the shareable temporary HTTPS Preview until the owner explicitly requests a public release.
