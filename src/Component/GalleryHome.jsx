import { useEffect, useRef, useState } from "react";

import DrAnjaliC from '../assets/gallery/DrAnjaliC.jpeg'
import DrAnjaliOPDA from '../assets/gallery/DrAnjaliOPDA.jpeg'

import DrLalOPDA from '../assets/gallery/DrLalOPDA.jpeg'
import AHOutA from '../assets/gallery/AHOutA.jpeg'
import Reception from '../assets/gallery/Reception.jpeg'
import ReceptionA from '../assets/gallery/ReceptionA.jpeg'
import ReceptionB from '../assets/gallery/ReceptionB.jpeg'
import OT from '../assets/gallery/OT.jpeg'

const images = [DrAnjaliC, DrLalOPDA, DrAnjaliOPDA, AHOutA, Reception, ReceptionA, ReceptionB, OT];

export default function InfiniteGallerySlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1F3A] py-12">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center">
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
      </div>

      {/* First Row */}
      <div className="relative flex overflow-hidden">
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
    </section>
  );
}