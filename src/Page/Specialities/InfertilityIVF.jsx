import React from "react";
import {
  Users,
  HeartPulse,
  Microscope,
  Activity,
  Scan,
  Syringe,
  Baby,
  HeartHandshake,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import DrAnjali from "../../assets/Consultants/DrAnjali.jpeg";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Infertility Evaluation",
    desc: "Detailed fertility assessments for both men and women including medical history, hormonal investigations, ultrasound, and diagnostic tests to identify the underlying cause of infertility.",
  },
  {
    icon: HeartPulse,
    title: "Female Fertility Care",
    desc: "Diagnosis and treatment for PCOS, ovulation disorders, endometriosis, fibroids, blocked fallopian tubes, and hormonal imbalance using evidence-based treatment.",
  },
  {
    icon: Microscope,
    title: "Male Fertility Evaluation",
    desc: "Comprehensive semen analysis, hormonal assessment, and clinical examination to identify male fertility-related concerns.",
  },
  {
    icon: Activity,
    title: "Ovulation Induction",
    desc: "Carefully monitored medications and personalized treatment plans to improve ovulation and increase the chances of natural conception.",
  },
  {
    icon: Scan,
    title: "Follicular Monitoring",
    desc: "Advanced ultrasound monitoring to track follicle development and determine the best time for conception.",
  },
  {
    icon: Syringe,
    title: "Intrauterine Insemination (IUI)",
    desc: "IUI treatment using specially prepared sperm placed directly into the uterus during ovulation for improved fertilization chances.",
  },
  {
    icon: Baby,
    title: "IVF Counseling & Guidance",
    desc: "Complete counseling regarding IVF treatment, explaining procedures, expected outcomes, and available fertility options.",
  },
  {
    icon: HeartHandshake,
    title: "Recurrent Pregnancy Loss",
    desc: "Comprehensive evaluation and individualized treatment plans for couples experiencing repeated miscarriages.",
  },
  {
    icon: MessageCircle,
    title: "Fertility Counseling",
    desc: "Lifestyle guidance, nutritional advice, emotional counseling, and stress management throughout the fertility journey.",
  },
];

const features = [
  "Experienced Fertility Specialists",
  "Personalized Treatment Plans",
  "Advanced Diagnostic Facilities",
  "Modern Ultrasound & Laboratory Support",
  "Comprehensive Male & Female Fertility Evaluation",
  "Ovulation Monitoring & IUI Services",
  "IVF Counseling & Expert Guidance",
  "Affordable Fertility Care",
  "Confidential & Compassionate Treatment",
  "15-Bedded Multispecialty Hospital",
  "Patient-Centered Care",
  "Hygienic Infrastructure & 24×7 Medical Support",
];

export default function InfertilityDepartment() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
            Fertility & Reproductive Care
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            Infertility & Fertility Care Department
          </h2>

          <div className="w-24 h-1 bg-[#FCA311] rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            At <strong>Abhay Jeevan Hospital</strong>, we understand that
            starting a family is one of life's most cherished dreams. Our
            Infertility & Fertility Care Department provides compassionate
            care, advanced diagnostics, and personalized treatment plans to
            help couples overcome fertility challenges with confidence and
            hope.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Our experienced fertility specialists focus on identifying the
            root cause of infertility and recommending the most appropriate
            treatment options to improve the chances of a healthy pregnancy.
          </p>

        </div>

        {/* Services */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              What We Offer
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Our Fertility Services
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Comprehensive fertility care with modern diagnostics,
              personalized treatments, and compassionate support throughout
              your parenthood journey.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {services.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] group-hover:bg-[#FCA311] duration-300 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h4 className="text-2xl font-semibold text-[#0B1F3A] mt-6 leading-snug">
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

          {/* Left Content */}

          <div>

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3 leading-tight">
              Why Choose Abhay Jeevan Hospital?
            </h3>

            <p className="text-gray-600 mt-6 leading-8">
              Our Infertility & Fertility Care Department is committed to
              providing ethical, transparent, and patient-focused fertility
              services. We combine advanced diagnostics with compassionate
              medical care to support couples throughout every step of their
              fertility journey.
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

          {/* Right Card */}

          <div className="bg-[#0B1F3A] rounded-3xl p-10 md:p-12 text-white shadow-2xl">

            <span className="inline-block bg-[#FCA311]/20 text-[#FCA311] px-4 py-2 rounded-full text-sm font-semibold">
              Our Promise
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
              Our Commitment
            </h3>

            <div className="w-24 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

            <p className="text-gray-200 leading-8">
              At <strong>Abhay Jeevan Hospital</strong>, we understand the
              emotional journey of infertility and are committed to supporting
              every couple with compassion, dignity, and expert medical care.
              Our goal is to provide accurate diagnosis, personalized fertility
              treatment, and continuous guidance that helps couples move one
              step closer to achieving their dream of parenthood.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              Your trust, hope, and well-being remain at the heart of
              everything we do. We strive to deliver high-quality fertility
              care in a safe, confidential, and supportive environment where
              every patient receives personalized attention.
            </p>


          </div>

        </div>

        {/* Doctor Section */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Meet Our Fertility Expert
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Infertility & IVF Specialist
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our experienced Infertility & IVF Specialist provides compassionate,
              personalized fertility care using advanced reproductive technology to
              help couples achieve their dream of becoming parents.
            </p>

          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Doctor Image */}

              <div className="relative h-[420px] lg:h-auto bg-gray-100">

                <img
                  src={DrAnjali}
                  alt="Infertility & IVF Specialist"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 left-6">

                  <span className="bg-[#FCA311] text-[#0B1F3A] font-semibold px-5 py-2 rounded-full shadow-lg">
                    Senior IVF Consultant
                  </span>

                </div>

              </div>

              {/* Doctor Details */}

              <div className="p-10 lg:p-12 flex flex-col justify-center">

                <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
                  Fertility & Reproductive Medicine
                </span>

                <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
                  Dr. Anjali Singh
                </h3>

                <p className="text-xl text-gray-600 font-medium mt-2">
                  MBBS, MS (Gold Medalist), FMAS, DNB, MNAMS, CIMP
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-8">

                  <div className="bg-[#F8FAFC] rounded-2xl p-5">

                    <p className="text-sm text-gray-500">
                      Experience
                    </p>

                    <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                      6+ Years
                    </h4>

                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-5">

                    <p className="text-sm text-gray-500">
                      Successful Fertility Cases
                    </p>

                    <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                      2000+
                    </h4>

                  </div>

                </div>

                <p className="text-gray-600 leading-8 mt-8">
                  Dr. Doctor Name specializes in infertility evaluation, IVF, IUI,
                  ICSI, fertility preservation, recurrent pregnancy loss, male and
                  female infertility treatment, hormonal disorders, and personalized
                  fertility planning. With advanced reproductive expertise and a
                  compassionate approach, the doctor supports couples throughout every
                  step of their fertility journey.
                </p>

                {/* Expertise */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {[
                    "IVF",
                    "IUI",
                    "ICSI",
                    "Male Infertility",
                    "Female Infertility",
                    "Fertility Counseling",
                    "PCOS Management",
                    "Recurrent Pregnancy Loss",
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