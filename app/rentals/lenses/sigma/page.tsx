'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const lensesData = [
  {
    name: 'Sigma 24-70mm f/2.8 DG DN Art',
    image: '/camera-image/lenses/sigma/Sigma 24-70mm.jpg',
    category: 'Standard Zoom',
    dayRate: 22,
    bestFor: 'Documentary & Weddings',
    chips: ['Sony E / L-Mount', 'f/2.8 to f/22', 'Full-Frame', '2× FLD + 5× SLD', 'Linear AF Motor'],
  },
  {
    name: 'Sigma 70-200mm f/2.8 DG OS HSM Art',
    image: '/camera-image/lenses/sigma/Sigma 70-200mm.jpg',
    category: 'Tele Zoom',
    dayRate: 28,
    bestFor: 'Sports & Events',
    chips: ['Canon/Nikon EF', 'f/2.8 to f/22', 'Full-Frame', '4-Stop OS', 'HSM AF Motor'],
  },
  {
    name: 'Sigma MC-11 Mount Converter',
    image: '/camera-image/lenses/sigma/Sigma MC-11 Mount .jpg',
    category: 'Adapter',
    dayRate: 8,
    bestFor: 'Canon EF → Sony E',
    chips: ['EF to E-Mount', 'Phase-Detection AF', 'OSS Compatible', 'Auto Aperture', 'Full Electronic'],
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Standard Zoom': { bg: '#1a1a1a', text: '#fff' },
  'Tele Zoom':     { bg: '#cc0000', text: '#fff' },
  'Adapter':       { bg: '#555',    text: '#fff' },
};

const bestForColors: Record<string, string> = {
  'Documentary & Weddings': '#7c3aed',
  'Sports & Events':        '#cc0000',
  'Canon EF → Sony E':      '#0891b2',
};

const filters = ['All', 'Standard Zoom', 'Tele Zoom', 'Adapter'];

const brands = [
  { label: 'Sony',  href: '/rentals/lenses/sony',  active: false },
  { label: 'Nikon', href: '/rentals/lenses/nikon', active: false },
  { label: 'Canon', href: '/rentals/lenses/canon', active: false },
  { label: 'Sigma', href: '/rentals/lenses/sigma', active: true  },
];

export default function SigmaLensesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? lensesData : lensesData.filter(l => l.category === activeFilter);

  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh' }}>

      {/* ── HERO STRIP ── */}
      <div style={{ background: 'linear-gradient(135deg, #080808 0%, #181818 100%)', padding: '110px 2rem 3.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '220px', background: 'radial-gradient(ellipse, rgba(204,0,0,0.18) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.68rem', color: '#555', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/rentals" style={{ color: '#555', textDecoration: 'none' }}>Rentals</Link>
            <span>›</span>
            <Link href="/rentals/lenses" style={{ color: '#555', textDecoration: 'none' }}>Lenses</Link>
            <span>›</span>
            <span style={{ color: '#cc0000' }}>Sigma</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', padding: '0.3rem 1rem', border: '1px solid rgba(204,0,0,0.4)', borderRadius: '2rem', background: 'rgba(204,0,0,0.07)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000' }}>Sigma Art Series Lenses</span>
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(2.8rem,7vw,5rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#f5f5f5', lineHeight: 1, marginBottom: '1rem' }}>
            SIGMA <span style={{ color: '#cc0000' }}>LENSES</span>
          </h1>
          <p style={{ color: '#666', fontSize: '0.88rem', maxWidth: '42ch', margin: '0 auto 2.25rem', lineHeight: 1.8 }}>
            Sigma Art series lenses &amp; mount adapters — available for daily &amp; weekly hire. All prices exclude VAT and insurance.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: `${lensesData.length} Lenses In Stock`, icon: '🎯' },
              { label: 'Daily & Weekly Rates', icon: '📅' },
              { label: 'Mon–Fri After 3PM Collect', icon: '🕒' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.38rem 1rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '2rem', fontSize: '0.7rem', color: '#777' }}>
                <span>{s.icon}</span><span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY BRAND NAV ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#fff', borderBottom: '2px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', padding: '0.7rem 2rem' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ccc' }}>Switch Brand</span>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {brands.map(b => (
              <Link key={b.label} href={b.href} style={{ padding: '0.38rem 1rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', backgroundColor: b.active ? '#cc0000' : 'transparent', color: b.active ? '#fff' : '#777', border: b.active ? '1px solid #cc0000' : '1px solid #e0e0e0' }}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FILTER PILLS ── */}
      <div style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #eee', padding: '1.1rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ccc', marginRight: '0.25rem' }}>Filter</span>
          {filters.map(f => {
            const count = f === 'All' ? lensesData.length : lensesData.filter(l => l.category === f).length;
            const isActive = activeFilter === f;
            return (
              <button key={f} onClick={() => setActiveFilter(f)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.38rem 1rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', border: isActive ? '1.5px solid #cc0000' : '1.5px solid #e0e0e0', borderRadius: '2rem', backgroundColor: isActive ? '#cc0000' : '#fff', color: isActive ? '#fff' : '#666', cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: "'Outfit', sans-serif" }}>
                {f}
                <span style={{ fontSize: '0.58rem', backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : '#f0f0f0', color: isActive ? '#fff' : '#999', padding: '0.1rem 0.4rem', borderRadius: '1rem', fontWeight: 700 }}>{count}</span>
              </button>
            );
          })}
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: '#bbb', fontWeight: 600 }}>Showing {filtered.length} of {lensesData.length}</span>
        </div>
      </div>

      {/* ── LENS CARDS GRID ── */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {filtered.map((lens, index) => {
          const catColor = categoryColors[lens.category] || { bg: '#333', text: '#fff' };
          const bfColor  = bestForColors[lens.bestFor] || '#059669';
          return (
            <div key={index} className="camera-card" style={{ position: 'relative', border: '1px solid #eaeaea', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.7rem', backgroundColor: catColor.bg, borderRadius: '2px' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: catColor.text }}>{lens.category}</span>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1rem' }}>
                <Image src={lens.image} alt={lens.name} fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem', alignSelf: 'flex-start' }}>
                <span style={{ fontSize: '0.58rem', color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Best for</span>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: bfColor, backgroundColor: `${bfColor}14`, padding: '0.12rem 0.5rem', borderRadius: '1rem' }}>{lens.bestFor}</span>
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.9rem', color: '#000', minHeight: '2.5rem', width: '100%' }}>{lens.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem', width: '100%', justifyContent: 'center' }}>
                {lens.chips.map((chip, i) => (
                  <span key={i} style={{ fontSize: '0.62rem', fontWeight: 600, color: '#555', backgroundColor: '#f4f4f4', padding: '0.2rem 0.55rem', borderRadius: '2px', letterSpacing: '0.03em', border: '1px solid #ececec' }}>{chip}</span>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: 'auto', width: '100%', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#aaa', marginBottom: '0.3rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>${(lens.dayRate * 4).toLocaleString()} / week excl. tax</div>
                <div className="price-day" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#cc0000', marginBottom: '1rem' }}>${lens.dayRate.toLocaleString()} / DAY</div>
                <Link href={`/rentals/booking?item=${encodeURIComponent(lens.name)}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', backgroundColor: '#0a0a0a', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', width: '100%', justifyContent: 'center' }}>
                  Book This Lens
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', padding: '3.5rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '0 auto 4rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Sigma Art Series Lenses</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.9rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Sigma Lenses Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.4rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>

    </main>
  );
}
