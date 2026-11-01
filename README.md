# Get the Salt Studio

Independent Next.js / TypeScript / Tailwind storefront for getthesaltstudio.com.

## Status

Initial implementation; **not a live store**. Checkout defaults to disabled. Product artwork, prices, collection names, and editorial copy are provisional. The approved homepage image was not available in the referenced conversation export; this version interprets the requested dark folklore direction. Illustrations are explicit concept placeholders rather than product photographs.

## Local development

Use Node 24. Run `npm install`, copy `.env.example` to `.env.local`, then `npm run dev`. Run `npm test`, `npm run typecheck`, and `npm run build`. Commit the generated package-lock.json after the first successful installation; then switch CI from `npm install` to `npm ci`. Dependencies could not be downloaded in the original restricted session, so a lockfile and successful production build are still required.

Without credentials the public shop uses eight sample products, four provisional collections, variant selection, and a browser-persisted cart. Admin and payment operations remain locked.

## Stages implemented

1. Responsive editorial homepage, collection/shop/product pages, empty/error states, cart, story, policy placeholders, and The Salt Files articles.
2. Product Studio: Supabase Auth sign-in, exact server-side administrator UUID check on every read/write, HttpOnly session cookie, draft visibility, and validated JSON product editing. This basic editor is intended for a technical owner; media uploads and a graphical variant editor are future work.
3. Stripe server-side price lookup and validation, gated Checkout Sessions, signature-verified webhooks, durable idempotent order capture, and a POD adapter interface. No automated provider submission is enabled.
4. Metadata, canonical product/collection/article URLs, sitemap, robots, product JSON-LD (no misleading availability offers), semantic markup, accessible controls, and security headers.

## Configure Product Studio

Create a Supabase project, run `supabase/schema.sql`, and set SUPABASE_URL plus SUPABASE_SERVICE_ROLE_KEY in server environment variables only. Create an owner user in Supabase Auth, disable public sign-ups, enable strong password requirements and Supabase Auth rate limits/CAPTCHA as appropriate. Put that user's UUID in STUDIO_ADMIN_USER_ID. Never expose the service key through NEXT_PUBLIC variables. The one-hour cookie contains an access token; sign in again after expiry. No public password reset UI is provided; manage the account through Supabase.

Before configuring the database, copy sample product records into it or create products through Studio: a configured empty database intentionally shows an empty catalog. Product records use integer USD cents, a stable unique id and slug, a valid collection slug, shirt/mug kind, description, symbol, active boolean, and variants with stable id/label. Add real Stripe price IDs and POD variant IDs only after verification. Changing a product id creates another product; set active=false to archive old entries. The unique database index rejects duplicate slugs.

## Payments and POD

Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET using Stripe test credentials first. Each variant needs a Stripe one-time USD Price whose amount matches the product's integer `price`. `/api/checkout` ignores browser-supplied amounts. Configure Stripe Tax and a reviewed shipping policy; this initial implementation restricts shipping to the US and has no shipping rate configured. Add approved shipping rates or explicitly approve free shipping before activation.

Register `/api/stripe/webhook` for checkout.session.completed and checkout.session.async_payment_succeeded. The raw request is signature-verified. Only paid sessions create orders. The unique Stripe session id makes repeated deliveries safe; persistence failures return 500 so Stripe retries. The return page is never proof of payment. Orders remain `paid_pending_review`; the database records payment/session/address data and line items, requiring a documented retention policy and restricted operator access.

Choose Printful, Printify, or another provider and implement FulfillmentProvider in lib/fulfillment.ts against its current official API. Map Stripe prices to provider variants and approved artwork. A durable worker should atomically claim paid_pending_review orders, create provider drafts with a stable idempotency key, store the provider order ID, handle ambiguous network outcomes by reconciliation, and advance status through approval, production, tracking, cancellation, and failure. Verify signed provider callbacks. Never auto-submit orders from the checkout success page. Current code has architecture only: no provider API credentials, production orders, or tracking integration.

Keep CHECKOUT_ENABLED=false until the launch checks in docs/DEPLOYMENT.md pass. Test-mode success does not verify live payment processing.

## Verification limits

The original environment allowed built-in Node tests but blocked dependency registry access and direct Git cloning. CI is provided to perform type checking and production build on GitHub. Browser/mobile QA, Supabase integration, live Stripe payments, supplier orders, tax/shipping configuration, and domain verification must still be completed. No production deployment or DNS changes were made.
