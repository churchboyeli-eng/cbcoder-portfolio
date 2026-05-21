'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const lensesData = [
  {
    name: 'Sony FE 16-35mm f/4 ZA OSS',
    image: '/camera-image/lenses/Sony/Sony FE 16-35mm f:4 ZA OSS Lens.webp',
    category: 'Wide Zoom',
    dayRate: 20,
    bestFor: 'Architecture & Landscapes',
    chips: ['Sony E-Mount', 'f/4 to f/22', 'Full-Frame', 'OSS Stabilization', 'ZEISS T*'],
  },
  {
    name: 'Sony FE 24-70mm f/2.8 GM',
    image: '/camera-image/lenses/Sony/Sony FE 24-70mm f:2.8 GM Lens .jpg',
    category: 'Standard Zoom',
    dayRate: 25,
    bestFor: 'Events & Weddings',
    chips: ['Sony E-Mount', 'f/2.8 to f/22', 'Full-Frame', 'G Master', 'Nano AR Coating'],
  },
  {
    name: 'Sony FE 24-70mm f/4 ZA OSS',
    image: '/camera-image/lenses/Sony/Sony FE 24-70mm f:4 ZA OSS Lens.jpg',
    category: 'Standard Zoom',
    dayRate: 16,
    bestFor: 'Travel & Vlogging',
    chips: ['Sony E-Mount', 'f/4 to f/22', 'Full-Frame', 'OSS Stabilization', 'ZEISS T*'],
  },
  {
    name: 'Sony FE 24-105mm f/4 G OSS',
    image: '/camera-image/lenses/Sony/Sony FE 24-105mm f:4 G OSS Lens.jpg',
    category: 'Standard Zoom',
    dayRate: 22,
    bestFor: 'Documentary & Run & Gun',
    chips: ['Sony E-Mount', 'f/4 to f/22', 'Full-Frame', 'OSS Stabilization', '4× Aspherical'],
  },
  {
    name: 'Sony FE PZ 16-35mm f/4 G',
    image: '/camera-image/lenses/Sony/Sony FE PZ 16-35mm.jpg',
    category: 'Wide Zoom',
    dayRate: 22,
    bestFor: 'Video & Broadcast',
    chips: ['Sony E-Mount', 'f/4 to f/22', 'Full-Frame', 'Power Zoom', 'Linear AF Motor'],
  },
  {
    name: 'Sony FE 35mm f/1.8',
    image: '/camera-image/lenses/Sony/Sony FE 35mm f:1.8 Lens .jpg',
    category: 'Prime',
    dayRate: 15,
    bestFor: 'Street & Narrative Film',
    chips: ['Sony E-Mount', 'f/1.8 to f/22', 'Full-Frame', 'Nano AR Coating', 'DD SSM AF'],
  },
  {
    name: 'Sony FE 50mm f/1.8',
    image: '/camera-image/lenses/Sony/Sony FE 50mm.jpg',
    category: 'Prime',
    dayRate: 12,
    bestFor: 'Everyday & Portraits',
    chips: ['Sony E-Mount', 'f/1.8 to f/22', 'Full-Frame', 'Compact & Lightweight'],
  },
  {
    name: 'Sony FE 70-200mm f/2.8 GM OSS',
    image: '/camera-image/lenses/Sony/Sony FE 70-200mm f:2.8 GM OSS Lens.jpg',
    category: 'Tele Zoom',
    dayRate: 32,
    bestFor: 'Sports & Wildlife',
    chips: ['Sony E-Mount', 'f/2.8 to f/22', 'Full-Frame', 'G Master', 'OSS Stabilization'],
  },
  {
    name: 'Sony FE 70-200mm f/4 G OSS',
    image: '/camera-image/lenses/Sony/Sony FE 70-200mm f:4 G OSS Lens.jpg',
    category: 'Tele Zoom',
    dayRate: 25,
    bestFor: 'Outdoor Events & Nature',
    chips: ['Sony E-Mount', 'f/4 to f/22', 'Full-Frame', 'OSS Stabilization', '4× ED Elements'],
  },
  {
    name: 'Sony FE 85mm f/1.8',
    image: '/camera-image/lenses/Sony/Sony FE 85mm f:1.8 Lens .jpg',
    category: 'Prime',
    dayRate: 16,
    bestFor: 'Portraits & Headshots',
    chips: ['Sony E-Mount', 'f/1.8 to f/22', 'Full-Frame', 'Nano AR Coating', '2× ED Elements'],
  },
  {
    name: 'Sigma 85mm f/1.4 Art (Sony E)',
    image: '/camera-image/lenses/Sony/Sigma 85mm sony.jpg',
    category: 'Prime',
    dayRate: 20,
    bestFor: 'Cinematic Portraits',
    chips: ['Sony E-Mount', 'f/1.4 to f/16', 'Full-Frame', 'Art Series', 'HSM AF Motor'],
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Wide Zoom':      { bg: '#2563eb', text: '#fff' },
  'Standard Zoom':  { bg: '#1a1a1a', text: '#fff' },
  'Tele Zoom':      { bg: '#cc0000', text: '#fff' },
  'Prime':          { bg: '#059669', text: '#fff' },
};

const bestForColors: Record<string, string> = {
  'Architecture & Landscapes': '#2563eb',
  'Events & Weddings':         '#7c3aed',
  'Travel & Vlogging':         '#0891b2',
  'Documentary & Run & Gun':   '#b45309',
  'Video & Broadcast':         '#0891b2',
  'Street & Narrative Film':   '#1a1a1a',
  'Everyday & Portraits':      '#059669',
  'Sports & Wildlife':         '#cc0000',
  'Outdoor Events & Nature':   '#059669',
  'Portraits & Headshots':     '#7c3aed',
  'Cinematic Portraits':       '#cc0000',
};

const filters = ['All', 'Wide Zoom', 'Standard Zoom', 'Tele Zoom', 'Prime'];

const brands = [
  { label: 'Sony',  href: '/rentals/lenses/sony',  active: true },
  { label: 'Nikon', href: '/rentals/lenses/nikon', active: false },
  { label: 'Canon', href: '/rentals/lenses/canon', active: false },
  { label: 'Sigma', href: '/rentals/lenses/sigma', active: false },
];

export default function SonyLensesClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? lensesData
    : lensesData.filter(l => l.category === activeFilter);

  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh' }}>

      {/* ── HERO STRIP ── */}
      <div style={{ background: 'linear-gradient(135deg, #080808 0%, #181818 100%)', padding: '110px 2rem 3.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* grid texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0, pointerEvents: 'none' }} />
        {/* red glow */}
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '220px', background: 'radial-gradient(ellipse, rgba(204,0,0,0.18) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.68rem', color: '#555', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/rentals" style={{ color: '#555', textDecoration: 'none' }}>Rentals</Link>
            <span>›</span>
            <Link href="/rentals/lenses" style={{ color: '#555', textDecoration: 'none' }}>Lenses</Link>
            <span>›</span>
            <span style={{ color: '#cc0000' }}>Sony</span>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', padding: '0.3rem 1rem', border: '1px solid rgba(204,0,0,0.4)', borderRadius: '2rem', background: 'rgba(204,0,0,0.07)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000' }}>Sony FE Full-Frame System</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(2.8rem,7vw,5rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#f5f5f5', lineHeight: 1, marginBottom: '1rem' }}>
            SONY <span style={{ color: '#cc0000' }}>LENSES</span>
          </h1>
          <p style={{ color: '#666', fontSize: '0.88rem', maxWidth: '42ch', margin: '0 auto 2.25rem', lineHeight: 1.8 }}>
            Full-frame Sony FE optics available for daily &amp; weekly hire. All prices exclude VAT and insurance.
          </p>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: `${lensesData.length} Lenses In Stock`, icon: '🎯' },
              { label: 'Daily & Weekly Rates', icon: '📅' },
              { label: 'Mon–Fri After 3PM Collect', icon: '🕒' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.38rem 1rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '2rem', fontSize: '0.7rem', color: '#777', letterSpacing: '0.04em' }}>
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
              <Link key={b.label} href={b.href} style={{
                padding: '0.38rem 1rem',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                textDecoration: 'none', borderRadius: '2px',
                backgroundColor: b.active ? '#cc0000' : 'transparent',
                color: b.active ? '#fff' : '#777',
                border: b.active ? '1px solid #cc0000' : '1px solid #e0e0e0',
              }}>
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
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.38rem 1rem',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                border: isActive ? '1.5px solid #cc0000' : '1.5px solid #e0e0e0',
                borderRadius: '2rem',
                backgroundColor: isActive ? '#cc0000' : '#fff',
                color: isActive ? '#fff' : '#666',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'Outfit', sans-serif",
              }}>
                {f}
                <span style={{ fontSize: '0.58rem', backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : '#f0f0f0', color: isActive ? '#fff' : '#999', padding: '0.1rem 0.4rem', borderRadius: '1rem', fontWeight: 700 }}>
                  {count}
                </span>
              </button>
            );
          })}
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: '#bbb', fontWeight: 600 }}>
            Showing {filtered.length} of {lensesData.length}
          </span>
        </div>
      </div>

      {/* ── LENS CARDS GRID ── */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2.5rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {filtered.map((lens, index) => {
          const catColor = categoryColors[lens.category] || { bg: '#333', text: '#fff' };
          const bfColor  = bestForColors[lens.bestFor] || '#059669';
          return (
            <div key={index} className="camera-card" style={{
              position: 'relative',
              border: '1px solid #eaeaea',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              cursor: 'pointer',
            }}>
              {/* Category badge */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.7rem', backgroundColor: catColor.bg, borderRadius: '2px' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: catColor.text }}>{lens.category}</span>
              </div>

              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1rem' }}>
                <Image src={lens.image} alt={lens.name} fill style={{ objectFit: 'contain' }} />
              </div>

              {/* Best For tag */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem', alignSelf: 'flex-start' }}>
                <span style={{ fontSize: '0.58rem', color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Best for</span>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: bfColor, backgroundColor: `${bfColor}14`, padding: '0.12rem 0.5rem', borderRadius: '1rem' }}>
                  {lens.bestFor}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.9rem', color: '#000', minHeight: '2.5rem', width: '100%' }}>
                {lens.name}
              </h3>

              {/* Spec Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem', width: '100%', justifyContent: 'center' }}>
                {lens.chips.map((chip, i) => (
                  <span key={i} style={{ fontSize: '0.62rem', fontWeight: 600, color: '#555', backgroundColor: '#f4f4f4', padding: '0.2rem 0.55rem', borderRadius: '2px', letterSpacing: '0.03em', border: '1px solid #ececec' }}>
                    {chip}
                  </span>
                ))}
              </div>

              {/* Price row */}
              <div style={{ textAlign: 'center', marginTop: 'auto', width: '100%', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#aaa', marginBottom: '0.3rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  ${(lens.dayRate * 4).toLocaleString()} / week excl. tax
                </div>
                <div className="price-day" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#cc0000', marginBottom: '1rem' }}>
                  ${lens.dayRate.toLocaleString()} / DAY
                </div>
                {/* Book button */}
                <Link
                  href={`/rentals/booking?item=${encodeURIComponent(lens.name)}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.65rem 1.4rem',
                    backgroundColor: '#0a0a0a', color: '#fff',
                    fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    textDecoration: 'none', borderRadius: '2px',
                    width: '100%', justifyContent: 'center',
                  }}
                >
                  Book This Lens
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* ── BOOK CTA BANNER ── */}
      <div style={{ textAlign: 'center', padding: '3.5rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '0 auto 4rem' }}>
        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Sony FE Full-Frame Lenses</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.9rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Lens Equipment Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.4rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>

    </main>
  );
}
