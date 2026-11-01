import type {MetadataRoute} from 'next';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:['/studio','/api/','/cart','/checkout/']},sitemap:`${process.env.NEXT_PUBLIC_SITE_URL||'https://getthesaltstudio.com'}/sitemap.xml`}}
