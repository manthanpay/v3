# Manthan Pay — Premium Bharat Fintech Experience V5

A production-oriented React/Vite frontend for Manthan Pay. The project keeps the supplied Manthan Pay logo and the domain validation/transaction rules separated from the presentation layer, while introducing a premium Bharat-focused experience.

## Highlights

- Cinematic hero slider with exact 1920×760 banner assets.
- Real Indian photography + custom-composed campaign banners.
- AEPS Academy section using the supplied `aeps (2).mp4` tutorial.
- Service stack: AEPS, DMT, BBPS, recharge, DTH, Micro ATM, insurance, PAN, utilities and travel.
- 16-state network story with India map visual, region filters and growth messaging.
- Partner onboarding/login modal with validation.
- Functional demo partner dashboard with wallet, transaction review, MPIN confirmation, receipt and commission calculation.
- 5-minute inactivity logout.
- Responsive desktop/tablet/mobile layout.
- FAQ, testimonials, partner CTA and support-oriented content.
- Domain rules live in `src/domain/businessRules.js`, independent from UI components.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Architecture

```text
src/
├── components/
│   ├── Brand.jsx
│   ├── Field.jsx
│   ├── Modal.jsx
│   └── ValidatedForm.jsx
├── domain/
│   └── businessRules.js
├── infrastructure/
│   └── localStore.js
├── services/
│   ├── demoAuthService.js
│   └── demoTransactionService.js
├── features/
│   ├── auth/
│   │   └── AuthModal.jsx
│   ├── dashboard/
│   │   └── PartnerDashboard.jsx
│   └── home/
│       ├── HomePage.jsx
│       └── ServiceCatalog.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Business rules preserved / extended

Validation includes name, mobile, email, PAN, password, MPIN, Aadhaar, account number, IFSC, vehicle number, numeric identifiers and transaction amount limits. Service configuration and commission rates remain in one domain module so production API adapters can reuse the same contracts.

## Production integration boundary

The supplied project is a functional frontend/demo architecture. Browser `localStorage` is used only for the demo partner account and demo ledger. For a real production fintech deployment, replace those demo persistence points with:

1. Backend authentication/session management.
2. Server-side password/MPIN handling with secure hashing and policy controls.
3. AEPS provider/device integration through an approved backend.
4. BBPS/Bharat Connect provider integration.
5. DMT provider integration.
6. Recharge/DTH provider integration.
7. KYC/e-KYC and partner onboarding services.
8. Server-side wallet/ledger and idempotent transaction processing.
9. Provider callbacks/webhooks and reconciliation.
10. Audit logs, rate limiting, fraud controls, secrets management and observability.

The frontend should never contain provider secrets, client secrets, signing keys or privileged credentials.

## Banner asset strategy

The website deliberately uses banner files sized for their intended containers instead of forcing one image into every component. This avoids the cropping issue seen in earlier versions.

- Hero banners: 1920×760
- Campaign banners: 1200×760
- AEPS tutorial poster: 1920×1080
- India network visual: supplied map artwork

The new V5 campaign images are composed from the supplied real Indian photography and the project's existing network artwork so they have consistent aspect ratios and safe text areas.

## Network content

The 16 featured states are presentation data for the demo: Delhi, Haryana, Punjab, Rajasthan, Uttar Pradesh, Bihar, Jharkhand, West Bengal, Madhya Pradesh, Gujarat, Maharashtra, Chhattisgarh, Odisha, Telangana, Karnataka and Tamil Nadu. Replace with verified operational coverage from the business before publishing the live network claim.
