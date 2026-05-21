'use client';

export default function Home() {
  return (
    <main>
      <header className="hero">
        {/* YouTube background video */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: -2,
          pointerEvents: 'none'
        }}>
          <iframe
            src="https://www.youtube.com/embed/WPpQFh0I5LA?autoplay=1&mute=1&loop=1&playlist=WPpQFh0I5LA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',  /* 16:9 ratio */
              height: '100%',
              minWidth: '100%',
              minHeight: '56.25vw', /* 16:9 ratio */
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none'
            }}
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>FILM &<br/>PHOTOGRAPHY</h1>
        </div>
      </header>
    </main>
  );
}
