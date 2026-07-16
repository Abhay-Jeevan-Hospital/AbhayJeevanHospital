import { useEffect, useRef, useState } from "react";

import DrAnjaliC from '../assets/gallery/DrAnjaliC.jpeg'
import DrAnjaliOPDA from '../assets/gallery/DrAnjaliOPDA.jpeg'

import DrLalOPDA from '../assets/gallery/DrLalOPDA.jpeg'
import AHOutA from '../assets/gallery/AHOutA.jpeg'
import Reception from '../assets/gallery/Reception.jpeg'
import ReceptionA from '../assets/gallery/ReceptionA.jpeg'
import ReceptionB from '../assets/gallery/ReceptionB.jpeg'
import OT from '../assets/gallery/OT.jpeg'
import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";


const images = [DrAnjaliC, DrLalOPDA, DrAnjaliOPDA, AHOutA, Reception, ReceptionA, ReceptionB, OT];

export default function InfiniteGallerySlider() {
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
          transform: visible ? "translateY(0)" : "translateY(62px)",
          transition: `opacity 0.65s ease ${delay}ms, transform 1s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1F3A] py-12">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center">
        <Reveal>

        {/* <span className="mb-2 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          Gallery
          </span> */}

        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Our Hospital Infrastructure
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Explore our advanced facilities, modern equipment and patient care
          environment through our gallery.
        </p>
          </Reveal>
      </div>

      {/* First Row */}
      <div className="relative flex overflow-hidden">
        {/* <Reveal> */}

        <div className="slider-track flex gap-5">
          {[...images, ...images].map((image, index) => (
            <div
            key={index}
            className="w-[280px] flex-shrink-0 sm:w-[340px] md:w-[420px] lg:w-[500px]"
            >
              <div className="group aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
              </div>
            </div>
          ))}
        </div>
          {/* </Reveal> */}
      </div>

      {/* Second Row */}
      {/* <div className="relative mt-5 flex overflow-hidden">
        <div className="slider-track-reverse flex gap-5">
          {[...images, ...images].map((image, index) => (
            <div
              key={`reverse-${index}`}
              className="w-[280px] flex-shrink-0 sm:w-[340px] md:w-[420px] lg:w-[500px]"
            >
              <div className="group aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Gradient Fade Left */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent md:w-40" /> */}

      {/* Gradient Fade Right */}
      {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent md:w-40" /> */}

      <style>{`
        .slider-track {
          width: max-content;
          animation: scrollLeft 50s linear infinite;
        }

        .slider-track-reverse {
          width: max-content;
          animation: scrollRight 50s linear infinite;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .slider-track:hover,
        .slider-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Link to ='gallery' className="flex justify-center mt-12">
      <Reveal>

        <a
          href="/gallery"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#FCA311] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:bg-[#FCA311] hover:shadow-[0_15px_40px_rgba(252,163,17,0.35)]"
          >
          {/* Animated Circle */}
          <span className="absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-white/10 transition-all duration-700 group-hover:left-[110%]" />

          {/* Icon */}
          <Images
            size={22}
            className="relative z-10 transition-transform duration-500 group-hover:rotate-12"
            />

          {/* Text */}
          <span className="relative z-10">
            View All Images
          </span>

          {/* Arrow */}
          <ArrowRight
            size={22}
            className="relative z-10 transition-all duration-500 group-hover:translate-x-2"
            />
        </a>
            </Reveal>
      </Link>
    </section>
  );
}