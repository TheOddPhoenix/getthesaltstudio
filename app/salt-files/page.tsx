import Link from 'next/link';
import { posts } from '../../lib/posts';
export const metadata = { title: 'The Salt Files', alternates: { canonical: '/salt-files' } };
const topics: Record<string, string> = { trends: 'Trends', oddities: 'Oddities', 'behind-the-designs': 'Behind the Designs' };
export default async function Files({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const title = topic && topics[topic];
  return <section className="prose"><p className="eyebrow">THE SALT FILES</p><h1>{title || 'THE SALT FILES'}</h1><nav aria-label="Article topics" className="topic-links"><Link href="/salt-files">Blog</Link>{Object.entries(topics).map(([slug, name]) => <Link href={`/salt-files?topic=${slug}`} key={slug}>{name}</Link>)}</nav>{title ? <p>New {title.toLowerCase()} stories are coming soon. <Link href="/salt-files">Read our studio notes →</Link></p> : posts.map(p => <article className="journal-card" key={p.slug}><time dateTime={p.date}>Studio notes · {p.date}</time><h2><Link href={`/salt-files/${p.slug}`}>{p.title} →</Link></h2><p>{p.excerpt}</p></article>)}</section>;
}
