import { useState, useRef, useEffect } from "react";
// import BreadCrumb from "../Component/BreadCrumb";
import DrAnjali from '../assets/Consultants/DrAnjali.jpeg'
import DrLal from '../assets/Consultants/DrLal.jpeg'

const doctors = [
  {
    id: 1,
    name: "Dr. Anjali Singh",
    specialty: "Gynecologist & Infertility Specialist",
    qualification: "MBBS, MS (Gold Medalist) FMAS, DNB, MNAMS, CIMP",
    experience: "12 Years",
    timing: "Mon–Sat | 10:00 AM – 2:00 PM",
    emoji: DrAnjali,
    color: "#FCA311",
    tagline: "Heart Care Specialist",
  },
  {
    id: 2,
    name: "Dr. Lal Ratnakar Singh",
    specialty: "General Physician",
    qualification: "MBBS, MD, ACPE, CPE (Gold Medalist)",
    experience: "10 Years",
    timing: "Mon–Fri | 11:00 AM – 3:00 PM",
    emoji: DrLal,
    color: "#FCA311",
    tagline: "Bone & Joint Expert",
  },
  {
    id: 3,
    name: "Dr. S J Patel",
    specialty: "Pediatrician",
    qualification: "MBBS, MS (OBG)",
    experience: "20 Years",
    timing: "Tue–Sun | 3:00 pM – 4:00 PM",
    emoji: "🌸",
    color: "#FCA311",
    tagline: "Child's health Specialist",
  },
  {
    id: 4,
    name: "Dr. Raviraj Patil",
    specialty: "General Surgeon",
    qualification: "MBBS, Ms",
    experience: "16 Years",
    timing: "Mon–Sat | 12:00 PM – 4:00 PM",
    emoji: "🧠",
    color: "#FCA311",
    tagline: "Brain & Spine Specialist",
  },
  {
    id: 4,
    name: "Dr. Pankaj Singh",
    specialty: "Plastic Surgeon",
    qualification: "MBBS, MS, MCh",
    experience: "16 Years",
    timing: "Mon–Sat | 12:00 PM – 4:00 PM",
    emoji: "🧠",
    color: "#FCA311",
    tagline: "Plastic Surgeon",
  },
];


// const CARD_WIDTH = 320;
const CARD_WIDTH = typeof window !== "undefined"
  ? window.innerWidth < 640
    ? 260
    : window.innerWidth < 1024
      ? 290
      : 320
  : 320;

const CARD_GAP = 32;
const VISIBLE = 3;

export default function Consultant() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hovered, setHovered] = useState(null);
  const autoRef = useRef(null);

  const total = doctors.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  // Auto-slide every 4s
  useEffect(() => {
    autoRef.current = setInterval(next, 4000);
    return () => clearInterval(autoRef.current);
  }, [active]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4000);
  };

  const handlePrev = () => { prev(); resetAuto(); };
  const handleNext = () => { next(); resetAuto(); };

  // Touch/drag support
  const onDragStart = (e) => {
    setDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onDragEnd = (e) => {
    if (!dragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 40) { diff > 0 ? handleNext() : handlePrev(); }
    setDragging(false);
  };

  // Position calculation for 3D effect
  const getCardStyle = (index) => {
    const diff = index - active;
    const wrappedDiff =
      diff > total / 2 ? diff - total : diff < -total / 2 ? diff + total : diff;

    const absD = Math.abs(wrappedDiff);
    const sign = Math.sign(wrappedDiff);

    const translateX = wrappedDiff *
      ((window.innerWidth < 640 ? CARD_WIDTH * 0.45 : CARD_WIDTH * 0.7) + CARD_GAP);
    const translateZ = absD === 0 ? 0 : absD === 1 ? -120 : -280;
    const rotateY = sign * (absD === 0 ? 0 : absD === 1 ? 22 : 40);
    const scale = absD === 0 ? 1 : absD === 1 ? 0.85 : 0.7;
    const opacity = absD === 0 ? 1 : absD === 1 ? 0.75 : absD === 2 ? 0.45 : 0;
    const zIndex = 10 - absD;
    const blur = absD === 0 ? 0 : absD === 1 ? 1 : 3;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      filter: `blur(${blur}px)`,
      transition: "all 0.55s cubic-bezier(0.23, 1, 0.32, 1)",
      cursor: absD !== 0 ? "pointer" : "default",
      pointerEvents: absD > 2 ? "none" : "auto",
    };
  };

  const doc = doctors[active];

  return (
    <>
      {/* <Breadcrumb/> */}
      <div
        className="min-h-screen bg-[#0B1F3A] flex flex-col mt12 md:mt20 items-center justify-center py-10 md:py-16 px-3 sm:px-4 overflow-hidden"
        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FCA311] text-blue-950 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Medical Team
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FCA311] mb-2">
            Meet Our <span className="text-white">Specialists</span>
          </h2>
          <p className="text-gray-50 text-sm sm:text-base max-w-md mx-auto px-2">
            Dedicated doctors with decades of experience, committed to your health
            and well-being.
          </p>
        </div>

        {/* 3D Slider Stage */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{
            height: window.innerWidth < 640 ? 380 : 460,
            perspective: "1200px",
          }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          <div
            className="relative"
            style={{
              width: CARD_WIDTH,
              height: window.innerWidth < 640 ? 350 : 420,
              transformStyle: "preserve-3d",
            }}
          >
            {doctors.map((doc, i) => (
              <div
                key={doc.id}
                className="absolute top-0 left-0"
                style={{ width: CARD_WIDTH, ...getCardStyle(i) }}
                onClick={() => { if (i !== active) { setActive(i); resetAuto(); } }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <DoctorCard doc={doc} isActive={i === active} hovered={hovered === i} />
              </div>
            ))}
          </div>
        </div>

        {/* Active doctor quick info bar */}
        <div
          className="mt-6 flex flex-col sm:flex-row items-center gap-3 bg-white rounded-2xl shadow-md px-4 sm:px-6 py-3 border border-gray-100 w-full max-w-md"
          style={{ transition: "all 0.4s" }}
        >
          <span className="text-2xl"><img src={doc.emoji}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            alt="" /></span>
          <div>
            <p className="text-sm font-semibold text-gray-800">{doc.name}</p>
            <p className="text-xs text-gray-400">{doc.timing}</p>
          </div>
          <a
            href="#"
            className="ml-4 bg-[#FCA311] hover:bg-blue-blue-950 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Book OPD
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow hover:shadow-md flex items-center justify-center text-gray-600 hover:text-blue-950 hover:border-red-300 transition-all"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {doctors.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); resetAuto(); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? "#dc2621" : "#d1d5db",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow hover:shadow-md flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-300 transition-all"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Footer credit */}
        {/* <p className="mt-10 text-xs text-gray-400">
        Powered by <span className="font-semibold text-red-600">Salfartech</span>
        </p> */}
      </div>
    </>
  );
}

function DoctorCard({ doc, isActive, hovered }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden select-none"
      style={{
        width: "100%",
        maxWidth: window.innerWidth < 640 ? 260 : 320,
        height: window.innerWidth < 640 ? 350 : 420,
        background: "white",
        boxShadow: isActive
          ? "0 32px 80px rgba(0,0,0,0.18), 0 4px 24px rgba(0,0,0,0.1)"
          : "0 8px 32px rgba(0,0,0,0.08)",
        border: isActive ? `2px solid ${doc.color}22` : "2px solid #f3f4f6",
        transform: hovered && isActive ? "translateY(-6px)" : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Top gradient band */}
      <div
        style={{
          height: 140,
          background: `linear-gradient(135deg, ${doc.color}15 0%, ${doc.color}30 100%)`,
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: `${doc.color}20`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: 20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: `${doc.color}15`,
          }}
        />

        {/* Emoji avatar */}
        <img src={doc.emoji}
          className="absolute flex items-center justify-center"
          style={{
            bottom: window.innerWidth < 640 ? -28 : -36,
            left: "50%",
            transform: "translateX(-50%)",
            width: window.innerWidth < 640 ? 72 : 96,
            height: window.innerWidth < 640 ? 72 : 96,
            borderRadius: "50%",
            background: "white",
            border: `3px solid ${doc.color}`,
            fontSize: 32,
            boxShadow: `0 4px 20px ${doc.color}40`,
          }}
        />


        {/* Experience badge */}
        <div
          className="absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: doc.color }}
        >
          {doc.experience} Exp
        </div>
      </div>

      {/* Card body */}
      <div className="text-base sm:text-lg font-bold">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: doc.color }}>
          {doc.tagline}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mb-0.5">{doc.name}</h3>
        <p className="text-xs sm:text-sm font-semiboldd text-gray-600 mb-1">{doc.specialty}</p>
        <p className="text-xs sm:text-sm font-semibold">{doc.qualification}</p>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-4" />

        {/* OPD Timing */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke={doc.color} strokeWidth="2" />
            <path d="M12 6v6l4 2" stroke={doc.color} strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-gray-500">{doc.timing}</span>
        </div>

        {/* CTA */}
        <button
          className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            background: isActive ? doc.color : "transparent",
            color: isActive ? "white" : doc.color,
            border: `2px solid ${doc.color}`,
          }}
        >
          {isActive ? "Book Appointment" : "View Profile"}
        </button>
      </div>
    </div>
  );
}
