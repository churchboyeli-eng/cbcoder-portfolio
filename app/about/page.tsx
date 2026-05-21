import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Vision | CBCODER — Elisante Samson',
  description: 'Elisante Samson — Tanzanian visual storyteller, photographer and filmmaker.',
};

const stats = [
  { value: '8+',   label: 'Years of Craft'    },
  { value: '200+', label: 'Projects Delivered' },
  { value: '4K',   label: 'Cinema Standard'    },
];

const pillars = [
  { n: '01', title: 'Truth in Every Frame',    body: 'A photograph should feel like memory — not a record. Every image holds light the way the eye holds wonder: selectively, emotionally, permanently.' },
  { n: '02', title: 'Film as Living Architecture', body: 'Great cinematography is more than just motion; it is the architecture of time and emotion. Every cut, every angle, and every deliberate grade is a decision that carries the audience deeper into an immersive, irreducibly real narrative.' },
  { n: '03', title: 'Africa as Canvas',        body: 'Tanzania is not a backdrop. Its landscapes, people, and light carry centuries of story. I work as a translator between that richness and the world.' },
  { n: '04', title: 'Brands Built on Vision',  body: 'Visuals that convert aren\'t accidents. They are the result of strategic intention, cultural fluency, and the courage to say something that matters.' },
];

const timeline = [
  { year: '2019', title: 'First Frame',    body: 'Picked up a camera in the Serengeti. Never put it down.' },
  { year: '2020', title: 'Going Pro',      body: 'First commercial client. First international publication feature.' },
  { year: '2021', title: 'Film & Motion',  body: 'Expanded into documentary cinematography across East Africa.' },
  { year: '2023', title: 'CBCODER',        body: 'Launched the full studio — rentals, production, and visual consulting.' },
];

const marqueItems = ['Photography', 'Filmmaking', 'Cinematography', 'Tanzania', 'Visual Storytelling', 'Documentary', 'Commercial', 'Rentals'];

const s = {
  eyebrow: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' } as React.CSSProperties,
  line:     { width: '32px', height: '1px', backgroundColor: '#cc0000' } as React.CSSProperties,
  tag:      { fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cc0000' } as React.CSSProperties,
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#060606', color: '#f0f0f0', fontFamily: "'Outfit',sans-serif", overflowX: 'hidden' }}>

      {/* ══ 1. HERO ══ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '6rem', overflow: 'hidden' }}>
        <Image src="/behind-the-scenes/eliwild.jpg" alt="Elisante Samson" fill priority style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.97) 0%, rgba(6,6,6,0.45) 50%, rgba(6,6,6,0.25) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,6,0.6) 0%, transparent 25%)' }} />
        {/* left red bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'linear-gradient(to bottom, transparent, #cc0000 40%, transparent)' }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '0 4rem', maxWidth: '1300px', width: '100%' }}>
          <div className="about-fade-up" style={s.eyebrow}>
            <div style={s.line} />
            <span style={s.tag}>Visual Storyteller · Tanzania</span>
          </div>

          <h1 className="about-fade-up-2" style={{ fontWeight: 900, fontSize: 'clamp(3.5rem,10vw,9rem)', letterSpacing: '-0.04em', lineHeight: 0.88, textTransform: 'uppercase', marginBottom: '2.5rem' }}>
            ELISANTE<br />
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>SAMSON</span>
          </h1>

          <p className="about-fade-up-3" style={{ fontSize: 'clamp(0.85rem,1.4vw,1rem)', color: 'rgba(255,255,255,0.45)', maxWidth: '48ch', lineHeight: 1.9, fontWeight: 300, marginBottom: '3.5rem' }}>
            Tanzanian Filmmaker &amp; Photographer. I don&apos;t document the world — I translate it into images that move people to act.
          </p>

          <div className="about-fade-up-4 about-hero-stats" style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            {stats.map(s2 => (
              <div key={s2.label} className="about-stat">
                <div style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>{s2.value}</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444', marginTop: '0.35rem' }}>{s2.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll cue */}
        <div style={{ position: 'absolute', bottom: '2rem', right: '4rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.52rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', writingMode: 'vertical-lr' }}>Scroll</span>
          <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, #cc0000, transparent)' }} />
        </div>
      </section>

      {/* ══ 2. MARQUEE TICKER ══ */}
      <div style={{ borderTop: '1px solid #111', borderBottom: '1px solid #111', overflow: 'hidden', padding: '1rem 0', backgroundColor: '#080808' }}>
        <div className="about-marquee-track">
          {[...marqueItems, ...marqueItems].map((item, i) => (
            <span key={i} className="about-marquee-item" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: i % 2 === 0 ? 'rgba(255,255,255,0.25)' : '#cc0000', padding: '0 3rem', whiteSpace: 'nowrap' }}>
              {item} <span style={{ color: '#222', marginLeft: '3rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ 3. EDITORIAL SPLIT ══ */}
      <section className="about-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #111' }}>
        <div className="about-img-wrap" style={{ position: 'relative', minHeight: '70vh' }}>
          <Image src="/behind-the-scenes/documentary-9.jpg" alt="Behind the lens" fill style={{ objectFit: 'cover', filter: 'grayscale(50%) contrast(1.1)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.9) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', right: '2.5rem' }}>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', marginBottom: '0.4rem' }}>Behind the lens</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Documentary shoot, Tanzania highlands</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7rem 5rem', borderLeft: '1px solid #111', backgroundColor: '#080808' }}>
          <div style={s.eyebrow}><div style={s.line} /><span style={s.tag}>The Work</span></div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3.2vw,3.2rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '2.5rem' }}>
            Cinematic Depth<br />Beyond the Lens —<br /><span style={{ color: '#cc0000' }}>Narrative Impact.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontWeight: 300 }}>
              Documentary and film are more than just moving images; they are a bridge between reality and the viewer.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>
              I immerse myself in the nuances of every story, environment, and message. Whether it&apos;s a conservation film in the Tanzanian wilderness or a brand story for a luxury lodge, I bring a cinematic lens that elevates the narrative.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>
              Driven by narrative impact and technical precision, my work doesn&apos;t just inform—it inspires and converts.
            </p>
          </div>
          <Link href="/contact" style={{ marginTop: '3.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#cc0000', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(204,0,0,0.3)', paddingBottom: '0.5rem', width: 'fit-content' }}>
            Start a project together
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      {/* ══ 4. 5-IMAGE MOSAIC ══ */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '300px 300px', borderTop: '1px solid #111' }}>
        <div className="about-img-wrap" style={{ position: 'relative', gridRow: '1 / 3', borderRight: '1px solid #111' }}>
          <Image src="/behind-the-scenes/sandc-52.jpg" alt="On location" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,6,0.2)' }} />
        </div>
        <div className="about-img-wrap" style={{ position: 'relative', borderBottom: '1px solid #111', borderRight: '1px solid #111' }}>
          <Image src="/behind-the-scenes/eliwild-4.jpg" alt="Wild frame" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="about-img-wrap" style={{ position: 'relative', borderBottom: '1px solid #111' }}>
          <Image src="/behind-the-scenes/eliwild-7.jpg" alt="Wild frame 2" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="about-img-wrap" style={{ position: 'relative', borderRight: '1px solid #111' }}>
          <Image src="/behind-the-scenes/kilitrail-110.jpg" alt="Kili trail" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
        {/* Text tile */}
        <div style={{ backgroundColor: '#cc0000', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.15)' }} />
          <p style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>Tanzania</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3, color: '#fff', letterSpacing: '-0.01em' }}>Where Every Frame Tells the Earth&apos;s Story</p>
        </div>
      </section>

      {/* ══ 5. FOUR PILLARS ══ */}
      <section className="about-pad" style={{ padding: '8rem 4rem', borderTop: '1px solid #111', backgroundColor: '#060606' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={s.eyebrow}><div style={s.line} /><span style={s.tag}>The Vision</span></div>
          <div className="about-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #111', borderLeft: '1px solid #111' }}>
            {pillars.map((p, i) => (
              <div key={i} className="about-pillar" style={{ padding: '3rem 2.5rem', borderRight: '1px solid #111', borderBottom: '1px solid #111', position: 'relative', overflow: 'hidden', backgroundColor: '#060606' }}>
                <div className="about-pillar-line" style={{ position: 'absolute', top: 0, left: 0, height: '2px', backgroundColor: '#cc0000' }} />
                <div className="about-pillar-num" style={{ fontSize: '4rem', fontWeight: 900, color: '#0e0e0e', lineHeight: 1, marginBottom: '1.75rem', letterSpacing: '-0.04em' }}>{p.n}</div>
                <h3 style={{ fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#f0f0f0', marginBottom: '1rem', lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.32)', fontWeight: 300 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. TESTIMONIAL / REVIEWS ══ */}
      <section className="about-pad" style={{ padding: '10rem 4rem', position: 'relative', overflow: 'hidden', backgroundColor: '#060606', borderTop: '1px solid #111' }}>
        {/* Background glow effects */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(204,0,0,0.05) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ ...s.eyebrow, justifyContent: 'center', marginBottom: '4rem' }}><div style={s.line} /><span style={s.tag}>Client Impact</span><div style={s.line} /></div>
          
          <div style={{ 
            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', 
            backdropFilter: 'blur(20px)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '2px', 
            padding: '5rem 4rem', 
            position: 'relative', 
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '60px', backgroundColor: '#cc0000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(204,0,0,0.4)' }}>
              <span style={{ fontSize: '3rem', lineHeight: 0, color: '#060606', fontFamily: 'Georgia, serif', position: 'relative', top: '10px' }}>&ldquo;</span>
            </div>
            
            <h2 style={{ fontWeight: 300, fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontStyle: 'italic', lineHeight: 1.8, color: '#f0f0f0', marginBottom: '3.5rem', letterSpacing: '0.02em' }}>
              &quot;Elisante&apos;s ability to translate complex narratives into breathtaking visuals is unmatched. He doesn&apos;t just deliver footage; he delivers a cinematic experience that transforms how people see our brand.&quot;
            </h2>
            
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <div style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginTop: '1rem' }}>Global Safari Brand</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cc0000' }}>Marketing Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. GIANT QUOTE + IMAGE ══ */}
      <section className="about-triple" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #111', minHeight: '65vh' }}>
        <div className="about-img-wrap" style={{ position: 'relative' }}>
          <Image src="/behind-the-scenes/documentary.jpg" alt="Documentary" fill style={{ objectFit: 'cover', filter: 'grayscale(30%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,6,0.3)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5rem 3rem', textAlign: 'center', backgroundColor: '#060606', borderLeft: '1px solid #111', borderRight: '1px solid #111' }}>
          <div style={{ fontSize: '7rem', lineHeight: 0.8, color: '#cc0000', opacity: 0.5, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
          <blockquote style={{ fontSize: 'clamp(1rem,1.8vw,1.3rem)', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', margin: '0 0 2rem' }}>
            I don&apos;t just capture moments. I give them the respect, depth, and presence they deserve — in every format.
          </blockquote>
          <cite style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', fontStyle: 'normal' }}>— Elisante Samson, CBCODER</cite>
        </div>
        <div className="about-img-wrap" style={{ position: 'relative' }}>
          <Image src="/behind-the-scenes/eliwild-5.jpg" alt="Elisante" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,6,0.25)' }} />
        </div>
      </section>

      {/* ══ 8. SERVICES TEASER ══ */}
      <section className="about-pad" style={{ padding: '8rem 4rem', borderTop: '1px solid #111', backgroundColor: '#080808' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="about-services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7rem', alignItems: 'start' }}>
            <div>
              <div style={s.eyebrow}><div style={s.line} /><span style={s.tag}>What We Do</span></div>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.8rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '2rem' }}>
                Cinematic Work<br />Across Every<br /><span style={{ color: '#cc0000' }}>Medium.</span>
              </h2>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.38)', maxWidth: '40ch', fontWeight: 300, marginBottom: '3rem' }}>
                High-end documentary filmmaking and commercial cinematography tailored for global impact. From cinematic wildlife narratives to polished brand stories, I bring technical precision and deep emotional resonance to every project.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="about-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2rem', backgroundColor: '#cc0000', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  View Services →
                </Link>
                <Link href="/rentals" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2rem', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  Browse Rentals
                </Link>
              </div>
            </div>
            <div>
              {[
                { n: '01', name: 'Photography',           desc: 'Editorial, commercial, wildlife & portrait' },
                { n: '02', name: 'Film & Cinematography', desc: 'Documentary, brand films, narrative projects' },
                { n: '03', name: 'Equipment Rentals',     desc: 'Cinema cameras, lenses, lighting & drones'  },
                { n: '04', name: 'Visual Consulting',     desc: 'Brand visual strategy & art direction'       },
                { n: '05', name: 'Photography Workshops', desc: 'Skills training for individuals & teams'     },
              ].map((row, i) => (
                <div key={i} className="about-service-row">
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#222', letterSpacing: '0.12em', minWidth: '22px' }}>{row.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f0f0f0', marginBottom: '0.2rem' }}>{row.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)', fontWeight: 300 }}>{row.desc}</div>
                  </div>
                  <svg className="about-service-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. FULL-WIDTH CINEMATIC CTA ══ */}
      <section style={{ position: 'relative', height: '65vh', borderTop: '1px solid #111', overflow: 'hidden' }}>
        <Image src="/behind-the-scenes/sandc-75.jpg" alt="CBCODER on location" fill style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(6,6,6,0.93) 0%, rgba(6,6,6,0.5) 55%, rgba(6,6,6,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 4rem' }}>
          <div style={{ maxWidth: '520px' }}>
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '1.5rem' }}>Ready to Create?</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(2.2rem,5.5vw,4.5rem)', letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '2.5rem', color: '#fff' }}>
              Let&apos;s Build<br />Something<br /><span style={{ color: '#cc0000' }}>That Lasts.</span>
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="about-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 2.4rem', backgroundColor: '#cc0000', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                Contact Us →
              </Link>
              <Link href="/photography" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 2.4rem', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
