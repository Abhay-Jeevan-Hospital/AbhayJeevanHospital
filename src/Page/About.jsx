import { useState, useEffect, useRef } from "react";
import AHOutA from  '../assets/gallery/AHOutA.jpeg'
import DrLal from '../assets/gallery/DrLal.jpeg'
import DrAnjaliC from '../assets/gallery/DrAnjaliC.jpeg'
import OT from '../assets/gallery/OT.jpeg'
import { Link } from "react-router-dom";

/* ─── DATA ─── */
const stats = [
  { value: "3+", label: "Years of Service", icon: "🏥" },
  { value: "10,000+", label: "Patients Treated", icon: "🫀" },
  { value: "5+", label: "Specialities", icon: "🔬" },
  { value: "24/7", label: "Emergency Care", icon: "🚑" },
  { value: "Trusted", label: "Care", icon: "🏆" },
  { value: "Caring", label: "Hand", icon: "🏆" },
];

const timeline = [
  {
    year: "1 September 2024",
    title: "Foundation",
    desc: "Abhay Jeevan Hospital was established in Prayagraj with a vision to provide affordable, accessible, and patient-centered healthcare to the community.",
  },
  {
    year: "....",
    title: "Patient Care Begins",
    desc: "Started 24×7 emergency services, outpatient consultations, and essential healthcare facilities to serve patients with compassion and efficiency.",
  },
  {
    year: ".....",
    title: "Enhanced Healthcare Infrastructure",
    desc: "Introduced modern operation theatres, advanced diagnostic support, and improved patient care facilities to ensure better treatment outcomes.",
  },
  {
    year: ".....",
    title: "Expert Medical Team",
    desc: "Expanded services with experienced specialists in Gynecology, General Medicine, Surgery, and other key healthcare departments.",
  },
  {
    year: ".....",
    title: "Serving the Community",
    desc: "Continuing our commitment to quality healthcare through modern technology, skilled doctors, and a patient-first approach.",
  },
  {
    year: "2024",
    title: "New Campus",
    desc: "Inaugurated a 15-bed new campus with modular OTs, NICU, and a fully automated laboratory.",
  },
];

const accreditations = [
  { name: "NABH", full: "National Accreditation Board for Hospitals", color: "#D4A017" },
  { name: "ISO 9001", full: "International Quality Management", color: "#06B6D4" },
  { name: "CGHS", full: "Central Govt. Health Scheme Empanelled", color: "#10B981" },
  { name: "ECHS", full: "Ex-Servicemen Contributory Health Scheme", color: "#8B5CF6" },
];

const values = [
  {
    icon: "❤️",
    title: "Compassionate Care",
    desc: "Every patient is treated with dignity, empathy, and respect — beyond clinical protocols.",
  },
  {
    icon: "🔬",
    title: "Clinical Excellence",
    desc: "Evidence-based medicine with cutting-edge technology drives every diagnosis and treatment.",
  },
  {
    icon: "🤝",
    title: "Patient First",
    desc: "Decisions are always centred around patient outcomes, comfort, and transparency.",
  },
  {
    icon: "💡",
    title: "Continuous Innovation",
    desc: "We invest in new technology and research to stay at the frontier of medical science.",
  },
  {
    icon: "🌍",
    title: "Inclusive Access",
    desc: "Quality healthcare for all — regardless of socio-economic background.",
  },
  {
    icon: "🛡️",
    title: "Safety & Trust",
    desc: "Stringent safety protocols and full transparency build lasting trust with every patient.",
  },
];

const doctors = [
  {
    name: "Dr. Anjali Singh",
    role: "Director - Abhay Jeevan Hospital",
    dept: "Gynecologist & Infertility Specialist",
    exp: "5+ yrs",
    img: DrAnjaliC,
  },
  {
    name: "Dr. Lal Ratnakar Singh",
    role: "General Physician",
    dept: "Internal Medicine",
    exp: "5+ yrs",
    img: DrLal,
  },
  
];

/* ─── SCROLL REVEAL HOOK ─── */
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

/* ─── SECTION LABEL ─── */
function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-[#FCA311]" />
      <span className="text-[#FCA311] text-xs font-semibold tracking-widest uppercase">{text}</span>
      <div className="w-8 h-px bg-cyan-500" />
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function About() {
  return (
    <div
      className="min-h-screen font-sans text-white overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #060F1E 0%, #0B1F3A 60%, #0D2647 100%)" }}
    >

      {/* ── BREADCRUMB ── */}
      {/* <div
        className="border-b border-cyan-900/40"
        style={{ background: "rgba(6,182,212,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm">
          <span className="text-cyan-400/50">Home</span>
          <span className="text-cyan-700">/</span>
          <span className="text-cyan-300 font-medium">About Us</span>
        </div>
      </div> */}

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6">
        {/* Ambient orbs */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4A017, transparent)" }}
        />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left — Text */}
          <div>
            <Reveal>
              <SectionLabel text="About Abhay Jeevan Hospital" />
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Healing with{" "}
                <span
                  className="bg-clip-text bg-[#FCA311] text-transparent"
                  style={{
                    // backgroundImage: "linear-gradient(90deg, #06B6D4, #22D3EE, #67E8F9)",
                  }}
                >
                  Heart &amp; Science
                </span>
              </h1>
              <p className="text-cyan-200/60 text-lg leading-relaxed mb-8 max-w-lg">
                For over 3 years, Abhay Jeevan Hospital has stood as Prayagraj's most trusted
                multi-specialty hospital — where compassionate doctors, modern technology, and a
                patient-first philosophy come together to deliver extraordinary care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to='/book-appointment'
                  className="px-7 py-3.5 rounded-full text-white font-semibold text-sm bg-[#FCA311] transition-all duration-300 hover:scale-105"
                  style={{
                    // background: "linear-gradient(90deg, #06B6D4, #0891B2)",
                    boxShadow: "0 0 28px rgba(6,182,212,0.35)",
                  }}
                >
                  Book Appointment
                </Link>
                <Link to='/specialities' className="px-7 py-3.5 rounded-full text-cyan-400 font-semibold text-sm border border-cyan-700/40 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300">
                  Our Specialities →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — Image card */}
          <Reveal delay={150}>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ border: "1px solid rgba(6,182,212,0.2)" }}
              >
                <img
                  src={AHOutA}
                  alt="Abhay Jeevan Hospital Building"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,15,30,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-4"
                style={{
                  background: "rgba(11,31,58,0.95)",
                  border: "1px solid rgba(6,182,212,0.25)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-xs text-cyan-300/60 mt-0.5">Years of Excellence</div>
              </div>

              {/* Floating accreditation badge */}
              <div
                className="absolute -top-5 -right-5 rounded-2xl px-5 py-4 text-center"
                style={{
                  background: "rgba(#OB1F3A 0.95)",
                  border: "1px solid rgba(212,160,23,0.3)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-2xl font-bold" style={{ color: "#FCA311" }}>Trusted</div>
                <div className="text-xs text-cyan-300/60 mt-0.5">Care</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(6,182,212,0.15)",
                background: "rgba(252,163,17,0.04)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-8 px-4 text-center relative"
                  style={
                    i < stats.length - 1
                      ? { borderRight: "1px solid rgba(252,163,17,0.1)" }
                      : {}
                  }
                >
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <div className="text-2xl font-bold text-[#FCA311]">{s.value}</div>
                  <div className="text-xs text-cyan-500/60 mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════
          MISSION & VISION
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Our Mission",
              icon: "🎯",
              color: "#06B6D4",
              text:
                "To provide quality, compassionate, and affordable healthcare services with a patient-first approach. We are committed to delivering safe, reliable, and personalized medical care through experienced doctors, modern facilities, and dedicated support for every patient.",
            },
            {
              label: "Our Vision",
              icon: "🌟",
              color: "#D4A017",
              text:
                "To become one of the most trusted healthcare providers, recognized for excellence in patient care, medical expertise, and compassionate service. We are committed to creating a healthier community by offering safe, reliable, and accessible healthcare for all.",
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className="rounded-3xl p-8 h-full relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
                style={{
                  background: "rgba(6,182,212,0.04)",
                  border: `1px solid ${card.color}25`,
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: card.color }}
                />
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: card.color }}>
                  {card.label}
                </h3>
                <p className="text-cyan-200/55 leading-relaxed text-base">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          HISTORY TIMELINE
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-28">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel text="Our Journey" />
            <h2 className="text-4xl md:text-5xl font-bold">
                Growing with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #FCA311)" }}
              >
          Trust
              </span>
            </h2>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #FCA311 10%, #FCA311 90%, transparent)",
                transform: "md:translateX(-50%)",
              }}
            />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className={`relative flex items-start gap-6 mb-12 md:mb-10 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-[21px] md:left-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#0B1F3A] z-10 shrink-0"
                      style={{
                        transform: "translateX(-50%)",
                        boxShadow: "0 0 12px rgba(6,182,212,0.6)",
                        top: "4px",
                      }}
                    />

                    {/* Spacer for desktop centering */}
                    <div className="hidden md:block w-1/2" />

                    {/* Card */}
                    <div
                      className="ml-12 md:ml-0 md:w-1/2 rounded-2xl p-6 group hover:border-cyan-500/40 transition-all duration-300"
                      style={{
                        background: "rgba(6,182,212,0.04)",
                        border: "1px solid rgba(6,182,212,0.12)",
                      }}
                    >
                      <div
                        className="text-xs font-bold tracking-widest mb-1"
                        style={{ color: "#FCA311" }}
                      >
                        {item.year}
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-cyan-200/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CORE VALUES
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel text="What We Stand For" />
            <h2 className="text-4xl md:text-5xl  font-bold">
              Our Core{" "}
              <span
                className="bg-clip-text text-[#FCA311]"
              >
                Values
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="rounded-2xl p-7 h-full group hover:scale-[1.02] transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(6,182,212,0.04)",
                    border: "1px solid rgba(6,182,212,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(6,182,212,0.35)";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(6,182,212,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(6,182,212,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h4 className="text-white font-semibold text-lg mb-2">{v.title}</h4>
                  <p className="text-cyan-200/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════
          LEADERSHIP TEAM
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel text="Leadership" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #FCA311)" }}
              >
                Experts
              </span>
            </h2>
            <p className="text-cyan-200/50 mt-4 text-base max-w-md mx-auto">
              Decades of combined expertise dedicated to your health and wellbeing.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 grid-cols-2 gap-6">
            {doctors.map((doc, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "rgba(6,182,212,0.04)",
                    border: "1px solid rgba(6,182,212,0.12)",
                  }}
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(6,15,30,0.85) 0%, transparent 60%)",
                      }}
                    />
                    {/* Exp badge */}
                    <div
                      className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        border: "1px solid rgba(6,182,212,0.3)",
                        color: "#FCA311",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {doc.exp}
                    </div>
                    {/* Cyan scan line on hover */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ boxShadow: "0 0 10px #06B6D4" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h4 className="text-white font-semibold text-base leading-snug">{doc.name}</h4>
                    <div className="text-[#FCA311] text-xs font-medium mt-1">{doc.role}</div>
                    <div className="text-cyan-200/40 text-xs mt-1">{doc.dept}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          WHY CHOOSE US STRIP
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div
              className="rounded-3xl overflow-hidden grid md:grid-cols-2"
              style={{ border: "1px solid rgba(6,182,212,0.15)" }}
            >
              {/* Left image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={OT}
                  alt="Advanced medical care"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 60%, rgba(11,31,58,1) 100%)",
                  }}
                />
              </div>

              {/* Right content */}
              <div
                className="p-10 md:p-14 flex flex-col justify-center"
                style={{ background: "rgba(6,182,212,0.04)" }}
              >
                <SectionLabel text="Why Choose Us" />
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Prayagraj's Most Trusted Multi-Specialty Hospital
                </h3>

                <ul className="space-y-4">
                  {[
                    "24/7 Emergency & Trauma Care",
                    "15+ Bed Capacity with Modern ICU",
                    "Affordable & Transparent Pricing",
                    "Dedicated Patient Counselling",
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-cyan-200/70 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
                      >
                        <svg className="w-3 h-3 text-[#FCA311]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════
          CTA
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div
              className="rounded-3xl bg-white p-12 md:p-16 text-center relative overflow-hidden"
              // style={{
              //   background:
              //     "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(8,145,178,0.04) 100%)",
              //   border: "1px solid rgba(6,182,212,0.15)",
              // }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(8,145,178,0.06) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-[#FCA311] text-xs font-semibold tracking-widest uppercase mb-3">
                  Get In Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 leading-tight">
                  Your Health Is Our Priority
                </h2>
                <p className="text-gray-700 text-base max-w-md mx-auto mb-10 leading-relaxed">
                  Schedule a consultation with our specialists today. We're here to guide you at
                  every step of your health journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to='/book-appointment'
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FCA311] text-blue-950 font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      // background: "linear-gradient(90deg, #06B6D4, #0891B2)",
                      boxShadow: "0 0 32px rgba(6,182,212,0.35)",
                    }}
                  >
                    Book Appointment
                  </Link>
                  <a href="tel:9335399454" className="w-full sm:w-auto px-9 py-4 rounded-full text-[#FCA311] font-semibold text-sm border border-blue-900/40 hover:border-[#FCA311] hover:text-blue-950 transition-all duration-300">
                    Call: +91 9335399454
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
