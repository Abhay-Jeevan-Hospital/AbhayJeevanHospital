import React from 'react'
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
const STATS = [
  { value: "15+", label: "Years of Service" },
  { value: "30K+", label: "Happy Patients" },
  { value: "25+", label: "Specialist Doctors" },
  { value: "24/7", label: "Emergency Care" },
  { value: "2", label: "Operation Theatres" },
  { value: "500+", label: "Surgeries / Year" },
];
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

const Hero = () => {
  return (
    <section style={{ background: "linear-gradient(135deg,#FEF2F2 0%,#EEF3FA 50%,#F4F7FB 100%)", minHeight: "100vh", paddingTop: 68, position: "relative", overflow: "hidden" }}>
      {/* Subtle dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px,rgba(192,57,43,0.08) 1px,transparent 0)", backgroundSize: "40px 40px" }} />
      {/* Soft blobs */}
      <div style={{ position: "absolute", top: "15%", right: "5%", width: 360, height: 360, background: "rgba(192,57,43,0.06)", borderRadius: "50%", filter: "blur(70px)" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "2%", width: 280, height: 280, background: "rgba(26,58,92,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px", position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

          {/* Left */}
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

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid #DDE4EE", borderRadius: 12, padding: "14px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", color: "#C0392B", fontSize: 24, fontWeight: 800 }}>{s.value}</div>
                  <div style={{ color: "#94A3B8", fontSize: 11, marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Hospital card */}
            <div style={{ background: "#fff", border: "1px solid #DDE4EE", borderRadius: 20, padding: "28px", textAlign: "center", boxShadow: "0 8px 32px rgba(192,57,43,0.08)" }}>
              <div style={{ fontSize: 68, marginBottom: 8 }}>🏥</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#1A1A2E" }}>Abhay Jeevan Hospital</div>
              <div style={{ color: "#94A3B8", fontSize: 13, margin: "6px 0 18px" }}>Raebareli, Uttar Pradesh</div>
              <HeartbeatLine />
              <div style={{ color: "#C0392B", fontSize: 11.5, letterSpacing: 1.5, marginTop: 10, fontWeight: 700 }}>24×7 EMERGENCY · ICU · OPERATION THEATRE</div>
            </div>

            {/* Doctor chips */}
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

      {/* Wave divider */}
      <svg viewBox="0 0 1440 60" style={{ display: "block", marginBottom: -4, width: "100%" }}>
        <path d="M0,40 C400,80 1040,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </section>
  )
}

export default Hero