import Link from 'next/link';
import {Product,money} from '../lib/catalog';
import ProductArt from './ProductArt';
export default function ProductCard({product:p}:{product:Product}){return <Link className="product-card" href={`/products/${p.slug}`}><ProductArt kind={p.kind} symbol={p.symbol}/><div className="product-meta"><h3>{p.name}</h3><span>{money(p.price)}</span></div><p>{p.kind==='shirt'?'Your new favorite layer.':'A little magic. Every morning.'}</p></Link>}
