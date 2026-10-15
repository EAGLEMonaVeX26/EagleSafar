# EagleSafar

A Malaysia-first travel and services marketplace prototype, designed for Bangladesh–Malaysia–India–Pakistan audiences and later global expansion.

**Brand:** EagleSafar  
**Tagline:** Create Today, Beyond Tomorrow

## Phone test preview

Open the HTTPS Preview URL on your phone and add the site to your home screen:

- **Android / Chrome:** tap **অ্যাপ ইনস্টল**; if no prompt appears, use the browser menu → **Install app / Add to Home screen**.
- **iPhone / Safari:** open the link in Safari, tap **Share** → **Add to Home Screen**.
- Share the same preview URL with staff or friends. Everyone installs the same web app, but each person's “আমার তালিকা” is separate and stored on that phone only.

The Preview URL is for testing and may change; it is not a permanent company domain or a native Play Store/App Store listing.

## “আমার তালিকা”

Tasks and notes are kept only in the local browser/PWA storage on that device; they are not uploaded or synced to EagleSafar. Clearing browser/app data can erase them. The browser's local storage is not encrypted, so do not save passwords, passport/NID numbers, card data or similarly sensitive information. Each tester has an independent list.

## Current preview limits

No company email, telephone number, business address, domain, live hotel/vehicle/tour inventory, booking confirmations, payment gateway, verified suppliers, public social profiles or AI customer-service backend have been invented or activated. Visa and employment information is not an outcome guarantee. The owner can supply exact business identity and contact details for a later correction phase.

A real owner-only Chairman portal and live AI require a separate, explicit decision about the project's one-way managed Server/Database capability, model/privacy setup and account ownership. No employee/partner admin logins, live payment transactions, social posting or production publication are enabled in this preview.

## Development

```bash
pnpm check
pnpm build:static
pnpm dev:static
```

The project uses React, TypeScript and Vite. PWA artwork source: `scripts/generate-pwa-icons.py`; app assets: `client/public/`.
