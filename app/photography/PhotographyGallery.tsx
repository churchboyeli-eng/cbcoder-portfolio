'use client';
import { useState } from 'react';
import Image from 'next/image';

export interface PhotoData {
  src: string;
  category: string;
  alt: string;
  link?: string;
}

interface Props {
  photos: PhotoData[];
}

const CATEGORIES = [
  'ALL COLLECTIONS',
  'BEHIND THE SCENES',
  'EXPEDITION',
  'HOTEL',
  'SAFARI',
  'EVENT & EXPERIENCE',
  'SPORTS',
  'CONSERVATION'
];

export default function PhotographyGallery({ photos }: Props) {
  const [activeCategory, setActiveCategory] = useState('ALL COLLECTIONS');

  const filteredPhotos = photos.filter((photo) => {
    if (activeCategory === 'ALL COLLECTIONS') return true;
    return photo.category.toUpperCase() === activeCategory;
  });

  return (
    <>
      <div className="filter-ribbon">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {activeCategory === cat && (
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '15px', 
                height: '1px', 
                backgroundColor: '#fff' 
              }} />
            )}
          </button>
        ))}
      </div>

      <div key={activeCategory} className="masonry-grid" style={{ 
        minHeight: '60vh', 
        padding: '4rem 2rem', 
        columns: '3 350px',
        columnGap: '1.5rem',
        maxWidth: '1800px',
        margin: '0 auto',
        animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {filteredPhotos.map((item, idx) => (
          <div key={idx} style={{ 
            marginBottom: '1.5rem', 
            breakInside: 'avoid',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#111',
            borderRadius: '2px'
          }} className="photo-item">
             <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1200}
                className="masonry-img"
                unoptimized
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: 'grayscale(20%)'
                }}
              />
              <div className="photo-info" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                pointerEvents: 'none'
              }}>
                <div>
                  <p style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '0.3rem' }}>{item.category}</p>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', color: '#fff' }}>{item.alt.replace(/-/g, ' ')}</h4>
                </div>
              </div>
          </div>
        ))}
        {filteredPhotos.length === 0 && (
          <div style={{color: '#444', textAlign: 'center', width: '100%', padding: '10rem 0'}}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>No visual assets found for {activeCategory}.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .filter-ribbon {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 3rem 2rem;
          flex-wrap: wrap;
          position: sticky;
          top: 80px;
          z-index: 10;
          background-color: rgba(5,5,5,0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .filter-btn {
          background: none;
          border: none;
          color: #555;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .filter-btn.active {
          color: #fff;
        }

        @media (max-width: 768px) {
          .filter-ribbon {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 1.5rem 1.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 1rem;
          }
          .filter-ribbon::-webkit-scrollbar {
            display: none;
          }
          .filter-btn {
            white-space: nowrap;
          }
        }

        .photo-item:hover .masonry-img {
          transform: scale(1.08);
          filter: grayscale(0%);
        }
        .photo-item:hover .photo-info {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
