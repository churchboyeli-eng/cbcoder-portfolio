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

export default function PostProduction() {
  const heroVideoRef = useRef<HTMLImageElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (heroVideoRef.current) {
        heroVideoRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const works = [
    { 
      name: 'Mauly Promo', 
      src: '/behind-the-scenes/eliwild.jpg', 
      link: '#' 
    },
    { 
      name: 'Sanaa TZ', 
      src: 'https://img.youtube.com/vi/QoOLI73_-sQ/maxresdefault.jpg', 
      link: 'https://youtu.be/QoOLI73_-sQ' 
    },
    { 
      name: 'Daelii', 
      src: '/behind-the-scenes/documentary.jpg', 
      link: '#' 
    },
    { 
      name: 'Sanaa', 
      src: '/behind-the-scenes/eliwild-5.jpg', 
      link: '#' 
    },
  ];

  return (
    <main style={{ backgroundColor: '#060606', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── HERO SECTION ── */}
      <section className="hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          ref={heroVideoRef}
          src="/behind-the-scenes/eliwild.jpg" 
          alt="Post Production Hero"
          className="hero-bg"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', height: '120%', top: '-10%', zIndex: 0 }}
        />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>The Art of the Cut</p>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 800, lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            POST<br/><span style={{ WebkitTextStroke: '1px #fff', color: 'transparent' }}>PRODUCTION</span>
          </h1>
          <div style={{ width: '60px', height: '2px', background: '#fff', margin: '3rem auto' }}></div>
        </div>
      </section>

      {/* ── SHOWCASE GRID ── */}
      <section style={{ padding: '8rem 4rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {works.slice(1).map((work, index) => {
              const itemContent = (
                <div className="work-item" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', display: 'block' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Image 
                      src={work.src} 
                      alt={work.name}
                      className="hover-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: '2rem', pointerEvents: 'none' }}>
                      <div>
                          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Project</p>
                          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase' }}>{work.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
              const yId = getYoutubeId(work.link);
              if (yId) {
                return (
                  <div key={index} onClick={() => { setCurrentVideoId(yId); setModalOpen(true); }} style={{ cursor: 'pointer', display: 'block' }}>
                    {itemContent}
                  </div>
                );
              }
              return work.link !== '#' ? (
                <a key={index} href={work.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  {itemContent}
                </a>
              ) : (
                <div key={index} style={{ display: 'block' }}>
                  {itemContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '8rem 4rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '3rem' }}>Elevate Your Story</h2>
        <Link href="/contact" style={{ display: 'inline-flex', padding: '1.2rem 3rem', border: '1px solid #fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', color: '#fff', transition: 'all 0.3s' }} className="btn-hover">
          Start Post-Production
        </Link>
      </section>

      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} youtubeId={currentVideoId} />

      <style jsx>{`
        .btn-hover:hover {
          background: #fff;
          color: #000;
        }
        .work-item:hover .hover-image {
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
