import { Link } from 'react-router-dom';
import AHHero from '../assets/AHHero.png'

export default function HospitalPhotoBanner() {
    return (
        <section className="relative w-full overflow-hidden" style={{ height: 480 }}>

            {/* Hospital photo */}
            <img
                src={AHHero}
                alt="Abhay Jeevan Hospital"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Gradient overlay — blue left, amber right */}
            <div
                className="absolute inset-0 bg-black/65"
            // style={{
            //   background:
            //     "linear-gradient(100deg, #0B1F3A 0%, rgba(11,19,250,0.45) 45%, #0B1F3A)",
            // }}
            />

            {/* Content — centered */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* Top label */}
                <div
                    className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-1.5 mb-6 bg-blue-950"
                >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#FCA311]" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">
                        Abhay Jeevan Hospital · Jhunsi, Prayagraj
                    </span>
                </div>

                {/* Main heading */}
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 max-w-2xl">
                    Caring for Prayagraj
                    <br />
                    <span style={{ color: "#FCA311" }}>Since 2024.</span>
                </h2>

                {/* Subtext */}
                <p className="text-white text-shadow-lg text-sm md:text-base max-w-lg leading-relaxed mb-8">
                    A trusted multi-speciality hospital delivering compassionate, world-class
                    healthcare to thousands of families across Prayagraj, Uttar Pradesh.
                </p>

                {/* CTA */}
                <Link to='/book-appointment'
                    
                    className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105"
                    style={{
                        background: "#FCA311",
                        color: "#0B1F3A",
                        boxShadow: "0 8px 28px rgba(252,163,17,0.35)",
                    }}
                >
                    Book an Appointment
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            {/* Bottom accent line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1 "
            />
        </section>
    );
}