# Approved reference implementation

The user supplied the approved homepage screenshot on November 1, 2026 and instructed that photos may remain placeholders, but text and labels should match the reference.

The revised implementation follows its black/antique-gold/deep-red/parchment palette and section order: shipping bar, crescent/cryptid brand placeholder, header motto and navigation, product hero, four collection cards, parchment featured-products strip, four service labels, forest newsletter panel, footer columns.

Reference copy retained: ALL HAIL THE WEIRD KIDS.; the hero description and motto; SHOP T-SHIRTS / SHOP MUGS; SHOP BY COLLECTION; Paranormal & Cryptids / Goth & Macabre / Neurodivergent & Proud / Sarcasm & Dark Humor; SHOP COLLECTION; CURRENTLY SUMMONING ATTENTION; Mothman Folk Art T-Shirt ($26.00), Namaste Plants Mug ($18.00), Jersey Devil Air Tours T-Shirt ($26.00), Mothman Folk Art Mug ($18.00); the four service labels; JOIN THE SALT LIST, its description, Enter your email, SUBSCRIBE; the footer column labels.

Photos, product artwork, and logo illustration remain placeholders. The revised collection art uses a generated four-panel folklore illustration atlas: Bigfoot and pines, celestial bat, brain and laurel, floral skull. Display typography uses the bundled Google Fonts Rye family, with narrow headline proportions and fixed two-line collection labels; this is a closer interpretation, not a verified identification of the reference font. Social profile destinations have not been provided, so unlinked social icons are omitted. Wishlist controls are omitted until a real wishlist exists. Color dots are decorative examples and are labeled as such for assistive technology, not purchase options.

The collection atlas is public/images/collection-folklore.png, generated with the built-in image tool from the supplied screenshot. Prompt: a single 1536x1024 four-quadrant sprite on near-black, woodcut/screenprint texture, antique gold/olive/terracotta/cream; top-left Bigfoot among pines under a crescent, top-right russet celestial bat, bottom-left terracotta anatomical brain with laurel and rays, bottom-right cream skull surrounded by rust-orange flowers and olive leaves; no text, buttons, borders, or UI. Each quadrant is displayed by its CSS background position.

The approved shipping/production/quality/checkout wording is retained as proposed launch copy with an explicit preview notice. No orders or newsletter subscriptions are accepted. Checkout configuration and DNS are unchanged.

New collection slugs replace the provisional ones. A deployment with an existing database must migrate existing product collection values and URLs before enabling checkout; the user's current preview has no database configured. The new seed catalog replaces sample browser-cart product IDs; stale bag entries are safely filtered out.
