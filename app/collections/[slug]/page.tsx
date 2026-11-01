import {notFound} from 'next/navigation';
import {collections} from '../../../lib/catalog';
import {products} from '../../../lib/db';
import ProductCard from '../../../components/ProductCard';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=collections.find(c=>c.slug===slug);return {title:c?.name||'Collection',alternates:{canonical:`/collections/${slug}`}}}
export default async function Collection({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=collections.find(c=>c.slug===slug);if(!c)notFound();return <section><p className="eyebrow">THE COLLECTION</p><h1>{c.name}</h1><p>{c.line}</p><div className="product-grid">{(await products()).filter(p=>p.active&&p.collection===slug).map(p=><ProductCard key={p.id} product={p}/>)}</div></section>}
