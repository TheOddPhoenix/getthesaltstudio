import Link from 'next/link';
import { collections } from '../lib/catalog';
import { products } from '../lib/db';
import ProductCard from '../components/ProductCard';
import ProductArt from '../components/ProductArt';
import FolkIcon from '../components/FolkIcon';

export const metadata = { alternates: { canonical: '/' } };

const collectionLines = [
  ['PARANORMAL &', 'CRYPTIDS'],
  ['GOTH &', 'MACABRE'],
  ['NEURODIVERGENT', '& PROUD'],
  ['SARCASM &', 'DARK HUMOR'],
];

export default async function Home() {
  const catalog = (await products()).filter(p => p.active);
  return <>
    <section className="hero">
      <div className="hero-copy"><h1><span>ALL HAIL</span><span>THE WEIRD KIDS.</span></h1><p>Apparel and mugs for the cryptid believers,<br className="desktop-break"/> chronic overthinkers, spooky souls, and<br className="desktop-break"/> people who were never particularly<br className="desktop-break"/> interested in fitting in.</p><div className="hero-buttons"><Link className="button cream" href="/shop?kind=shirt">SHOP T-SHIRTS →</Link><Link className="button" href="/shop?kind=mug">SHOP MUGS →</Link></div><p className="hero-motto">STEP INSIDE THE CIRCLE <span>|</span> WARD OFF THE ORDINARY</p></div>
      <div className="hero-products"><div className="hero-mug"><ProductArt kind="mug" symbol="plant"/></div><div className="hero-shirt"><ProductArt kind="shirt" symbol="moth"/></div><span className="hero-photo-label">PRODUCT PHOTO PLACEHOLDERS</span></div>
    </section>
    <section id="collections" className="collection-section"><h2 className="ornament-heading">SHOP BY COLLECTION</h2><div className="collections">{collections.map((c, index) => <Link href={`/collections/${c.slug}`} key={c.slug} className="collection"><div className={`collection-art collection-art-${index}`} aria-hidden="true"/><h3>{collectionLines[index].map(line => <span key={line}>{line}</span>)}</h3><span className="button">SHOP COLLECTION →</span></Link>)}</div></section>
    <section className="featured"><h2 className="ornament-heading">CURRENTLY SUMMONING ATTENTION</h2><div className="product-grid">{catalog.slice(0, 4).map(p => <ProductCard key={p.id} product={p}/>)}</div></section>
    <section className="trust-strip" aria-label="Planned shop services"><div><FolkIcon kind="truck"/><span>FAST PRODUCTION<br/>&amp; SHIPPING</span></div><div><FolkIcon kind="shield"/><span>SECURE<br/>CHECKOUT</span></div><div><FolkIcon kind="leaf"/><span>HIGH-QUALITY<br/>PRINTS</span></div><div><FolkIcon kind="heart"/><span>MADE FOR<br/>THE WEIRD ONES</span></div></section>
    <section className="newsletter"><div className="forest-scene" aria-hidden="true"><div className="forest-moon"><FolkIcon kind="cryptid"/></div><span className="tree tree-one"/><span className="tree tree-two"/><span className="tree tree-three"/></div><div className="newsletter-copy"><h2>JOIN THE SALT LIST</h2><p>Get new designs, shop updates, and a little<br/> unhinged inspiration in your inbox.</p><div className="newsletter-form"><label htmlFor="newsletter-email" className="sr-only">Enter your email</label><input id="newsletter-email" type="email" placeholder="Enter your email" disabled aria-describedby="newsletter-status"/><button className="button" disabled>SUBSCRIBE →</button></div><small id="newsletter-status">Preview only — signup opens soon. No email addresses are collected.</small></div></section>
    <p className="preview-notice">PREVIEW STORE · Product photos and final artwork coming soon. Orders are disabled; shipping and service statements above are proposed launch copy.</p>
  </>;
}
