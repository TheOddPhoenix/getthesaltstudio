# Deployment and domain runbook

Prepared November 1, 2026. Recommended target: Vercel for this Next.js application. No hosting project has been created and no domain-specific DNS values have been obtained. Do not copy generic example records into Spaceship.

## Preview first

1. Import TheOddPhoenix/getthesaltstudio into Vercel. Select Next.js and Node 24. Install dependencies and retain a package lock. Resolve all CI type/build failures before deployment.
2. Set NEXT_PUBLIC_SITE_URL to the actual HTTPS preview URL for preview testing; use https://getthesaltstudio.com only in production. Set server credentials in hosting environment settings, with separate test and live environments. Keep CHECKOUT_ENABLED=false.
3. Test desktop and mobile navigation, collection links, every product/variant, cart persistence, quantity limits, keyboard focus, login failures, denied anonymous writes, admin saves/drafts, and unavailable integration states. Keep previews excluded from indexing using Vercel preview protections/headers.
4. Verify Stripe test payment success, decline, cancellation, asynchronous payment, invalid webhook signatures, duplicate webhook delivery, database outage/retry, correct line items/amounts, and manual order reconciliation. Confirm order records appear once and no unpaid order is submitted to a supplier.
5. Approve actual artwork, supplier samples, sizing/material/care details, prices, shipping costs/times/destinations, taxes, customer contact, privacy/terms, cancellation/refund rules, and order confirmation email delivery. Implement provider adapter and durable fulfillment worker or establish a tested manual fulfillment procedure. Add monitoring and an operator refund workflow.
6. Conduct controlled live-mode payment/refund and fulfillment tests with owner approval before opening to customers. Only then enable CHECKOUT_ENABLED and announce the shop.

## DNS: approval required before any change

1. Inspect current authoritative nameservers and existing DNS records. Spaceship registration alone does not establish that Spaceship hosts DNS. Export the zone and preserve mail MX/TXT and unrelated records.
2. In the deployed Vercel project's Settings → Domains, add getthesaltstudio.com and www.getthesaltstudio.com. Select the primary hostname and redirect the other to it.
3. Copy the exact record type, host/name, target/value, and any ownership verification TXT record shown by that project's domain setup. Vercel may provide project-specific targets; obtain them from this project, not a generic guide.
4. Prepare a change table listing each existing value, proposed value, TTL, and reason. **Present that concrete table to the owner and obtain explicit approval before editing DNS.** At present the proposed values are UNKNOWN.
5. If Spaceship is authoritative, open its Advanced DNS for the domain and apply only the approved records. If another DNS host is authoritative, edit there. Do not change nameservers simply to connect the site.
6. Wait for propagation and verify Vercel domain verification and HTTPS certificate issuance. Check apex and www over HTTPS, primary-host redirect, canonical tags, sitemap URLs, robots, and existing email delivery. Submit the canonical sitemap in the owner's Search Console after verification.
7. Rollback: restore recorded prior web records if domain validation fails. Never delete unrelated email records.

## Verified official references

- Vercel domain setup: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- Vercel DNS concepts: https://vercel.com/docs/domains/working-with-dns
- Spaceship's official domain update guide identifies Advanced DNS: https://www.spaceship.com/blog/domain-updates/
- Stripe fulfillment guidance: https://docs.stripe.com/checkout/fulfillment
- Next.js installation: https://nextjs.org/docs/app/getting-started/installation

These references verify the procedure, not this domain's actual records. No DNS values are asserted here.
