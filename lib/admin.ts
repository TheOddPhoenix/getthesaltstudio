import 'server-only';
import {cookies} from 'next/headers';
import {db} from './db';
export async function isAdmin(){const token=(await cookies()).get('salt-studio')?.value;if(!token||!process.env.STUDIO_ADMIN_USER_ID)return false;try{const {data,error}=await db().auth.getUser(token);return !error&&data.user?.id===process.env.STUDIO_ADMIN_USER_ID}catch{return false}}
