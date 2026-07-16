import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AHHero from "../assets/AHHero.png";
import {
    HeartPulse,
    Scissors,
    Baby,
    Sparkles,
    Stethoscope,
    HeartHandshake,
    ArrowRight,
} from "lucide-react";

const specialties = [
    {
        title: "General Medicine",
        description:
            "Comprehensive healthcare, preventive medicine, and expert treatment for acute and chronic medical conditions.",
        icon: Stethoscope,
        path: "Specialities/general-medicine",
    },
    {
        title: "General Surgery",
        description:
            "Advanced surgical care with modern techniques for both minor and major surgical procedures.",
        icon: Scissors,
        path: "Specialities/general-surgery",
    },
    {
        title: "Obstetrics & Gynecology",
        description:
            "Complete women's healthcare including pregnancy care, deliveries, and gynecological treatments.",
        icon: HeartHandshake,
        path: "Specialities/obstetrics-gynecology",
    },
    {
        title: "Infertility & IVF",
        description:
            "Advanced fertility treatments, IVF, IUI, and personalized reproductive healthcare solutions.",
        icon: HeartPulse,
        path: "Specialities/infertility-and-ivf",
    },
    {
        title: "Pediatrics",
        description:
            "Compassionate healthcare for newborns, infants, children, and adolescents at every stage.",
        icon: Baby,
        path: "Specialities/pediatrics",
    },
    {
        title: "Plastic Surgery",
        description:
            "Cosmetic and reconstructive surgery with advanced techniques for natural, safe, and effective results.",
        icon: Sparkles,
        path: "Specialities/plastic-and-reconstructive-surgery",
    },
];

export default function SpecialtiesSection() {
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
                    transform: visible ? "translateY(0)" : "translateY(62px)",
                    transition: `opacity 0.65s ease ${delay}ms, transform 1s ease ${delay}ms`,
                }}
            >
                {children}
            </div>
        );
    }
    return (

        <section className="py-24 bg-[#0B1F3A]"
        // style={{
        //     backgroundImage: `url(${AHHero})`,
        // }}
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <Reveal>


                    <div className="text-center max-w-3xl mx-auto">

                        <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] px-5 py-2 rounded-full font-semibold">
                            Our Specialties
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">
                            Specialized Healthcare Services
                        </h2>

                        <div className="w-24 h-1 bg-[#FCA311] mx-auto rounded-full mt-5"></div>

                        <p className="text-gray-400 text-lg leading-8 mt-8">
                            Our experienced specialists provide compassionate care using modern
                            medical technology, evidence-based treatment, and a patient-first
                            approach to ensure the best healthcare outcomes.
                        </p>

                    </div>

                </Reveal>
                {/* Cards */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

                    {specialties.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <Reveal>

                                <div
                                    key={index}
                                    className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                                >
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FCA311]/20 rounded-full"></div>

                                    <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#FCA311]/10 rounded-full"></div>
                                    {/* Top Border */}

                                    <div className="h-2 bg-[#FCA311] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                    <div className="p-8">

                                        {/* Icon */}

                                        <div className="w-20 h-20 rounded-3xl bg-[#0B1F3A] group-hover:bg-[#FCA311] flex items-center justify-center transition-all duration-500">

                                            <Icon
                                                size={38}
                                                className="text-white"
                                            />

                                        </div>

                                        {/* Title */}

                                        <h3 className="text-2xl font-bold text-[#0B1F3A] mt-8 group-hover:text-[#FCA311] transition-colors">

                                            {item.title}

                                        </h3>

                                        {/* Description */}

                                        <p className="text-gray-600 leading-8 mt-5">

                                            {item.description}

                                        </p>

                                        {/* Button */}

                                        <Link
                                            to={item.path}
                                            className="inline-flex items-center gap-3 mt-8 font-semibold text-[#0B1F3A] group-hover:text-[#FCA311] transition-colors"
                                        >

                                            Explore Department

                                            <ArrowRight
                                                size={20}
                                                className="group-hover:translate-x-2 transition-transform duration-300"
                                            />

                                        </Link>

                                    </div>

                                </div>

                            </Reveal>
                        );

                    })}

                </div>

                {/* Call To Action */}

                <div className="mt-24">

                    <div className="bg-[#0B1F3A] rounded-[36px] p-10 md:p-14 shadow-2xl overflow-hidden relative">

                        {/* Background Decoration */}

                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FCA311]/10 rounded-full"></div>

                        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#FCA311]/10 rounded-full"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

                            {/* Left Content */}
                            <Reveal>

                                <div>

                                    <span className="inline-block bg-[#FCA311]/20 text-[#FCA311] px-5 py-2 rounded-full font-semibold">
                                        Expert Medical Care
                                    </span>

                                    <h3 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">
                                        Your Health Deserves the Best Specialists
                                    </h3>

                                    <p className="text-gray-300 text-lg leading-8 mt-6">
                                        At <strong>Abhay Jeevan Hospital</strong>, our experienced
                                        doctors, modern infrastructure, and patient-centered approach
                                        ensure comprehensive healthcare for every stage of life. From
                                        routine consultations to advanced treatments, we are committed
                                        to delivering quality medical care with compassion and
                                        excellence.
                                    </p>

                                </div>
                            </Reveal>

                            {/* Right Content */}

                            <div className="flex flex-col gap-6">
                                <Reveal>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">

                                        <h4 className="text-[#FCA311] text-xl font-bold">
                                            ✔ Experienced Specialists
                                        </h4>

                                        <p className="text-gray-300 mt-2 leading-7">
                                            Highly qualified doctors with years of clinical experience
                                            across multiple specialties.
                                        </p>

                                    </div>
                                </Reveal>
                                <Reveal>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">


                                        <h4 className="text-[#FCA311] text-xl font-bold">
                                            ✔ Advanced Healthcare
                                        </h4>

                                        <p className="text-gray-300 mt-2 leading-7">
                                            Modern medical equipment, advanced diagnostics, and
                                            evidence-based treatments for better outcomes.
                                        </p>

                                    </div>
                                </Reveal>
                                <Reveal>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">

                                        <h4 className="text-[#FCA311] text-xl font-bold">
                                            ✔ Compassionate Care
                                        </h4>

                                        <p className="text-gray-300 mt-2 leading-7">
                                            Personalized treatment with empathy, transparency, and a
                                            strong commitment to patient well-being.
                                        </p>

                                    </div>
                                </Reveal>

                                {/* Buttons */}
                                <Reveal>

                                    <div className="flex flex-wrap gap-5 pt-4">

                                        <Link
                                            to="tel:+919335399454"
                                            className="bg-[#FCA311] text-[#0B1F3A] px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg"
                                        >
                                            Book Appointment
                                        </Link>

                                        <a
                                            href="tel:+91"
                                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0B1F3A] transition-all duration-300"
                                        >
                                            Contact Us
                                        </a>

                                    </div>
                                </Reveal>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}