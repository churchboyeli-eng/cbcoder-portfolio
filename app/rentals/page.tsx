import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Rentals | CBCODER',
  description: 'We offer a wide range of Equipment and Accessories for the Film, Television and Photographic industry.',
};

const categories = [
  {
    label: 'Cameras',
    href: '/rentals/cameras',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    label: 'Lenses',
    href: '/rentals/lenses',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    label: 'Lighting',
    href: '/rentals/lighting',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21h6"/>
        <path d="M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
      </svg>
    ),
  },
  {
    label: 'Sound',
    href: '/rentals/sound',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="11" rx="3"/>
        <path d="M19 10a7 7 0 0 1-14 0"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    label: 'Drones',
    href: '/rentals/drones',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="10" x2="12" y2="6"/>
        <line x1="12" y1="14" x2="12" y2="18"/>
        <line x1="10" y1="12" x2="6" y2="12"/>
        <line x1="14" y1="12" x2="18" y2="12"/>
        <circle cx="6" cy="6" r="2"/>
        <circle cx="18" cy="6" r="2"/>
        <circle cx="6" cy="18" r="2"/>
        <circle cx="18" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Grips',
    href: '/rentals/grips',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="12"/>
        <line x1="12" y1="12" x2="5" y2="22"/>
        <line x1="12" y1="12" x2="19" y2="22"/>
        <line x1="12" y1="12" x2="12" y2="22"/>
        <line x1="9" y1="8" x2="15" y2="8"/>
      </svg>
    ),
  },
];

const policies = [
  {
    title: 'Collection',
    detail: 'Mon – Fri: 3:00 PM – 5:30 PM. Technical checks recommended on-site. Valid ID & Signed Rental Agreement required for all collections.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Returns',
    detail: 'Return gear before 9:30 AM. Late returns billed at 50% day rate per 2-hour delay. Gear must be returned clean and packed as received.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>
    ),
  },
  {
    title: 'Cancellations',
    detail: '48hr notice required. 24-48hr notice: 50% charge. Less than 24hr notice or No-Show: 100% full day rate applied.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    ),
  },
  {
    title: 'Insurance',
    detail: '10% mandatory Damage Waiver added to all rentals. Does not cover negligence, theft from unattended vehicles, or water damage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Week Rate',
    detail: 'The Industry Standard: 5-day week billed as 4 days. Weekend (Fri-Mon) billed as 1.5 days. Monthly rates available on request.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Pricing',
    detail: 'All prices exclude 18% VAT. 50% Deposit required to secure booking for new clients. Refundable security deposit may apply.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

export default function RentalsPage() {
  return (
    <main style={{ backgroundColor: '#050505', color: '#f5f5f5', fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ── */}
      <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 2rem', overflow: 'hidden' }}>
        {/* Dark elegant background */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0a0a0a', zIndex: 0 }} />
        {/* Red gradient glow at bottom */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(204,0,0,0.18) 0%, transparent 55%)', zIndex: 1 }} />
        {/* Top fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, transparent 30%)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
          {/* Eyebrow tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem', padding: '0.4rem 1.2rem', border: '1px solid rgba(204,0,0,0.5)', borderRadius: '2rem', background: 'rgba(204,0,0,0.08)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Professional Gear</span>
          </div>

          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(3.5rem, 9vw, 7rem)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            RENT <span style={{ color: '#cc0000', display: 'inline-block' }}>PREMIUM</span><br />EQUIPMENT
          </h1>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.8, color: '#b0b0b0', maxWidth: '55ch', margin: '0 auto 3rem auto', fontWeight: 300 }}>
            From Standard Definition to 8K — we supply cinema, broadcast and photographic professionals with the gear that makes the shot happen.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#categories" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.3s' }}>
              Browse Gear
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: 'transparent', color: '#fff', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.25)', transition: 'border-color 0.3s' }}>
              📅 Check Availability
            </Link>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: 'transparent', color: '#fff', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.25)', transition: 'border-color 0.3s' }}>
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#categories" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'rgba(255,255,255,0.4)' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
        </a>
      </header>

      {/* ── CATEGORY GRID ── */}
      <section id="categories" style={{ backgroundColor: '#0a0a0a', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#cc0000' }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cc0000' }}>Browse by Category</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', backgroundColor: '#1a1a1a' }}>
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.href} className="rental-cat-card" style={{ textDecoration: 'none', backgroundColor: '#0a0a0a', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'background 0.35s ease' }}>
                {/* Red accent line */}
                <div className="rental-cat-line" style={{ position: 'absolute', top: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#cc0000', transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }} />
                <div style={{ color: '#666', transition: 'color 0.3s ease' }} className="rental-cat-icon">{cat.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#f5f5f5', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem', transition: 'color 0.3s ease' }} className="rental-cat-title">{cat.label}</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {cat.href === '#' ? 'Coming Soon' : 'View All →'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '3rem 2rem', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#f5f5f5', marginBottom: '0.3rem' }}>Real-Time Gear Availability</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', color: '#555', lineHeight: 1.6 }}>Check if your gear is free, see return dates, join the waitlist or source from our partner network.</p>
            </div>
          </div>
          <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', backgroundColor: '#cc0000', color: '#fff', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', whiteSpace: 'nowrap' }}>
            Book Gear Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      {/* ── POLICIES GRID ── */}
      <section id="policies" style={{ backgroundColor: '#050505', padding: '6rem 2rem', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#cc0000' }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cc0000' }}>Rental Policies</span>
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5f5f5', marginBottom: '3.5rem', lineHeight: 1.1 }}>
            Everything You<br /><span style={{ color: '#333' }}>Need to Know</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', backgroundColor: '#111' }}>
            {policies.map((p) => (
              <div key={p.title} style={{ backgroundColor: '#050505', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>{p.icon}</div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#f5f5f5', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.title}</h4>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#666', lineHeight: 1.7, maxWidth: '30ch' }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position: 'relative', padding: '6rem 2rem', textAlign: 'center', overflow: 'hidden', borderTop: '1px solid #111' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(204,0,0,0.1) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '1rem' }}>Ready to Shoot?</p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f5f5f5', lineHeight: 1.1, marginBottom: '2rem' }}>
            Let&apos;s Get Your<br />Production Moving
          </h2>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.8rem', backgroundColor: '#cc0000', color: '#fff', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
            Contact Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
