'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import VideoModal from '../components/VideoModal';

function getYoutubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
  return match ? match[1] : '';
}

export default function ImpactFilms() {
  const heroVideoRef = useRef<HTMLImageElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroVideoRef.current) {
            heroVideoRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const films = [
    { 
      name: 'SCIS Impact', 
      src: 'https://img.youtube.com/vi/jrhq88AetUU/maxresdefault.jpg', 
      link: 'https://www.youtube.com/watch?v=jrhq88AetUU'
    },
    { 
      name: 'Camp Mission', 
      src: '/behind-the-scenes/eliwild-7.jpg', 
      link: '#'
    },
    { 
      name: 'Safari Plus', 
      src: '/safari/expedition-50.jpg', 
      link: '#'
    },
    { 
      name: 'Behind the Scenes ARK', 
      src: 'https://img.youtube.com/vi/WPpQFh0I5LA/maxresdefault.jpg', 
      link: 'https://youtu.be/WPpQFh0I5LA'
    },
  ];

  return (
    <main style={{ backgroundColor: '#060606', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── HERO SECTION ── */}
      <section className="hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          ref={heroVideoRef}
          src="https://img.youtube.com/vi/jrhq88AetUU/maxresdefault.jpg" 
          alt="SCIS Hero Background"
          className="hero-bg"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', height: '120%', top: '-10%', zIndex: 0 }}
        />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '1.5rem', fontWeight: 700 }}>Storytelling for Impact</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            IMPACT<br/><span style={{ WebkitTextStroke: '1px #fff', color: 'transparent' }}>FILMS</span>
          </h1>
          <div style={{ width: '40px', height: '2px', background: '#cc0000', margin: '3rem auto' }}></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
            Visual narratives dedicated to social impact, conservation, and human stories that drive meaningful progress across East Africa.
          </p>
        </div>
      </section>

      {/* ── FILM SHOWCASE ── */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem' }}>
            {films.map((film, index) => {
              const cardContent = (
                <div className="film-card" style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.05)', background: '#0a0a0a', transition: 'transform 0.4s ease', display: 'block' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Image 
                      src={film.src} 
                      alt={film.name}
                      className="preview-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      style={{ objectFit: 'cover', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)', display: 'flex', alignItems: 'flex-end', padding: '2.5rem', pointerEvents: 'none' }}>
                      <div style={{ width: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cc0000' }}></div>
                              <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Selected Work</p>
                          </div>
                          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{film.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
              const yId = getYoutubeId(film.link);
              if (yId) {
                return (
                  <div key={index} onClick={() => { setCurrentVideoId(yId); setModalOpen(true); }} style={{ cursor: 'pointer', display: 'block' }}>
                    {cardContent}
                  </div>
                );
              }
              return film.link !== '#' ? (
                <a key={index} href={film.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  {cardContent}
                </a>
              ) : (
                <div key={index} style={{ display: 'block' }}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section style={{ padding: '10rem 2rem', backgroundColor: '#080808', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>
              &quot;Visuals have the power to bridge divides and spark the conversations that change the world.&quot;
            </h2>
            <div style={{ width: '30px', height: '1px', background: '#cc0000', margin: '2rem auto' }}></div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cc0000', fontWeight: 700 }}>Elisante Samson</p>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>Have a story for change?</p>
        <Link href="/contact" style={{ display: 'inline-flex', padding: '1.2rem 3.5rem', background: '#cc0000', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', color: '#fff', transition: 'all 0.3s' }} className="cta-btn">
          Collaborate With Us
        </Link>
      </section>

      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} youtubeId={currentVideoId} />

      <style jsx>{`
        .cta-btn:hover {
          background: #fff;
          color: #000;
          transform: translateY(-3px);
        }
        .film-card:hover {
          transform: translateY(-10px);
          border-color: rgba(204,0,0,0.3);
        }
        .film-card:hover .preview-image {
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
