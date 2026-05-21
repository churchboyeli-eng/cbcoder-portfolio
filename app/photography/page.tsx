import Image from 'next/image';
import PhotographyGallery from './PhotographyGallery';
import photoData from './photoData.json';

export const metadata = {
  title: 'Photography | CBCODER',
  description: 'A curated selection of cinematic visual storytelling across various collections.',
};

export const revalidate = 0;

export default function PhotographyPage() {
  const photos = photoData;

  // Use the first image from expedition as hero, fallback to specific one
  const heroImage = photos.find(p => p.src.includes('expedition'))?.src || "/expedition/kilimanjaro%20-2.JPG";

  return (
    <main style={{ backgroundColor: '#050505' }}>
      <header className="hero" style={{ height: '90vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', filter: 'brightness(0.5) contrast(1.1)' }}>
          <iframe
            src="https://www.youtube.com/embed/WPpQFh0I5LA?autoplay=1&mute=1&loop=1&playlist=WPpQFh0I5LA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78vh', height: '100%', minWidth: '100%', minHeight: '56.25vw', transform: 'translate(-50%, -50%)', border: 'none', pointerEvents: 'none' }}
          />
        </div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 100%)', position: 'absolute', inset: 0 }}></div>
        
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, paddingBottom: '6rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.6em', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '2rem', fontWeight: 700 }}>Behind The Lens</p>
          <h1 style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9 }}>STILL<br/><span style={{ color: '#fff' }}>STORY</span></h1>
          <div style={{ width: '60px', height: '1px', background: 'var(--accent-color)', margin: '3rem auto' }}></div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', maxWidth: '40ch', margin: '0 auto', lineHeight: 1.6, letterSpacing: '0.05em' }}>
            Capturing the raw essence of East African expeditions, conservation, and cinematic brand narratives.
          </p>
        </div>
      </header>

      {/* Client Component handles filtering & grid */}
      <PhotographyGallery photos={photos} />

      {/* NEW SECTION: WORK WITH US */}
      <section style={{ padding: '10rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2rem' }}>HAVE A <span style={{ color: 'var(--accent-color)' }}>PROJECT?</span></h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '4rem', lineHeight: 1.8 }}>
            Whether you need high-end commercial photography, expedition documentation, or brand storytelling, our visual team is ready to bring your vision to life.
          </p>
          <a href="/contact" style={{ 
            display: 'inline-block', 
            padding: '1.2rem 3rem', 
            backgroundColor: 'var(--accent-color)', 
            color: '#fff', 
            fontWeight: 800, 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            fontSize: '0.8rem',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}>
            Inquire Now →
          </a>
        </div>
      </section>
    </main>
  );
}
