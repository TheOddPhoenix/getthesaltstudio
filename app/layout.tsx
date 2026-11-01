import type { Metadata } from 'next';
import Link from 'next/link';
import { Rye } from 'next/font/google';
import Brand from '../components/Brand';
import FolkIcon from '../components/FolkIcon';
import './globals.css';

const westernDisplay = Rye({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-western' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://getthesaltstudio.com'),
  title: { default: 'Get the Salt Studio | All Hail the Weird Kids', template: '%s | Get the Salt Studio' },
  description: 'Apparel and mugs for the cryptid believers, chronic overthinkers, spooky souls, and people who were never particularly interested in fitting in.',
  openGraph: { type: 'website', siteName: 'Get the Salt Studio' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={westernDisplay.variable}>
    <a className="skip" href="#main">Skip to content</a>
    <div className="announcement"><span aria-hidden="true">—</span><FolkIcon kind="truck"/> FREE U.S. SHIPPING ON ORDERS $75+ <span aria-hidden="true">—</span></div>
    <header className="site-header">
      <Brand/><p className="header-motto">STEP INSIDE THE CIRCLE <span>|</span> WARD OFF THE ORDINARY</p>
      <div className="header-tools"><Link href="/search" aria-label="Search"><FolkIcon kind="search"/></Link><Link href="/studio" aria-label="Account — Product Studio"><FolkIcon kind="user"/></Link><Link href="/cart" aria-label="Shopping bag"><FolkIcon kind="bag"/></Link></div>
      <nav className="main-nav" aria-label="Main navigation"><Link href="/shop">SHOP ALL</Link><Link href="/shop?kind=shirt">T-SHIRTS</Link><Link href="/shop?kind=mug">MUGS</Link><details className="collection-menu"><summary>COLLECTIONS <span aria-hidden="true">⌄</span></summary><div><Link href="/collections/paranormal-and-cryptids">Paranormal &amp; Cryptids</Link><Link href="/collections/goth-and-macabre">Goth &amp; Macabre</Link><Link href="/collections/neurodivergent-and-proud">Neurodivergent &amp; Proud</Link><Link href="/collections/sarcasm-and-dark-humor">Sarcasm &amp; Dark Humor</Link></div></details><Link href="/salt-files">THE SALT FILES</Link><Link href="/about">ABOUT</Link></nav>
    </header>
    <main id="main">{children}</main>
    <footer className="site-footer"><Brand/><div><h2>SHOP</h2><Link href="/shop?kind=shirt">T-Shirts</Link><Link href="/shop?kind=mug">Mugs</Link><Link href="/shop">Shop All</Link><Link href="/#collections">Collections</Link></div><div><h2>ABOUT</h2><Link href="/about">Our Story</Link><Link href="/policies#faqs">FAQs</Link><Link href="/policies#shipping">Shipping &amp; Returns</Link><Link href="/policies#contact">Contact</Link></div><div><h2>THE SALT FILES</h2><Link href="/salt-files">Blog</Link><Link href="/salt-files?topic=trends">Trends</Link><Link href="/salt-files?topic=oddities">Oddities</Link><Link href="/salt-files?topic=behind-the-designs">Behind the Designs</Link></div><div className="footer-signoff"><p>STEP INSIDE THE CIRCLE</p><FolkIcon kind="moon"/><span>WARD OFF THE ORDINARY</span></div><small>© {new Date().getFullYear()} Get the Salt Studio · Preview store — orders and newsletter signup are not open. Shipping offer and service claims are proposed launch copy.</small></footer>
  </body></html>;
}
