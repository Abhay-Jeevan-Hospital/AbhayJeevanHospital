import { useState, useEffect, useRef } from "react";

/* ─── PALETTE (all light) ───────────────────────────────────────
   bg-primary   : #FFFFFF
   bg-soft      : #F4F7FB
   bg-muted     : #EBF0F8
   accent-red   : #C0392B  (primary brand)
   accent-blue  : #1A3A5C  (secondary brand)
   text-dark    : #1A1A2E
   text-mid     : #374151
   text-light   : #64748B
   border       : #DDE4EE
──────────────────────────────────────────────────────────────── */

const NAV_LINKS = ["Home", "Services", "Doctors", "About", "Facilities", "Contact"];

const SERVICES = [
  { icon: "🫀", title: "Cardiology", desc: "Comprehensive cardiac care including ECG, 2D Echo, Holter monitoring, stress testing, and advanced interventional cardiology for all heart conditions." },
  { icon: "🧬", title: "General Medicine", desc: "Expert diagnosis and management of fever, infections, diabetes, hypertension, thyroid disorders, and all internal medicine conditions." },
  { icon: "🔪", title: "General Surgery", desc: "Laparoscopic and open surgeries for appendix, hernia, gallbladder, fistula, piles, and abdominal conditions with modern techniques." },
  { icon: "👶", title: "Gynecology & Obstetrics", desc: "Complete women's health — antenatal care, normal and C-section deliveries, hysterectomy, PCOS, and all gynecological surgeries." },
  { icon: "🦴", title: "Orthopedics", desc: "Fracture management, joint replacement, ligament repair, spine care, arthroscopy, and sports injury treatment by experienced surgeons." },
  { icon: "🧠", title: "Neurology", desc: "Treatment of stroke, epilepsy, Parkinson's, migraine, neuropathy, and other neurological conditions with advanced diagnostics." },
  { icon: "🫁", title: "Pulmonology", desc: "Diagnosis and treatment of asthma, COPD, pneumonia, tuberculosis, sleep apnea, and all respiratory system diseases." },
  { icon: "🩺", title: "Urology", desc: "Kidney stones, UTI, prostate conditions, bladder problems, and urological surgeries including minimally invasive procedures." },
  { icon: "👁️", title: "Ophthalmology", desc: "Cataract surgery, glaucoma treatment, retinal disorders, corneal conditions, and complete eye care with modern equipment." },
  { icon: "🦷", title: "ENT", desc: "Ear, nose, and throat disorders — sinusitis, tonsillitis, hearing loss, vertigo, voice problems, and head-neck surgeries." },
  { icon: "🔬", title: "Pathology & Lab", desc: "Fully automated lab with CBC, LFT, RFT, thyroid, HbA1c, culture & sensitivity, and 500+ diagnostic tests." },
  { icon: "🩻", title: "Radiology & Imaging", desc: "Digital X-ray, Ultrasound, Color Doppler, ECG, and advanced imaging with same-day reports." },
];

const DOCTORS = [
  {
    name: "Dr. Anjali Singh",
    qual: "MBBS, MS, DNB, FMAS, CMF",
    specialty: "Gynecologist & Laparoscopic Surgeon",
    exp: "15+ Years",
    desc: "Dr. Anjali Singh is a highly experienced gynecologist and laparoscopic surgeon specializing in high-risk pregnancies, minimally invasive gynecological surgeries, and women's reproductive health. She has performed over 5,000 deliveries and 2,000+ laparoscopic procedures.",
    initial: "AS",
    color: "#C0392B",
    bgLight: "#FEF2F2",
    achievements: ["FMAS Certified", "5000+ Deliveries", "DNB Gold Medallist"],
  },
  {
    name: "Dr. Lal Ratnakar Singh",
    qual: "MBBS, MD",
    specialty: "Senior Physician & Medical Director",
    exp: "20+ Years",
    desc: "Dr. Lal Ratnakar Singh is the Medical Director of Abhay Jeevan Hospital with two decades of experience in internal medicine. He specializes in critical care, diabetes management, infectious diseases, and complex multi-system disorders.",
    initial: "LRS",
    color: "#1A3A5C",
    bgLight: "#EEF3FA",
    achievements: ["Medical Director", "Critical Care Expert", "20+ Years Experience"],
  },
  {
    name: "Dr. Rahul Mishra",
    qual: "MBBS, MS (Ortho)",
    specialty: "Orthopedic Surgeon",
    exp: "12+ Years",
    desc: "Specialist in joint replacement surgeries, fracture management, arthroscopic procedures, and spine surgeries. Trained from prestigious institutions with focus on minimally invasive techniques.",
    initial: "RM",
    color: "#1A5C3A",
    bgLight: "#EEFAF3",
    achievements: ["Joint Replacement Expert", "Arthroscopy Specialist", "500+ Surgeries"],
  },
  {
    name: "Dr. Priya Verma",
    qual: "MBBS, MD (Pediatrics)",
    specialty: "Consultant Pediatrician",
    exp: "10+ Years",
    desc: "Dedicated pediatric care from newborns to adolescents. Expert in neonatal care, vaccination, growth disorders, pediatric infections, and developmental assessment.",
    initial: "PV",
    color: "#7B2D8B",
    bgLight: "#F9F0FC",
    achievements: ["Neonatal Care Expert", "Vaccination Specialist", "Child Development"],
  },
];

const FACILITIES = [
  { icon: "🚑", title: "24×7 Emergency", desc: "Round-the-clock emergency services with fully equipped trauma bay, rapid response team, and ambulance facility for immediate critical care." },
  { icon: "🏥", title: "Operation Theatre", desc: "Two state-of-the-art OTs with laminar airflow, modern anesthesia workstations, C-arm fluoroscopy, and advanced surgical equipment." },
  { icon: "🛏️", title: "ICU & CCU", desc: "8-bed ICU and 4-bed CCU with continuous monitoring, ventilators, defibrillators, and round-the-clock intensivist care." },
  { icon: "🩸", title: "Blood Bank", desc: "Licensed blood bank with all blood groups, component separation, and 24-hour availability for emergency transfusions." },
  { icon: "💊", title: "In-house Pharmacy", desc: "24×7 pharmacy stocked with all essential medicines, surgical consumables, and medical equipment at affordable prices." },
  { icon: "🍽️", title: "Dietary Services", desc: "In-hospital kitchen providing nutritionist-approved meals for patients as per their medical condition and dietary requirements." },
  { icon: "🅿️", title: "Ample Parking", desc: "Dedicated parking space for patients and visitors with security surveillance for safe and hassle-free hospital visits." },
  { icon: "♿", title: "Disabled-Friendly", desc: "Ramps, wheelchair access, lifts, and special facilities ensuring comfortable access for elderly and differently-abled patients." },
];

const STATS = [
  { value: "15+", label: "Years of Service" },
  { value: "30K+", label: "Happy Patients" },
  { value: "25+", label: "Specialist Doctors" },
  { value: "24/7", label: "Emergency Care" },
  { value: "2", label: "Operation Theatres" },
  { value: "500+", label: "Surgeries / Year" },
];

const TESTIMONIALS = [
  { name: "Sunita Devi", loc: "Raebareli", stars: 5, text: "Dr. Anjali Singh ne meri delivery bahut safely ki. Pure pregnancy mein unka guidance aur care best tha. Abhay Jeevan Hospital staff bhi bahut helpful hai. Highly recommend karta hoon." },
  { name: "Ramesh Kumar", loc: "Lucknow", stars: 5, text: "Mere papa ko sudden chest pain hua tha raat ko. Emergency mein le gaye toh turant treatment mila. Dr. Lal Ratnakar Singh Sir ka bahut shukriya. Excellent hospital hai yeh." },
  { name: "Anjali Yadav", loc: "Unnao", stars: 5, text: "Meri laparoscopic surgery Dr. Anjali Singh ne ki — minimal incision, bahut kam pain, 2 din mein discharge. Ek ek staff bahut caring aur professional tha." },
  { name: "Mohd. Saleem", loc: "Kanpur", stars: 5, text: "Mere bete ki orthopedic surgery yahan hui. Operation se pehle complete counselling di gayi, baad mein bhi poori care mili. Bahut acha experience raha poore family ko." },
  { name: "Kavita Sharma", loc: "Hardoi", stars: 5, text: "Lab reports same day milte hain, doctors bahut patiently sunte hain. OPD ka wait time bhi kam hai. Is area mein itna achha hospital dekhke sacchi khushi hui." },
  { name: "Vijay Tripathi", loc: "Sitapur", stars: 5, text: "ICU mein mere sasur ka 10 din treatment hua. Doctors aur nurses 24 ghante vigilant the. Recovery bahut achi rahi. Bhagwan ka shukriya aur Abhay Jeevan Hospital ka." },
];

const WHY_US = [
  { icon: "🏆", title: "Experienced Specialists", desc: "Our team of 25+ doctors includes experienced specialists with national-level training and certifications." },
  { icon: "💰", title: "Affordable Treatment", desc: "World-class medical care at transparent, reasonable prices. No hidden charges. Cashless insurance facility available." },
  { icon: "🤝", title: "Patient-First Approach", desc: "Every patient is treated with dignity, compassion, and personalized attention throughout their care journey." },
  { icon: "🔬", title: "Advanced Technology", desc: "Modern diagnostic and surgical equipment ensures accurate diagnosis and better treatment outcomes." },
  { icon: "⚡", title: "Quick Diagnosis", desc: "Same-day lab reports, emergency OPD, and rapid response ensure no time is lost in critical situations." },
  { icon: "🏡", title: "Homely Environment", desc: "Clean, hygienic, comfortable wards and rooms that make patients and their families feel safe and at ease." },
];

/* ─── HELPERS ─────────────────────────────────────────────── */
function HeartbeatLine() {
  return (
    <svg viewBox="0 0 600 60" style={{ width: "100%", height: 44 }} preserveAspectRatio="none">
      <polyline
        points="0,30 70,30 100,8 120,52 140,4 165,56 185,30 270,30 295,14 315,46 335,8 358,52 378,30 600,30"
        fill="none" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 900, strokeDashoffset: 900, animation: "heartDash 2.6s ease-in-out infinite" }}
      />
      <style>{`@keyframes heartDash{0%{stroke-dashoffset:900;opacity:.25}50%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:-900;opacity:.25}}`}</style>
    </svg>
  );
}

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {}, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

function SectionLabel({ children, center = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, justifyContent: center ? "center" : "flex-start" }}>
      <span style={{ width: 28, height: 2.5, background: "#C0392B", borderRadius: 2, flexShrink: 0 }} />
      <span style={{ color: "#C0392B", fontSize: 11, fontWeight: 800, letterSpacing: 3 }}>{children}</span>
      <span style={{ width: 28, height: 2.5, background: "#C0392B", borderRadius: 2, flexShrink: 0 }} />
    </div>
  );
}

const CARD = {
  background: "#fff",
  border: "1px solid #DDE4EE",
  borderRadius: 16,
};

/* ─── MAIN ─────────────────────────────────────────────────── */
export default function AbhayJeevanHospital() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (id === "Home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* shared input style */
  const inp = {
    width: "100%", background: "#F4F7FB", border: "1px solid #DDE4EE",
    borderRadius: 10, padding: "12px 14px", color: "#1A1A2E", fontSize: 14,
    fontFamily: "inherit", boxSizing: "border-box",
  };

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", background: "#F4F7FB", color: "#1A1A2E", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        input,select,textarea{font-family:inherit}
        input::placeholder,textarea::placeholder{color:#94A3B8}
        input:focus,select:focus,textarea:focus{outline:none;border-color:#C0392B!important;background:#fff!important}
        @media(max-width:768px){
          .hide-mob{display:none!important}
          .show-mob{display:flex!important}
          .hero-grid{grid-template-columns:1fr!important}
          .about-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .footer-grid{grid-template-columns:1fr 1fr!important}
          .form-row{grid-template-columns:1fr!important}
        }
        @media(min-width:769px){.show-mob{display:none!important}}
        @keyframes pulseRed{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}
      `}</style>

    

      {/* ══ HERO ══ */}
      {/* <section style={{ background: "linear-gradient(135deg,#FEF2F2 0%,#EEF3FA 50%,#F4F7FB 100%)", minHeight: "100vh", paddingTop: 68, position: "relative", overflow: "hidden" }}>
        
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px,rgba(192,57,43,0.08) 1px,transparent 0)", backgroundSize: "40px 40px" }} />
        
        <div style={{ position: "absolute", top: "15%", right: "5%", width: 360, height: 360, background: "rgba(192,57,43,0.06)", borderRadius: "50%", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "2%", width: 280, height: 280, background: "rgba(26,58,92,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px", position: "relative", zIndex: 2 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #FCA5A5", borderRadius: 100, padding: "7px 18px", marginBottom: 24, boxShadow: "0 2px 8px rgba(192,57,43,0.08)" }}>
                <span style={{ width: 8, height: 8, background: "#C0392B", borderRadius: "50%", display: "inline-block", animation: "pulseRed 1.5s ease-in-out infinite" }} />
                <span style={{ color: "#C0392B", fontSize: 12.5, fontWeight: 700 }}>RAEBARELI'S TRUSTED MULTISPECIALTY HOSPITAL</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display',serif", color: "#1A1A2E", fontSize: "clamp(34px,5vw,58px)", fontWeight: 800, lineHeight: 1.13, marginBottom: 20 }}>
                Abhay Jeevan<br />
                <span style={{ color: "#C0392B" }}>Hospital</span><br />
                <span style={{ fontSize: "clamp(18px,2.5vw,30px)", fontWeight: 600, color: "#64748B" }}>Jahan Zindagi Pahele Aati Hai</span>
              </h1>

              <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.8, marginBottom: 14 }}>
                Abhay Jeevan Hospital, Raebareli mein ek trusted multispecialty healthcare center hai jahan experienced doctors aur modern facilities ke saath har ek patient ko best possible treatment milti hai — emergency se lekar complex surgery tak.
              </p>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 34 }}>
                Dr. Anjali Singh aur Dr. Lal Ratnakar Singh ke expert leadership mein hamara hospital 15+ saalon se Raebareli aur surrounding areas ke patients ki seva kar raha hai, 24×7 Emergency services ke saath.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}>
                <button onClick={() => scrollTo("Contact")}
                  style={{ background: "linear-gradient(135deg,#C0392B,#922B21)", color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px", fontWeight: 700, fontSize: 15.5, cursor: "pointer", boxShadow: "0 8px 24px rgba(192,57,43,0.35)" }}>
                  📅 Appointment Book Karein
                </button>
                <button onClick={() => scrollTo("Services")}
                  style={{ background: "#fff", color: "#1A1A2E", border: "1px solid #DDE4EE", borderRadius: 12, padding: "14px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  Hamaari Services →
                </button>
              </div>

              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                {STATS.map(s => (
                  <div key={s.label} style={{ background: "#fff", border: "1px solid #DDE4EE", borderRadius: 12, padding: "14px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", color: "#C0392B", fontSize: 24, fontWeight: 800 }}>{s.value}</div>
                    <div style={{ color: "#94A3B8", fontSize: 11, marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            
              <div style={{ background: "#fff", border: "1px solid #DDE4EE", borderRadius: 20, padding: "28px", textAlign: "center", boxShadow: "0 8px 32px rgba(192,57,43,0.08)" }}>
                <div style={{ fontSize: 68, marginBottom: 8 }}>🏥</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#1A1A2E" }}>Abhay Jeevan Hospital</div>
                <div style={{ color: "#94A3B8", fontSize: 13, margin: "6px 0 18px" }}>Raebareli, Uttar Pradesh</div>
                <HeartbeatLine />
                <div style={{ color: "#C0392B", fontSize: 11.5, letterSpacing: 1.5, marginTop: 10, fontWeight: 700 }}>24×7 EMERGENCY · ICU · OPERATION THEATRE</div>
              </div>

              
              {DOCTORS.slice(0, 2).map(d => (
                <div key={d.name} style={{ background: "#fff", border: "1px solid #DDE4EE", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 13, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg,${d.color},${d.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 13, fontFamily: "'Playfair Display',serif", flexShrink: 0 }}>{d.initial}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 14 }}>{d.name}</div>
                    <div style={{ color: "#64748B", fontSize: 11.5 }}>{d.qual}</div>
                    <div style={{ color: d.color, fontSize: 12, fontWeight: 600 }}>{d.specialty}</div>
                  </div>
                  <div style={{ background: "#DCFCE7", color: "#16A34A", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 100, flexShrink: 0 }}>Available</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      
        <svg viewBox="0 0 1440 60" style={{ display: "block", marginBottom: -4, width: "100%" }}>
          <path d="M0,40 C400,80 1040,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </section> */}

      {/* ══ WHY CHOOSE US ══ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionLabel center>WHY CHOOSE US</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 14 }}>
              Abhay Jeevan Hospital Ko Kyon Chunein?
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
              Hum sirf illness treat nahi karte — hum patient aur unke parivar ka poora dhyan rakhte hain. Yahi hamari pehchaan hai.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 22 }}>
            {WHY_US.map((w, i) => (
              <FadeIn key={w.title} delay={i * 65}>
                <div style={{ ...CARD, padding: "26px 22px", transition: "all 0.22s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C0392B"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(192,57,43,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#DDE4EE"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: 34, marginBottom: 14, background: "#FEF2F2", width: 56, height: 56, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{w.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17.5, fontWeight: 700, color: "#1A1A2E", marginBottom: 9 }}>{w.title}</h3>
                  <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="Services" style={{ background: "#F4F7FB", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionLabel center>OUR SPECIALTIES</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 14 }}>
              Comprehensive Medical Services
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
              Ek hi chhatt ke neeche 12 se zyada specialties — prevention se lekar advanced surgery tak, har zarurate poori hoti hai yahaan.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 20 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 45}>
                <div style={{ ...CARD, padding: "24px 20px", transition: "all 0.22s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C0392B"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(192,57,43,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#DDE4EE"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: 32, marginBottom: 12, background: "#FEF2F2", width: 54, height: 54, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOCTORS ══ */}
      <section id="Doctors" style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionLabel center>MEET OUR DOCTORS</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 14 }}>
              Hamare Visheshagya Doctors
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
              Decades of experience, national-level training, aur patients ke liye genuine care — yahi hamari team ki pehchaan hai.
            </p>
          </FadeIn>

          {/* Tab selector */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 34 }}>
            {DOCTORS.map((d, i) => (
              <button key={d.name} onClick={() => setActiveDoctor(i)}
                style={{
                  background: activeDoctor === i ? d.color : "#F4F7FB",
                  color: activeDoctor === i ? "#fff" : "#475569",
                  border: activeDoctor === i ? `1px solid ${d.color}` : "1px solid #DDE4EE",
                  borderRadius: 100, padding: "10px 22px", fontWeight: 600, fontSize: 13.5,
                  cursor: "pointer", transition: "all 0.2s",
                  boxShadow: activeDoctor === i ? `0 4px 16px ${d.color}40` : "none",
                }}>
                {d.name.split(" ").slice(0, 3).join(" ")}
              </button>
            ))}
          </div>

          {/* Active doctor expanded card */}
          <FadeIn key={activeDoctor}>
            <div className="about-grid" style={{ ...CARD, padding: "36px 40px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "start", boxShadow: `0 16px 50px ${DOCTORS[activeDoctor].color}12`, borderColor: `${DOCTORS[activeDoctor].color}30` }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 120, height: 120, borderRadius: "50%", background: `linear-gradient(135deg,${DOCTORS[activeDoctor].color},${DOCTORS[activeDoctor].color}80)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 32, fontWeight: 800, fontFamily: "'Playfair Display',serif", margin: "0 auto 14px", boxShadow: `0 8px 28px ${DOCTORS[activeDoctor].color}35` }}>
                  {DOCTORS[activeDoctor].initial}
                </div>
                <div style={{ background: "#DCFCE7", color: "#16A34A", fontSize: 12, fontWeight: 700, padding: "6px 16px", borderRadius: 100, display: "inline-block" }}>✓ {DOCTORS[activeDoctor].exp}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 4 }}>{DOCTORS[activeDoctor].name}</h3>
                <div style={{ color: DOCTORS[activeDoctor].color, fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{DOCTORS[activeDoctor].specialty}</div>
                <div style={{ color: "#94A3B8", fontSize: 13, marginBottom: 16 }}>{DOCTORS[activeDoctor].qual}</div>
                <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 22 }}>{DOCTORS[activeDoctor].desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
                  {DOCTORS[activeDoctor].achievements.map(a => (
                    <span key={a} style={{ background: DOCTORS[activeDoctor].bgLight, color: DOCTORS[activeDoctor].color, fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 100, border: `1px solid ${DOCTORS[activeDoctor].color}25` }}>{a}</span>
                  ))}
                </div>
                <button onClick={() => scrollTo("Contact")}
                  style={{ background: DOCTORS[activeDoctor].color, color: "#fff", border: "none", borderRadius: 10, padding: "11px 26px", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: `0 4px 16px ${DOCTORS[activeDoctor].color}35` }}>
                  Appointment Book Karein →
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Other doctors */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16, marginTop: 24 }}>
            {DOCTORS.map((d, i) => i !== activeDoctor && (
              <FadeIn key={d.name} delay={i * 70}>
                <div onClick={() => setActiveDoctor(i)}
                  style={{ ...CARD, padding: "20px", cursor: "pointer", transition: "all 0.2s", textAlign: "center" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = d.color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 6px 20px ${d.color}15`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#DDE4EE"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ width: 58, height: 58, borderRadius: "50%", background: `linear-gradient(135deg,${d.color},${d.color}80)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontFamily: "'Playfair Display',serif", fontSize: 15, margin: "0 auto 10px" }}>{d.initial}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A2E" }}>{d.name}</div>
                  <div style={{ color: d.color, fontSize: 12, marginTop: 3 }}>{d.specialty}</div>
                  <div style={{ color: "#94A3B8", fontSize: 11, marginTop: 5 }}>{d.exp}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="About" style={{ background: "#F4F7FB", padding: "80px 24px" }}>
        <div className="about-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <FadeIn>
            <SectionLabel>HAMARE BAARE MEIN</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#1A1A2E", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, lineHeight: 1.25, marginBottom: 20 }}>
              Raebareli Ka Bharosemand<br /><span style={{ color: "#C0392B" }}>Hospital</span>
            </h2>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
              Abhay Jeevan Hospital ki sthapna ek vision ke saath hui thi — Raebareli aur iske aaspaas ke logon ko world-class medical care locally available karana. Aaj, 15 saalon baad, hum ek poori tarah equipped multispecialty hospital ban chuke hain jahan har prakar ki medical zaroorat poori ki jaati hai.
            </p>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
              Hamare do pillars hain — <strong style={{ color: "#1A1A2E" }}>Dr. Anjali Singh</strong>, ek nationally recognized gynecologist aur laparoscopic surgeon, aur <strong style={{ color: "#1A1A2E" }}>Dr. Lal Ratnakar Singh</strong>, ek seasoned physician jin ke guidance mein hazar patients ne naya jeewan paya hai.
            </p>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
              Hamaara manna hai ki quality healthcare sirf bade shahron mein nahi, balki har jagah accessible honi chahiye. Isliye hum state-of-the-art technology aur experienced specialists ko Raebareli mein laaye hain.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["NABH Certified", "ISO 9001:2015", "24×7 Emergency", "Blood Bank", "Cashless Insurance"].map(tag => (
                <span key={tag} style={{ background: "#FEF2F2", color: "#C0392B", border: "1px solid #FCA5A5", fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 100 }}>{tag}</span>
              ))}
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "🕐", title: "Sthapna", val: "2009 se Seva Mein" },
              { icon: "👥", title: "Staff", val: "100+ Medical Professionals" },
              { icon: "🏢", title: "Infrastructure", val: "Modern 4-Floor Building" },
              { icon: "📍", title: "Location", val: "Raebareli, UP" },
              { icon: "🛏️", title: "Capacity", val: "100+ Beds" },
              { icon: "🔬", title: "Lab Tests", val: "500+ Tests Available" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 70}>
                <div style={{ ...CARD, padding: "20px 18px", background: "#fff" }}>
                  <div style={{ fontSize: 26, marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ color: "#94A3B8", fontSize: 10.5, marginBottom: 4, fontWeight: 700, letterSpacing: 1 }}>{item.title}</div>
                  <div style={{ color: "#1A1A2E", fontSize: 14, fontWeight: 600 }}>{item.val}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACILITIES ══ */}
      <section id="Facilities" style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionLabel center>HAMAARI SUVIDHAAYEIN</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 14 }}>
              World-Class Facilities, Local Access
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
              Modern infrastructure aur advanced medical equipment jo ensure karta hai ki har patient ko best possible care mile.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 20 }}>
            {FACILITIES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 55}>
                <div style={{ ...CARD, padding: "24px 20px", display: "flex", gap: 16, transition: "all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C0392B"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(192,57,43,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#DDE4EE"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: 28, flexShrink: 0, background: "#FEF2F2", width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{f.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1A1A2E", marginBottom: 6 }}>{f.title}</h3>
                    <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ background: "#F4F7FB", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionLabel center>PATIENT STORIES</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 14 }}>
              Hamare Patients Ki Zubani
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              Asli patients ki asli kahaniyan — jo hamein har roz aur behtar karne ki prerana deti hain.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 60}>
                <div style={{ ...CARD, padding: "26px 22px", display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ color: "#F59E0B", fontSize: 18, letterSpacing: 2, marginBottom: 14 }}>{"★".repeat(t.stars)}</div>
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.8, flex: 1, fontStyle: "italic", marginBottom: 20 }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #EBF0F8", paddingTop: 16 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#C0392B,#922B21)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 15 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                      <div style={{ color: "#94A3B8", fontSize: 12 }}>📍 {t.loc}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="Contact" style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionLabel center>HAMSE MILEIN</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "#1A1A2E", marginBottom: 14 }}>
              Appointment Book Karein
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              Hamara staff aapki help ke liye hamesha ready hai. Call karein ya form bharen — hum jald contact karenge.
            </p>
          </FadeIn>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }}>
            {/* Info */}
            <div>
              <div style={{ background: "linear-gradient(135deg,#C0392B,#922B21)", borderRadius: 18, padding: "24px", marginBottom: 24, textAlign: "center", boxShadow: "0 8px 28px rgba(192,57,43,0.3)" }}>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, marginBottom: 6, fontWeight: 700 }}>24×7 EMERGENCY HELPLINE</div>
                <div style={{ color: "#fff", fontSize: 30, fontWeight: 800 }}>📞 98765 43210</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, marginTop: 6 }}>Koi bhi emergency mein seedha call karein</div>
              </div>

              {[
                { icon: "📍", label: "Pata", val: "Abhay Jeevan Hospital, Raebareli, Uttar Pradesh" },
                { icon: "📞", label: "OPD Helpline", val: "+91 98765 43210" },
                { icon: "📧", label: "Email", val: "info@abhayjeevan.in" },
                { icon: "🕐", label: "OPD Timings", val: "Mon–Sat: 9AM–2PM & 5PM–8PM" },
                { icon: "🚑", label: "Emergency", val: "24 Hours, 7 Days a Week" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 42, height: 42, background: "#FEF2F2", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "#94A3B8", fontSize: 11, fontWeight: 700, letterSpacing: 0.8 }}>{c.label}</div>
                    <div style={{ color: "#1A1A2E", fontSize: 14.5, fontWeight: 600, marginTop: 2 }}>{c.val}</div>
                  </div>
                </div>
              ))}

              {/* Insurance */}
              <div style={{ background: "#F4F7FB", border: "1px solid #DDE4EE", borderRadius: 14, padding: "18px" }}>
                <div style={{ color: "#94A3B8", fontSize: 11, fontWeight: 800, letterSpacing: 1, marginBottom: 10 }}>CASHLESS INSURANCE ACCEPTED</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Ayushman Bharat", "CGHS", "Star Health", "HDFC Ergo", "New India", "United India"].map(ins => (
                    <span key={ins} style={{ background: "#fff", border: "1px solid #DDE4EE", color: "#475569", fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 100 }}>{ins}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <FadeIn delay={150}>
              <div style={{ background: "#F4F7FB", border: "1px solid #DDE4EE", borderRadius: 22, padding: "38px 34px", boxShadow: "0 8px 32px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#1A1A2E", fontSize: 24, fontWeight: 700, marginBottom: 26 }}>Appointment Form</h3>

                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[{ label: "Poora Naam *", ph: "Aapka naam", type: "text" }, { label: "Phone Number *", ph: "+91 XXXXX XXXXX", type: "tel" }].map(f => (
                    <div key={f.label}>
                      <label style={{ color: "#475569", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 7, letterSpacing: 0.4 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} style={inp} />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ color: "#475569", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 7 }}>Email Address</label>
                  <input type="email" placeholder="email@example.com" style={inp} />
                </div>

                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ color: "#475569", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 7 }}>Doctor Chunein</label>
                    <select style={inp}>
                      <option value="">Doctor Select Karein</option>
                      {DOCTORS.map(d => <option key={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#475569", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 7 }}>Department</label>
                    <select style={inp}>
                      <option value="">Department Chunein</option>
                      {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ color: "#475569", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 7 }}>Preferred Date</label>
                  <input type="date" style={inp} />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ color: "#475569", fontSize: 12, fontWeight: 700, display: "block", marginBottom: 7 }}>Samasya / Message</label>
                  <textarea rows={3} placeholder="Apni takleef ya sawal yahaan likhein..." style={{ ...inp, resize: "vertical" }} />
                </div>

                <button style={{ width: "100%", background: "linear-gradient(135deg,#C0392B,#922B21)", color: "#fff", border: "none", borderRadius: 12, padding: "15px", fontWeight: 800, fontSize: 16, cursor: "pointer", boxShadow: "0 8px 24px rgba(192,57,43,0.35)", letterSpacing: 0.4 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  ✅ Appointment Book Karein
                </button>
                <p style={{ color: "#94A3B8", fontSize: 12, textAlign: "center", marginTop: 14 }}>Form submit karne ke 2 ghante mein hamari team call karegi</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
