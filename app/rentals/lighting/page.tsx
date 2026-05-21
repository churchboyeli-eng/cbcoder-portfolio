import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Lighting Equipment | CBCODER Rentals',
  description: 'Rent professional studio lights, LED panels, strobes and flash equipment for film and photography.',
};

const lightingData = [
  {
    name: 'Aputure 600D Mark II LED Fresnel',
    image: '/camera-image/lighting/Aputure 600D LED.jpg',
    category: 'LED Fresnel',
    specs: [
      '600W Daylight LED (5600K)',
      'Bowens Mount, Fresnel Lens Compatible',
      'CRI / TLCI 96+, 80,000+ Lux Output',
      'Wireless DMX & Sidus Link App Control',
      'IP54 Weatherproof Housing',
    ],
    dayRate: 75,
  },
  {
    name: 'Aputure Amaran 200D LED Light',
    image: '/camera-image/lighting/Aputure Amaran.jpg',
    category: 'LED Panel',
    specs: [
      '200W Daylight LED (5600K)',
      'Bowens Mount Compatible',
      'CRI / TLCI 95+, Hyper Reflector Included',
      'Sidus Link Bluetooth App Control',
      'Lightweight Fanless Cooling Design',
    ],
    dayRate: 45,
  },
  {
    name: 'GVM 150W RGB LED Video Light',
    image: '/camera-image/lighting/GVM 150W Video.jpg',
    category: 'RGB LED',
    specs: [
      '150W Full-Color RGB + Bi-Color',
      'CCT Range: 3200K–5600K, Hue 0–360°',
      'CRI 97+ / TLCI 98+',
      'App Control via GVM Pro',
      '14 Scene Lighting Effects Built-In',
    ],
    dayRate: 38,
  },
  {
    name: 'Godox AD400Pro Outdoor Flash',
    image: '/camera-image/lighting/Godox AD400Pro.jpg',
    category: 'Strobe',
    specs: [
      '400Ws Li-Ion Battery-Powered Strobe',
      '1/1 to 1/256 Power Range, HSS Support',
      'Color Temperature: 5800K ±200K',
      '360° Rotating Head, Bowens Mount',
      'Godox X System 2.4G Wireless Control',
    ],
    dayRate: 55,
  },
  {
    name: 'Godox TT600 Thinklite Flash',
    image: '/camera-image/lighting/Godox TT600.jpg',
    category: 'Flash',
    specs: [
      'GN60 Guide Number, Manual 1/1–1/128',
      'Built-In 2.4G X Wireless System',
      'Optical Master / Slave Mode',
      'Multi-Flash Stroboscopic Function',
      'Tilting & Rotating Flash Head',
    ],
    dayRate: 18,
  },
  {
    name: 'Godox V1 Round Head Flash',
    image: '/camera-image/lighting/Godox V1.jpg',
    category: 'Flash',
    specs: [
      'Round Head Design, GN92 Guide Number',
      '76Wh Li-Ion Battery, 480 Full Flashes',
      'HSS, TTL, Manual 1/1–1/128',
      'Built-In 2.4G X Wireless System',
      'Magnetic Accessories Mount',
    ],
    dayRate: 22,
  },
  {
    name: 'NEEWER 35" Octagonal Softbox',
    image: '/camera-image/lighting/NEEWER 35.jpg',
    category: 'Modifier',
    specs: [
      '35" / 90cm Octagonal Softbox',
      'Bowens Mount Speed Ring Included',
      'Double Diffusion Cloth for Soft Light',
      'Collapsible Design, Carry Bag',
      'Compatible with Most Strobe / Monolight',
    ],
    dayRate: 12,
  },
  {
    name: 'Bolt VD-420 Vertical Light Stand',
    image: '/camera-image/lighting/Bolt VD-420.jpg',
    category: 'Stand',
    specs: [
      'Max Height: 13.4 ft / 4.1 m',
      'Payload Capacity: 17.6 lb / 8 kg',
      'Air-Cushioned Center Column',
      'Lightweight Aluminum Construction',
      'Folding Legs with Rubber Feet',
    ],
    dayRate: 8,
  },
  {
    name: 'ZHIYUN MOLUS X100 Portable COB Light',
    image: '/camera-image/lighting/ZHIYUN .jpg',
    category: 'COB LED',
    specs: [
      '100W Bi-Color COB (2700K–6500K)',
      'CRI 96+ / TLCI 97+, 10,000+ Lux',
      'Ultra-Compact & Fanless Design',
      'Bowens Mount, ZY Mount Adapter',
      'Wireless App + Physical Dial Control',
    ],
    dayRate: 40,
  },
];

const categoryColors: Record<string, string> = {
  'LED Fresnel': '#cc0000',
  'LED Panel':   '#1a1a1a',
  'RGB LED':     '#7c3aed',
  'Strobe':      '#059669',
  'Flash':       '#2563eb',
  'Modifier':    '#b45309',
  'Stand':       '#555',
  'COB LED':     '#dc2626',
};

export default function LightingPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', padding: '120px 2rem 4rem 2rem' }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.35rem 1.1rem', border: '1px solid rgba(204,0,0,0.3)', borderRadius: '2rem', background: 'rgba(204,0,0,0.05)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Rentals</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: '#0a0a0a' }}>
          Lighting <span style={{ color: '#cc0000' }}>&amp;</span> Strobes
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/rentals" style={{ color: '#666', textDecoration: 'none' }}>Rentals</Link>
          <span>›</span>
          <span style={{ color: '#cc0000', fontWeight: 700 }}>Lighting</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.78rem', color: '#888', marginTop: '0.5rem' }}>
          <span>📅 Daily rates excl. tax &amp; insurance</span>
          <span>📆 Week rate = 5 days charged as 4</span>
          <span>🕒 Mon–Fri collection after 3 PM</span>
        </div>
      </div>

      {/* ── GRID ── */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {lightingData.map((item, index) => (
          <div key={index} className="camera-card" style={{ border: '1px solid #eaeaea', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', cursor: 'pointer', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.7rem', backgroundColor: categoryColors[item.category] || '#333', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>{item.category}</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem' }}>
              <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textAlign: 'center', marginBottom: '1rem', color: '#000', minHeight: '2.5rem' }}>
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
                Book This Light
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '4rem auto 0' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Light Every Scene Perfectly</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Lighting Equipment Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>
    </main>
  );
}
