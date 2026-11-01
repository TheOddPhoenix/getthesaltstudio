import { products } from '../../lib/db';
import ProductCard from '../../components/ProductCard';
export const metadata = { title: 'Shop All', alternates: { canonical: '/shop' } };
export default async function Shop({ searchParams }: { searchParams: Promise<{ kind?: string }> }) {
  const { kind } = await searchParams;
  const title = kind === 'shirt' ? 'T-SHIRTS' : kind === 'mug' ? 'MUGS' : 'SHOP ALL';
  const catalog = (await products()).filter(p => p.active && (!['shirt', 'mug'].includes(kind || '') || p.kind === kind));
  return <section className="shop-page"><h1>{title}</h1><p className="notice">Preview collection · Product photos and final artwork coming soon. Checkout is not live.</p><div className="product-grid">{catalog.map(p => <ProductCard key={p.id} product={p}/>)}</div>{catalog.length === 0 && <p>New designs are coming soon.</p>}</section>;
}
