import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import DrAnjaliC from '../assets/gallery/DrAnjaliC.jpeg'
import AHOutA from '../assets/gallery/AHOutA.jpeg'
import NICU from '../assets/gallery/NICU.jpeg'
import OPD from '../assets/gallery/OPD.jpeg'
import DrLalOPD from '../assets/gallery/DrLalOPD.jpeg'
import DrAnjaliOPD from '../assets/gallery/DrAnjaliOPD.jpeg'
import DrAnjaliOPDA from '../assets/gallery/DrAnjaliOPDA.jpeg'
import OperationTheatre from '../assets/gallery/OperationTheatre.jpeg'
import ReceptionD from '../assets/gallery/ReceptionD.jpeg'
import ReceptionB from '../assets/gallery/ReceptionB.jpeg'
import ReceptionA from '../assets/gallery/ReceptionA.jpeg'
import AHOut from '../assets/gallery/AHOut.jpeg'
import HospitalInterior from '../assets/gallery/HospitalInterior.jpeg'
import NICU2 from '../assets/gallery/NICU2.jpeg'

const galleryData = [
  {
    id: 1,
    category: "Dr Anjali Singh",
    title: "Dr Anjali Singh",
    img: DrAnjaliC,
    size: "large",
  },
  {
    id: 2,
    category: "Hospital Building",
    title: "Abhay Jeevan Hospital",
    img: AHOutA,
    size: "small",
  },
  {
    id: 3,
    category: "Hospital Interior",
    title: "Reception Area",
    img: ReceptionA,
    size: "small",
  },
  {
    id: 4,
    category: "Hospital Interior",
    title: "OPD",
    img: OPD,
    size: "medium",
  },
  {
    id: 5,
    category: "OPD",
    title: "Dr Lal Ratnakar Singh",
    img: DrLalOPD,
    size: "medium",
  },
  {
    id: 6,
    category: "OPD",
    title: "Dr Anjali Singh",
    img: DrAnjaliOPD,
    size: "large",
  },
  {
    id: 7,
    category: "OPD",
    title: "Dr Anjali Singh",
    img: DrAnjaliOPDA,
    size: "small",
  },
  {
    id: 8,
    category: "Hospital Interior",
    title: "Reception",
    img: ReceptionD,
    size: "small",
  },
  {
    id: 9,
    category: "ICU",
    title: "Neonatal Care Unit",
    img: NICU,
    size: "medium",
  },
  {
    id: 10,
    category: "OT",
    title: "Modular OT",
    img: OperationTheatre,
    size: "medium",
  },
  {
    id: 11,
    category: "Hospital Interior",
    title: "Hospital Reception",
    img: ReceptionB,
    size: "small",
  },
  {
    id: 12,
    category: "Hospital Building",
    title: "Abhay Jeevan Hospital",
    img: AHOut,
    size: "large",
  },
  {
    id: 13,
    category: "Hospital Interior",
    title: "Hospital Lobby",
    img: HospitalInterior,
    size: "large",
  },
  {
    id: 14,
    category: "ICU",
    title: "NICU",
    img: NICU2,
    size: "large",
  },
];

const categories = ["All", ...new Set(galleryData.map((g) => g.category))];

const statsData = [

  { label: "Departments", value: "5+" },
  { label: "Years of Excellence", value: "3+" },
  { label: "Patients Served", value: "1000+" },
  { label: "Rating at Google", value: "4.9" },
];

export default function AbhayJeevanGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());

  const filtered =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((g) => g.category === activeCategory);

  const handleCategory = (cat) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setIsAnimating(false);
    }, 200);
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        const idx = filtered.findIndex((g) => g.id === lightbox.id);
        setLightbox(filtered[(idx + 1) % filtered.length]);
      }
      if (e.key === "ArrowLeft") {
        const idx = filtered.findIndex((g) => g.id === lightbox.id);
        setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
      }
    },
    [lightbox, filtered]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisibleItems((prev) => new Set([...prev, e.target.dataset.id]));
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  // const getGridClass = (size) => {
  //   if (size === "large") return "md:col-span-2 md:row-span-2";
  //   if (size === "medium") return "md:col-span-2";
  //   return "";
  // };

  // const getImgHeight = (size) => {
  //   if (size === "large") return "h-72 md:h-full";
  //   if (size === "medium") return "h-52";
  //   return "h-52";
  // };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgound: "linear-gradient(135deg, #060F1E 0%, #0B1F3A 50%, #0D2647 100%)" }}
    >

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden md:py-20 py-10 md:px-4">
        {/* Ambient glow orbs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0891B2, transparent)" }}
        />

        <div className="max-w-7xl mx-auto bg-blue-950 md:rounded-2xl px-2 text-center relative z-10">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-cyan-500" />
            <span className="text-[#FCA311] text-xs font-semibold tracking-widest uppercase">
              Our Facilities
            </span>
            <div className="w-8 h-px bg-cyan-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Hospital{" "}
            <span
              className="bg-clip-text text-[#FCA311]"
              style={{
                // backgroundImage: "linear-gradient(90deg, #06B6D4, #22D3EE, #67E8F9)",
              }}
            >
              Gallery
            </span>
          </h1>

          <p className="text-cyan-200/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Explore our world-class infrastructure, advanced medical equipment,
            and healing spaces at Abhay Jeevan Hospital, prayagraj.
          </p>

          {/* Stats Strip */}
          <div
            className="inline-grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-cyan-700/20"
            style={{ background: "rgba(6,182,212,0.08)", backdropFilter: "blur(12px)" }}
          >
            {statsData.map((s, i) => (
              <div key={i} className="px-8 py-4 text-center">
                <div className="text-2xl font-bold text-[#FCA311]">{s.value}</div>
                <div className="text-xs text-cyan-500/70 mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILTER BAR ─── */}
      <div className="sticky top-0 z-30 py-4 px-4" style={{ background: "rgba(11,31,58,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(6,182,212,0.12)" }}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <span className="text-cyan-600 text-xs font-semibold tracking-widest uppercase shrink-0 mr-2">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                ? "bg-[#FCA311] text-white border-[#FCA311] shadow-lg"
                : "text-[#FCA311]/70 border-cyan-700/30 hover:border-[#FCA311]/50 hover:text-[#FCA311]"
                }`}
              style={
                activeCategory === cat
                  ? { boxShadow: "0 0 20px rgba(6,182,212,0.35)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-[#FCA311]/50 text-xs">
            {filtered.length} items
          </span>
        </div>
      </div>

      {/* ─── GALLERY GRID ─── */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"
            }`}
        >
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              data-id={String(item.id)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
              style={{
                opacity: visibleItems.has(String(item.id)) ? 1 : 0,
                transform: visibleItems.has(String(item.id))
                  ? "translateY(0)"
                  : "translateY(24px)",
                transition: `opacity 0.5s ease ${idx * 60}ms, transform 0.5s ease ${idx * 60
                  }ms`,
                border: "1px solid rgba(6,182,212,0.1)",
              }}
              onClick={() => setLightbox(item)}
            >
              {/* Card thumbnail: always cropped into a horizontal (video) frame,
                  regardless of whether the original image is portrait or landscape */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, #060F1E 0%, rgba(6,15,30,0.4) 50%, transparent 100%)",
                }}
              />

              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ boxShadow: "0 0 12px #06B6D4" }}
              />

              <div className="absolute top-3 left-3">
                <span
                  className="text-xs px-3 py-1 rounded-full font-semibold text-[#FCA311] border border-cyan-500/30"
                  style={{
                    background: "rgba(6,182,212,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-cyan-400/40"
                  style={{
                    background: "rgba(6,182,212,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg
                    className="w-4 h-4 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-base">
                  {item.title}
                </h3>

                {/* <p className="text-cyan-300/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(4,9,20,0.96)", backdropFilter: "blur(20px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(6,182,212,0.2)", boxShadow: "0 0 80px rgba(6,182,212,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top cyan line */}
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            {/* Full-size image area: no forced aspect ratio anymore.
                The image keeps its ORIGINAL aspect ratio (portrait or landscape),
                is never cropped (object-contain), and is capped at 75vh so tall
                portrait images don't overflow the viewport. Letterboxed on black. */}
            <div className="bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
              />
            </div>

            {/* Info bar */}
            <div
              className="p-6 flex items-start justify-between"
              style={{ background: "rgba(6,15,30,0.95)" }}
            >
              <div>
                <span className="text-cyan-500 text-xs font-semibold tracking-widest uppercase">
                  {lightbox.category}
                </span>
                <h2 className="text-white text-2xl font-bold mt-1">{lightbox.title}</h2>
                {/* <p className="text-cyan-300/50 text-sm mt-2">{lightbox.desc}</p> */}
              </div>

              {/* Nav buttons */}
              <div className="flex items-center gap-2 ml-4 shrink-0">
                <button
                  onClick={() => {
                    const idx = filtered.findIndex((g) => g.id === lightbox.id);
                    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
                  }}
                  className="w-10 h-10 rounded-full border border-cyan-700/40 flex items-center justify-center text-cyan-400 hover:border-cyan-400 hover:text-cyan-200 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    const idx = filtered.findIndex((g) => g.id === lightbox.id);
                    setLightbox(filtered[(idx + 1) % filtered.length]);
                  }}
                  className="w-10 h-10 rounded-full border border-cyan-700/40 flex items-center justify-center text-cyan-400 hover:border-cyan-400 hover:text-cyan-200 transition-all"
                >
                  →
                </button>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all ml-2"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div
              className="px-6 pb-5 flex gap-2 overflow-x-auto"
              style={{ background: "rgba(6,15,30,0.95)" }}
            >
              {filtered.map((g) => (
                <img
                  key={g.id}
                  src={g.img}
                  alt={g.title}
                  onClick={() => setLightbox(g)}
                  className={`h-14 w-20 object-cover rounded-lg cursor-pointer shrink-0 transition-all duration-200 ${lightbox.id === g.id
                    ? "ring-2 ring-cyan-400 opacity-100"
                    : "opacity-40 hover:opacity-70"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-700/50 text-xs flex items-center gap-3">
            <span>← → to navigate</span>
            <span className="w-px h-3 bg-cyan-800" />
            <span>Esc to close</span>
          </div>
        </div>
      )}

      {/* ─── CTA SECTION ─── */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div
          className="rounded-3xl p-10 md:p-14 bg-blue-950 text-center relative overflow-hidden"
        //  /
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, #06B6D4 0%, transparent 60%), radial-gradient(circle at 70% 50%, #0891B2 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-[#FCA311] text-xs font-semibold tracking-widest uppercase mb-3">
              Visit Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Care in Person
            </h2>
            <p className="text-cyan-200/50 text-base max-w-md mx-auto mb-8">
              Schedule a visit to Abhay Jeevan Hospital and see our facilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to='/book-appointment'
                className="px-8 bg-[#FCA311] py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: "0 0 30px rgba(6,182,212,0.3)",
                }}
              >
                Book Appointment
              </Link>
              <a href="tel:+919335399454" className="px-8 py-3.5 rounded-full text-[#FCA311] font-semibold text-sm border border-cyan-700/40 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
