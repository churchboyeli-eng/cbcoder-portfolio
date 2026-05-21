import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sound & Audio Equipment | CBCODER Rentals',
  description: 'Rent professional microphones, wireless audio systems and recorders for film, TV and photography.',
};

const soundData = [
  {
    name: 'DJI Mic 2 Wireless Microphone System',
    image: '/camera-image/sound/DJI Mic.jpg',
    category: 'Wireless',
    specs: [
      '2.4 GHz Wireless, Up to 300m Range',
      '48kHz / 24-bit High-Fidelity Audio',
      'Dual-Channel Transmission',
      'Built-in 8hr Battery, Charging Case',
      'Compatible with Camera, Phone & PC',
    ],
    dayRate: 25,
  },
  {
    name: 'DJI Lavalier Microphone (Wired)',
    image: '/camera-image/sound/DJI Lavalier.jpg',
    category: 'Lavalier',
    specs: [
      'Omnidirectional Condenser Mic',
      '20Hz–20kHz Frequency Response',
      'Ultra-Low Noise Floor: -42 dB',
      'Low-Cut Filter & Wind Reduction',
      'Clip-On Design, 1.5m Cable',
    ],
    dayRate: 10,
  },
  {
    name: 'RØDE VideoMic Pro+ Shotgun Mic',
    image: '/camera-image/sound/RODE VideoMic.jpg',
    category: 'Shotgun',
    specs: [
      'Super-Cardioid Directional Condenser',
      '20Hz–20kHz Frequency Response',
      'Auto-Power, High-Pass Filter',
      '+20dB Safety Channel, Rycote Lyre Mount',
      'Camera-Mountable, USB-C Rechargeable',
    ],
    dayRate: 18,
  },
  {
    name: 'Sony UWP-D27 Wireless Lavalier System',
    image: '/camera-image/sound/Sony UWP-D27.jpg',
    category: 'Wireless',
    specs: [
      'UHF Wireless, 30m Clear Range',
      'Built-In Lavalier Mic Included',
      'Auto-Scan & Auto-Lock Frequency',
      'Digital Audio Processing (DARS)',
      'Bodypack Transmitter + Receiver',
    ],
    dayRate: 35,
  },
  {
    name: 'Zoom H5 Studio 4-Track Recorder',
    image: '/camera-image/sound/Zoom H5studio 4.jpg',
    category: 'Recorder',
    specs: [
      '4-Input / 4-Track Simultaneous Recording',
      'XLR+TRS Combo Inputs with Phantom Power',
      '24-Bit / 96kHz Recording Quality',
      'Interchangeable Microphone Capsule System',
      'Rechargeable Battery, Compact Form',
    ],
    dayRate: 22,
  },
  {
    name: 'Zoom H4essential 4-Track Portable Recorder',
    image: '/camera-image/sound/Zoom H4essential 4.jpg',
    category: 'Recorder',
    specs: [
      '4-Track Simultaneous Recording',
      'Built-In XY Mic Array (90° / 120°)',
      '32-Bit Float Recording — No Clipping',
      'USB Audio Interface Mode',
      'SD Card Storage, Headphone Monitor Out',
    ],
    dayRate: 18,
  },
];

const categoryColors: Record<string, string> = {
  Wireless: '#cc0000',
  Lavalier: '#2563eb',
  Shotgun: '#059669',
  Recorder: '#7c3aed',
};

export default function SoundPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', padding: '120px 2rem 4rem 2rem' }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.35rem 1.1rem', border: '1px solid rgba(204,0,0,0.3)', borderRadius: '2rem', background: 'rgba(204,0,0,0.05)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Rentals</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: '#0a0a0a' }}>
          Sound <span style={{ color: '#cc0000' }}>&amp;</span> Audio
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/rentals" style={{ color: '#666', textDecoration: 'none' }}>Rentals</Link>
          <span>›</span>
          <span style={{ color: '#cc0000', fontWeight: 700 }}>Sound</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.78rem', color: '#888', marginTop: '0.5rem' }}>
          <span>📅 Daily rates excl. tax &amp; insurance</span>
          <span>📆 Week rate = 5 days charged as 4</span>
          <span>🕒 Mon–Fri collection after 3 PM</span>
        </div>
      </div>

      {/* ── GRID ── */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {soundData.map((item, index) => (
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
                Book This Mic
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '4rem auto 0' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Crystal Clear Audio for Every Production</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Sound Equipment Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>
    </main>
  );
}
