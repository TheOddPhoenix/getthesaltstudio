import FolkIcon from './FolkIcon';

export default function ProductArt({ kind, symbol, image }: { kind: 'shirt' | 'mug'; symbol: string; image?: string }) {
  if (image) return <div className="product-art photo"><img src={image} alt={`${kind === 'shirt' ? 'T-shirt' : 'Mug'} product photograph`}/></div>;
  return <div className={`product-art ${kind}`} role="img" aria-label={`${kind === 'shirt' ? 'T-shirt' : 'Mug'} image placeholder; final photo and artwork to be supplied`}><div className="object"><div className="sample-art"><span className="sample-arch">GET THE SALT</span><FolkIcon kind={symbol}/><span className="sample-small">STUDIO</span></div></div><em>PHOTO PLACEHOLDER</em></div>;
}
