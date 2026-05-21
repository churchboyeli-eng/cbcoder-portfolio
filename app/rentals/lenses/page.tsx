import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Lenses | CBCODER Rentals',
  description: 'Rent professional Sony, Nikon, Canon and Sigma lenses.',
};

const lensCategories = [
  {
    name: 'Sony Lenses',
    href: '/rentals/lenses/sony',
    image: '/camera image/lenses/Sony/Sony FE 24-70mm f:2.8 GM Lens .jpg',
  },
  {
    name: 'Nikon Lenses',
    href: '/rentals/lenses/nikon',
    image: '/camera image/lenses/nikon/Nikon NIKKOR Z 24-70mm.jpg',
  },
  {
    name: 'Canon Lenses',
    href: '/rentals/lenses/canon',
    image: '/camera image/lenses/canon/Canon RF 70-200mm.jpg',
  },
  {
    name: 'Sigma Lenses',
    href: '/rentals/lenses/sigma',
    image: '/camera image/lenses/sigma/Sigma 70-200mm.jpg',
  },
];

export default function LensesPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', padding: '120px 2rem 6rem 2rem' }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.35rem 1.1rem', border: '1px solid rgba(204,0,0,0.3)', borderRadius: '2rem', background: 'rgba(204,0,0,0.05)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Rentals</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: '#0a0a0a' }}>
          Cinema <span style={{ color: '#cc0000' }}>&amp;</span> Photo Lenses
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/rentals" style={{ color: '#666', textDecoration: 'none' }}>Rentals</Link>
          <span>›</span>
          <span style={{ color: '#cc0000', fontWeight: 700 }}>Lenses</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.78rem', color: '#888' }}>
          <span>📅 Daily rates excl. tax &amp; insurance</span>
          <span>📆 Week rate = 5 days charged as 4</span>
          <span>🕒 Mon–Fri collection after 3 PM</span>
        </div>
      </div>

      {/* ── CATEGORY GRID ── */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem'
      }}>
        {lensCategories.map((cat, index) => (
          <Link key={index} href={cat.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="camera-card" style={{
              border: '1px solid #eaeaea',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '300px',
              backgroundColor: '#ffffff',
              transition: 'box-shadow 0.3s ease',
              cursor: 'pointer',
            }}>
              <div style={{ position: 'relative', width: '180px', height: '180px', marginBottom: '1.5rem' }}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, textTransform: 'uppercase', color: '#000', textAlign: 'center' }}>
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '4rem auto 0' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Sony · Nikon · Canon · Sigma</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Lens Equipment Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>
    </main>
  );
}
