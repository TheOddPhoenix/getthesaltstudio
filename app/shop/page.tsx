import {products} from '../../lib/db';
import ProductCard from '../../components/ProductCard';
export const metadata={title:'Shop shirts & mugs',alternates:{canonical:'/shop'}};
export default async function Shop(){return <section><p className="eyebrow">THE WHOLE STRANGE WORLD</p><h1>All the good stuff.</h1><p className="notice">Preview collection · Product imagery and prices are placeholders. Checkout is not live.</p><div className="product-grid">{(await products()).filter(p=>p.active).map(p=><ProductCard key={p.id} product={p}/>)}</div></section>}
