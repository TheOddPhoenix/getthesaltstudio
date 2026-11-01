import Cart from '../../components/Cart';
import {products} from '../../lib/db';
export const metadata={title:'Your bag',robots:{index:false,follow:false}};
export default async function Bag(){return <section><p className="eyebrow">YOUR EVERYDAY TALISMANS</p><h1>Your bag.</h1><p className="notice">Preview store. Checkout remains disabled until payment and fulfillment testing is complete.</p><Cart catalog={await products()}/></section>}
