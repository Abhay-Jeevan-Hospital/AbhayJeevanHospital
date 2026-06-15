import React from 'react'
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

const Footer = () => {
  return (
    <footer style={{ background: "#1A1A2E", borderTop: "4px solid #C0392B", padding: "50px 24px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 32, marginBottom: 40 }}>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#C0392B,#922B21)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, fontWeight: 800 }}>✚</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", color: "#F8FAFB", fontSize: 16, fontWeight: 700 }}>Abhay Jeevan Hospital</div>
                  <div style={{ color: "#C0392B", fontSize: 10, letterSpacing: 1.5, fontWeight: 700 }}>RAEBARELI · UTTAR PRADESH</div>
                </div>
              </div>
              <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>
                Raebareli ka trusted multispecialty hospital jahan 15+ saalon se Dr. Anjali Singh aur Dr. Lal Ratnakar Singh ki expert team thousands of patients ki seva kar rahi hai.
              </p>
              <div style={{ color: "#C0392B", fontWeight: 800, fontSize: 18 }}>📞 98765 43210</div>
              <div style={{ color: "#475569", fontSize: 12, marginTop: 4 }}>24×7 Emergency Available</div>
            </div>

            <div>
              <h4 style={{ color: "#F8FAFB", fontWeight: 700, fontSize: 14, marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 10 }}>Quick Links</h4>
              {NAV_LINKS.map(l => (
                <button key={l} onClick={() => scrollTo(l)}
                  style={{ display: "block", background: "none", border: "none", color: "#64748B", fontSize: 13, padding: "5px 0", cursor: "pointer", textAlign: "left", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#C0392B"}
                  onMouseLeave={e => e.target.style.color = "#64748B"}>{l}</button>
              ))}
            </div>

            <div>
              <h4 style={{ color: "#F8FAFB", fontWeight: 700, fontSize: 14, marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 10 }}>Services</h4>
              {SERVICES.slice(0, 7).map(s => (
                <div key={s.title} style={{ color: "#64748B", fontSize: 13, padding: "4px 0" }}>{s.title}</div>
              ))}
            </div>

            <div>
              <h4 style={{ color: "#F8FAFB", fontWeight: 700, fontSize: 14, marginBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 10 }}>OPD Timing</h4>
              {[
                { day: "Monday – Saturday", time: "9:00 AM – 2:00 PM" },
                { day: "Monday – Saturday", time: "5:00 PM – 8:00 PM" },
                { day: "Sunday", time: "Emergency Only" },
              ].map((t, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ color: "#64748B", fontSize: 11, fontWeight: 700 }}>{t.day}</div>
                  <div style={{ color: "#C0392B", fontSize: 14, fontWeight: 700 }}>{t.time}</div>
                </div>
              ))}
              <div style={{ background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.3)", borderRadius: 10, padding: "12px 14px", marginTop: 8 }}>
                <div style={{ color: "#F87171", fontSize: 12, fontWeight: 700 }}>🚨 EMERGENCY</div>
                <div style={{ color: "#C0392B", fontWeight: 800, fontSize: 16 }}>24 × 7 OPEN</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <span style={{ color: "#374151", fontSize: 13 }}>© 2024 Abhay Jeevan Hospital. All Rights Reserved.</span>
            {/* <span style={{ color: "#374151", fontSize: 13 }}>
              Designed & Developed by{" "}
              <span style={{ color: "#C0392B", fontWeight: 700 }}>Salfartech</span>
            </span> */}
          </div>
        </div>
      </footer>
  )
}

export default Footer