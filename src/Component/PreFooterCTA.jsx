import { useEffect, useRef, useState } from 'react';
import AHOutA from '../assets/gallery/AHOutA.jpeg'
export default function PreFooterCTA() {
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
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <section className="w-ful bg-white overflow-hidden">

      <div className="max- mx-auto flex flex-col lg:flex-row min-h-[480px]">

        {/* ── LEFT: Hospital Photo ── */}
        <div className="relative p-10 lg:w-1/2 min-h-[280px] lg:min-h-full overflow-hidden">
          <Reveal>

            <img
              src={AHOutA}
              alt="Abhay Jeevan Hospital Building"
              className="w-full rounded-3xl h-full object-cover"
              style={{ minHeight: "320px" }}
            />
            {/* Dark overlay at bottom for text legibility */}
            <div
              className="absolute inset-0"
            // style={{
            //   background:
            //     "linear-gradient(to right, rgba(11,31,58,0.45) 0%, transparent 100%)",
            // }}
            />
            {/* Floating badge on photo */}
            <div className="absolute bottom-6 left-6">
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                style={{ background: "rgba(11,31,58,0.75)" }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: "#FCA311" }}
                />
                <span className="text-white text-xs font-semibold tracking-wide">
                  24/7 Emergency Available
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── RIGHT: CTA Content ── */}
        <div
          className="lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14"
        // style={{ background: "#0B1F3A" }}
        >
          <Reveal>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-0.5 w-8 rounded-full"
              // style={{ background: "#FCA311" }}
              />
              <span
                className="text-xs font-bold text-[#0B1F3A] uppercase tracking-[0.2em]"
              // style={{ color: "#FCA311" }}
              >
                Abhay Jeevan Hospital, Prayagraj
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-black leading-snug mb-3">
              Caring for You,{" "}
              <br />
              <span className='text-[#0B1F3A]'>Every Step of the Way.</span>
            </h2>

            {/* Subtext */}
            <p className="text- text-sm leading-relaxed mb-10 max-w-sm">
              Expert doctors, compassionate care, and advanced facilities — all
              available at your convenience.
            </p>

            {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
            href="#appointment"
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: "#0B1F3A",
              color: "#FCA311",
              boxShadow: "0 6px 28px rgba(252,163,17,0.35)",
              }}
              >
              Book Appointment
              </a>
              <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-4 rounded-xl border transition-all duration-200 hover:bg-white/10 active:scale-95"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
              Contact Us
              </a>
              </div> */}

            {/* Divider */}
            <div
              className="w-full h-px mb-8"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            {/* Quick Info Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: "rgba(252,163,17,0.12)" }}
                >
                  📞
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-0.5 text-black"
                  >
                    Helpline
                  </p>
                  <a
                    href="tel:+917554001234"
                    className="text-sm font-semibold hover:underline"
                  >
                    +91 9335399454
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                >
                  📍
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-0.5"
                  >
                    Location
                  </p>
                  <span className="text-sm font-semibold">
                    Jhunsi, Prayagraj
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
