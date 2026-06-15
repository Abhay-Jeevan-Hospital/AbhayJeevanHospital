import React from 'react'
import { useState } from 'react';


const NAV_LINKS = ["Home", "Our Specialities", "Consultants", "About", "Gallery", "Contact"];
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

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    const scrollTo = (id) => {
        setMenuOpen(false);
        if (id === "Home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
     const inp = {
    width: "100%", background: "#F4F7FB", border: "1px solid #DDE4EE",
    borderRadius: 10, padding: "12px 14px", color: "#1A1A2E", fontSize: 14,
    fontFamily: "inherit", boxSizing: "border-box",
  };
    return (
        <nav style={{
            position: "fixed", top: 0, width: "100%", zIndex: 100,
            background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.98)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #DDE4EE",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.07)" : "0 1px 6px rgba(0,0,0,0.04)",
            transition: "box-shadow 0.3s",
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <div style={{ width: 44, height: 44, background: "linear-gradient(135deg,#C0392B,#922B21)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 20, fontWeight: 800, boxShadow: "0 4px 12px rgba(192,57,43,0.3)", flexShrink: 0 }}>✚</div>
                    <div>
                        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 800, color: "#1A1A2E", lineHeight: 1.1 }}>Abhay Jeevan Hospital</div>
                        <div style={{ fontSize: 10, color: "#C0392B", letterSpacing: 2, fontWeight: 700 }}>24×7 EMERGENCY · MULTISPECIALTY</div>
                    </div>
                </div>

                {/* Desktop links */}
                <div className="hide-mob" style={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {NAV_LINKS.map(l => (
                        <button key={l} onClick={() => scrollTo(l)}
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 13px", fontSize: 13.5, fontWeight: 500, color: "#374151", borderRadius: 8, transition: "all 0.18s" }}
                            onMouseEnter={e => { e.currentTarget.style.color = "#C0392B"; e.currentTarget.style.background = "#FEF2F2"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "none"; }}>
                            {l}
                        </button>
                    ))}
                </div>

                {/* Emergency + CTA */}
                <div className="hide-mob" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 10, padding: "6px 14px", textAlign: "center" }}>
                        <div style={{ fontSize: 10, color: "#C0392B", fontWeight: 700, letterSpacing: 0.5 }}>EMERGENCY</div>
                        <div style={{ fontSize: 15, fontWeight: 800, color: "#C0392B" }}>📞 98765 43210</div>
                    </div>
                    <button onClick={() => scrollTo("Contact")}
                        style={{ background: "linear-gradient(135deg,#C0392B,#922B21)", color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", boxShadow: "0 4px 14px rgba(192,57,43,0.3)" }}>
                        Book Appointment
                    </button>
                </div>

                {/* Hamburger */}
                <button className="show-mob" onClick={() => setMenuOpen(!menuOpen)}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#1A1A2E" }}>
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{ background: "#fff", borderTop: "1px solid #DDE4EE", padding: "16px 24px" }}>
                    {NAV_LINKS.map(l => (
                        <button key={l} onClick={() => scrollTo(l)}
                            style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#374151", fontSize: 15, padding: "12px 0", cursor: "pointer", borderBottom: "1px solid #EBF0F8" }}>
                            {l}
                        </button>
                    ))}
                    <div style={{ marginTop: 16, background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 12, padding: 14 }}>
                        <div style={{ color: "#C0392B", fontSize: 11, fontWeight: 700 }}>24×7 Emergency</div>
                        <div style={{ color: "#C0392B", fontWeight: 800, fontSize: 20 }}>📞 98765 43210</div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavigationBar