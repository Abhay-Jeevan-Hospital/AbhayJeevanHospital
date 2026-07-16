import React from "react";
import {
  Scissors,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  ClipboardCheck,
  Syringe,
  Activity,
  Hospital,
  Bandage,
  CheckCircle2,
} from "lucide-react";
import Docemoji from "../../assets/Consultants/Docemoji.jpeg";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scissors,
    title: "General Surgical Procedures",
    desc: "Safe and effective surgical treatment for a wide range of common and complex conditions using modern surgical techniques.",
  },
  {
    icon: Bandage,
    title: "Trauma & Injury Care",
    desc: "Expert management of cuts, wounds, fractures, soft tissue injuries, burns, and emergency surgical conditions.",
  },
  {
    icon: Activity,
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive laparoscopic procedures for faster recovery, reduced pain, minimal scarring, and shorter hospital stays.",
  },
  {
    icon: Hospital,
    title: "Hernia Surgery",
    desc: "Advanced diagnosis and surgical repair for inguinal, umbilical, incisional, and other types of hernias.",
  },
  {
    icon: ClipboardCheck,
    title: "Gallbladder Surgery",
    desc: "Comprehensive treatment for gallstones and gallbladder diseases through safe laparoscopic and open surgical procedures.",
  },
  {
    icon: Syringe,
    title: "Appendix Surgery",
    desc: "Emergency and planned appendectomy procedures with modern surgical care for acute appendicitis.",
  },
  {
    icon: ShieldCheck,
    title: "Minor Surgical Procedures",
    desc: "Removal of cysts, lipomas, abscess drainage, wound suturing, biopsies, and various outpatient surgical treatments.",
  },
  {
    icon: HeartPulse,
    title: "Pre & Post Operative Care",
    desc: "Complete patient support before and after surgery for smooth recovery and better long-term outcomes.",
  },
  {
    icon: Stethoscope,
    title: "Surgical Consultation",
    desc: "Comprehensive evaluation, diagnosis, second opinions, and personalized treatment planning for surgical conditions.",
  },
];

const features = [
  "Experienced General Surgeons",
  "15-Bedded Multispecialty Hospital",
  "Advanced Operation Theatre",
  "Laparoscopic Surgery Facilities",
  "Emergency Surgical Care",
  "Modern Diagnostic Support",
  "Safe & Sterile Surgical Environment",
  "Personalized Treatment Plans",
  "Affordable Surgical Care",
  "Compassionate Patient Care",
  "24×7 Emergency Support",
  "High Standards of Patient Safety",
];

export default function GeneralSurgery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
            General Surgery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            General Surgery Department
          </h2>

          <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            At <strong>Abhay Jeevan Hospital</strong>, our General Surgery
            Department provides advanced surgical care using modern techniques,
            experienced surgeons, and patient-centered treatment. We focus on
            delivering safe, effective, and compassionate surgical services for
            patients of all age groups.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            From routine surgical procedures to emergency operations and
            minimally invasive laparoscopic surgeries, our dedicated surgical
            team ensures high-quality treatment, faster recovery, and the best
            possible outcomes for every patient.
          </p>

        </div>

        {/* Services */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Our Services
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Comprehensive Surgical Services
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Providing expert surgical consultation, advanced procedures,
              emergency care, and comprehensive treatment with modern surgical
              facilities.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {services.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] group-hover:bg-[#FCA311] duration-300 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h4 className="text-2xl font-semibold text-[#0B1F3A] mt-6">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-7 mt-4">
                    {item.desc}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-24 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3 leading-tight">
              Why Choose Abhay Jeevan Hospital?
            </h3>

            <p className="text-gray-600 mt-6 leading-8">
              Our General Surgery Department is committed to providing safe,
              precise, and advanced surgical care with a patient-first approach.
              Using modern operation theatres, experienced surgeons, and
              evidence-based surgical practices, we ensure the highest standards
              of treatment, safety, and faster recovery for every patient.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#FCA311] mt-1 flex-shrink-0"
                  />

                  <p className="text-gray-700 leading-7">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-[#0B1F3A] rounded-3xl p-10 md:p-12 text-white shadow-2xl">

            <span className="inline-block bg-[#FCA311]/20 text-[#FCA311] px-4 py-2 rounded-full text-sm font-semibold">
              Our Commitment
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
              Excellence in Surgical Care
            </h3>

            <div className="w-24 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

            <p className="text-gray-200 leading-8">
              At <strong>Abhay Jeevan Hospital</strong>, we are dedicated to
              providing advanced surgical care with precision, compassion, and
              safety. Our experienced surgical team utilizes modern techniques
              and state-of-the-art facilities to deliver successful outcomes
              while ensuring maximum patient comfort throughout the treatment
              journey.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              Whether you require emergency surgery, laparoscopic procedures,
              hernia repair, appendix surgery, gallbladder treatment, trauma
              care, or minor surgical procedures, we are committed to providing
              comprehensive care with personalized attention and faster
              recovery.
            </p>


          </div>

        </div>

        {/* Doctor Section */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Meet Our Specialist
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              General Surgery Specialist
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our experienced General Surgeon provides comprehensive surgical care
              using modern techniques, advanced operation theatres, and a
              patient-first approach to ensure safe procedures and faster recovery.
            </p>

          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Doctor Image */}

              <div className="relative h-[420px] lg:h-auto bg-gray-100">

                <img
                  src={Docemoji}
                  alt="General Surgery Specialist"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 left-6">

                  <span className="bg-[#FCA311] text-[#0B1F3A] font-semibold px-5 py-2 rounded-full shadow-lg">
                    Senior Consultant
                  </span>

                </div>

              </div>

              {/* Doctor Details */}

              <div className="p-10 lg:p-12 flex flex-col justify-center">

                <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
                  General Surgery Specialist
                </span>

                <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
                  Dr. Raviraj Patil
                </h3>

                <p className="text-xl text-gray-600 font-medium mt-2">
                  MBBS, MS (General Surgery)
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-8">

                  <div className="bg-[#F8FAFC] rounded-2xl p-5">

                    <p className="text-sm text-gray-500">
                      Experience
                    </p>

                    <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                      10+ Years
                    </h4>

                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-5">

                    <p className="text-sm text-gray-500">
                      Successful Surgeries
                    </p>

                    <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                      6,000+
                    </h4>

                  </div>

                </div>

                <p className="text-gray-600 leading-8 mt-8">
                  Dr. Doctor Name is an experienced General Surgeon specializing in
                  laparoscopic surgery, hernia repair, appendix surgery, gallbladder
                  surgery, trauma management, emergency surgical care, and a wide
                  range of minor and major surgical procedures. With extensive
                  surgical expertise and a patient-centered approach, the doctor is
                  committed to providing safe, precise, and effective treatment for
                  the best possible recovery and long-term outcomes.
                </p>

                {/* Expertise */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {[
                    "Laparoscopic Surgery",
                    "Hernia Repair",
                    "Appendix Surgery",
                    "Gallbladder Surgery",
                    "Trauma Surgery",
                    "Emergency Surgery",
                    "Minor Surgery",
                    "Post-Operative Care",
                  ].map((item) => (

                    <span
                      key={item}
                      className="bg-[#0B1F3A]/10 text-[#0B1F3A] px-4 py-2 rounded-full font-medium"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-5 mt-10">

                  <Link to='/book-appointment' className="bg-[#FCA311] text-[#0B1F3A] px-8 py-4 rounded-full font-bold hover:bg-[#0B1F3A] hover:text-white transition-all duration-300">

                    Book Appointment

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}