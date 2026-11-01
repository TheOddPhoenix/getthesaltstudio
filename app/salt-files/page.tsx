import Link from 'next/link';
import {posts} from '../../lib/posts';
export const metadata={title:'The Salt Files',alternates:{canonical:'/salt-files'}};
export default function Files(){return <section className="prose"><p className="eyebrow">FIELD NOTES FROM THE STUDIO</p><h1>The Salt Files.</h1>{posts.map(p=><article className="journal-card" key={p.slug}><time dateTime={p.date}>Studio notes · {p.date}</time><h2><Link href={`/salt-files/${p.slug}`}>{p.title} ↗</Link></h2><p>{p.excerpt}</p></article>)}</section>}
