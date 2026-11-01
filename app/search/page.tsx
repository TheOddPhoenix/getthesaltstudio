import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/db';
export const metadata = { title: 'Search', robots: { index: false } };
export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const query = q.trim().slice(0, 120);
  const results = query ? (await products()).filter(p => p.active && `${p.name} ${p.collection}`.toLowerCase().includes(query.toLowerCase())) : [];
  return <section><h1>SEARCH</h1><form action="/search" className="search-form"><label htmlFor="q">Find your next favorite</label><input id="q" name="q" defaultValue={query} placeholder="Search shirts, mugs, and collections" maxLength={120}/><button className="button">SEARCH →</button></form>{query && <><p>{results.length} result{results.length === 1 ? '' : 's'} for “{query}”</p><div className="product-grid">{results.map(p => <ProductCard key={p.id} product={p}/>)}</div></>}</section>;
}
