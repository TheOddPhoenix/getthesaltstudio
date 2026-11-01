import Link from 'next/link';
import { Product, money } from '../lib/catalog';
import ProductArt from './ProductArt';

export default function ProductCard({ product: p }: { product: Product }) {
  return <article className="product-card"><Link href={`/products/${p.slug}`}><ProductArt kind={p.kind} symbol={p.symbol} image={p.image}/><h3>{p.name}</h3><span className="product-price">{money(p.price)}</span></Link>{p.kind === 'shirt' && <div className="swatches" aria-label="Illustrative color swatches; final options pending"><span/><span/><span/></div>}</article>;
}
