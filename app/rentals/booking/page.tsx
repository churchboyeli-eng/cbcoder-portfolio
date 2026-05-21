'use client';
import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const gear = [
  // Cameras
  { id:1,  name:'Sony FX6 Full-Frame Cinema Camera', cat:'Cameras', rate:135, stock:2 },
  { id:2,  name:'Sony FX3 Full-Frame Cinema Camera', cat:'Cameras', rate:80, stock:1 },
  { id:3,  name:'Sony FX30 Digital Cinema Camera',   cat:'Cameras', rate:45,  stock:3 },
  { id:4,  name:'Sony Alpha a7 IV Mirrorless',        cat:'Cameras', rate:55, stock:2 },
  { id:5,  name:'Canon EOS R5 Mark II Mirrorless',   cat:'Cameras', rate:85, stock:1 },
  { id:6,  name:'Canon EOS R5 C Cinema Camera',      cat:'Cameras', rate:95, stock:1 },
  { id:7,  name:'Canon EOS R5 Mirrorless',           cat:'Cameras', rate:75, stock:1 },
  { id:8,  name:'Canon 5D Mark IV DSLR',             cat:'Cameras', rate:45,  stock:2 },
  { id:9,  name:'Nikon Z6 II Mirrorless',            cat:'Cameras', rate:50,  stock:2 },
  { id:10, name:'Nikon Z5 II Mirrorless',            cat:'Cameras', rate:32,  stock:2 },
  // Lenses
  { id:11, name:'Sony FE 16-35mm f/4 ZA OSS',       cat:'Lenses',  rate:20,  stock:2 },
  { id:12, name:'Sony FE 24-70mm f/2.8 GM',         cat:'Lenses',  rate:25,  stock:2 },
  { id:13, name:'Sony FE 24-70mm f/4 ZA OSS',       cat:'Lenses',  rate:16,  stock:2 },
  { id:14, name:'Sony FE 24-105mm f/4 G OSS',       cat:'Lenses',  rate:22,  stock:1 },
  { id:15, name:'Sony FE 35mm f/1.8',               cat:'Lenses',  rate:15,  stock:2 },
  { id:16, name:'Sony FE 50mm f/1.8',               cat:'Lenses',  rate:12,  stock:3 },
  { id:17, name:'Sony FE 70-200mm f/2.8 GM OSS',   cat:'Lenses',  rate:32,  stock:1 },
  { id:18, name:'Sony FE 70-200mm f/4 G OSS',      cat:'Lenses',  rate:25,  stock:1 },
  { id:19, name:'Sony FE 85mm f/1.8',              cat:'Lenses',  rate:16,  stock:2 },
  { id:20, name:'Sony FE PZ 16-35mm f/4 G',        cat:'Lenses',  rate:22,  stock:1 },
  { id:21, name:'Sigma 85mm f/1.4 Art (Sony E)',   cat:'Lenses',  rate:20,  stock:1 },
  { id:22, name:'Canon RF 24-70mm f/2.8L IS USM',  cat:'Lenses',  rate:25,  stock:1 },
  { id:23, name:'Canon RF 50mm f/1.2L USM',        cat:'Lenses',  rate:22,  stock:1 },
  { id:24, name:'Canon RF 70-200mm f/2.8L IS USM', cat:'Lenses',  rate:30,  stock:1 },
  { id:25, name:'Sigma 150-600mm f/5-6.3 (Canon)', cat:'Lenses',  rate:28,  stock:1 },
  { id:26, name:'Sigma 24-70mm f/2.8 DG DN Art',   cat:'Lenses',  rate:22,  stock:2 },
  { id:27, name:'Sigma 70-200mm f/2.8 DG OS HSM',  cat:'Lenses',  rate:28,  stock:1 },
  { id:28, name:'Sigma MC-11 Mount Converter',      cat:'Lenses',  rate:8,  stock:2 },
  { id:29, name:'Nikon NIKKOR Z 24-70mm f/2.8 S',  cat:'Lenses',  rate:22,  stock:1 },
  { id:30, name:'Nikon NIKKOR Z 50mm f/1.8 S',     cat:'Lenses',  rate:15,  stock:2 },
  { id:31, name:'Nikon AF-S 70-200mm f/2.8E FL',   cat:'Lenses',  rate:25,  stock:1 },
  // Drones
  { id:32, name:'DJI Mavic 4 Pro Drone',           cat:'Drones',  rate:95, stock:1 },
  { id:33, name:'DJI Air 3S Drone',                cat:'Drones',  rate:65, stock:2 },
  { id:34, name:'DJI Mini 5 Pro Drone',            cat:'Drones',  rate:50,  stock:2 },
  { id:35, name:'DJI Mini 4 Pro Drone',            cat:'Drones',  rate:40,  stock:3 },
  // Grips
  { id:36, name:'Sachtler 18 S2 Fluid Head & CF Tripod', cat:'Grips', rate:45, stock:2 },
  { id:37, name:'Manfrotto 502/504 Tripod System',       cat:'Grips', rate:22, stock:3 },
  { id:38, name:'SmallRig CT-10 Aluminum Travel Tripod', cat:'Grips', rate:16, stock:2 },
  { id:39, name:'E-Image Tripod System',                 cat:'Grips', rate:20, stock:2 },
  { id:40, name:'Magnus LM-700 Video Monopod',           cat:'Grips', rate:12, stock:3 },
  { id:41, name:'Oben CTT-1000 Carbon Fiber Tabletop',   cat:'Grips', rate:8, stock:3 },
  { id:42, name:'K&F Concept T254A7 Carbon Tripod',      cat:'Grips', rate:15, stock:2 },
];

const cats = ['All','Cameras','Lenses','Drones','Grips'];
const VAT = 0.15;

import { Suspense } from 'react';

// ── Main Page Component with Suspense ────────────────────────
export default function BookingPage() {
  return (
    <Suspense fallback={<div style={{ backgroundColor:'#050505', minHeight:'100vh', color:'#f5f5f5', display:'flex', alignItems:'center', justifyContent:'center' }}>Loading Booking Engine...</div>}>
      <BookingPageContent />
    </Suspense>
  );
}

function BookingPageContent() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<typeof gear[0]|null>(null);
  const [qty, setQty] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [addVat, setAddVat] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [depositFile, setDepositFile] = useState<File|null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Auto-select item from ?item= URL param
  useEffect(() => {
    const itemName = searchParams.get('item');
    if (itemName) {
      const match = gear.find(g => g.name.toLowerCase() === itemName.toLowerCase());
      if (match) {
        setSelected(match);
        // Set category filter to match so item is visible in list
        setActiveCat(match.cat);
      }
    }
  }, [searchParams]);

  const filtered = gear.filter(g =>
    (activeCat==='All' || g.cat===activeCat) &&
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  const days = startDate && endDate
    ? Math.max(1, Math.ceil((new Date(endDate).getTime()-new Date(startDate).getTime())/86400000)) : 0;

  const subtotal = selected ? days * selected.rate * qty : 0;
  const vatAmt = addVat ? subtotal * VAT : 0;
  const total = subtotal + vatAmt;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    setFormErrors([]);
    setSubmitting(true);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, phone,
          gear: selected.name, category: selected.cat,
          qty, startDate, endDate, days,
          subtotal: subtotal.toLocaleString(),
          vat: vatAmt.toLocaleString(),
          total: total.toLocaleString(),
          notes, addVat,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setFormErrors(json.errors || ['Something went wrong. Please try again.']);
      }
    } catch {
      setFormErrors(['Network error. Please check your connection and try again.']);
    } finally {
      setSubmitting(false);
    }
  }

  const s = { input: { padding:'0.65rem 0.9rem', backgroundColor:'#111', border:'1px solid #222', color:'#f5f5f5', fontFamily:"'Outfit',sans-serif", fontSize:'0.82rem', outline:'none', borderRadius:'2px', width:'100%' } as React.CSSProperties };

  return (
    <main style={{ backgroundColor:'#050505', color:'#f5f5f5', fontFamily:"'Outfit',sans-serif", minHeight:'100vh', paddingTop:'100px' }}>

      {/* Header */}
      <div style={{ padding:'3rem 2rem 2rem', maxWidth:'1300px', margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
          <div style={{ width:'32px', height:'2px', backgroundColor:'#cc0000' }}/>
          <span style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.25em', textTransform:'uppercase', color:'#cc0000' }}>Live Booking</span>
        </div>
        <h1 style={{ fontWeight:800, fontSize:'clamp(2.5rem,6vw,5rem)', textTransform:'uppercase', lineHeight:1, letterSpacing:'-0.02em', marginBottom:'0.75rem' }}>
          BOOK <span style={{ color:'#cc0000' }}>GEAR</span>
        </h1>
        <p style={{ fontSize:'0.9rem', color:'#555', maxWidth:'55ch', lineHeight:1.7 }}>
          Select your equipment, choose dates, and submit. A confirmation email is sent to you instantly. Prices are ex-VAT — add VAT if you need an official receipt.
        </p>
      </div>

      <div style={{ maxWidth:'1300px', margin:'0 auto', padding:'0 2rem 6rem', display:'grid', gridTemplateColumns: selected ? '1fr 430px' : '1fr', gap:'2rem', alignItems:'start' }}>

        {/* ── GEAR LIST ── */}
        <div>
          <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', marginBottom:'1.5rem', alignItems:'center' }}>
            <input type="text" placeholder="Search gear..." value={search} onChange={e=>setSearch(e.target.value)}
              style={{ flex:1, minWidth:'180px', padding:'0.65rem 1rem', backgroundColor:'#111', border:'1px solid #222', color:'#f5f5f5', fontFamily:"'Outfit',sans-serif", fontSize:'0.8rem', outline:'none', borderRadius:'2px' }}/>
            {cats.map(c=>(
              <button key={c} onClick={()=>setActiveCat(c)} style={{ padding:'0.5rem 1rem', fontFamily:"'Outfit',sans-serif", fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', border:'1px solid', borderColor:activeCat===c?'#cc0000':'#222', backgroundColor:activeCat===c?'#cc0000':'transparent', color:activeCat===c?'#fff':'#555', borderRadius:'2px', transition:'all 0.2s' }}>
                {c}
              </button>
            ))}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'1px', backgroundColor:'#111' }}>
            {filtered.map(g=>{
              const sel = selected?.id===g.id;
              return (
                <button key={g.id} onClick={()=>{ setSelected(g); setQty(1); setSubmitted(false); }}
                  style={{ display:'grid', gridTemplateColumns:'1fr auto auto', gap:'1rem', alignItems:'center', padding:'1.25rem 1.5rem', backgroundColor:sel?'#111':'#050505', border:'none', borderLeft:`3px solid ${sel?'#cc0000':'transparent'}`, cursor:'pointer', textAlign:'left', transition:'all 0.2s', width:'100%' }}>
                  <div>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:'0.95rem', color:sel?'#fff':'#aaa', marginBottom:'0.2rem' }}>{g.name}</p>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:'0.7rem', color:'#444', textTransform:'uppercase', letterSpacing:'0.1em' }}>{g.cat}</p>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:'1rem', color:'#cc0000' }}>${g.rate.toLocaleString()}</p>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:'0.65rem', color:'#444', textTransform:'uppercase' }}>/day excl. tax</p>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', minWidth:'90px', justifyContent:'flex-end' }}>
                    <span style={{ width:'7px', height:'7px', borderRadius:'50%', backgroundColor: g.stock>0?'#22c55e':'#cc0000', flexShrink:0 }}/>
                    <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:'0.7rem', fontWeight:600, color:g.stock>0?'#22c55e':'#cc0000' }}>
                      {g.stock>0?`${g.stock} avail.`:'Rented Out'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── BOOKING PANEL ── */}
        {selected && (
          <div style={{ backgroundColor:'#0a0a0a', border:'1px solid #1a1a1a', padding:'2rem', position:'sticky', top:'100px' }}>
            {submitted ? (
              <div style={{ textAlign:'center', padding:'2rem 0' }}>
                <div style={{ width:'60px', height:'60px', borderRadius:'50%', backgroundColor:'rgba(34,197,94,0.1)', border:'2px solid #22c55e', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontWeight:800, fontSize:'1.25rem', color:'#f5f5f5', marginBottom:'0.75rem' }}>Booking Submitted!</h3>
                <p style={{ fontSize:'0.85rem', color:'#666', lineHeight:1.7, marginBottom:'0.5rem' }}>A confirmation email has been sent to <strong style={{ color:'#f5f5f5' }}>{email}</strong>.</p>
                <p style={{ fontSize:'0.8rem', color:'#555', lineHeight:1.6, marginBottom:'2rem' }}>We will confirm your booking within 2 hours. Please check your inbox (and spam folder).</p>
                <button onClick={()=>{ setSelected(null); setSubmitted(false); setName(''); setEmail(''); setPhone(''); setNotes(''); setStartDate(''); setEndDate(''); setDepositFile(null); }} style={{ width:'100%', padding:'0.875rem', backgroundColor:'#cc0000', color:'#fff', border:'none', fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.15em', textTransform:'uppercase', cursor:'pointer', borderRadius:'2px' }}>
                  Book Another Item
                </button>
              </div>
            ):(
              <form ref={formRef} onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>

                {/* Gear info */}
                <div style={{ paddingBottom:'1rem', borderBottom:'1px solid #111' }}>
                  <p style={{ fontSize:'0.65rem', color:'#555', textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:'0.4rem' }}>{selected.cat}</p>
                  <h3 style={{ fontWeight:800, fontSize:'1.05rem', color:'#f5f5f5', marginBottom:'0.5rem' }}>{selected.name}</h3>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                    <span style={{ width:'7px', height:'7px', borderRadius:'50%', backgroundColor:selected.stock>0?'#22c55e':'#cc0000' }}/>
                    <span style={{ fontSize:'0.75rem', fontWeight:600, color:selected.stock>0?'#22c55e':'#cc0000' }}>
                      {selected.stock} unit{selected.stock!==1?'s':''} available
                    </span>
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label style={{ fontSize:'0.7rem', color:'#555', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:'0.4rem' }}>Quantity (max {selected.stock})</label>
                  <div style={{ display:'flex', alignItems:'center', gap:'0' }}>
                    <button type="button" onClick={()=>setQty(q=>Math.max(1,q-1))} style={{ width:'40px', height:'38px', backgroundColor:'#1a1a1a', border:'1px solid #222', borderRight:'none', color:'#fff', fontSize:'1.2rem', cursor:'pointer' }}>−</button>
                    <div style={{ width:'60px', height:'38px', backgroundColor:'#111', border:'1px solid #222', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'1rem' }}>{qty}</div>
                    <button type="button" onClick={()=>setQty(q=>Math.min(selected.stock,q+1))} style={{ width:'40px', height:'38px', backgroundColor:'#1a1a1a', border:'1px solid #222', borderLeft:'none', color:'#fff', fontSize:'1.2rem', cursor:'pointer' }}>+</button>
                  </div>
                </div>

                {/* Dates */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
                  <div>
                    <label style={{ fontSize:'0.7rem', color:'#555', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:'0.4rem' }}>Start Date</label>
                    <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} style={{ ...s.input, colorScheme:'dark' }}/>
                  </div>
                  <div>
                    <label style={{ fontSize:'0.7rem', color:'#555', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:'0.4rem' }}>End Date</label>
                    <input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} required min={startDate||new Date().toISOString().split('T')[0]} style={{ ...s.input, colorScheme:'dark' }}/>
                  </div>
                </div>

                {/* VAT toggle */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.875rem', backgroundColor:'#111', borderRadius:'2px' }}>
                  <div>
                    <p style={{ fontSize:'0.8rem', fontWeight:700, color:'#f5f5f5', marginBottom:'0.2rem' }}>Add VAT (15%)</p>
                    <p style={{ fontSize:'0.7rem', color:'#555' }}>Required for an official receipt / invoice</p>
                  </div>
                  <button type="button" onClick={()=>setAddVat(v=>!v)}
                    style={{ width:'50px', height:'26px', borderRadius:'13px', border:'none', backgroundColor:addVat?'#cc0000':'#333', position:'relative', cursor:'pointer', transition:'background 0.3s', flexShrink:0 }}>
                    <span style={{ position:'absolute', top:'3px', left:addVat?'27px':'3px', width:'20px', height:'20px', borderRadius:'50%', backgroundColor:'#fff', transition:'left 0.25s' }}/>
                  </button>
                </div>

                {/* Price breakdown */}
                {days>0 && (
                  <div style={{ backgroundColor:'#111', padding:'1rem', borderRadius:'2px', display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.8rem', color:'#666' }}>
                      <span>{days} day{days>1?'s':''} × {qty} unit{qty>1?'s':''} × ${selected.rate.toLocaleString()}</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    {addVat && (
                      <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.8rem', color:'#666' }}>
                        <span>VAT (15%)</span><span>${vatAmt.toLocaleString()}</span>
                      </div>
                    )}
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:'1rem', fontWeight:800, color:'#cc0000', borderTop:'1px solid #222', paddingTop:'0.5rem', marginTop:'0.25rem' }}>
                      <span>Total</span><span>${total.toLocaleString()}</span>
                    </div>
                    {!addVat && <p style={{ fontSize:'0.65rem', color:'#444' }}>All prices excl. tax. Toggle VAT above for an official invoice.</p>}
                  </div>
                )}

                {/* Contact fields */}
                <input type="text" placeholder="Full Name *" value={name} onChange={e=>setName(e.target.value)} required style={s.input}/>
                <input type="email" placeholder="Email Address * (confirmation sent here)" value={email} onChange={e=>setEmail(e.target.value)} required style={s.input}/>
                <input type="tel" placeholder="Phone Number *" value={phone} onChange={e=>setPhone(e.target.value)} required style={s.input}/>
                <textarea placeholder="Additional notes (optional)" value={notes} onChange={e=>setNotes(e.target.value)} rows={3} style={{ ...s.input, resize:'none' }}/>

                {/* Deposit upload */}
                <div>
                  <label style={{ fontSize:'0.7rem', color:'#555', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:'0.5rem' }}>
                    Deposit Proof <span style={{ color:'#333', textTransform:'none', letterSpacing:0 }}>(optional — screenshot or PDF)</span>
                  </label>
                  <label style={{ display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.85rem 1rem', backgroundColor:'#111', border:`1px dashed ${depositFile?'#22c55e':'#333'}`, borderRadius:'2px', cursor:'pointer' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={depositFile?'#22c55e':'#555'} strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    <span style={{ fontSize:'0.8rem', color:depositFile?'#22c55e':'#555' }}>
                      {depositFile ? depositFile.name : 'Click to upload deposit proof'}
                    </span>
                    <input type="file" accept="image/*,.pdf" style={{ display:'none' }} onChange={e=>setDepositFile(e.target.files?.[0]||null)}/>
                  </label>
                </div>

                {/* Error messages */}
                {formErrors.length > 0 && (
                  <div style={{ padding:'1rem', backgroundColor:'rgba(204,0,0,0.08)', border:'1px solid rgba(204,0,0,0.3)', borderRadius:'2px' }}>
                    {formErrors.map((err, i) => (
                      <p key={i} style={{ margin: i>0?'0.4rem 0 0':0, fontSize:'0.8rem', color:'#ff6666', fontFamily:"'Outfit',sans-serif" }}>⚠ {err}</p>
                    ))}
                  </div>
                )}

                <button type="submit" disabled={submitting||!days} style={{ padding:'1rem', backgroundColor: (!days||submitting)?'#333':'#cc0000', color:'#fff', border:'none', fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.15em', textTransform:'uppercase', cursor:(!days||submitting)?'not-allowed':'pointer', borderRadius:'2px', transition:'background 0.3s' }}>
                  {submitting ? 'Sending...' : !days ? 'Select Dates to Continue' : '✓ Confirm Booking'}
                </button>
                <p style={{ fontSize:'0.65rem', color:'#333', textAlign:'center', lineHeight:1.5 }}>
                  By submitting you agree to our T&apos;s & C&apos;s. Booking confirmed only after our team approves. 10% insurance fee applies.
                </p>
              </form>
            )}
          </div>
        )}
      </div>

      {/* ── CAN'T FIND YOUR GEAR ── */}
      <GearRequestSection />
    </main>
  );
}

// ── Custom Gear Request Component ──────────────────────────────
function GearRequestSection() {
  const [rName, setRName] = useState('');
  const [rEmail, setREmail] = useState('');
  const [rPhone, setRPhone] = useState('');
  const [rGear, setRGear] = useState('');
  const [rDates, setRDates] = useState('');
  const [rError, setRError] = useState('');
  const [rDone, setRDone] = useState(false);
  const [rBusy, setRBusy] = useState(false);

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    setRError('');
    setRBusy(true);
    try {
      const res = await fetch('/api/gear-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: rName, email: rEmail, phone: rPhone, gearDesc: rGear, dates: rDates }),
      });
      const json = await res.json();
      if (json.success) {
        setRDone(true);
      } else {
        setRError((json.errors || ['Something went wrong.']).join(' '));
      }
    } catch {
      setRError('Network error. Please try again.');
    } finally {
      setRBusy(false);
    }
  }

  const inp: React.CSSProperties = { padding:'0.7rem 1rem', backgroundColor:'#111', border:'1px solid #1e1e1e', color:'#f5f5f5', fontFamily:"'Outfit',sans-serif", fontSize:'0.85rem', outline:'none', borderRadius:'2px', width:'100%' };

  return (
    <section style={{ borderTop:'1px solid #111', backgroundColor:'#080808', padding:'5rem 2rem' }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
          <div style={{ width:'32px', height:'2px', backgroundColor:'#cc0000' }}/>
          <span style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.25em', textTransform:'uppercase', color:'#cc0000' }}>Don&apos;t See What You Need?</span>
        </div>
        <h2 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:'clamp(1.8rem,4vw,3rem)', textTransform:'uppercase', lineHeight:1.1, marginBottom:'1rem' }}>
          Request <span style={{ color:'#cc0000' }}>Any Gear</span>
        </h2>
        <p style={{ fontSize:'0.9rem', color:'#555', lineHeight:1.7, marginBottom:'3rem', maxWidth:'55ch' }}>
          If the equipment you need isn&apos;t listed, just tell us what you&apos;re looking for. We&apos;ll either source it from our network of trusted partner stores or let you know the best alternative we have.
        </p>

        {rDone ? (
          <div style={{ textAlign:'center', padding:'3rem', backgroundColor:'#0d0d0d', border:'1px solid #1a1a1a', borderRadius:'2px' }}>
            <div style={{ width:'56px', height:'56px', borderRadius:'50%', backgroundColor:'rgba(34,197,94,0.1)', border:'2px solid #22c55e', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:'1.1rem', color:'#f5f5f5', marginBottom:'0.75rem' }}>Request Received!</h3>
            <p style={{ fontSize:'0.85rem', color:'#666', lineHeight:1.7 }}>
              We&apos;ll check our partner network and get back to you at <strong style={{ color:'#f5f5f5' }}>{rEmail}</strong> within a few hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleRequest} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            <input placeholder="Your Full Name *" value={rName} onChange={e=>setRName(e.target.value)} required style={inp}/>
            <input type="email" placeholder="Your Email * (reply sent here)" value={rEmail} onChange={e=>setREmail(e.target.value)} required style={inp}/>
            <input type="tel" placeholder="Phone Number *" value={rPhone} onChange={e=>setRPhone(e.target.value)} required style={inp}/>
            <input placeholder="Dates Needed (e.g. 1 May – 3 May)" value={rDates} onChange={e=>setRDates(e.target.value)} required style={inp}/>
            <textarea
              placeholder="Describe the gear you need — brand, model, specs, quantity, purpose... the more detail the better."
              value={rGear} onChange={e=>setRGear(e.target.value)} required rows={4}
              style={{ ...inp, resize:'none', gridColumn:'1 / -1' }}
            />
            {rError && <p style={{ gridColumn:'1 / -1', margin:0, fontSize:'0.8rem', color:'#ff6666', padding:'0.75rem', backgroundColor:'rgba(204,0,0,0.08)', border:'1px solid rgba(204,0,0,0.3)', borderRadius:'2px' }}>⚠ {rError}</p>}
            <div style={{ gridColumn:'1 / -1', display:'flex', alignItems:'center', gap:'1.5rem', flexWrap:'wrap' }}>
              <button type="submit" disabled={rBusy} style={{ padding:'1rem 2.5rem', backgroundColor:rBusy?'#333':'#cc0000', color:'#fff', border:'none', fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:'0.8rem', letterSpacing:'0.15em', textTransform:'uppercase', cursor:rBusy?'not-allowed':'pointer', borderRadius:'2px', transition:'background 0.3s' }}>
                {rBusy ? 'Sending...' : '→ Send Request'}
              </button>
              <p style={{ fontSize:'0.72rem', color:'#444', lineHeight:1.5, maxWidth:'40ch' }}>
                No commitment required. We&apos;ll quote you and confirm availability before any payment.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

