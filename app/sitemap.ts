import type {MetadataRoute} from 'next';
import {collections} from '../lib/catalog';
import {products} from '../lib/db';
import {posts} from '../lib/posts';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{const base=process.env.NEXT_PUBLIC_SITE_URL||'https://getthesaltstudio.com';return ['','/shop','/about','/salt-files',...collections.map(c=>`/collections/${c.slug}`),...(await products()).filter(p=>p.active).map(p=>`/products/${p.slug}`),...posts.map(p=>`/salt-files/${p.slug}`)].map(path=>({url:base+path}))}
