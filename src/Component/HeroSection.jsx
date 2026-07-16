import { useEffect, useRef, useState } from "react";
import AHHero from '../assets/AHHero.png'
import DrAnjaliC from '../assets/DrAnjaliC.jpeg'
import DrLalOPD from '../assets/DrLalOPD.png'
import DrAnjali from '../assets/Consultants/DrAnjali.jpeg'
// import DrAnjaliCverticle from '../assets/DrAnjaliCverticle.jpeg'
import DrAnjaliCverticle from '../assets/DrAnjaliCverticle.jpg'
import DrLal from '../assets/Consultants/DrLal.jpeg'
import { Link } from "react-router-dom";

/* ─── Animated ECG / heartbeat line (SVG) ───────────────────────────── */
function EcgLine() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "36px" }}>
      <svg
        viewBox="0 0 800 36"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <polyline
          points="
            0,18 60,18 80,18 90,4 100,32 110,2 122,34 132,18 180,18
            240,18 260,18 270,4 280,32 290,2 302,34 312,18 360,18
            420,18 440,18 450,4 460,32 470,2 482,34 492,18 540,18
            600,18 620,18 630,4 640,32 650,2 662,34 672,18 800,18
          "
          fill="none"
          stroke="#FCA311"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 1400,
            strokeDashoffset: 1400,
            animation: "drawEcg 2.4s ease forwards 0.6s",
            filter: "drop-shadow(0 0 5px #FCA311) drop-shadow(0 0 2px #FCA311)",
          }}
        />
      </svg>
    </div>
  );
}

/* ─── Single animated stat counter ──────────────────────────────────── */
function StatCounter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="text-3xl sm:text-4xl font-black text-white leading-none"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {count}
        <span className="text-[#FCA311]">{suffix}</span>
      </span>
      <span className="text-slate-400 text-xs sm:text-sm mt-1 font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}

/* ─── Main Hero Section ──────────────────────────────────────────────── */
export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes drawEcg {
          to { stroke-dashoffset: 0; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0);     }
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1);   opacity: 1;   }
          50%       { transform: scale(1.5); opacity: 0.5; }
        }

        .hero-fade-up {
          opacity: 0;
          animation: fadeUp 0.75s ease forwards;
        }
        .hero-fade-right {
          opacity: 0;
          animation: fadeRight 0.75s ease forwards;
        }

        .btn-primary {
          background: linear-gradient(135deg, #06B6D4 0%, #0284c7 100%);
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .btn-primary:hover {
          box-shadow: 0 0 28px rgba(6,182,212,0.55);
          transform: translateY(-2px);
        }
        .btn-ghost {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-ghost:hover {
          background: rgba(6,182,212,0.12);
          transform: translateY(-2px);
        }

        .stat-divider {
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(6,182,212,0.35), transparent);
        }
      `}</style>

      <section
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >
        {/* ── Background Hospital Photo ── */}
        <div className="absolute inset-0">
          <img
            // src={AHHero}
            // src={DrAnjaliC}
            src={DrAnjaliCverticle}
            // src={DrLalOPD}
            alt="Abhay Jeevan Hospital"
            className="w-full md:hidden h-full object-cover object-center"
          />
          <img
            // src={AHHero}
            src={DrAnjaliC}
            // src={DrAnjaliCverticle}
            // src={DrLalOPD}
            alt="Abhay Jeevan Hospital"
            className="w-full hidden lg:block h-full object-cover object-center"
          />
        </div>

        {/* ── Overlay: dark navy from left, fades to show photo on right ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(3,10,30,0.97) 0%, rgba(3,10,30,0.93) 35%, rgba(3,10,30,0.72) 58%, rgba(3,10,30,0.28) 100%)",
          }}
        />
        {/* Bottom darkening so content stays readable on mobile */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(3,10,30,0.85) 0%, transparent 55%)",
          }}
        />
        {/* Subtle cyan glow bloom — left side */}
        <div
          className="absolute"
          style={{
            left: "-5%",
            top: "15%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-28">
          <div className="max-w-2xl flex flex-col gap-6 sm:gap-7">

            {/* Eyebrow — live indicator + label */}
            <div
              className="hero-fade-right flex items-center gap-3"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  style={{ animation: "pulse-dot 1.8s ease-in-out infinite" }}
                />
                <span className="text-[#FCA311] text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                  Abhay Jeevan Hospital • Prayagraj
                </span>
              </span>
              {/* Gold accreditation badge */}
              {/* <span
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(212,160,23,0.1)",
                  border: "1px solid rgba(212,160,23,0.45)",
                  color: "#D4A017",
                }}
              >
                ✦ NABH Accredited
              </span> */}
            </div>

            {/* Main Headline */}
            <div
              className="hero-fade-up"
              style={{ animationDelay: "0.22s" }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-black text-white leading-[1.08] tracking-tight"
              >
                Your Health,{" "}
                <span className="text-[#FCA311]"
                  style={{
                    background:
                      "linear-gradient(90deg, #06B6D4, #38bdf8, #7dd3fc)",
                    WebkitBackgroundClip: "text",
                    
                    backgroundClip: "text",
                  }}
                >
                  Our
                </span>{" "}
                <br className="hidden sm:block" />
                Priority
              </h1>
            </div>

            {/* ECG Signature Line */}
            <div
              className="hero-fade-up"
              style={{ animationDelay: "0.38s" }}
            >
              <EcgLine />
            </div>

            {/* Sub-copy */}
            <p
              className="hero-fade-up text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ animationDelay: "0.52s" }}
            >
              Prayagraj’s trusted multi-specialty hospital, delivering comprehensive healthcare through experienced doctors, advanced operation theatres, and round-the-clock emergency services.
            </p>

            {/* Trust badges — mobile wraps */}
            {/* <div
              className="hero-fade-up flex flex-wrap gap-2"
              style={{ animationDelay: "0.62s" }}
            >
              {[
                "🏥 Multi-Specialty",
                "🤰 Maternity & NICU",
                "🔬 Advanced Pathology",
                "🚑 24/7 Emergency",
                "🩺 ISO 9001:2015",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full text-slate-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div
              className="hero-fade-up flex flex-wrap gap-3 sm:gap-4"
              style={{ animationDelay: "0.74s" }}
            >
              <Link to='book-appointment' className="bg-[#FCA311] px-7 sm:px-9 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg">
                Book Your Appointment
              </Link>
              <a href="tel:+919876543210"
                className="btn-ghost px-7 sm:px-9 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base"
                style={{
                  border: "1.5px solid rgba(252,163,17,0.45)",
                }}
              >
                Emergency 24x7
              </a>
            </div>

            {/* Stats strip */}
            <div
              className="hero-fade-up"
              style={{ animationDelay: "0.9s" }}
            >
              {/* Thin top rule */}
              <div
                className="mb-6 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(252,163,27,0.5) 0%, rgba(252,163,17,0.08) 100%)",
                }}
              />
              <div className="flex items-center gap-6 sm:gap-10">
                <StatCounter end={3} suffix="+" label="Years of Trust" />
                <div className="stat-divider self-stretch" />
                <StatCounter end={5} suffix="+" label="Expert Doctors" />
                <div className="stat-divider self-stretch" />
                <StatCounter end={10000} suffix="+" label="Lives Touched" />
                <div className="stat-divider self-stretch hidden sm:block" />
                <div className="hidden sm:flex flex-col items-center text-center">
                  <span className="text-3xl sm:text-4xl font-black text-white leading-none">
                    24<span className="text-[#FCA311]">/7</span>
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm mt-1 font-medium tracking-wide">
                    Emergency
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Doctors floating card — bottom-right (desktop only) ── */}
        <div
          className="hidden lg:flex absolute bottom-10 right-10 flex-col gap-2.5 hero-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          {[
            { name: "Dr. Anjali Singh", spec: "Gynecologist & Infertility Specialist", emoji: DrAnjali},
            { name: "Dr. L.R. Singh", spec: "MD — General Medicine", emoji: DrLal},
          ].map((doc) => (
            <div
              key={doc.name}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{
                background: "rgba(3,10,30,0.6)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(252,163,17,0.2)",
              }}
            >
              <img src= {doc.emoji}
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#06B6D4,#0369a1)",
                }}
              />
              
               
              {/* </div> */}
              <div>
                <div className="text-white text-sm font-bold leading-tight">
                  {doc.name}
                </div>
                <div className="text-[#FCA311]/80 text-xs leading-tight mt-0.5">
                  {doc.spec}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
