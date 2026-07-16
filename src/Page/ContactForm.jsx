import { useState } from "react";
import OT from '../assets/gallery/OT.jpeg'
import ReceptionB from '../assets/gallery/ReceptionB.jpeg'
export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(event.target);
    formData.append("access_key", "2394f3e7-f844-4af6-bd1e-4197501b5fca");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setLoading(false);
    setResult(data.success ? "success" : "error");
    if (data.success) event.target.reset();
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-stretch">

        {/* ── LEFT: Puzzle Photo Grid ── */}
        <div className="w-full lg:w-[48%] flex flex-col gap-4">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-8 rounded-full" style={{ background: "#FCA311" }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#FCA311" }}>
              Abhay Jeevan Hospital
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-1" style={{ color: "#0B1F3A" }}>
            We're Here <br />
            <span style={{ color: "#FCA311" }}>When You Need Us.</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
            Reach out for appointments, queries, or emergency assistance. Our team responds promptly.
          </p>

          {/* Puzzle Grid */}
          <div className="flex flex-col sm:flex-row gap-3 flex-1" style={{ minHeight: "340px" }}>

            {/* Tall left photo */}
            <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ minHeight: "320px" }}>
              <img
                src={ReceptionB}
                alt="Hospital corridor"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,31,58,0.55) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Advanced Care</p>
                <p className="text-white text-sm font-semibold leading-snug mt-0.5">State-of-the-art medical facilities</p>
              </div>
            </div>

            {/* Right: stacked two photos */}
            <div className="flex flex-col gap-3 flex-1">
              {/* <div className="rounded-2xl overflow-hidden relative flex-1" style={{ minHeight: "150px" }}>
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop"
                  alt="Doctor consulting"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,31,58,0.5) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold leading-snug">Expert Doctors</p>
                </div>
              </div> */}

              <div className="rounded-2xl overflow-hidden relative flex-1" style={{ minHeight: "150px" }}>
                <img
                  src={OT}
                  alt="Medical team"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,31,58,0.5) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold leading-snug">Compassionate Team</p>
                </div>
              </div>

              {/* Stat pill */}
              <div
                className="rounded-2xl flex flex-col items-center justify-center py-4 px-3 text-center"
                style={{ background: "#0B1F3A" }}
              >
                <span className="text-2xl font-black" style={{ color: "#FCA311" }}>10K+</span>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-0.5">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Contact quick info */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="flex items-center gap-2.5 flex-1 rounded-xl px-4 py-3 border border-gray-100">
              <span className="text-lg">📞</span>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Call Us</p>
                <a href="tel:+917554001234" className="text-sm font-bold" style={{ color: "#0B1F3A" }}>+91 9335399454</a>
              </div>
            </div>
            <div className="flex items-center gap-2.5 flex-1 rounded-xl px-4 py-3 border border-gray-100">
              <span className="text-lg">📍</span>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Location</p>

                <a href="https://maps.app.goo.gl/YLUbSP6AHAZbG5eT8" target="_blank" className="text-sm font-bold" style={{ color: "#0B1F3A" }}>Jhunsi, Prayagraj</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div className="w-full lg:w-[52%] flex">
          <div
            className="w-full rounded-3xl p-8 sm:p-10 flex flex-col justify-center"
            style={{ background: "#0B1F3A" }}
          >
            {/* Form header */}
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4"
                style={{ background: "rgba(252,163,17,0.15)", color: "#FCA311" }}
              >
                Get in Touch
              </span>
              <h3 className="text-2xl font-black text-white leading-snug">
                Book an Appointment <br />
                <span className="font-normal text-white/50 text-lg">or send us a message</span>
              </h3>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 placeholder-white/20"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#FCA311")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 placeholder-white/20"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#FCA311")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {/* Phone (bonus field) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 placeholder-white/20"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#FCA311")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {/* Doctor Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Select Doctor
                </label>
                <select
                  name="doctor"
                  required
                  defaultValue=""
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#FCA311")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                >
                  <option value="" disabled style={{ color: "#000" }}>
                    Select Doctor
                  </option>
                  <option value="Dr. Lal Ratnakar Singh" style={{ color: "#000" }}>
                    Dr. Lal Ratnakar Singh
                  </option>
                  <option value="Dr. Anjali Singh" style={{ color: "#000" }}>
                    Dr. Anjali Singh
                  </option>
                  <option value="Dr. Amit Kumar" style={{ color: "#000" }}>
                    Dr. Amit Kumar
                  </option>
                  <option value="Dr. Priya Sharma" style={{ color: "#000" }}>
                    Dr. Priya Sharma
                  </option>
                </select>
              </div>


              {/* Appointment Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Appointment Date
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  required
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    colorScheme: "dark",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#FCA311")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>


              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your concern or preferred appointment time..."
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white outline-none transition-all duration-200 placeholder-white/20 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#FCA311")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-4 font-bold text-sm transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                style={{
                  background: loading ? "rgba(252,163,17,0.6)" : "#FCA311",
                  color: "#0B1F3A",
                  boxShadow: "0 6px 28px rgba(252,163,17,0.3)",
                }}
              >
                {loading ? "Sending..." : "Send Message & Book Appointment"}
              </button>

              {/* Result Message */}
              {result === "success" && (
                <div className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
                  <span className="text-green-400 text-lg">✅</span>
                  <p className="text-green-300 text-sm font-semibold">Message sent! We'll contact you shortly.</p>
                </div>
              )}
              {result === "error" && (
                <div className="flex items-center gap-2.5 rounded-xl px-4 py-3" style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)" }}>
                  <span className="text-red-400 text-lg">❌</span>
                  <p className="text-red-300 text-sm font-semibold">Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
