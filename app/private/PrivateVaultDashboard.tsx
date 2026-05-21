'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivateVaultDashboard() {
  const [activeTab, setActiveTab] = useState<'photography' | 'video' | 'information'>('photography');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/vault-login', { method: 'DELETE' });
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoggingOut(false);
    }
  };

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/600x800/111111/444444?text=Upload+to+/private-photos/';
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#f5f5f5', fontFamily: "'Outfit', sans-serif", minHeight: '100vh' }}>
      
      {/* NAVBAR */}
      <nav className="nav" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(5, 5, 5, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        boxSizing: 'border-box',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <a href="#" className="nav-brand" style={{
          fontSize: '1.2rem',
          fontWeight: 800,
          letterSpacing: '0.2em',
          color: '#fff',
          textDecoration: 'none'
        }}>
          CB<span style={{ color: '#cc0000' }}>CODER</span>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button
            onClick={() => setActiveTab('photography')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'photography' ? '#cc0000' : '#888',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.3s'
            }}
          >
            Photography
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'video' ? '#cc0000' : '#888',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.3s'
            }}
          >
            Video
          </button>
          <button
            onClick={() => setActiveTab('information')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'information' ? '#cc0000' : '#888',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.3s'
            }}
          >
            Information
          </button>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            style={{
              background: 'none',
              border: 'none',
              color: '#cc0000',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            {loggingOut ? 'Exiting...' : 'Exit'}
          </button>
        </div>
      </nav>

      {/* HERO HERO */}
      <section className="hero" style={{
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        marginTop: '5rem'
      }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>
            {activeTab === 'photography' && 'Private Archive'}
            {activeTab === 'video' && 'Motion & Video'}
            {activeTab === 'information' && 'Investment'}
          </h1>
          <p style={{ color: '#cc0000', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', fontWeight: 600, marginTop: '1rem' }}>
            {activeTab === 'photography' && 'Selected Stills'}
            {activeTab === 'video' && 'Selected Cinematic Cuts'}
            {activeTab === 'information' && 'Details, Packages & Process'}
          </p>
        </div>
      </section>

      {/* PHOTOGRAPHY TAB */}
      {activeTab === 'photography' && (
        <section className="section active" style={{ padding: '6rem 2rem', maxWidth: '1600px', margin: '0 auto' }}>
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Photography</h2>
            <div className="section-line" style={{ height: '1px', background: 'rgba(255,255,255,0.1)', flexGrow: 1 }} />
          </div>
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            <div className="gallery-item" onClick={() => openLightbox('private-photos/img1.jpg')} style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#111', cursor: 'pointer', position: 'relative' }}>
              <img
                src="private-photos/img1.jpg"
                onError={handleImageError}
                alt="Vault Archive 1"
                className="gallery-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s', filter: 'grayscale(20%)' }}
              />
            </div>
            <div className="gallery-item" onClick={() => openLightbox('private-photos/img2.jpg')} style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#111', cursor: 'pointer', position: 'relative' }}>
              <img
                src="private-photos/img2.jpg"
                onError={handleImageError}
                alt="Vault Archive 2"
                className="gallery-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s', filter: 'grayscale(20%)' }}
              />
            </div>
            <div className="gallery-item" onClick={() => openLightbox('private-photos/img3.jpg')} style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#111', cursor: 'pointer', position: 'relative' }}>
              <img
                src="private-photos/img3.jpg"
                onError={handleImageError}
                alt="Vault Archive 3"
                className="gallery-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s', filter: 'grayscale(20%)' }}
              />
            </div>
          </div>
        </section>
      )}

      {/* VIDEO TAB */}
      {activeTab === 'video' && (
        <section className="section active" style={{ padding: '6rem 2rem', maxWidth: '1600px', margin: '0 auto' }}>
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Motion & Video</h2>
            <div className="section-line" style={{ height: '1px', background: 'rgba(255,255,255,0.1)', flexGrow: 1 }} />
          </div>
          <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
            <div className="video-container" style={{ background: '#111', aspectRatio: '16/9', width: '100%' }}>
              <video controls poster="private-videos/poster1.jpg" style={{ width: '100%', height: '100%' }}>
                <source src="private-videos/vid1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="video-container" style={{ background: '#111', aspectRatio: '16/9', width: '100%' }}>
              <video controls poster="private-videos/poster2.jpg" style={{ width: '100%', height: '100%' }}>
                <source src="private-videos/vid2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* INFORMATION TAB */}
      {activeTab === 'information' && (
        <section className="section active" style={{ padding: '6rem 2rem', maxWidth: '1600px', margin: '0 auto' }}>
          
          <div className="luxury-pricing" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            border: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '5rem',
            background: '#0a0a0a'
          }}>
            <div className="pricing-image" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              filter: 'grayscale(100%) contrast(1.2)',
              transition: 'filter 0.5s'
            }}></div>
            <div className="pricing-details" style={{ padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem', color: '#fff', fontWeight: 400 }}>Package III</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', fontSize: '0.95rem', color: '#aaa', lineHeight: 2 }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>13 Hours Wedding Coverage</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>2 Professional Photographers</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>1 Assistant (Non-Shooting)</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>Approx. 800 Beautifully Edited Images</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>Online Private Gallery (Active for 1 Year)</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>One Premium 20-Page Wedding Album</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>Unlimited Private Use Rights</li>
              </ul>
              <div className="pricing-amount" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#cc0000', letterSpacing: '0.05em' }}>TSHS 4,500,000</div>
              <div className="pricing-note" style={{ fontStyle: 'italic', fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>Perfect for full-day wedding coverage. <br />*Excludes transport and accommodation.</div>
            </div>
          </div>

          <div className="magazine-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
            <div className="magazine-block">
              <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #cc0000', display: 'inline-block', fontWeight: 400 }}>Curated Add-Ons</h4>
              <div className="add-ons" style={{ textAlign: 'left', width: '100%' }}>
                <div className="add-on-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                  <span className="add-on-title" style={{ color: '#fff', fontWeight: 600 }}>Additional Hours</span>
                  <span className="add-on-price" style={{ color: '#cc0000' }}>200,000 / HR</span>
                </div>
                <div className="add-on-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                  <span className="add-on-title" style={{ color: '#fff', fontWeight: 600 }}>Welcome Dinner</span>
                  <span className="add-on-price" style={{ color: '#cc0000' }}>600,000</span>
                </div>
                <div className="add-on-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                  <span className="add-on-title" style={{ color: '#fff', fontWeight: 600 }}>After Wedding Shoot</span>
                  <span className="add-on-price" style={{ color: '#cc0000' }}>500,000</span>
                </div>
                <div className="add-on-item" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                  <span className="add-on-title" style={{ color: '#fff', fontWeight: 600 }}>Exclusive Rights</span>
                  <span className="add-on-price" style={{ color: '#cc0000' }}>25% OF TOTAL</span>
                </div>
              </div>
            </div>

            <div className="magazine-block">
              <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #cc0000', display: 'inline-block', fontWeight: 400 }}>Our Philosophy</h4>
              <p style={{ color: '#999', lineHeight: 1.8, fontSize: '0.95rem' }}>Our philosophy is rooted in complete transparency. It&apos;s crucial to us that you understand the foundation of our business. If you ever have questions beyond what is detailed here, we are always available to guide you.</p>
            </div>

            <div className="magazine-block">
              <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #cc0000', display: 'inline-block', fontWeight: 400 }}>Booking &amp; Dates</h4>
              <p style={{ color: '#999', lineHeight: 1.8, fontSize: '0.95rem' }}>From your initial inquiry to a confirmed booking, the process may take a few weeks. We offer a 10-day validity on our proposal while you make your decision. To officially secure your wedding date, a 50% retainer of the contract value is required.</p>
            </div>

            <div className="magazine-block">
              <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #cc0000', display: 'inline-block', fontWeight: 400 }}>Editing &amp; Delivery</h4>
              <p style={{ color: '#999', lineHeight: 1.8, fontSize: '0.95rem' }}>Post-processing is where the cinematic magic happens. We deliver high-resolution JPG/MP4 files (no RAW files). You will receive your files via a password-protected online gallery and a physical USB drive. Please allow <strong>8 to 14 weeks</strong> for the final delivery of your cinematic memories.</p>
            </div>
          </div>

          <div className="copyright-box" style={{
            background: 'linear-gradient(135deg, #0a0a0a, #000)',
            border: '1px solid rgba(204, 0, 0, 0.2)',
            padding: '4rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '5rem'
          }}>
            <h3 style={{ color: '#cc0000', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontWeight: 400 }}>Copyright &amp; Usage Rights</h3>
            <p style={{ color: '#ccc', maxWidth: '700px', margin: '0 auto 1rem auto', lineHeight: 1.8 }}>As the creative authors, <strong>CBCODER Visuals</strong> retains the full copyright to all media. However, you receive an unlimited, non-commercial right to use your photos and films. You are free to print, share with family, and post on social media for personal joy.</p>
            <p style={{ color: '#ccc', maxWidth: '700px', margin: '0 auto 1rem auto', lineHeight: 1.8 }}>When sharing online, we kindly request a tag or credit (e.g., &quot;Photos by CBCODER&quot;). We also ask that you <strong>do not apply filters or crop</strong> the final edited deliverables, preserving the cinematic grade we carefully applied.</p>
            <p style={{ color: '#cc0000', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2rem' }}>For commercial usage, explicit written permission is required.</p>
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div onClick={closeLightbox} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.95)',
          zIndex: 10000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }}>
          <span style={{
            position: 'absolute',
            top: '2rem',
            right: '3rem',
            color: '#fff',
            fontSize: '2.5rem',
            cursor: 'pointer',
            transition: 'color 0.3s'
          }}>&times;</span>
          <img
            src={lightboxImage}
            onError={handleImageError}
            alt="Enlarged view"
            style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
          />
        </div>
      )}

      <style jsx>{`
        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
          filter: grayscale(0%) !important;
        }
        .luxury-pricing:hover .pricing-image {
          filter: grayscale(30%) contrast(1.1) !important;
        }
      `}</style>
    </div>
  );
}
