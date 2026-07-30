import React from "react";
import {
//   Kidney,
  Droplets,
  ShieldPlus,
  Scan,
  Activity,
  Microscope,
  Stethoscope,
  HeartPulse,
  Syringe,
  CheckCircle2,
} from "lucide-react";
import Docemoji from "../../assets/Consultants/Docemoji.jpeg";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

const services = [
  {
    icon: Syringe,
    title: "Kidney Stone Treatment",
    desc: "Comprehensive diagnosis and advanced treatment for kidney stones using modern techniques including medical management and minimally invasive procedures.",
  },
  {
    icon: Droplets,
    title: "Urinary Tract Infection (UTI)",
    desc: "Expert evaluation and treatment for urinary tract infections with accurate diagnosis, medications, and preventive care for long-term urinary health.",
  },
  {
    icon: ShieldPlus,
    title: "Prostate Disease Treatment",
    desc: "Specialized management of enlarged prostate (BPH), prostatitis, and other prostate disorders using advanced diagnostic and treatment methods.",
  },
  {
    icon: Activity,
    title: "Urinary Incontinence Care",
    desc: "Personalized treatment for bladder control problems in both men and women, improving comfort, confidence, and quality of life.",
  },
  {
    icon: Scan,
    title: "Urological Cancer Screening",
    desc: "Early detection and evaluation of kidney, bladder, prostate, and urinary tract cancers with modern diagnostic facilities.",
  },
  {
    icon: Microscope,
    title: "Male Infertility Evaluation",
    desc: "Complete assessment and treatment of male infertility, reproductive health issues, and related urological conditions.",
  },
  {
    icon: HeartPulse,
    title: "Bladder Disorder Treatment",
    desc: "Diagnosis and treatment for bladder infections, overactive bladder, urinary retention, and other bladder-related conditions.",
  },
  {
    icon: Syringe,
    title: "Minimally Invasive Procedures",
    desc: "Advanced laser and endoscopic urological procedures designed for faster recovery, less pain, and shorter hospital stays.",
  },
  {
    icon: Stethoscope,
    title: "General Urology Consultation",
    desc: "Comprehensive consultation for kidney, bladder, urinary tract, and male reproductive health with personalized treatment planning.",
  },
];

const features = [
  "Experienced Urologist",
  "15-Bedded Multispecialty Hospital",
  "Advanced Kidney Stone Treatment",
  "Modern Diagnostic Facilities",
  "Laser & Endoscopic Procedures",
  "Comprehensive Prostate Care",
  "Male Reproductive Health Services",
  "Personalized Treatment Plans",
  "High Success Rate",
  "Affordable Urology Services",
  "24×7 Emergency Support",
  "Compassionate Patient Care",
];

export default function Urology() {
  return (
    <>
     <Helmet>
        <title>
          Best Urology Hospital in Jhunsi, Prayagraj | Abhay Jeevan Hospital
        </title>

        <meta
          name="description"
          content="Abhay Jeevan Hospital provides expert urology services in Jhunsi, Prayagraj. Our experienced urologists diagnose and treat kidney stones, urinary tract infections, enlarged prostate, bladder disorders, urinary incontinence, and other urological conditions using advanced medical and surgical care."
        />

        <meta
          name="keywords"
          content="Urologist in Prayagraj, Urology Hospital Jhunsi, Kidney Stone Treatment, UTI Treatment, Prostate Treatment, Bladder Disorders, Urinary Incontinence, Urology Specialist, Abhay Jeevan Hospital"
        />

        <meta name="author" content="Abhay Jeevan Hospital" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Urology Services | Abhay Jeevan Hospital"
        />

        <meta
          property="og:description"
          content="Expert diagnosis and treatment for kidney stones, urinary tract infections, prostate disorders, and other urological conditions at Abhay Jeevan Hospital, Jhunsi, Prayagraj."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://yourdomain.com/services/urology"
        />

        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Best Urology Hospital | Abhay Jeevan Hospital"
        />

        <meta
          name="twitter:description"
          content="Comprehensive urology care for kidney stones, prostate problems, UTIs, and urinary disorders in Jhunsi, Prayagraj."
        />

        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/services/urology"
        />
      </Helmet>

    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
            Kidney & Urinary Care
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            Urology Department
          </h2>

          <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            At <strong>Abhay Jeevan Hospital</strong>, our Urology Department
            provides comprehensive diagnosis and treatment for diseases related
            to the kidneys, urinary tract, bladder, prostate, and male
            reproductive system. Our experienced specialists utilize advanced
            technology and evidence-based treatment methods to deliver safe,
            effective, and personalized urological care.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            From kidney stone management and urinary infections to prostate
            disorders, bladder diseases, male infertility, and minimally
            invasive urological procedures, we are committed to helping every
            patient achieve better urinary health with compassionate,
            high-quality medical care.
          </p>

        </div>

        {/* Services */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Our Services
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Comprehensive Urology Services
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Advanced diagnosis and treatment for kidney stones, prostate
              disorders, urinary tract diseases, bladder conditions, male
              reproductive health, and minimally invasive urological procedures.
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
              Our Urology Department is dedicated to providing advanced,
              evidence-based care for kidney, bladder, urinary tract, and
              prostate disorders. With experienced specialists, modern
              diagnostic facilities, minimally invasive procedures, and a
              patient-centered approach, we ensure accurate diagnosis,
              effective treatment, faster recovery, and long-term urinary
              health for every patient.
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

          {/* Commitment Card */}

          <div className="bg-[#0B1F3A] rounded-3xl p-10 md:p-12 text-white shadow-2xl">

            <span className="inline-block bg-[#FCA311]/20 text-[#FCA311] px-4 py-2 rounded-full text-sm font-semibold">
              Our Commitment
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
              Delivering Advanced & Compassionate Urological Care
            </h3>

            <div className="w-24 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

            <p className="text-gray-200 leading-8">
              At <strong>Abhay Jeevan Hospital</strong>, we believe every
              patient deserves expert urological care with dignity,
              compassion, and clinical excellence. Our specialists use
              advanced diagnostic tools and minimally invasive treatment
              techniques to manage kidney stones, urinary tract diseases,
              bladder disorders, prostate conditions, and male reproductive
              health problems with precision and safety.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              Whether you require treatment for kidney stones, urinary
              infections, enlarged prostate, urinary incontinence, male
              infertility, or preventive urological screening, our team is
              committed to providing personalized care, faster recovery,
              improved quality of life, and long-term urinary wellness
              through modern medical practices.
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
              Urologist
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our experienced Urologist specializes in diagnosing and treating
              kidney, bladder, urinary tract, and male reproductive system
              disorders with advanced technology, personalized treatment plans,
              and compassionate patient care.
            </p>

          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Doctor Image */}

              <div className="relative h-[420px] lg:h-auto bg-gray-100">

                <img
                  src={Docemoji}
                  alt="Urologist"
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
                  Kidney & Urinary Care Specialist
                </span>

                <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
                  Dr. Y.B Gupta
                </h3>

                <p className="text-xl text-gray-600 font-medium mt-2">
                  MBBS, MS, M.Ch (Urology)
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
                      Successful Procedures
                    </p>

                    <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                      5,000+
                    </h4>

                  </div>

                </div>

                <p className="text-gray-600 leading-8 mt-8">
                  Dr. Doctor Name is an experienced Urologist specializing in
                  kidney stone treatment, prostate disorders, urinary tract
                  infections, bladder diseases, male infertility, urinary
                  incontinence, and minimally invasive urological procedures.
                  The doctor is committed to delivering accurate diagnosis,
                  advanced treatment, and compassionate care to help patients
                  achieve better urinary health and improved quality of life.
                </p>

                {/* Expertise */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {[
                    "Kidney Stones",
                    "Prostate Disorders",
                    "UTI Treatment",
                    "Bladder Diseases",
                    "Male Infertility",
                    "Urinary Incontinence",
                    "Laser Surgery",
                    "Endourology",
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

                  <Link
                    to="/book-appointment"
                    className="bg-[#FCA311] text-[#0B1F3A] px-8 py-4 rounded-full font-bold hover:bg-[#0B1F3A] hover:text-white transition-all duration-300"
                  >
                    Book Appointment
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
}