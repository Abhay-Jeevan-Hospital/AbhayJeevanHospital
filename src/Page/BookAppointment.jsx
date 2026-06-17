import { useState, useEffect, useRef } from "react";
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
const inp = {
    width: "100%", background: "#F4F7FB", border: "1px solid #DDE4EE",
    borderRadius: 10, padding: "12px 14px", color: "#1A1A2E", fontSize: 14,
    fontFamily: "inherit", boxSizing: "border-box",
  };

const BookAppointment = () => {
  return (
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
  )
}

export default BookAppointment