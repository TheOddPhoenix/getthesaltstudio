import 'server-only';
import {createClient} from '@supabase/supabase-js';
import {seedProducts, type Product} from './catalog';
export function db(){if(!process.env.SUPABASE_URL||!process.env.SUPABASE_SERVICE_ROLE_KEY)throw new Error('Database not configured');return createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY,{auth:{persistSession:false}})}
export async function products():Promise<Product[]>{if(!process.env.SUPABASE_URL)return seedProducts;const {data,error}=await db().from('products').select('data');if(error)throw new Error('Catalog unavailable');return data.map(r=>r.data as Product)}
