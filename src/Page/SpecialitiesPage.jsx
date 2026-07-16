import { useState } from "react";

const specialities = [
  {
    id: "ivf",
    label: "Infertility & IVF",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="20" r="4" fill="currentColor" opacity="0.3"/>
        <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 14c1.5-1.5 4-1 4.5 1s-1 4-3 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    tagline: "Your Journey to Parenthood",
    heroStat: "5000+",
    heroLabel: "Successful Births",
    description:
      "At Abhay Jeevan Hospital, our dedicated IVF and Infertility team combines cutting-edge reproductive technology with compassionate care. We understand the emotional weight of this journey and stand beside you at every step.",
    highlights: [
      { title: "IVF & ICSI", desc: "Advanced in-vitro fertilisation and intracytoplasmic sperm injection with high success rates." },
      { title: "Fertility Assessment", desc: "Comprehensive hormonal, ultrasound, and semen analysis to identify root causes." },
      { title: "Ovulation Induction", desc: "Carefully monitored medical protocols to stimulate healthy egg development." },
      { title: "Donor Programs", desc: "Egg, sperm, and embryo donation with thorough screening and genetic counselling." },
      { title: "Laparoscopic Fertility Surgery", desc: "Minimally invasive correction of endometriosis, fibroids, and blocked tubes." },
      { title: "Counselling & Support", desc: "Dedicated emotional support and guidance throughout the entire treatment cycle." },
    ],
    accentColor: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    borderAccent: "border-cyan-400",
    badgeColor: "bg-cyan-100 text-cyan-800",
  },
  {
    id: "gynae",
    label: "Gynaecology",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8v8M24 16c-5 0-9 4-9 9 0 6 4 10 9 10s9-4 9-10c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M17 38l-3 4M31 38l3 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="7" r="2.5" fill="currentColor"/>
      </svg>
    ),
    tagline: "Complete Women's Health Care",
    heroStat: "15+",
    heroLabel: "Years of Expertise",
    description:
      "Our Gynaecology department offers holistic women's health services — from adolescence through menopause. We prioritise dignity, privacy, and evidence-based treatment in a safe and supportive environment.",
    highlights: [
      { title: "Antenatal & Postnatal Care", desc: "Complete pregnancy care from first trimester through post-delivery recovery." },
      { title: "Menstrual Disorders", desc: "Diagnosis and treatment of PCOS, endometriosis, heavy periods, and irregular cycles." },
      { title: "Gynaecological Oncology", desc: "Early detection, diagnosis, and management of cervical, ovarian, and uterine conditions." },
      { title: "Minimally Invasive Surgery", desc: "Laparoscopic hysterectomy, myomectomy, and cystectomy with faster recovery times." },
      { title: "Menopause Management", desc: "Personalised hormone therapy and lifestyle guidance for a smooth transition." },
      { title: "Contraception Counselling", desc: "Expert guidance on contraceptive options tailored to each woman's needs and goals." },
    ],
    accentColor: "from-blue-500 to-blue-800",
    lightBg: "bg-blue-50",
    borderAccent: "border-blue-400",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "gp",
    label: "General Physician",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="28" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M18 20h12M24 14v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 30h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M16 34h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    tagline: "Your First Line of Care",
    heroStat: "100+",
    heroLabel: "Conditions Treated",
    description:
      "Our experienced General Physicians serve as your primary point of contact for all health concerns. From acute illnesses to chronic disease management, we deliver comprehensive, patient-first medical care.",
    highlights: [
      { title: "Acute Illness Management", desc: "Rapid diagnosis and treatment of fever, infections, respiratory and digestive issues." },
      { title: "Chronic Disease Care", desc: "Long-term management of diabetes, hypertension, thyroid, and heart conditions." },
      { title: "Preventive Health Checkups", desc: "Comprehensive health screening packages designed for different age groups and lifestyles." },
      { title: "Vaccinations & Immunisation", desc: "Complete adult and travel vaccination programs with expert guidance." },
      { title: "Medication Management", desc: "Review, adjustment, and optimisation of multi-drug regimens for complex patients." },
      { title: "Specialist Referrals", desc: "Coordinated pathway to advanced specialist care when needed, without delays." },
    ],
    accentColor: "from-cyan-400 to-blue-700",
    lightBg: "bg-sky-50",
    borderAccent: "border-sky-400",
    badgeColor: "bg-sky-100 text-sky-800",
  },
];

export default function SpecialitiesPage() {
  const [active, setActive] = useState(specialities[0].id);
  const current = specialities.find((s) => s.id === active);

  return (
    <div className="min-h-screen bg-blue-900 font-sans">
      {/* ── Header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-16 pb-12 px-6 text-center">
        {/* subtle radial glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, #06b6d4, transparent)" }} />
        <p className="text-[#FCA311] uppercase tracking-[0.25em] text-xs font-semibold mb-3">
          Abhay Jeevan Hospital
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Our <span className=" text-[#FCA311]">Specialities</span>
        </h1>
        <p className="mt-4 text-blue-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          World-class medical care delivered with compassion — right here in Prayagraj.
        </p>

        {/* ── Tab Buttons ── */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {specialities.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold
                border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400
                ${active === s.id
                  ? "bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/30 scale-105"
                  : "bg-blue-800/60 border-blue-600 text-blue-200 hover:bg-blue-700/80 hover:text-white hover:border-blue-400"
                }
              `}
            >
              <span className={active === s.id ? "text-white" : "text-cyan-400"}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div key={current.id} className="animate-fade-in">

          {/* Hero Card */}
          <div className={`rounded-2xl overflow-hidden shadow-2xl border border-blue-700`}>
            {/* gradient bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${current.accentColor}`} />

            <div className="bg-blue-800/50 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              {/* Icon + Stat */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${current.accentColor} flex items-center justify-center text-white shadow-lg`}>
                  <span className="scale-150">{current.icon}</span>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-cyan-400">{current.heroStat}</p>
                  <p className="text-blue-300 text-xs mt-0.5 font-medium uppercase tracking-wide">{current.heroLabel}</p>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${current.badgeColor} mb-3`}>
                  {current.tagline}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{current.label}</h2>
                <p className="text-blue-200 leading-relaxed text-base">{current.description}</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-8">
            <h3 className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-5 pl-1">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.highlights.map((h, i) => (
                <div
                  key={i}
                  className={`
                    group relative rounded-xl border ${current.borderAccent}/40
                    bg-blue-800/40 hover:bg-blue-700/50
                    p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5
                    cursor-default
                  `}
                >
                  {/* accent line left */}
                  <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b ${current.accentColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className="pl-3">
                    <h4 className="text-white font-bold text-sm mb-1.5">{h.title}</h4>
                    <p className="text-blue-300 text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className={`px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r ${current.accentColor} text-white shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-200`}>
              Book an Appointment
            </button>
            <button className="px-8 py-3.5 rounded-full font-semibold text-sm border border-blue-500 text-blue-200 hover:bg-blue-700/50 hover:text-white transition-all duration-200">
              Know More
            </button>
          </div>

        </div>
      </div>

      {/* Footer strip */}
      <div className="text-center pb-8 text-blue-500 text-xs tracking-wide">
        © 2025 Abhay Jeevan Hospital · Lucknow
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.35s ease both;
        }
      `}</style>
    </div>
  );
}
