export type Product = {
  id: string; slug: string; name: string; collection: string; kind: 'shirt' | 'mug';
  price: number; description: string; symbol: string; image?: string; active: boolean;
  variants: { id: string; label: string; stripePriceId?: string; podVariantId?: string }[];
};

export const collections = [
  { slug: 'paranormal-and-cryptids', name: 'Paranormal & Cryptids', line: 'For the cryptid believers.', symbol: 'cryptid' },
  { slug: 'goth-and-macabre', name: 'Goth & Macabre', line: 'For the spooky souls.', symbol: 'bat' },
  { slug: 'neurodivergent-and-proud', name: 'Neurodivergent & Proud', line: 'For the chronic overthinkers.', symbol: 'brain' },
  { slug: 'sarcasm-and-dark-humor', name: 'Sarcasm & Dark Humor', line: 'For the ones who never fit in.', symbol: 'skull' },
];

const concepts = [
  { id: 'mothman-tee', slug: 'mothman-folk-art-t-shirt', name: 'Mothman Folk Art T-Shirt', collection: 'paranormal-and-cryptids', kind: 'shirt' as const, price: 2600, symbol: 'moth' },
  { id: 'namaste-mug', slug: 'namaste-plants-mug', name: 'Namaste Plants Mug', collection: 'sarcasm-and-dark-humor', kind: 'mug' as const, price: 1800, symbol: 'plant' },
  { id: 'jersey-devil-tee', slug: 'jersey-devil-air-tours-t-shirt', name: 'Jersey Devil Air Tours T-Shirt', collection: 'paranormal-and-cryptids', kind: 'shirt' as const, price: 2600, symbol: 'bat' },
  { id: 'mothman-mug', slug: 'mothman-folk-art-mug', name: 'Mothman Folk Art Mug', collection: 'goth-and-macabre', kind: 'mug' as const, price: 1800, symbol: 'moth' },
  { id: 'proud-tee', slug: 'neurodivergent-and-proud-t-shirt', name: 'Neurodivergent & Proud T-Shirt', collection: 'neurodivergent-and-proud', kind: 'shirt' as const, price: 2600, symbol: 'brain' },
  { id: 'proud-mug', slug: 'neurodivergent-and-proud-mug', name: 'Neurodivergent & Proud Mug', collection: 'neurodivergent-and-proud', kind: 'mug' as const, price: 1800, symbol: 'brain' },
  { id: 'macabre-tee', slug: 'goth-and-macabre-t-shirt', name: 'Goth & Macabre T-Shirt', collection: 'goth-and-macabre', kind: 'shirt' as const, price: 2600, symbol: 'skull' },
  { id: 'sarcasm-tee', slug: 'sarcasm-and-dark-humor-t-shirt', name: 'Sarcasm & Dark Humor T-Shirt', collection: 'sarcasm-and-dark-humor', kind: 'shirt' as const, price: 2600, symbol: 'skull' },
];

export const seedProducts: Product[] = concepts.map(p => ({
  ...p, description: 'Product photo and final artwork coming soon. This is a preview listing; materials, sizing, and care details will be confirmed before orders open.', active: true,
  variants: (p.kind === 'shirt' ? ['S', 'M', 'L', 'XL', '2XL'] : ['11 oz']).map(label => ({ id: `${p.id}-${label.replaceAll(' ', '-')}`, label })),
}));

export const money = (cents: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
