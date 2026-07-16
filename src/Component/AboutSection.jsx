import { useState, useEffect, useRef } from "react";
import AHHero from '../assets/AHHero.png'
import DrAnjaliB from '../assets/AboutHome/DrAnjaliB.jpeg'
import DrLalA from '../assets/AboutHome/DrLalA.jpeg'
import { Link } from "react-router-dom";

const stats = [
  { value: "3+", label: "Years of Excellence" },
  { value: "10K+", label: "Patients Treated" },
  { value: "5+", label: "Specialists" },
  { value: "24/7", label: "Emergency Care" },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    text: "Round-the-clock critical care & emergency support",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path d="M9 12l2 2 4-4" /><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
      </svg>
    ),
    text: "Trusted Care with international quality standards",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    text: "State-of-the-art diagnostics & surgical technology",
  },
];


export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true); },
        { threshold: 0.12 }
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
    return [ref, visible];
  }

  /* ─── REVEAL WRAPPER ─── */
  function Reveal({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(82px)",
          transition: `opacity 0.65s ease ${delay}ms, transform 1s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <section
      className="relative w-full bg-white overflow-hidden lg:h-screen"
    // style={{ height: "100svh", minHeight: "620px", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}

    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-950" />

      {/* Faint blue tint on right half */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(23,37,84,0.04), transparent)" }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">

          {/* ── LEFT: TEXT ── */}
          <div
            className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
            }}
          >
            <Reveal>

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-block w-8 h-0.5 rounded-full"
                  style={{ background: "#FCA311" }}
                />
                <span
                  className="text-xs font-bold tracking-[0.18em] uppercase"
                  style={{ color: "#FCA311" }}
                >
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-extrabold leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#172554" }}
              >
                Healing Lives with
                <br />
                <span style={{ color: "#FCA311" }}>Compassion</span> & Expertise
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px flex-1 max-w-[48px]" style={{ background: "#172554", opacity: 0.15 }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "#FCA311" }} />
                <div className="h-px flex-1 max-w-[48px]" style={{ background: "#172554", opacity: 0.15 }} />
              </div>

              {/* Body text */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[420px]">
                Abhay Jeevan Hospital has been a beacon of trust and medical excellence
                for over three years. We blend cutting-edge technology with heartfelt
                care to deliver outcomes that truly matter — for patients, families,
                and communities across the region.
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-3 mb-7">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-0.5 rounded-lg p-2"
                      style={{ background: "rgba(23,37,84,0.06)", color: "#172554" }}
                    >
                      {f.icon}
                    </span>
                    <span className="text-gray-600 text-sm leading-snug pt-1.5">{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div
                className="grid grid-cols-4 gap-3 rounded-2xl p-4 mb-7"
                style={{ background: "#172554" }}
              >
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="font-extrabold text-xl" style={{ color: "#FCA311" }}>{s.value}</div>
                    <div className="text-blue-200 text-[10px] leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3">
                <Link to='about'
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
                  style={{ background: "#FCA311", color: "#172554" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(252,163,17,0.35)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  Discover Our Story
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+919335399454"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300"
                  style={{ borderColor: "#172554", color: "#172554" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#172554"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#172554"; }}
                >
                  Contact Us
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT: 3-IMAGE PUZZLE ── */}

          <div
            className="relative lg:flex mb-20 items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.85s ease 0.15s, transform 0.85s ease 0.15s",
            }}
          >
            <Reveal>
              {/* Container for the 3 puzzle pieces */}
              <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-0"
                style={{ width: "460px", height: "440px" }}>

                {/* ─── DECORATIVE BACKGROUND RING ─── */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "340px", height: "340px",
                    top: "50px", left: "60px",
                    background: "rgba(23,37,84,0.05)",
                    border: "1.5px dashed rgba(23,37,84,0.12)",
                  }}
                />

                {/* ══════════════════════════════════════
                  IMAGE 1 — TOP LEFT (HEXAGON-ISH / angled)
                  Big portrait, rotated slightly left
                  ══════════════════════════════════════ */}
                <div
                  className="absolute overflow-hidden shadow-xl"
                  style={{
                    width: "200px",
                    height: "250px",
                    top: "20px",
                    left: "20px",
                    borderRadius: "120px 24px 80px 24px",  /* asymmetric organic shape */
                    transform: "rotate(-4deg)",
                    border: "4px solid #fff",
                    boxShadow: "0 16px 48px rgba(23,37,84,0.18), 0 0 0 2px rgba(252,163,17,0.3)",
                    zIndex: 3,
                  }}
                >
                  <img
                    src={AHHero}
                    alt="Advanced Surgery"
                    className="w-full h-full object-cover"
                    style={{ transform: "rotate(4deg) scale(1.08)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(23,37,84,0.45) 0%, transparent 55%)" }} />
                  <span
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold tracking-wider uppercase whitespace-nowrap px-2.5 py-1 rounded-full"
                    style={{ background: "#FCA311", color: "#172554" }}
                  >
                    Surgery
                  </span>
                </div>

                {/* ══════════════════════════════════════
                  IMAGE 2 — TOP RIGHT (PILL / stadium shape)
                  Landscape, rotated right
                  ══════════════════════════════════════ */}
                <div
                  className="absolute overflow-hidden shadow-xl"
                  style={{
                    width: "230px",
                    height: "175px",
                    top: "10px",
                    right: "10px",
                    borderRadius: "24px 100px 24px 80px",  /* pill-like asymmetric */
                    transform: "rotate(3.5deg)",
                    border: "4px solid #fff",
                    boxShadow: "0 16px 48px rgba(23,37,84,0.18), 0 0 0 2px rgba(23,37,84,0.1)",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={DrAnjaliB}
                    alt="Patient Care"
                    className="w-full h-full object-cover"
                    style={{ transform: "rotate(-3.5deg) scale(1.08)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(23,37,84,0.45) 0%, transparent 55%)" }} />
                  <span
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold tracking-wider uppercase whitespace-nowrap px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(23,37,84,0.85)", color: "#fff" }}
                  >
                    Patient Care
                  </span>
                </div>

                {/* ══════════════════════════════════════
                  IMAGE 3 — BOTTOM CENTER (DIAMOND-ISH)
                  Square rotated 45° at bottom, pulls it together
                  ══════════════════════════════════════ */}
                <div
                  className="absolute overflow-hidden shadow-2xl"
                  style={{
                    width: "215px",
                    height: "215px",
                    bottom: "10px",
                    left: "50%",
                    marginLeft: "-107px",
                    borderRadius: "24px 80px 24px 80px",  /* diamond-ish with curves */
                    transform: "rotate(6deg)",
                    border: "4px solid #fff",
                    boxShadow: "0 20px 56px rgba(23,37,84,0.22), 0 0 0 2px rgba(252,163,17,0.25)",
                    zIndex: 4,
                  }}
                >
                  <img
                    src={DrLalA}
                    alt="Expert Team"
                    className="w-full h-full object-cover"
                    style={{ transform: "rotate(-6deg) scale(1.12)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(23,37,84,0.5) 0%, transparent 50%)" }} />
                  <span
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold tracking-wider uppercase whitespace-nowrap px-2.5 py-1 rounded-full"
                    style={{ background: "#FCA311", color: "#172554" }}
                  >
                    Expert Team
                  </span>
                </div>

                {/* ─── CONNECTOR DOTS between images ─── */}
                {/* dot between img1 and img3 */}
                <div
                  className="absolute rounded-full z-10"
                  style={{ width: "10px", height: "10px", background: "#FCA311", bottom: "160px", left: "190px", boxShadow: "0 0 0 3px rgba(252,163,17,0.25)" }}
                />
                {/* dot between img2 and img3 */}
                <div
                  className="absolute rounded-full z-10"
                  style={{ width: "8px", height: "8px", background: "#172554", bottom: "185px", right: "148px", opacity: 0.4 }}
                />
                {/* small ring accent */}
                <div
                  className="absolute rounded-full z-10"
                  style={{
                    width: "40px", height: "40px",
                    top: "195px", left: "205px",
                    border: "2px solid rgba(252,163,17,0.5)",
                    background: "transparent",
                  }}
                />

                {/* ─── FLOATING BADGE (NABH) ─── */}
                <div
                  className="absolute z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl"
                  style={{
                    bottom: "28px",
                    right: "0px",
                    background: "#172554",
                    boxShadow: "0 8px 24px rgba(23,37,84,0.35)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FCA311" strokeWidth={2} style={{ width: "15px", height: "15px" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div>
                    <div className="text-[10px] font-extrabold tracking-wider text-white">Trusted</div>
                    <div className="text-[9px] text-blue-300 -mt-0.5">Healthcare</div>
                  </div>
                </div>

                {/* ─── Experience badge ─── */}
                <div
                  className="absolute z-20 rounded-2xl px-3.5 py-2.5 text-center"
                  style={{
                    top: "8px",
                    left: "-10px",
                    background: "#FCA311",
                    boxShadow: "0 6px 20px rgba(252,163,17,0.4)",
                  }}
                >
                  <div className="font-extrabold text-lg leading-none" style={{ color: "#172554" }}>3+</div>
                  <div className="text-[9px] font-semibold leading-tight" style={{ color: "#172554" }}>Years of<br />Trust</div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #FCA311 40%, transparent)" }} />
    </section>
  );
}
