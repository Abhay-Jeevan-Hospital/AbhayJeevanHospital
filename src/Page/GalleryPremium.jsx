import { useState, useEffect, useCallback, useRef } from "react";

/* ─── DATA ──────────────────────────────────────────────── */
const CATS = ["All","OPD","Operation Theatre","ICU","Wards","Diagnostics","Emergency","Reception"];

const PHOTOS = [
  { id:1,  cat:"Reception",          title:"Grand Entrance Lobby",       sub:"Where healing begins",                    url:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=90", th:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { id:2,  cat:"Operation Theatre",  title:"Surgical Suite A",           sub:"Laminar-flow OT, fully sterile",          url:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1400&q=90", th:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80" },
  { id:3,  cat:"ICU",                title:"Critical Care Unit",         sub:"24 × 7 multi-parameter monitoring",       url:"https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1400&q=90", th:"https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80" },
  { id:4,  cat:"Diagnostics",        title:"Pathology Laboratory",       sub:"NABL-accredited precision diagnostics",   url:"https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1400&q=90", th:"https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80" },
  { id:5,  cat:"Wards",              title:"Private Suite",              sub:"Comfort-first recovery rooms",            url:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1400&q=90", th:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80" },
  { id:6,  cat:"OPD",                title:"Outpatient Hall",            sub:"Specialist clinics, every day",           url:"https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1400&q=90", th:"https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80" },
  { id:7,  cat:"Emergency",          title:"Trauma & Emergency",         sub:"Rapid-response team, always ready",       url:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&q=90", th:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" },
  { id:8,  cat:"Diagnostics",        title:"MRI & Radiology",            sub:"1.5T MRI · 128-slice CT · Digital X-ray", url:"https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=90", th:"https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80" },
  { id:9,  cat:"Wards",              title:"General Ward",               sub:"Round-the-clock nursing care",            url:"https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1400&q=90", th:"https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80" },
  { id:10, cat:"OPD",                title:"Consultation Room",          sub:"Private, unhurried specialist time",      url:"https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1400&q=90", th:"https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80" },
  { id:11, cat:"ICU",                title:"Neonatal ICU",               sub:"Specialised care for fragile lives",      url:"https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1400&q=90", th:"https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80" },
  { id:12, cat:"Reception",          title:"Patient Waiting Lounge",     sub:"Calm, comfortable, reassuring",           url:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=90", th:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80" },
];

const CAT_COLOR = {
  "Reception":         "#0369A1",
  "Operation Theatre": "#7C3AED",
  "ICU":               "#DC2626",
  "Wards":             "#0D9488",
  "Diagnostics":       "#0891B2",
  "Emergency":         "#EA580C",
  "OPD":               "#16A34A",
};

/* ─── SCROLL-REVEAL HOOK ─────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.08 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, on];
}

/* ─── CARD ───────────────────────────────────────────────── */
function Card({ photo, index, onOpen }) {
  const [ref, on] = useReveal();
  const [hov, setHov] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const color = CAT_COLOR[photo.cat] || "#334155";

  return (
    <div
      ref={ref}
      onClick={() => onOpen(photo)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .5s ease ${index * 55}ms, transform .5s ease ${index * 55}ms`,
        cursor: "pointer",
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        boxShadow: hov
          ? "0 20px 48px rgba(11,31,58,.22), 0 2px 8px rgba(11,31,58,.10)"
          : "0 4px 16px rgba(11,31,58,.08)",
        transition: `opacity .5s ease ${index * 55}ms, transform .5s ease ${index * 55}ms, box-shadow .3s ease`,
      }}
    >
      {/* skeleton */}
      {!loaded && <div style={{ background: "linear-gradient(135deg,#e2e8f0,#f1f5f9)", minHeight: 220, width: "100%" }} />}

      <img
        src={photo.th}
        alt={photo.title}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        style={{
          display: loaded ? "block" : "none",
          width: "100%",
          objectFit: "cover",
          transform: hov ? "scale(1.07)" : "scale(1)",
          transition: "transform .55s cubic-bezier(.25,.46,.45,.94)",
        }}
      />

      {/* dark scrim */}
      <div style={{
        position:"absolute", inset:0,
        background: "linear-gradient(to top, rgba(11,31,58,.88) 0%, rgba(11,31,58,.25) 45%, transparent 70%)",
        opacity: hov ? 1 : 0.7,
        transition: "opacity .35s",
      }} />

      {/* top-left category pill */}
      <div style={{
        position:"absolute", top:14, left:14,
        background: color, color:"#fff",
        fontSize:10, fontWeight:800, letterSpacing:"0.12em",
        padding:"4px 10px", borderRadius:99, textTransform:"uppercase",
        boxShadow:"0 2px 8px rgba(0,0,0,.25)",
      }}>
        {photo.cat}
      </div>

      {/* top-right zoom */}
      <div style={{
        position:"absolute", top:14, right:14,
        width:34, height:34, borderRadius:"50%",
        background:"rgba(255,255,255,.15)",
        backdropFilter:"blur(6px)",
        border:"1px solid rgba(255,255,255,.25)",
        display:"flex", alignItems:"center", justifyContent:"center",
        opacity: hov ? 1 : 0,
        transform: hov ? "scale(1)" : "scale(.8)",
        transition:"opacity .25s, transform .25s",
      }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
      </div>

      {/* bottom info */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, padding:"18px 18px 16px",
        transform: hov ? "translateY(0)" : "translateY(6px)",
        transition:"transform .3s ease",
      }}>
        <p style={{ color:"#fff", fontWeight:800, fontSize:15, lineHeight:1.25, margin:0 }}>{photo.title}</p>
        <p style={{
          color:"rgba(200,220,255,.75)", fontSize:12, marginTop:4, lineHeight:1.4,
          opacity: hov ? 1 : 0, transform: hov ? "translateY(0)" : "translateY(4px)",
          transition:"opacity .3s .05s, transform .3s .05s",
        }}>{photo.sub}</p>
      </div>
    </div>
  );
}

/* ─── LIGHTBOX ───────────────────────────────────────────── */
function Lightbox({ photo, index, total, onPrev, onNext, onClose, slideshow, onToggleSlide }) {
  const [loaded, setLoaded] = useState(false);
  const color = CAT_COLOR[photo.cat] || "#334155";

  return (
    <div
      style={{
        position:"fixed", inset:0, zIndex:999,
        background:"rgba(4,8,18,.97)",
        display:"flex", flexDirection:"column",
        backdropFilter:"blur(12px)",
      }}
      onClick={onClose}
    >
      {/* TOP BAR */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"14px 24px", borderBottom:"1px solid rgba(255,255,255,.08)",
          flexShrink:0,
        }}
      >
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ background:color, color:"#fff", fontSize:10, fontWeight:800, padding:"4px 10px", borderRadius:99, letterSpacing:"0.12em", textTransform:"uppercase" }}>
            {photo.cat}
          </span>
          <div>
            <p style={{ color:"#fff", fontWeight:800, fontSize:16, margin:0 }}>{photo.title}</p>
            <p style={{ color:"rgba(148,180,220,.7)", fontSize:12, margin:"2px 0 0" }}>{photo.sub}</p>
          </div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          {/* Slideshow toggle */}
          <button
            onClick={onToggleSlide}
            style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"7px 14px", borderRadius:99, border:"none",
              background: slideshow ? "#DC2626" : "rgba(255,255,255,.1)",
              color:"#fff", fontWeight:700, fontSize:12, cursor:"pointer",
              transition:"background .2s",
            }}
          >
            {slideshow
              ? <><span style={{fontSize:14}}>⏸</span> Pause</>
              : <><span style={{fontSize:14}}>▶</span> Slideshow</>
            }
          </button>

          <span style={{ color:"rgba(255,255,255,.3)", fontSize:13, fontFamily:"monospace" }}>
            {String(index+1).padStart(2,"0")} / {String(total).padStart(2,"0")}
          </span>

          <button
            onClick={onClose}
            style={{
              width:36, height:36, borderRadius:"50%",
              border:"1px solid rgba(255,255,255,.15)",
              background:"rgba(255,255,255,.06)",
              color:"rgba(255,255,255,.7)", fontSize:20, lineHeight:1,
              display:"flex", alignItems:"center", justifyContent:"center",
              cursor:"pointer",
            }}
          >×</button>
        </div>
      </div>

      {/* IMAGE AREA */}
      <div
        style={{ flex:1, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", padding:"0 80px" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Blurred bg */}
        <div style={{
          position:"absolute", inset:0, zIndex:0,
          backgroundImage:`url(${photo.th})`,
          backgroundSize:"cover", backgroundPosition:"center",
          filter:"blur(40px) brightness(0.15)",
        }} />

        {/* Prev */}
        <button
          onClick={onPrev}
          style={{
            position:"absolute", left:16, zIndex:2,
            width:48, height:48, borderRadius:"50%",
            border:"1px solid rgba(255,255,255,.15)",
            background:"rgba(255,255,255,.06)",
            color:"#fff", fontSize:22, cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            backdropFilter:"blur(6px)",
          }}
        >‹</button>

        {/* Image */}
        <div style={{ position:"relative", zIndex:1, maxWidth:900, width:"100%" }}>
          {!loaded && (
            <div style={{
              position:"absolute", inset:0, background:"rgba(255,255,255,.04)",
              borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", minHeight:320,
            }}>
              <div style={{
                width:40, height:40, borderRadius:"50%",
                border:"2px solid rgba(255,255,255,.15)",
                borderTopColor:"rgba(255,255,255,.7)",
                animation:"spin 0.8s linear infinite",
              }} />
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}
          <img
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            onLoad={() => setLoaded(true)}
            style={{
              width:"100%", height:"auto",
              maxHeight:"calc(100vh - 240px)",
              objectFit:"contain",
              borderRadius:16,
              boxShadow:"0 32px 80px rgba(0,0,0,.6)",
              opacity: loaded ? 1 : 0,
              transition:"opacity .4s ease",
              display:"block",
            }}
          />
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          style={{
            position:"absolute", right:16, zIndex:2,
            width:48, height:48, borderRadius:"50%",
            border:"1px solid rgba(255,255,255,.15)",
            background:"rgba(255,255,255,.06)",
            color:"#fff", fontSize:22, cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            backdropFilter:"blur(6px)",
          }}
        >›</button>
      </div>

      {/* FILMSTRIP */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          flexShrink:0,
          borderTop:"1px solid rgba(255,255,255,.08)",
          background:"rgba(5,12,28,.85)",
          padding:"10px 16px 14px",
          display:"flex", gap:8, justifyContent:"center",
          overflowX:"auto",
        }}
        className="hide-scroll"
      >
        <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
        {/* caption */}
        <div style={{ width:"100%", textAlign:"center", position:"absolute", paddingBottom:2 }}>
          <p style={{ color:"rgba(180,210,255,.55)", fontSize:11, margin:0 }}>{photo.sub}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────── */
export default function GalleryPremium() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch]       = useState("");
  const [active, setActive]       = useState(null); // { photo, index }
  const [slideshow, setSlideshow] = useState(false);
  const timerRef = useRef(null);

  const filtered = PHOTOS.filter(p => {
    const mc = activeCat === "All" || p.cat === activeCat;
    const ms = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.cat.toLowerCase().includes(search.toLowerCase());
    return mc && ms;
  });

  const open  = (photo) => { setActive({ photo, index: filtered.indexOf(photo) }); setSlideshow(false); };
  const close = useCallback(() => { setActive(null); setSlideshow(false); clearInterval(timerRef.current); }, []);

  const prev = useCallback(() => {
    setActive(a => {
      const ni = (a.index - 1 + filtered.length) % filtered.length;
      return { photo: filtered[ni], index: ni };
    });
  }, [filtered]);

  const next = useCallback(() => {
    setActive(a => {
      const ni = (a.index + 1) % filtered.length;
      return { photo: filtered[ni], index: ni };
    });
  }, [filtered]);

  // keyboard
  useEffect(() => {
    if (!active) return;
    const h = e => { if (e.key==="ArrowRight") next(); if (e.key==="ArrowLeft") prev(); if (e.key==="Escape") close(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [active, next, prev, close]);

  // slideshow
  useEffect(() => {
    clearInterval(timerRef.current);
    if (slideshow && active) timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [slideshow, active, next]);

  const featuredPhoto = PHOTOS[0];

  return (
    <div style={{ minHeight:"100vh", background:"#F7FAFC", fontFamily:"'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .cat-pill { border: none; cursor: pointer; transition: all .2s; }
        .cat-pill:hover { transform: translateY(-1px); }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <div style={{ position:"relative", overflow:"hidden", minHeight:520 }}>
        {/* Full-bleed blurred bg from real photo */}
        <div style={{
          position:"absolute", inset:0, zIndex:0,
          backgroundImage:`url(${featuredPhoto.url})`,
          backgroundSize:"cover", backgroundPosition:"center 30%",
          filter:"brightness(0.28) saturate(1.2)",
        }} />
        {/* Navy overlay gradient */}
        <div style={{
          position:"absolute", inset:0, zIndex:1,
          background:"linear-gradient(135deg, rgba(11,31,58,.82) 0%, rgba(3,50,80,.6) 100%)",
        }} />
        {/* Teal glow bottom */}
        <div style={{
          position:"absolute", bottom:0, left:0, right:0, zIndex:2, height:200,
          background:"linear-gradient(to top, #F7FAFC, transparent)",
        }} />
        {/* Top accent line */}
        <div style={{ position:"absolute", top:0, left:0, right:0, zIndex:10, height:3, background:"linear-gradient(90deg,#00B4D8,#0077B6,#00B4D8)" }} />

        <div style={{ position:"relative", zIndex:5, maxWidth:1100, margin:"0 auto", padding:"60px 24px 80px", display:"flex", gap:40, alignItems:"center", flexWrap:"wrap" }}>
          {/* Left text */}
          <div style={{ flex:"1 1 340px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
              <div style={{ width:28, height:2, background:"#00B4D8" }} />
              <span style={{ color:"#00B4D8", fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase" }}>Visual Tour</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display', serif", fontStyle:"italic", fontWeight:700, fontSize:"clamp(36px,5vw,60px)", lineHeight:1.1, color:"#fff", marginBottom:20 }}>
              Our Facilities<br />&amp; Infrastructure
            </h1>
            <p style={{ color:"rgba(180,215,255,.7)", fontSize:16, lineHeight:1.7, maxWidth:380, marginBottom:32 }}>
              A curated look inside every department — built around patient comfort, clinical precision, and compassionate care.
            </p>
            {/* Stats row */}
            <div style={{ display:"flex", gap:28, flexWrap:"wrap" }}>
              {[["500+","Beds"],["12","OT Suites"],["48","ICU Beds"],["24/7","Emergency"]].map(([v,l]) => (
                <div key={l}>
                  <p style={{ color:"#fff", fontWeight:800, fontSize:26, lineHeight:1 }}>{v}</p>
                  <p style={{ color:"rgba(150,195,230,.65)", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:3 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mini bento preview */}
          <div style={{ flex:"1 1 320px", display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"160px 100px", gap:10 }}>
            {PHOTOS.slice(0,4).map((p,i) => (
              <div
                key={p.id}
                onClick={() => open(p)}
                style={{
                  gridColumn: i===0 ? "1/2" : undefined,
                  gridRow:    i===0 ? "1/3" : undefined,
                  borderRadius:14, overflow:"hidden", position:"relative", cursor:"pointer",
                  boxShadow:"0 8px 24px rgba(0,0,0,.4)",
                }}
              >
                <img src={p.th} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .4s", display:"block" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(11,31,58,.7),transparent)", display:"flex", alignItems:"flex-end", padding:10 }}>
                  <span style={{ color:"#fff", fontSize:11, fontWeight:700, lineHeight:1.2 }}>{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ STICKY CONTROLS ══════════ */}
      <div style={{
        position:"sticky", top:0, zIndex:40,
        background:"rgba(247,250,252,.92)",
        backdropFilter:"blur(14px)",
        borderBottom:"1px solid rgba(11,31,58,.08)",
        boxShadow:"0 2px 16px rgba(11,31,58,.06)",
      }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"12px 20px", display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>

          {/* Search */}
          <div style={{ position:"relative", flexShrink:0 }}>
            <svg style={{ position:"absolute", left:11, top:"50%", transform:"translateY(-50%)", opacity:.45 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search…"
              style={{
                paddingLeft:34, paddingRight:14, paddingTop:8, paddingBottom:8,
                border:"1.5px solid rgba(11,31,58,.12)",
                borderRadius:99, fontSize:13, color:"#0B1F3A",
                background:"#fff", outline:"none", width:160,
                fontFamily:"inherit",
              }}
            />
          </div>

          {/* Category pills */}
          <div style={{ display:"flex", gap:6, overflowX:"auto", flex:1 }} className="hide-scroll">
            {CATS.map(cat => {
              const count = cat==="All" ? PHOTOS.length : PHOTOS.filter(p=>p.cat===cat).length;
              const on = activeCat === cat;
              const col = CAT_COLOR[cat] || "#0B1F3A";
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className="cat-pill"
                  style={{
                    flexShrink:0, display:"flex", alignItems:"center", gap:5,
                    padding:"6px 13px", borderRadius:99,
                    fontSize:12, fontWeight:700,
                    background: on ? col : "#fff",
                    color: on ? "#fff" : "#64748b",
                    border: `1.5px solid ${on ? col : "rgba(11,31,58,.12)"}`,
                    boxShadow: on ? `0 4px 12px ${col}44` : "none",
                    fontFamily:"inherit",
                  }}
                >
                  {cat}
                  <span style={{
                    fontSize:10, fontWeight:800, padding:"2px 5px", borderRadius:99,
                    background: on ? "rgba(255,255,255,.25)" : "rgba(11,31,58,.06)",
                    color: on ? "#fff" : "#94a3b8",
                  }}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Photo count badge */}
          <span style={{ flexShrink:0, fontSize:12, color:"#94a3b8", fontWeight:600 }}>
            {filtered.length} photos
          </span>
        </div>
      </div>

      {/* ══════════ MASONRY GRID ══════════ */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"36px 20px 60px" }}>
        {filtered.length > 0 ? (
          <div style={{ columns:"1", columnGap:16 }} className="masonry-cols">
            <style>{`
              @media(min-width:640px){ .masonry-cols{ columns:2 !important } }
              @media(min-width:1024px){ .masonry-cols{ columns:3 !important } }
              .masonry-item{ break-inside:avoid; margin-bottom:16px; }
            `}</style>
            {filtered.map((photo, idx) => (
              <div key={photo.id} className="masonry-item">
                <Card photo={photo} index={idx} onOpen={open} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign:"center", padding:"80px 20px" }}>
            <div style={{ fontSize:48, marginBottom:16 }}>📷</div>
            <p style={{ color:"#64748b", fontSize:17, fontWeight:600 }}>No photos found</p>
            <p style={{ color:"#94a3b8", fontSize:14, marginTop:6 }}>Try a different filter or search term.</p>
            <button
              onClick={() => { setActiveCat("All"); setSearch(""); }}
              style={{
                marginTop:20, padding:"10px 24px", borderRadius:99,
                background:"#0B1F3A", color:"#fff", border:"none",
                fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
              }}
            >Reset</button>
          </div>
        )}
      </div>

      {/* ══════════ CTA STRIP ══════════ */}
      <div style={{
        background:"linear-gradient(135deg,#0B1F3A 0%,#0c3460 100%)",
        padding:"56px 24px", textAlign:"center",
      }}>
        <p style={{ color:"rgba(148,180,220,.7)", fontSize:12, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>
          Experience it in person
        </p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#fff", fontSize:"clamp(26px,4vw,40px)", marginBottom:10 }}>
          Visit Our Hospital
        </h2>
        <p style={{ color:"rgba(180,215,255,.6)", fontSize:15, maxWidth:420, margin:"0 auto 32px" }}>
          Our team is here to guide you through every step of your care journey.
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <button style={{
            padding:"14px 32px", borderRadius:99,
            background:"#DC2626", color:"#fff", border:"none",
            fontSize:15, fontWeight:800, cursor:"pointer", fontFamily:"inherit",
            boxShadow:"0 8px 24px rgba(220,38,38,.4)",
          }}>Book Appointment</button>
          <button style={{
            padding:"14px 32px", borderRadius:99,
            background:"rgba(255,255,255,.1)", color:"#fff",
            border:"1px solid rgba(255,255,255,.2)",
            fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
          }}>Get Directions →</button>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:"#060D1A", padding:"16px 24px", textAlign:"center" }}>
        <p style={{ color:"rgba(100,140,180,.6)", fontSize:13 }}>
          Designed &amp; Developed by <span style={{ color:"#fff", fontWeight:800 }}>Salfartech</span>
        </p>
      </div>

      {/* ══════════ LIGHTBOX ══════════ */}
      {active && (
        <Lightbox
          photo={active.photo}
          index={active.index}
          total={filtered.length}
          onPrev={prev}
          onNext={next}
          onClose={close}
          slideshow={slideshow}
          onToggleSlide={() => setSlideshow(s => !s)}
        />
      )}
    </div>
  );
}
