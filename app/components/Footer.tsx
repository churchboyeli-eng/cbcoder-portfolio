'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <footer className="footer" style={{ padding: '6rem 2rem 3rem 2rem', textAlign: 'center' }}>
      <div className="footer-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '3rem', 
        maxWidth: '1000px', 
        margin: '0 auto 4rem auto',
        textAlign: 'center'
      }}>
        <div className="footer-col">
          <p className="footer-col-title">Inquiries</p>
          <a href="mailto:info@elisante.com" className="footer-contact-item" style={{ fontSize: '1rem' }}>info@elisante.com</a>
          <p style={{ color: '#222', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Arusha, Tanzania</p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Explore</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about" className="footer-nav-link">Vision</Link>
            <Link href="/photography" className="footer-nav-link">Photography</Link>
            <Link href="/rentals" className="footer-nav-link">Rentals</Link>
            <Link href="/contact" className="footer-nav-link">Contact</Link>
            <a href="/private.html" className="footer-nav-link" style={{ color: '#cc0000' }}>Private Archive</a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Social</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/cbcoder/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Instagram</a>
            <a href="#" className="footer-nav-link">Behance</a>
            <a href="#" className="footer-nav-link">Vimeo</a>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '2rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid #0a0a0a', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '0.4rem', 
        opacity: 0.3 
      }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', margin: 0 }}>CBCODER</p>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.05em', margin: 0 }}>© {new Date().getFullYear()} CBCODER Visuals. All rights reserved.</p>
      </div>
    </footer>
  );
}
