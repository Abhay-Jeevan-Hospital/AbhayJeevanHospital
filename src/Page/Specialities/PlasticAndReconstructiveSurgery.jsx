import React from "react";
import {
  Sparkles,
  Scissors,
  ShieldCheck,
  Bandage,
  HeartPulse,
  Activity,
  ClipboardCheck,
  Syringe,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import Docemoji from "../../assets/Consultants/Docemoji.jpeg";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Cosmetic Surgery",
    desc: "Advanced cosmetic procedures designed to enhance appearance, improve confidence, and achieve natural-looking aesthetic results.",
  },
  {
    icon: Scissors,
    title: "Reconstructive Surgery",
    desc: "Comprehensive reconstructive procedures for congenital defects, trauma, burns, cancer-related defects, and functional restoration.",
  },
  {
    icon: Bandage,
    title: "Burn Injury Management",
    desc: "Specialized treatment for minor and major burn injuries, including wound care, skin grafting, and rehabilitation.",
  },
  {
    icon: ShieldCheck,
    title: "Scar Revision Surgery",
    desc: "Advanced surgical and non-surgical treatments to improve the appearance and function of scars caused by injury or surgery.",
  },
  {
    icon: Activity,
    title: "Hand & Trauma Surgery",
    desc: "Expert treatment for hand injuries, tendon injuries, nerve damage, fractures, and complex traumatic conditions.",
  },
  {
    icon: Syringe,
    title: "Skin & Soft Tissue Procedures",
    desc: "Removal of cysts, lipomas, skin lesions, benign tumors, and other soft tissue abnormalities using safe surgical techniques.",
  },
  {
    icon: HeartPulse,
    title: "Post-Trauma Reconstruction",
    desc: "Restoration of damaged tissues following accidents, injuries, or previous surgeries for improved function and appearance.",
  },
  {
    icon: ClipboardCheck,
    title: "Pre & Post Surgical Care",
    desc: "Comprehensive patient evaluation, surgical planning, recovery guidance, and long-term follow-up care.",
  },
  {
    icon: Stethoscope,
    title: "Plastic Surgery Consultation",
    desc: "Personalized consultation, diagnosis, treatment planning, and expert guidance for cosmetic and reconstructive procedures.",
  },
];

const features = [
  "Experienced Plastic Surgeons",
  "15-Bedded Multispecialty Hospital",
  "Advanced Operation Theatre",
  "Modern Surgical Techniques",
  "Burn & Trauma Management",
  "Cosmetic & Reconstructive Procedures",
  "Safe & Sterile Surgical Environment",
  "Personalized Treatment Plans",
  "Advanced Diagnostic Support",
  "Compassionate Patient Care",
  "24×7 Emergency Support",
  "High Standards of Surgical Safety",
];

export default function PlasticAndReconstructiveSurgery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
            Plastic & Reconstructive Surgery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            Plastic Surgery Department
          </h2>

          <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            At <strong>Abhay Jeevan Hospital</strong>, our Plastic Surgery
            Department offers advanced cosmetic, reconstructive, and trauma
            surgery services with a focus on restoring appearance, improving
            function, and enhancing confidence. Our experienced surgeons use
            modern techniques to deliver safe, precise, and personalized care.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Whether you require reconstructive surgery after injury, burn care,
            scar revision, hand surgery, or cosmetic procedures, our dedicated
            team is committed to achieving the best possible functional and
            aesthetic outcomes in a safe and compassionate environment.
          </p>

        </div>

        {/* Services */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Our Services
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Advanced Plastic Surgery Services
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Providing cosmetic enhancement, reconstructive procedures,
              burn management, trauma reconstruction, and advanced plastic
              surgery solutions with modern surgical expertise.
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
              Our Plastic Surgery Department combines surgical expertise,
              advanced technology, and personalized care to deliver exceptional
              cosmetic and reconstructive outcomes. We focus on patient safety,
              precision, and natural-looking results while helping restore both
              function and confidence through comprehensive surgical care.
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
              Restoring Confidence with Expert Surgical Care
            </h3>

            <div className="w-24 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

            <p className="text-gray-200 leading-8">
              At <strong>Abhay Jeevan Hospital</strong>, we are committed to
              providing safe, advanced, and personalized plastic surgery
              services. Whether reconstructing damaged tissues after trauma,
              treating burn injuries, or performing cosmetic procedures, our
              goal is to achieve the best possible functional and aesthetic
              outcomes while ensuring the highest standards of patient care.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              From reconstructive surgery and scar revision to cosmetic
              enhancement, hand surgery, and post-trauma reconstruction, our
              experienced team provides compassionate care using modern
              techniques and state-of-the-art surgical facilities to help every
              patient recover with confidence.
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
      Plastic Surgery Expert
    </h3>

    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      Our experienced Plastic Surgeon is dedicated to delivering advanced
      reconstructive and cosmetic surgical care with precision, compassion,
      and patient-focused treatment.
    </p>

  </div>

  <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

    <div className="grid lg:grid-cols-2">

      {/* Doctor Image */}

      <div className="relative h-[420px] lg:h-auto bg-gray-100">

        <img
          src={Docemoji}
          alt="Plastic Surgeon"
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
          Plastic Surgery Specialist
        </span>

        <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
          Dr. Doctor Name
        </h3>

        <p className="text-xl text-gray-600 font-medium mt-2">
          M.Ch. Plastic Surgery | MS General Surgery
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-8">

          <div className="bg-[#F8FAFC] rounded-2xl p-5">

            <p className="text-sm text-gray-500">
              Experience
            </p>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
              15+ Years
            </h4>

          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5">

            <p className="text-sm text-gray-500">
              Successful Surgeries
            </p>

            <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
              5000+
            </h4>

          </div>

        </div>

        <p className="text-gray-600 leading-8 mt-8">
          Dr. Doctor Name specializes in reconstructive surgery, cosmetic
          surgery, burn management, scar revision, trauma reconstruction,
          hand surgery, and advanced aesthetic procedures. With years of
          surgical expertise and a patient-first approach, the doctor is
          committed to achieving safe, natural, and long-lasting results.
        </p>

        {/* Expertise */}

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "Cosmetic Surgery",
            "Burn Reconstruction",
            "Scar Revision",
            "Hand Surgery",
            "Trauma Care",
            "Skin Grafting",
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

          {/* <button className="border-2 border-[#0B1F3A] text-[#0B1F3A] px-8 py-4 rounded-full font-bold hover:bg-[#0B1F3A] hover:text-white transition-all duration-300">

            View Profile

          </button> */}

        </div>

      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}