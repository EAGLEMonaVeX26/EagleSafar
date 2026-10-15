# SafarBD মালিকের জন্য EagleSafar marketplace ও payments brief

**পরিধি ও সতর্কতা।** এই রিপোর্টটি কেবল সরবরাহিত structured public research ফলের সংক্ষিপ্তসার; নতুন করে কোনো ওয়েব-গবেষণা করা হয়নি। **✅ যাচাইকৃত** মানে সংশ্লিষ্ট প্রতিষ্ঠানের প্রকাশ্য পৃষ্ঠা/শর্তে দেখা তথ্য; **→ অনুমান/সুপারিশ** মানে EagleSafar-এর জন্য ব্যবসায়িক implication, কোনো প্রতিষ্ঠানের ঘোষিত fact নয়; **? অজানা** মানে মালিক বা merchant acquirer-এর কাছ থেকে নিশ্চিত করতে হবে। কোনো private executive/admin login পদ্ধতি এখানে দাবি করা হয়নি। কোনো একক gateway চারটি দেশ কভার করে—এমন প্রমাণও নেই।

## নির্বাহী সারাংশ

- **Malaysia-first MVP:** MYR-এ card + FPX + DuitNow QR + Touch ’n Go eWallet আলাদা payment choice হিসেবে রাখার সম্ভাবনা প্রকাশ্য তথ্য সমর্থন করে; কিন্তু প্রতিটি rail-এর merchant approval, entity ও integration আলাদা করে যাচাই করতে হবে [56][57][58][59][60]।
- **Bangladesh:** bKash/Nagad-ভিত্তিক merchant acceptance এবং SSLCOMMERZ-এর card/MFS/bank/EMI aggregation প্রকাশ্যে আছে; তবে বিদেশি বা marketplace legal entity-র eligibility, settlement currency ও timetable প্রকাশ্য ফল থেকে নিশ্চিত নয় [50][52][53][54][55]।
- **India:** Razorpay-এর প্রকাশ্য cross-border পৃষ্ঠা OTA/Travel-কে eligible category হিসেবে উল্লেখ করে; India-local Adyen route-এ local entity লাগে এবং UPI-র নতুন integration-এ Intent/QR প্রাধান্য পায়। এটি automatic approval নয় [61][62][65][66]।
- **Pakistan:** Raast, JazzCash, Easypaisa ও Safepay-এর distinct local routes আছে; Safepay-এর নথিতে Pakistan business bank account ও PKR settlement-এর কথা আছে। এগুলো একীভূত চার-দেশের gateway প্রমাণ করে না [67][68][69][70][71][72]।
- **Revenue model:** সরবরাহকারীর সঙ্গে completed-booking commission, affiliate/referral, স্পনসরড placement/advertising, এবং পরে B2B/API—এই mix যুক্তিসঙ্গত **→ সুপারিশ**। প্রকাশিত benchmark-এ commission/eligibility product ও partner ভেদে বদলায়; কোনো হার EagleSafar-এর জন্য ধরে নেওয়া যাবে না [1][2][12][17][32][43][48]।

## ১) দশটি travel platform: compact comparison

| Platform | প্রকাশ্য product ও supply pattern | Payment/localization evidence | EagleSafar-এর জন্য মূল পাঠ |
|---|---|---|---|
| **Booking.com** | Accommodation, flight, car, attraction, taxi ও transport search/booking; property supplier-রা independent contracted provider। Property onboarding free, calendar sync, instant বা request-to-book আছে [1][5]। | Payments by Booking.com-এ Malaysia তালিকাভুক্ত; Bangladesh, India, Pakistan ওই নির্দিষ্ট supplier-payment তালিকায় নেই। Guest payment/payout property ও country অনুযায়ী বদলায়; card/cash/local wallet/BNPL সব জায়গায় এক নয় [3][4]। | Supplier contract, commission, paid placement এবং property-controlled policy—এই model অনুসরণযোগ্য; country list-কে সব traveler payment-এর প্রমাণ ভাবা যাবে না। |
| **Airbnb** | Homes, Experiences ও Services; host identity/listing review, service licensing/insurance/certification ও on-platform payment বাধ্যতামূলক নীতির অংশ [6][7][9]। | Major cards, Apple/Google Pay, PayPal; Malaysia-তে FPX, India-তে UPI/cards/netbanking প্রকাশ্যে উল্লেখিত। Payout bank-country setup address-এর সঙ্গে match করতে হয়; Bangladesh/Pakistan-এর local rail এখানে নিশ্চিত নয় [7][8][10]। | Off-platform cash নিষেধ, host verification ও supplier quality gate গুরুত্বপূর্ণ; payout geography আলাদা করে design করতে হবে। |
| **Expedia** | Stays, flights, cars, packages, activities, cruises; Travel Creator/Affiliate-এ links/widgets এবং qualifying booking-এ advertised up-to-4% commission [11][12]। | Rapid lodging POS-এ BD, MY, IN, PK আছে; lodging currency table-এ INR/MYR আছে, BDT/PKR নেই। Card option property/POS অনুযায়ী dynamic; property-collect-এ property charge করতে পারে [13][14][15]। | API POS support local acquiring বা consumer checkout availability প্রমাণ করে না; method response অনুযায়ী checkout বানাতে হবে। |
| **Trip.com** | Flights, hotels, trains, cars, transfers, attractions; third-party supplier terms প্রযোজ্য। Affiliate page-এ free joining ও up-to-7% headline আছে [16][17]। | Malaysia page-এ Malay ও MYR; India page-এ English-India ও INR। Payment timing prepaid বা pay-at-use হতে পারে; BD/PK local rails/merchant eligibility যাচাই হয়নি [18][19]। | Locale/currency selector payment support নয়; affiliate rate ও payout terms contract-এ নিশ্চিত করতে হবে। |
| **Agoda** | Hotels/private homes, flights, activities, cars; property owner manual listing বা Airbnb/Booking.com import করতে পারে, fraud validation উল্লেখিত [20][21]। | Pay Now, Pay Later, Zero Pay, Pay at Hotel ও কিছু installment option booking/location অনুযায়ী। India Zero Pay-তে India IP ও India-issued instrument-এর শর্ত আছে; চার দেশের পূর্ণ rail matrix নেই [23][24]। | Booking-, property- ও location-dependent checkout; supplier onboarding ও fraud review-এর নিজস্ব gate দরকার। |
| **MakeMyTrip** | India-first asset-light marketplace; flights, hotels, packages, bus/rail ইত্যাদি। myPartner কেবল India travel agents-এর B2B route, PAN/KYC চায় [25][27]। | India/INR default; prepaid বা hotel-offered pay-at-hotel; BNPL partner-provided ও product-discretionary [26][28][29]। BD/MY/PK local coverage প্রমাণিত নয়। | India-specific partner route-কে global supplier/API access ভাবা যাবে না; KYC ও local legal setup গুরুত্ব পায়। |
| **Traveloka** | Flights, hotels, train/bus, transfers, attractions; lodging/experience/ground-transport partner route ও affiliate dashboard আছে [30][31][32]। | Malaysia flight-এ cards, FPX ও supported wallets; hotel page-এ FPX banks, Touch ’n Go, Boost, PayLater (PayLater-টি বর্তমানে Indonesia-only বলা হয়েছে)। BD/IN/PK local rails নিশ্চিত নয় [33][34]। | Malaysia localization শক্তিশালী benchmark; supplier terms অনুযায়ী refund/cancellation orchestration দরকার। |
| **GoZayaan** | Bangladesh-centered flights, hotels, tours, visa, gift cards, rewards; third-party provider facilitator—নিজে inventory owner নয় [35][36]। | Bangladesh homepage-এ bKash, Nagad, Tap, Upay, Rocket এবং bank/card promotions; cash collection-এ 48-hour lead time, EMI-তে selected card/BDT 5,000 minimum। MY/IN/PK coverage প্রমাণিত নয় [35][37][38]। | Local payment campaign availability ≠ every booking-এ rail availability; cash/EMI operational risk আলাদা করে price ও control করতে হবে। |
| **Klook** | Tours, attractions, events, hotels, transfers, rentals, rail/bus, Wi-Fi/SIM; supplier ও distributor route, SaaS/API এবং affiliate tools আছে [41][42][43]। | Payment location/currency/product/amount অনুযায়ী বদলায়; MYR-এ GrabPay, Touch ’n Go, Atome এবং INR-এ UPI/EMI উদাহরণ আছে। BDT/PKR method নিশ্চিত নয় [44]। | Product-specific payment options response-ভিত্তিক checkout; API/white-label ভবিষ্যৎ B2B channel হতে পারে। |
| **Tripadvisor** | Discovery, reviews, forums, Things To Do, hotels/restaurants; নিজেকে agency/operator না বলে third-party facilitation ও marketing platform বলে [46][47][49]। | US edition USD দেখিয়েছে; hotel-only affiliate commission category বলা হয়েছে। BD/MY/IN/PK local rails, settlement বা merchant eligibility প্রমাণিত নয় [48][49]। | Discovery/lead-generation ও sponsored visibility model আলাদা revenue stream; checkout ownership আগে নির্ধারণ করতে হবে। |

## ২) Bangladesh, Malaysia, India ও Pakistan: payment method / merchant-eligibility matrix

> **Matrix reading:** “প্রকাশ্যভাবে দেখা” মানে provider-এর public page-এ বর্ণিত capability; “eligibility signal” approval নয়। Card network (যেমন Visa/Mastercard) নিজে standalone wallet/gateway নয়—সাধারণত acquirer বা gateway relationship লাগে [54][58]।

| দেশ | প্রকাশ্য payment methods/flow | Merchant eligibility signal | Settlement/অজানা বিষয় |
|---|---|---|---|
| **Bangladesh** | Visa/Mastercard ও অন্যান্য card, bKash, Nagad, Rocket, internet banking, e-wallet, bank EMI, Bangla QR; SSLCOMMERZ 33+ options/36+ partners বলে [54]। bKash Merchant QR/counter payment; Nagad app/USSD ও Bangla QR merchant payment [50][53]। | bKash form-এ NID, valid trade licence ও bank account চাওয়া হয়; SSLCOMMERZ-এ business bank account, trade licence, signatory NID, TIN এবং name-match; travel agency-র জন্য licensing/certification documents লাগতে পারে [50][54]। | SSLCOMMERZ FAQ-তে standard single transaction limit BDT 500,000 (acquirer-dependent) ও refund সাধারণত 5–7 working days; এগুলো settlement timetable নয়। Merchant settlement currency, FX, foreign/global entity eligibility ও final fees **?** [55]। |
| **Malaysia** | Cards; FPX bank redirect (MYR); DuitNow QR; Touch ’n Go eWallet। FPX customer-authenticated, one-time flow; PayNet-এর DuitNow QR participating bank/e-wallet interoperability ও instant collection বর্ণনা করে [56][57][59][60]। | FPX/Stripe support account-country ও method rules-নির্ভর; PayNet QR setup preferred bank/acquirer/provider-এর মাধ্যমে; TNG page SMEs, individual traders, home-based sellers-এর registration প্রচার করে [56][57][58][59]। | QR collection instant হওয়া bank payout instant প্রমাণ করে না। Foreign-incorporated EagleSafar, travel/marketplace MCC, local bank/KYC, payout cycle, API/split settlement ও TNG online checkout **?** [59][60]। |
| **India** | UPI (Intent/QR; Collect নতুন integration-এ নয়), cards, netbanking ও কিছু wallets; UPI interoperable bank-account rail [61][62][64][65]। | Razorpay cross-border offer-এ OTA/Travel category, KYC, purpose code, customer PAN এবং USD 30,000 cap বলা আছে [62]। Adyen local processing-এ India entity, local onboarding/company account ও India compliance লাগে [65][66]। | Razorpay general settlement page INR/T+2 বলে, কিন্তু cross-border page foreign-bank settlement/multiple currency উল্লেখ করে—দুই বর্ণনার exact pathway **?**; specific account-এর written confirmation ছাড়া currency/timing ধরা যাবে না [62][63]। |
| **Pakistan** | Raast bank/PSP QR; JazzCash Raast QR/Till ID, Mobile Account/voucher; Easypaisa Mobile Account/OTC token ও QR/link; Safepay cards/direct bank/Raast/mobile wallets [67][68][69][70][71][72]। | Raast merchant route bank/PSP দিয়ে; Easypaisa website/app business-এর KYC/due diligence; Safepay-এ Pakistan business bank account এবং approval-এর 6 মাসে UBL account requirement উল্লেখিত [67][71][69]। | Safepay funds PKR-এ available, non-PKR transaction acquiring-bank FX-এ convert; settlement schedule estimate। Easypaisa Mobile Account daily/instant বনাম OTC 7 working days বলা হলেও merchant limits page-এ Rs.500,000 ও Rs.50,000 উভয় figure-এর scope অস্পষ্ট—confirm করতে হবে [69][71][72]। |

### Matrix থেকে ব্যবহারিক সিদ্ধান্ত

1. **→ Multi-provider, country-aware architecture:** payment-method availability, KYC, acquiring, settlement ও refund rules country/product/account ভেদে বদলায়; তাই একটিমাত্র universal gateway ধরে checkout design করা যাবে না।
2. **→ Method discovery at checkout:** provider যে method response/eligibility দেবে, কেবল সেটিই দেখানো; static “সব দেশে card/wallet available” copy এড়ানো। Expedia, Klook ও Traveloka-র public material-ও dynamic/product-dependent availability দেখায় [14][33][44]।
3. **→ Funds flow আগে:** EagleSafar merchant of record (MoR), supplier-এর agent, না কি affiliate/referral—এই সিদ্ধান্ত না হলে refund, chargeback, tax, payout ও commission ledger নির্ভুল হবে না। এটি গবেষণা থেকে পাওয়া EagleSafar fact নয়; owner/acquirer-এর decision item।

## ৩) Malaysia-first EagleSafar: অগ্রাধিকার ও revenue model

### P0 — launch blocker / payment architecture

| Priority | করণীয় | কেন | Status |
|---|---|---|---|
| 1 | **Malaysia legal entity/acquirer ও MoR model লিখিতভাবে স্থির করুন।** | Card/FPX/DuitNow/TNG-এর eligibility, refund/chargeback, customer funds ও supplier payout কে বহন করবে তা নির্ধারিত না হলে launch risk থাকবে। | → সুপারিশ; public sources EagleSafar-এর approval দেয়নি। |
| 2 | **MYR checkout MVP:** cards + FPX + DuitNow QR + TNG eWallet—প্রতিটি method আলাদা option/feature flag হিসেবে। | Malaysia-র public sources এই rails-এর customer-facing capability দেখায়, কিন্তু provider/merchant approval, currency ও flow আলাদা [56][57][58][59]। | ✅ capability; → EagleSafar configuration। |
| 3 | **Refund, cancellation, chargeback ও failed-payment state machine বানান।** | Travel suppliers-এর cancellation/refund terms ও payment timing product/property অনুযায়ী; refunds original method-এ ফেরার pattern সাধারণ [4][16][36][39]। | → সুপারিশ। |
| 4 | **Provider response অনুযায়ী method দেখান; card-only fallback রাখুন।** | কোনো method সব customer/product/airline/property-তে সক্রিয় নয় [14][33][44]। | → সুপারিশ। |

### P1 — supply ও monetization

| Revenue stream | Public benchmark | EagleSafar-এর প্রস্তাব |
|---|---|---|
| **Completed-booking commission** | Booking.com stay provider-এর কাছ থেকে agreed commission নেয়; Expedia affiliate page up-to-4% এবং Trip.com up-to-7% headline দেখায়, তবে terms/rates বদলাতে পারে [1][12][17]। | → Hotel/activity/transport supplier-এর সঙ্গে category-specific commission contract; cancellation/no-show-এর পর commission কখন earned হবে লিখুন। প্রকাশিত benchmark rate EagleSafar-এর rate নয়। |
| **Affiliate/referral** | Booking.com, Traveloka, Klook প্রভৃতি tracked links/tools ও completed/qualified booking commission প্রকাশ করে [2][32][43]। | → যেখানে direct inventory/API নেই, সেখানে compliant deep-link/affiliate layer; disclosure, attribution window ও payout owner-এর সঙ্গে নিশ্চিত করুন। |
| **Sponsored placement/ads** | Booking.com paid “Ad” placement, Agoda B2B/visibility, Tripadvisor business/advertising tools, Traveloka advertising/priority exposure প্রকাশ্যে আছে [1][22][31][47]। | → Search-result sponsorship, destination collection, supplier campaign—clearly labelled paid placement; ranking integrity নষ্ট না করে। |
| **B2B/API/white-label** | Expedia Rapid, Klook API/data feed/white-label এবং Traveloka B2B network-এর public patterns আছে [13][15][31][42]। | → Phase 2: agencies/corporates-এর জন্য inventory/API access বা white-label; আগে contract, rate parity, support ও settlement পরীক্ষা। |
| **Convenience/service fee** | GoZayaan cash flow-তে minimal non-refundable convenience charge এবং payment-specific rules প্রকাশিত [37]। | → EagleSafar fee নিলে checkout-এর আগে স্পষ্টভাবে দেখান; supplier commission-এর সঙ্গে double-charge নয়। এটি EagleSafar-এর public fact নয়। |
| **Membership/loyalty** | Multiple platforms rewards/coins/tiers প্রকাশ করে, যেমন Booking.com, Trip.com, GoZayaan [1][16][35]। | → Repeat customers-এর জন্য points/paid membership কেবল unit economics ও refund liability বোঝার পরে। |

### P2 — চার দেশের expansion sequence

1. **Malaysia production:** প্রথমে MY entity/acquirer, MYR, local rails, supplier contracts, refund/chargeback ledger।
2. **Bangladesh corridor:** SSLCOMMERZ aggregation বা bKash/Nagad route-এর merchant eligibility/settlement লিখিতভাবে যাচাই; local wallet promotion-কে blanket coverage মনে না করা [54][50][52][55]।
3. **India corridor:** Razorpay cross-border বনাম India-local Adyen route—legal entity, settlement currency, UPI flow, customer PAN/KYC ও cap compare করে নির্বাচন [62][63][65][66]।
4. **Pakistan corridor:** Raast/JazzCash/Easypaisa/Safepay-কে distinct provider integration হিসেবে evaluate; PKR settlement, Pakistan bank account, KYC ও refund/chargeback দায় নির্দিষ্ট করুন [67][69][70][71][72]।

## ৪) মালিক/merchant acquirer-এর কাছে আবশ্যিক unknowns

### Owner-এর কাছ থেকে

- EagleSafar-এর **legal entity, incorporation country, operating countries, travel/agency licences, tax/VAT/SST অবস্থান** কী?
- EagleSafar কি **merchant of record**, supplier-এর disclosed agent, নাকি affiliate/referral? Customer contract কার সঙ্গে হবে?
- Supplier onboarding: hotel/activity/transport-এর KYC, contract, cancellation/refund SLA, commission basis, inventory/API/feed এবং rate-parity terms কী?
- Private admin/executive access-এর ক্ষেত্রে **কে account owner, কোন roles/MFA/recovery policy, এবং কোন authorized person credentials দেবে**—এগুলো public research থেকে জানা নেই এবং এখানে অনুমান করা হয়নি।
- Customer funds কি একত্রে ধরে পরে supplier-কে payout হবে, নাকি provider সরাসরি supplier-কে charge/payout করবে? Split settlement/ledger প্রয়োজন কি?

### Acquirer/payment provider-এর কাছ থেকে লিখিতভাবে

- Malaysia-তে EagleSafar-এর entity/account কি card, FPX, DuitNow QR ও TNG eWallet-এর জন্য eligible? Travel/marketplace business category ও cross-border buyer কীভাবে treated হবে?
- **Settlement currency, payout timing, reserve/rolling hold, FX rate, MDR, refund fee, chargeback fee, fraud/3DS/SCA এবং dispute evidence** কী?
- Marketplace split payout, sub-merchant/KYC, delayed capture, partial refund, void, chargeback liability ও supplier-level reconciliation support করে কি?
- Bangladesh/India/Pakistan-এ পৃথক local entity বা bank account লাগবে কি? Foreign-issued card এবং foreign customer-এর acceptance কী সীমায়?
- Provider-এর live method availability, transaction limits, prohibited travel products, PCI scope, AML/KYC, sanctions ও data-retention rules কী?
- India ক্ষেত্রে Razorpay cross-border page-এর foreign-bank/multi-currency statement এবং general INR settlement statement EagleSafar-এর account-এ কীভাবে reconcile হবে [62][63]?
- Pakistan ক্ষেত্রে Easypaisa-এর Rs.500,000 বনাম Rs.50,000 monthly limit-এর scope এবং Safepay-এর exact settlement timetable কী [69][71][72]?

## ৫) Bottom line

**→ Recommended decision:** EagleSafar-কে “চার দেশে এক gateway” project হিসেবে নয়, বরং **Malaysia-first, country-aware marketplace** হিসেবে launch করুন। প্রথম release-এ MYR ও Malaysia-local rails, supplier/refund ledger এবং explicit MoR decision দিন। এরপর প্রতিটি দেশে আলাদা merchant approval ও settlement evidence পেলে corridor খুলুন।

**✅ যা প্রকাশ্য evidence সমর্থন করে:** বিভিন্ন platform-এর marketplace/affiliate/supplier patterns; Malaysia-র FPX/DuitNow/TNG/card; Bangladesh-এর bKash/Nagad/SSLCOMMERZ; India-র UPI/Razorpay/Adyen routes; Pakistan-এর Raast/JazzCash/Easypaisa/Safepay routes।

**? যা এখনো বলা যাবে না:** কোন gateway EagleSafar-কে approve করবে, কোন দেশ থেকে কোন wallet/card সফল হবে, exact fees/settlement/FX, private admin login procedure, বা কোনো provider সব চার দেশ কভার করবে।

## References

1. [Booking.com — How we work](https://www.booking.com/content/how_we_work.html)
2. [Booking.com — Affiliate Program](https://www.booking.com/affiliate-program/v2/index.html)
3. [Booking.com — Payments by Booking.com](https://partner.booking.com/en-us/solutions/payments-by-bookingcom)
4. [Booking.com — Customer terms of service](https://www.booking.com/content/terms.html)
5. [Booking.com — List your property](https://join.booking.com/)
6. [Airbnb — About Airbnb: What it is and how it works](https://www.airbnb.com/help/article/2503)
7. [Airbnb — Payment methods accepted](https://www.airbnb.com/help/article/126)
8. [Airbnb — Supported currencies and currency fees](https://www.airbnb.com/help/article/95)
9. [Airbnb — Services and Experiences standards and requirements](https://www.airbnb.com/help/article/1451)
10. [Airbnb — Add a payout method](https://www.airbnb.com/help/article/54)
11. [Expedia — Expedia.com homepage](https://www.expedia.com/)
12. [Expedia Group — Travel Creator/Affiliate Program](https://creator.expediagroup.com/affiliates)
13. [Expedia Rapid — Locale details](https://developers.expediagroup.com/rapid/lodging/reference/locale-details)
14. [Expedia Rapid — Credit card policies](https://developers.expediagroup.com/rapid/resources/reference/credit-card-guide)
15. [Expedia Rapid — Property collect payments](https://developers.expediagroup.com/rapid/lodging/booking/property-collect)
16. [Trip.com — Terms and Conditions](https://www.trip.com/contents/service-guideline/terms.html)
17. [Trip.com — Affiliate Program](https://www.trip.com/partners)
18. [Trip.com — Malaysia](https://my.trip.com/)
19. [Trip.com — India](https://in.trip.com/)
20. [Agoda — What exactly does Agoda offer?](https://www.agoda.com/about-agoda/what-exactly-does-agoda-offer/)
21. [Agoda Partner Hub — How can I list my property on Agoda?](https://partnerhub.agoda.com/how-can-i-register-my-property-on-agoda/)
22. [Agoda Partner Hub — B2B Solutions](https://partnerhub.agoda.com/hotel-solutions/b2b-solutions/)
23. [Agoda — Platform and Booking Terms of Use](https://www.agoda.com/info/termsofuse.html)
24. [Agoda — How do I pay for my booking?](https://www.agoda.com/info/how-do-i-pay-for-my-booking.html)
25. [MakeMyTrip — Investor Overview](https://investors.makemytrip.com/us/investors/overview)
26. [MakeMyTrip — India homepage](https://www.makemytrip.com/)
27. [MakeMyTrip — myPartner official portal](https://mypartner.makemytrip.com/)
28. [MakeMyTrip — India User Agreement](https://www.makemytrip.com/legal/in/eng/user_agreement.html)
29. [MakeMyTrip — Book Now Pay Later](https://www.makemytrip.com/payments/paylater-onboarding/)
30. [Traveloka — Flights, Hotels & Attractions](https://www.traveloka.com/)
31. [Traveloka — Become Traveloka Partner](https://www.traveloka.com/en-en/partnership)
32. [Traveloka — Affiliate Program](https://www.traveloka.com/en-en/p/affiliate)
33. [Traveloka — Malaysia Flights](https://www.traveloka.com/en-my/flight)
34. [Traveloka — Terms and Conditions of Use](https://www.traveloka.com/en-en/termsandconditions)
35. [GoZayaan — Official homepage](https://gozayaan.com/)
36. [GoZayaan — Terms & Conditions](https://gozayaan.com/terms)
37. [GoZayaan — Pay In Cash](https://gozayaan.com/pay-in-cash)
38. [GoZayaan — EMI Policy](https://gozayaan.com/emi-policy)
39. [GoZayaan — Cancellation & Reissue / Refund Policy](https://gozayaan.com/refund-policy)
40. [GoZayaan — Google Play app listing](https://play.google.com/store/apps/details?id=com.gozayaan.app&hl=en_US)
41. [Klook — U.S. homepage](https://www.klook.com/en-US/)
42. [Klook — Partner with Us](https://www.klook.com/partner/)
43. [Klook — Affiliate Program](https://affiliate.klook.com/)
44. [Klook — Payment methods FAQ](https://www.klook.com/faq/category-56-question-920/)
45. [Klook — The Klook Travel Promise](https://www.klook.com/en-US/about/customer-promises/)
46. [Tripadvisor — Homepage](https://www.tripadvisor.com/)
47. [Tripadvisor — For Business](https://www.tripadvisor.com/business)
48. [Tripadvisor — Affiliate Program FAQs](https://www.tripadvisor.com/affiliates?tab=faqs)
49. [Tripadvisor — Terms of Use](https://tripadvisor.mediaroom.com/us-terms-of-use)
50. [bKash — Merchant](https://www.bkash.com/en/business/merchant)
51. [bKash — Payment Gateway Terms & Conditions](https://www.bkash.com/en/page/tokenized_checkout)
52. [Nagad — Merchant Sign Up](https://nagad.com.bd/en/forms/?form=be-a-merchant)
53. [Nagad — Merchant Pay](https://nagad.com.bd/bn/services/?service=merchant-pay)
54. [SSLCOMMERZ — Merchant Signup](https://join.sslcommerz.com/)
55. [SSLCOMMERZ — Frequently Asked Questions](https://sslcommerz.com/faq/)
56. [Stripe — FPX payment method](https://stripe.com/payment-method/fpx)
57. [PayNet — DuitNow QR for Your Business](https://paynet.my/business-solutions/duitnow-qr.html)
58. [Stripe — Cards documentation](https://docs.stripe.com/payments/cards)
59. [Touch ’n Go eWallet — Become a merchant partner](https://www.touchngo.com.my/merchant/)
60. [PayNet — FPX FAQs](https://knowledgebase.paynet.my/hc/en-us/articles/49684820949273-Frequently-Asked-Questions-FAQs)
61. [NPCI — Unified Payments Interface](https://www.npci.org.in/product/upi)
62. [Razorpay — Accept International Payments From Indian Customers](https://razorpay.com/docs/payments/international-payments/accept-international-payments-from-indian-customers)
63. [Razorpay — About Settlements](https://razorpay.com/docs/payments/settlements)
64. [Razorpay — About Wallets](https://razorpay.com/docs/payments/payment-methods/wallets)
65. [Adyen — UPI](https://docs.adyen.com/payment-methods/upi)
66. [Adyen — Payments India compliance guide](https://docs.adyen.com/online-payments/payments-india-compliance-guide)
67. [State Bank of Pakistan — Join Raast](https://www.sbp.org.pk/raast/join-raast)
68. [State Bank of Pakistan — Raast](https://www.sbp.org.pk/raast)
69. [Safepay — Services Agreement](https://getsafepay.pk/legal/content/services-agreement)
70. [JazzCash — Payment Gateway / Business payment options](https://www.jazzcash.com.pk/business/accept-payments/payment-gateway)
71. [Easypaisa — Online Payment Gateway](https://easypaisa.com.pk/online-payment-gateway/)
72. [Easypaisa — Merchant Onboarding](https://easypaisa.com.pk/become-easypaisa-merchant/)
