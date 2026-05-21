import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Grips, Gimbals & Tripods | CBCODER Rentals',
  description: 'Rent professional tripods, fluid heads, gimbals and grip equipment.',
};

const gripsData = [
  // ── Gimbals & Stabilisers ──────────────────────────────────
  {
    name: 'DJI RS 5 Pro Gimbal Stabilizer',
    image: '/camera image/grips/DJI RS 5 Gimbal.jpg',
    category: 'Gimbal',
    specs: [
      'Payload: Up to 4.5 kg / 9.9 lb',
      '3-Axis Motorized Stabilization',
      'Automated Axis Locks & Touchscreen',
      'SuperSmooth Mode & ActiveTrack 5.0',
      'Native Vertical Shooting Support',
    ],
    dayRate: 35,
  },
  {
    name: 'DJI RS 4 Pro Gimbal Stabilizer',
    image: '/camera image/grips/DJI RS 4 Pro.jpg',
    category: 'Gimbal',
    specs: [
      'Payload: Up to 3 kg / 6.6 lb',
      '3-Axis Stabilization, OLED Display',
      'LiDAR Focus Motor Support',
      'Bluetooth Shutter & 1.8" Touchscreen',
      'Extended Battery Life: 13 Hours',
    ],
    dayRate: 28,
  },
  {
    name: 'DJI RS 4 Mini Gimbal Stabilizer',
    image: '/camera image/grips/DJI RS 4 Mini.jpg',
    category: 'Gimbal',
    specs: [
      'Payload: Up to 2 kg / 4.4 lb',
      '3-Axis Motorized, Ultra-Lightweight',
      'Auto-Axis Locks, Foldable Design',
      'Bluetooth Shutter Control',
      'Ideal for Mirrorless & Action Cams',
    ],
    dayRate: 18,
  },
  {
    name: 'DJI Osmo Pocket 3 Creator Combo',
    image: '/camera image/grips/DJI Osmo Pocket 3.jpg',
    category: 'Gimbal',
    specs: [
      '1-inch CMOS Sensor, f/2.0 Aperture',
      '4K/120fps Video Recording',
      '3-Axis Motorized Stabilization',
      '2-inch OLED Rotatable Touchscreen',
      'ActiveTrack 6.0 Subject Tracking',
    ],
    dayRate: 22,
  },
  {
    name: 'DJI Osmo Mobile 6 Smartphone Gimbal',
    image: '/camera image/grips/DJI Osmo.jpg',
    category: 'Gimbal',
    specs: [
      'Payload: Smartphones up to 300g',
      '3-Axis Stabilization, Foldable',
      'ActiveTrack 6.0 & Built-in Extension Rod',
      'Magnetic Quick-Clamp Mount',
      '15 Hours Battery Life',
    ],
    dayRate: 12,
  },
  // ── Tripods & Fluid Heads ──────────────────────────────────
  {
    name: 'Sachtler 18 S2 Fluid Head & CF Tripod System',
    image: '/camera image/grips/Sachtler 18 S2 Fluid Head & CF Tripod System .jpg',
    category: 'Tripod',
    specs: [
      'Payload: Up to 18 kg / 39.7 lb',
      'Fluid Head with Step-Less Counterbalance',
      'Carbon Fiber Tripod, Ground Spreader',
      'Touch & Go Plate Quick Release',
      'Dual Pan & Tilt Drag Control',
    ],
    dayRate: 45,
  },
  {
    name: 'Manfrotto 502 / 504 Video Tripod System',
    image: '/camera image/grips/Manfrotto 502 : 504 Tripod .jpg',
    category: 'Tripod',
    specs: [
      'Payload: Up to 7 kg / 15.4 lb',
      'Flat Base Fluid Video Head',
      'Twin Leg Carbon Fiber Tripod',
      'Adjustable Counterbalance System',
      'Pan & Tilt Lock, Bubble Level',
    ],
    dayRate: 22,
  },
  {
    name: 'SmallRig CT-10 Aluminum Travel Tripod',
    image: '/camera image/grips/SmallRig CT-10 Aluminum Travel Tripod with Ball Head.jpg',
    category: 'Tripod',
    specs: [
      'Payload: Up to 10 kg / 22 lb',
      'Arca-Swiss Compatible Ball Head',
      'Aluminum Alloy Construction',
      '5-Section Leg, 360° Panoramic Rotation',
      'Compact & Lightweight for Travel',
    ],
    dayRate: 16,
  },
  {
    name: 'E-Image Professional Tripod System',
    image: '/camera image/grips/E-Image Tripods.jpg',
    category: 'Tripod',
    specs: [
      'Payload: Up to 12 kg',
      'Fluid Drag Video Head',
      'Carbon Fiber / Aluminum Legs',
      'Mid-Level Spreader, Rubber Feet',
      'Quick Release Plate Included',
    ],
    dayRate: 20,
  },
  {
    name: 'Magnus LM-700 Video Monopod',
    image: '/camera image/grips/Magnus LM-700.jpg',
    category: 'Monopod',
    specs: [
      'Payload: Up to 7 kg / 15.4 lb',
      'Fluid Head with Pan & Tilt',
      '5-Section Aluminum Monopod',
      'Twist-Lock Leg Sections',
      'Folding Foot Support Base',
    ],
    dayRate: 12,
  },
  {
    name: 'Oben CTT-1000 Carbon Fiber Tabletop Tripod',
    image: '/camera image/grips/Oben CTT-1000 Carbon Fiber Tabletop Tripod.jpg',
    category: 'Tripod',
    specs: [
      'Payload: Up to 3 kg / 6.6 lb',
      'Carbon Fiber Construction',
      'Ball Head with Quick Release',
      '3-Section Legs, Rubber Feet',
      'Ultra-Compact for Low-Angle Shots',
    ],
    dayRate: 8,
  },
  {
    name: 'K&F Concept T254A7 Carbon Fiber Tripod',
    image: '/camera image/grips/K&F Concept T254A7.jpg',
    category: 'Tripod',
    specs: [
      'Payload: Up to 10 kg / 22 lb',
      '10-Layer Carbon Fiber Legs',
      'Magnesium Alloy Ball Head',
      '4-Section Legs, Center Column',
      'Arca-Swiss Quick Release Plate',
    ],
    dayRate: 15,
  },
];

const categoryColors: Record<string, string> = {
  Gimbal: '#cc0000',
  Tripod: '#1a1a1a',
  Monopod: '#555',
};

export default function GripsPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', padding: '120px 2rem 4rem 2rem' }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.35rem 1.1rem', border: '1px solid rgba(204,0,0,0.3)', borderRadius: '2rem', background: 'rgba(204,0,0,0.05)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Rentals</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: '#0a0a0a' }}>
          Grips, Gimbals <span style={{ color: '#cc0000' }}>&amp;</span> Tripods
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/rentals" style={{ color: '#666', textDecoration: 'none' }}>Rentals</Link>
          <span>›</span>
          <span style={{ color: '#cc0000', fontWeight: 700 }}>Grips</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.78rem', color: '#888', marginTop: '0.5rem' }}>
          <span>📅 Daily rates excl. tax &amp; insurance</span>
          <span>📆 Week rate = 5 days charged as 4</span>
          <span>🕒 Mon–Fri collection after 3 PM</span>
        </div>
      </div>

      {/* ── GRID ── */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {gripsData.map((item, index) => (
          <div key={index} className="camera-card" style={{ border: '1px solid #eaeaea', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', transition: 'box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            {/* Category badge */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.7rem', backgroundColor: categoryColors[item.category] || '#333', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>{item.category}</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem' }}>
              <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 className="rental-cat-title" style={{ fontSize: '0.95rem', fontWeight: 800, textAlign: 'center', marginBottom: '1rem', color: '#000', minHeight: '2.5rem' }}>
              {item.name}
            </h3>
            <ul style={{ fontSize: '0.78rem', color: '#444', lineHeight: '1.7', marginBottom: '1rem', paddingLeft: '1.2rem', flexGrow: 1, width: '100%' }}>
              {item.specs.map((spec, i) => <li key={i}>{spec}</li>)}
            </ul>
            <div style={{ textAlign: 'center', marginTop: 'auto', width: '100%', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', marginBottom: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ${(item.dayRate * 4).toLocaleString()} / week excl. tax
              </div>
              <div className="price-day" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#cc0000', marginBottom: '1rem' }}>
                ${item.dayRate.toLocaleString()} / DAY
              </div>
              <Link
                href={`/rentals/booking?item=${encodeURIComponent(item.name)}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', backgroundColor: '#0a0a0a', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', width: '100%', justifyContent: 'center' }}
              >
                Book This Grip
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '4rem auto 0' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Ready to Stabilise Your Shot?</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Grips &amp; Gimbals Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>
    </main>
  );
}
