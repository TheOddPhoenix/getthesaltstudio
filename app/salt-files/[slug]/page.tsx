import {notFound} from 'next/navigation';
import {posts} from '../../../lib/posts';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=posts.find(p=>p.slug===slug);return {title:p?.title,description:p?.excerpt,alternates:{canonical:`/salt-files/${slug}`}}}
export default async function Post({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=posts.find(p=>p.slug===slug);if(!p)notFound();return <article><section className="prose"><p className="eyebrow">THE SALT FILES · STUDIO NOTES</p><h1>{p.title}</h1><time dateTime={p.date}>{p.date}</time>{p.body.map(t=><p key={t}>{t}</p>)}</section></article>}
