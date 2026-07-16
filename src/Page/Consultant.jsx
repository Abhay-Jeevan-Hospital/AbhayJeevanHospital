import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaStethoscope,
  FaAward,
} from "react-icons/fa";

import DrAnjali from "../assets/Consultants/DrAnjali.jpeg";
import DrLal from "../assets/Consultants/DrLal.jpeg";
import Docemoji from "../assets/Consultants/Docemoji.jpeg";

const doctors = [
  {
    id: 1,
    name: "Dr. Anjali Singh",
    specialty: "Gynecologist & Infertility Specialist",
    qualification: "MBBS, MS(Gold Medalist), FMAS, DNB, MNAMS, CIMP",
    experience: "6 Years",
    timing: "Mon–Sat | 10:00 AM – 2:00 PM",
    emoji: DrAnjali,
    color: "#0B1F3A",
    tagline: "Gynecologist & Infertility Specialist",
  },
  {
    id: 2,
    name: "Dr. Lal Ratnakar Singh",
    specialty: "General Physician",
    qualification: "MBBS, MD, ACPE, CPE (Gold Medalist)",
    experience: "6 Years",
    timing: "Mon–Fri | 11:00 AM – 3:00 PM",
    emoji: DrLal,
    color: "#0B1F3A",
    tagline: "General Physician",
  },
  {
    id: 3,
    name: "Dr. S J Patel",
    specialty: "Pediatrician",
    qualification: "MBBS, DCH",
    experience: "5 Years",
    timing: "Tue–Sun | 3:00 PM – 4:00 PM",
    emoji: Docemoji,
    color: "#0B1F3A",
    tagline: "Child Health Specialist",
  },
  {
    id: 4,
    name: "Dr. Raviraj Patil",
    specialty: "General Surgeon",
    qualification: "MBBS, MS",
    experience: "7 Years",
    timing: "Mon–Sat | 12:00 PM – 4:00 PM",
    emoji: Docemoji,
    color: "#0B1F3A",
    tagline: "General Surgeon",
  },
  {
    id: 5,
    name: "Dr. Pankaj Singh",
    specialty: "Plastic Surgeon",
    qualification: "MBBS, MS, MCh",
    experience: "5 Years",
    timing: "Mon–Sat | 12:00 PM – 4:00 PM",
    emoji: Docemoji,
    color: "#0B1F3A",
    tagline: "Plastic Surgeon",
  },
];

export default function Consultants() {
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
    <section className="bg-[#0B1F3A]  bg-whit py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

          <Reveal>
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center justify-center rounded-full bg-[#FCA311]/10  px-4 py-2 text-sm font-semibold text-[#FCA311]">
            OUR CONSULTANTS
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Meet Our Expert Consultants
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#FCA311]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Our experienced consultants are committed to delivering
            compassionate, evidence-based healthcare with excellence across
            multiple medical specialties.
          </p>
        </div>
          </Reveal>

        {/* Cards */}

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#FCA311]/40 hover:shadow-2xl"
            >
              <Reveal>

                {/* Image */}

                <div className="relative overflow-hidden">
                  <img
                    src={doctor.emoji}
                    alt={doctor.name}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-80"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    {doctor.experience}
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full bg-[#FCA311] px-4 py-2 text-xs font-semibold text-[#0B1F3A] shadow-lg">
                    {doctor.tagline}
                  </div>
                </div>

                {/* Content */}

                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">
                      {doctor.name}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#FCA311]">
                      <FaStethoscope />
                      {doctor.specialty}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-[#0B1F3A]/10 p-2 text-[#0B1F3A]">
                      <FaGraduationCap />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#0B1F3A]">
                        Qualification
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {doctor.qualification}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-[#FCA311]/20 p-2 text-[#FCA311]">
                      <FaAward />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#0B1F3A]">
                        Experience
                      </h4>

                      <p className="mt-1 text-sm text-gray-600">
                        {doctor.experience} Experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-[#0B1F3A]/10 p-2 text-[#0B1F3A]">
                      <FaClock />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#0B1F3A]">
                        OPD Timing
                      </h4>

                      <p className="mt-1 text-sm text-gray-600">
                        {doctor.timing}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <Link
                      to='/book-appointment'
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FCA311] hover:text-[#0B1F3A]"
                    >
                      Book Now
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    {/* <a
                    href="tel:+919999999999"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[#FCA311] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition-all duration-300 hover:bg-[#FCA311]"
                    >
                    <FaCalendarAlt className="mr-2" />
                    Book
                    </a> */}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-14 flex justify-center">
          <Reveal>

            <Link
              to="/consultants"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B1F3A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FCA311] hover:text-[#0B1F3A] hover:shadow-xl"
            >
              View All Consultants

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}