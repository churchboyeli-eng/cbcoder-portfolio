'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmsOpen, setFilmsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply light theme to navbar on white pages
  const isLightMode = pathname?.startsWith('/rentals');

  return (
    <>
      <nav className={`${isLightMode ? 'nav-light' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="brand">
          <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem' }}>➤</span>CBCODER
        </Link>

        <div className="nav-links">
          <Link href="/about">VISION</Link>
          <div className="nav-dropdown">
            <span className="nav-dropdown-trigger">FILMS ▾</span>
            <div className="nav-dropdown-content">
              <Link href="/post-production">POST-PRODUCTION</Link>
              <Link href="/impact-films">IMPACT FILMS</Link>
            </div>
          </div>
          <Link href="/photography">PHOTOGRAPHY</Link>
          <Link href="/rentals">RENTALS</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open-top' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open-mid' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open-bot' : ''}`} />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-inner">
          <Link href="/" className="mobile-link" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>VISION</Link>

          <button
            className="mobile-link mobile-link--expand"
            onClick={() => setFilmsOpen(!filmsOpen)}
          >
            FILMS {filmsOpen ? '▴' : '▾'}
          </button>
          {filmsOpen && (
            <div className="mobile-sub-links">
              <Link href="/post-production" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Post-Production</Link>
              <Link href="/impact-films" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Impact Films</Link>
            </div>
          )}

          <Link href="/photography" className="mobile-link" onClick={() => setMenuOpen(false)}>PHOTOGRAPHY</Link>
          <Link href="/rentals" className="mobile-link" onClick={() => setMenuOpen(false)}>RENTALS</Link>
          <Link href="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </>
  );
}
