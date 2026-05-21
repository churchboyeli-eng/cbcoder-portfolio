import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Drones | CBCODER Rentals',
  description: 'Rent professional DJI drones for aerial photography and videography.',
};

const dronesData = [
  {
    name: 'DJI Mavic 4 Pro Drone',
    image: '/camera image/drone/DJI Mavic 4 Pro Drone.jpg',
    specs: [
      '4/3 CMOS Hasselblad Main Camera',
      'Up to 6K/60fps, 4K/120fps Video',
      '82 Min Max Flight Time',
      '30km Max Transmission Range',
      'Omnidirectional Obstacle Sensing',
    ],
    category: 'Pro Drone',
    dayRate: 95,
  },
  {
    name: 'DJI Air 3S Drone',
    image: '/camera image/drone/DJI Air 3S Drone.jpg',
    specs: [
      '1-inch CMOS Main Camera Sensor',
      '4K/60fps, Slow Motion 4K/100fps',
      '45 Min Max Flight Time',
      '20km Max Transmission Range',
      'APAS 5.0 Obstacle Avoidance',
    ],
    category: 'Aerial',
    dayRate: 65,
  },
  {
    name: 'DJI Mini 5 Pro Drone',
    image: '/camera image/drone/DJI Mini 5 Pro Drone.jpg',
    specs: [
      '1/1.3-inch CMOS Sensor',
      '4K/60fps HDR Video Recording',
      '51 Min Max Flight Time',
      '20km Max Transmission Range',
      'Under 249g, No Registration Required',
    ],
    category: 'Compact',
    dayRate: 50,
  },
  {
    name: 'DJI Mini 4 Pro Drone',
    image: '/camera image/drone/DJI Mini 4 Pro.jpg',
    specs: [
      '1/1.3-inch CMOS Sensor',
      '4K/60fps HDR Video Recording',
      '34 Min Max Flight Time (Standard)',
      '20km Max Transmission Range',
      'Omnidirectional Obstacle Sensing',
    ],
    category: 'Compact',
    dayRate: 40,
  },
];


const categoryColors: Record<string, string> = {'Pro Drone': '#cc0000', 'Aerial': '#1a1a1a', 'Compact': '#555'};
export default function DronesPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', padding: '120px 2rem 4rem 2rem' }}>

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.35rem 1.1rem', border: '1px solid rgba(204,0,0,0.3)', borderRadius: '2rem', background: 'rgba(204,0,0,0.05)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Rentals</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: '#0a0a0a' }}>
          Aerial <span style={{ color: '#cc0000' }}>&amp;</span> Drones
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/rentals" style={{ color: '#666', textDecoration: 'none' }}>Rentals</Link>
          <span>›</span>
          <span style={{ color: '#cc0000', fontWeight: 700 }}>Drones</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.78rem', color: '#888' }}>
          <span>📅 Daily rates excl. tax &amp; insurance</span>
          <span>📆 Week rate = 5 days charged as 4</span>
          <span>🕒 Mon–Fri collection after 3 PM</span>
        </div>
      </div>

      {/* ── DRONE CARDS GRID ── */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {dronesData.map((drone, index) => (
          <div key={index} className="camera-card" style={{ position: 'relative',
            border: '1px solid #eaeaea',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            transition: 'box-shadow 0.3s ease',
            cursor: 'pointer',
          }}>
            {/* Category badge */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.7rem', backgroundColor: categoryColors[drone.category || ''] || '#333', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>{drone.category}</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem' }}>
              <Image src={drone.image} alt={drone.name} fill style={{ objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, textAlign: 'center', marginBottom: '1rem', color: '#000', minHeight: '2.5rem' }}>
              {drone.name}
            </h3>
            <ul style={{ fontSize: '0.8rem', color: '#333', lineHeight: '1.6', marginBottom: '1rem', paddingLeft: '1.2rem', flexGrow: 1, width: '100%' }}>
              {drone.specs.map((spec, i) => <li key={i}>{spec}</li>)}
            </ul>
            <div style={{ textAlign: 'center', marginTop: 'auto', width: '100%', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#000', marginBottom: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>
                ${(drone.dayRate * 4).toLocaleString()} / WEEK excl. tax
              </div>
              <div className="price-day" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#cc0000', marginBottom: '1rem' }}>
                ${drone.dayRate.toLocaleString()} / DAY
              </div>
              <Link
                href={`/rentals/booking?item=${encodeURIComponent(drone.name)}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', backgroundColor: '#0a0a0a', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', width: '100%', justifyContent: 'center' }}
              >
                Book This Drone
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '4rem auto 0' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Professional Aerial Coverage</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Drone Equipment Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>
    </main>
  );
}
