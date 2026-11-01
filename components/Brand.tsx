import Link from 'next/link';
import FolkIcon from './FolkIcon';

export default function Brand() {
  return <Link href="/" className="brand" aria-label="Get the Salt Studio home"><span className="brand-mark"><FolkIcon kind="moon"/><FolkIcon kind="cryptid"/></span><span className="brand-type"><span>GET THE</span><strong>SALT</strong><small>STUDIO</small></span></Link>;
}
