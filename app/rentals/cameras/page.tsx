import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Cameras | CBCODER Rentals',
  description: 'Rent professional cinema, broadcast, and mirrorless cameras.',
};

const camerasData = [
  {
    name: 'Sony FX6 Full-Frame Cinema Camera',
    image: '/camera image/camera/sony fx 6.jpg',
    specs: [
      '4K Full-Frame 10.2MP CMOS Exmor R Sensor',
      'DCI 4K60p | UHD 4K120 | 1080p240',
      '15+ Stops of Dynamic Range in S-Log 3',
      'Phase Detection AF/Face Tracking/Eye AF'
    ],
    category: 'Cinema',
    dayRate: 135,
  },
  {
    name: 'Sony FX30 Digital Cinema Camera',
    image: '/camera image/camera/fx 30.jpg',
    specs: [
      '26.1MP APS-C BSI CMOS Sensor',
      'UHD 4K up to 120p',
      '10-Bit 4:2:2 XAVC S-I, 16-Bit Raw Output',
      'Phase Detection AF/Face Tracking/Eye AF'
    ],
    category: 'Cinema',
    dayRate: 45,
  },
  {
    name: 'Sony FX3 Full-Frame Cinema Camera',
    image: '/camera image/camera/fx3a_fx3.jpg',
    specs: [
      '12.1MP Full-Frame CMOS Exmor R Sensor',
      'UHD 4K up to 120p | 1080p up to 240p',
      '10-Bit 4:2:2 XAVC S-I, 16-Bit Raw Output',
      'S-Cinetone/S-Log3/HLG, 15+ Stops DR'
    ],
    category: 'Cinema',
    dayRate: 80,
  },
  {
    name: 'Sony Alpha a7 IV Mirrorless Camera',
    image: '/camera image/camera/Sony Alpha A7 IV.jpg',
    specs: [
      '33MP Full-Frame Exmor R CMOS Sensor',
      'Up to 10 fps Shooting, ISO 100-51200',
      '4K 60p Video in 10-Bit, S-Cinetone',
      '759-Point Fast Hybrid AF, Real-time Eye AF'
    ],
    category: 'Mirrorless',
    dayRate: 55,
  },
  {
    name: 'Canon EOS R5 C Mirrorless Cinema Camera',
    image: '/camera image/camera/Canon EOS R5 C Mirrorless Cinema Camera.jpg',
    specs: [
      '45MP Full-Frame CMOS Sensor',
      '8K 60p Cinema RAW Light Video',
      'Internal Cooling Fan for Unlimited Recording',
      'Dual Pixel CMOS AF with Eye AF'
    ],
    category: 'Cinema',
    dayRate: 95,
  },
  {
    name: 'Canon EOS R5 Mark II Mirrorless Camera',
    image: '/camera image/camera/Canon EOS R5 Mark II Mirrorless Camera.jpg',
    specs: [
      '45MP Stacked BSI CMOS Full-Frame Sensor',
      '8K 60p and 4K 120p Video Recording',
      'Advanced Dual Pixel Intelligent AF',
      'In-Body Image Stabilization'
    ],
    category: 'Mirrorless',
    dayRate: 85,
  },
  {
    name: 'Canon EOS R5 Mirrorless Camera',
    image: '/camera image/camera/Canon EOS R5 Mirrorless Camera.jpg',
    specs: [
      '45MP Full-Frame CMOS Sensor',
      '8K 30 Raw and 4K 120 10-Bit Internal Video',
      'Sensor-Shift 5-Axis Image Stabilization',
      'Dual Pixel CMOS AF II with 1053 Points'
    ],
    category: 'Mirrorless',
    dayRate: 75,
  },
  {
    name: 'Canon 5D Mark IV DSLR Camera',
    image: '/camera image/camera/Canon 5D Mark IV.jpg',
    specs: [
      '30.4MP Full-Frame CMOS Sensor',
      'DIGIC 6+ Image Processor',
      'DCI 4K Video at 30 fps; 8.8MP Still Grab',
      '61-Point High Density Reticular AF'
    ],
    category: 'DSLR',
    dayRate: 45,
  },
  {
    name: 'Nikon Z6 II Mirrorless Camera',
    image: '/camera image/camera/Nikon Z 6II .jpg',
    specs: [
      '24.5MP Full-Frame BSI CMOS Sensor',
      'Dual EXPEED 6 Image Processors',
      'UHD 4K30 Video; N-Log & 10-Bit HDMI Out',
      '273-Point Phase-Detect AF System'
    ],
    category: 'Mirrorless',
    dayRate: 50,
  },
  {
    name: 'Nikon Z5 Mirrorless Camera',
    image: '/camera image/camera/Nikon Z5 ll Mirrorless.jpg',
    specs: [
      '24.3MP Full-Frame CMOS Sensor',
      'EXPEED 6 Image Processor',
      'UHD 4K and Full HD Video Recording',
      '273-Point Hybrid AF System'
    ],
    category: 'Mirrorless',
    dayRate: 32,
  }
];


const categoryColors: Record<string, string> = {'Cinema': '#cc0000', 'Mirrorless': '#1a1a1a', 'DSLR': '#555'};
export default function CamerasPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', padding: '120px 2rem 4rem 2rem' }}>
      
      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', padding: '0.35rem 1.1rem', border: '1px solid rgba(204,0,0,0.3)', borderRadius: '2rem', background: 'rgba(204,0,0,0.05)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000' }}>Rentals</span>
        </div>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '1rem', color: '#0a0a0a' }}>
          Cinema <span style={{ color: '#cc0000' }}>&amp;</span> Mirrorless
        </h1>
        <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/rentals" style={{ color: '#666', textDecoration: 'none' }}>Rentals</Link>
          <span>›</span>
          <span style={{ color: '#cc0000', fontWeight: 700 }}>Cameras</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.78rem', color: '#888' }}>
          <span>📅 Daily rates excl. tax &amp; insurance</span>
          <span>📆 Week rate = 5 days charged as 4</span>
          <span>🕒 Mon–Fri collection after 3 PM</span>
        </div>
      </div>

      {/* ── CAMERA CARDS GRID ── */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        
        {camerasData.map((camera, index) => (
          <div key={index} className="camera-card" style={{ position: 'relative', border: '1px solid #eaeaea', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', transition: 'box-shadow 0.3s ease', cursor: 'pointer' }}>
            {/* Category badge */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.7rem', backgroundColor: categoryColors[camera.category || ''] || '#333', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>{camera.category}</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem' }}>
              <Image src={camera.image} alt={camera.name} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textAlign: 'center', marginBottom: '1rem', color: '#000', minHeight: '2.5rem' }}>
              {camera.name}
            </h3>
            <ul style={{ fontSize: '0.78rem', color: '#444', lineHeight: '1.7', marginBottom: '1rem', paddingLeft: '1.2rem', flexGrow: 1, width: '100%' }}>
              {camera.specs.map((spec, i) => <li key={i}>{spec}</li>)}
            </ul>
            <div style={{ textAlign: 'center', marginTop: 'auto', width: '100%', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', marginBottom: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ${(camera.dayRate * 4).toLocaleString()} / week excl. tax
              </div>
              <div className="price-day" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#cc0000', marginBottom: '1rem' }}>
                ${camera.dayRate.toLocaleString()} / DAY
              </div>
              <Link
                href={`/rentals/booking?item=${encodeURIComponent(camera.name)}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', backgroundColor: '#0a0a0a', color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', width: '100%', justifyContent: 'center' }}
              >
                Book This Camera
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        ))}

      </div>

      {/* ── BOOK CTA ── */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#0a0a0a', maxWidth: '700px', margin: '4rem auto 0' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Professional Cinema & Mirrorless Cameras</p>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#f5f5f5', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Camera Equipment Online</h2>
        <Link href="/rentals/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2.2rem', backgroundColor: '#cc0000', color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
          Check Availability →
        </Link>
      </div>
    </main>
  );
}
