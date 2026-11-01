'use server';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {revalidatePath} from 'next/cache';
import {db} from '../../lib/db';
import {isAdmin} from '../../lib/admin';
export async function login(form:FormData){const email=String(form.get('email')||'');const password=String(form.get('password')||'');if(email.length>254||password.length>256)redirect('/studio?error=login');let token='';try{const {data,error}=await db().auth.signInWithPassword({email,password});if(!error&&data.user?.id===process.env.STUDIO_ADMIN_USER_ID)token=data.session?.access_token||'';}catch{}if(!token)redirect('/studio?error=login');(await cookies()).set('salt-studio',token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:3600});redirect('/studio')}
export async function logout(){(await cookies()).delete('salt-studio');redirect('/studio')}
export async function saveProduct(form:FormData){if(!await isAdmin())throw new Error('Unauthorized');const raw=String(form.get('product')||'');if(raw.length>20000)throw new Error('Product too large');let p;try{p=JSON.parse(raw)}catch{throw new Error('Invalid JSON')};const {validateProduct}=await import('../../lib/validation.mjs');if(!validateProduct(p))throw new Error('Invalid product. Check the documented catalog format.');const {error}=await db().from('products').upsert({id:p.id,data:p});if(error)throw new Error('Unable to save product');revalidatePath('/','layout');redirect(`/studio?product=${encodeURIComponent(p.id)}&saved=1`)}
