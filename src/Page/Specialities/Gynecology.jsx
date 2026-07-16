import React from "react";
import {
  Baby,
  HeartPulse,
  Stethoscope,
  Activity,
  CalendarHeart,
  ShieldCheck,
  Syringe,
  HeartHandshake,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import DrAnjali from "../../assets/Consultants/DrAnjali.jpeg";

const services = [
  {
    icon: Baby,
    title: "Pregnancy Care",
    desc: "Complete antenatal care including regular check-ups, ultrasound monitoring, nutritional counseling, vaccination guidance, and fetal health assessment.",
  },
  {
    icon: HeartPulse,
    title: "Normal & Cesarean Deliveries",
    desc: "Safe normal deliveries, painless labor, cesarean sections, emergency obstetric care, and postnatal support.",
  },
  {
    icon: Activity,
    title: "High-Risk Pregnancy Care",
    desc: "Expert management of gestational diabetes, hypertension, thyroid disorders, twin pregnancies, and recurrent miscarriages.",
  },
  {
    icon: Users,
    title: "Infertility Evaluation",
    desc: "Fertility assessment, hormonal evaluation, ovulation monitoring, ultrasound studies, and personalized treatment plans.",
  },
  {
    icon: CalendarHeart,
    title: "Menstrual & Hormonal Disorders",
    desc: "Treatment for PCOS, irregular periods, heavy bleeding, painful menstruation, and hormonal imbalance.",
  },
  {
    icon: Stethoscope,
    title: "Gynecological Surgeries",
    desc: "Hysterectomy, fibroid surgery, ovarian cyst removal, laparoscopic procedures, D&C, and other advanced surgeries.",
  },
  {
    icon: HeartHandshake,
    title: "Menopause Care",
    desc: "Comprehensive care for menopause symptoms, hormonal changes, bone health, and overall wellness.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Women's Health",
    desc: "Pap smear, cervical cancer screening, breast examination, pelvic ultrasound, and annual health check-ups.",
  },
  {
    icon: Syringe,
    title: "Family Planning",
    desc: "Confidential counseling on contraception, Copper-T insertion, birth control methods, sterilization, and reproductive planning.",
  },
];

const features = [
  "Experienced Gynecologists & Obstetricians",
  "15-Bedded Multispecialty Hospital",
  "Modern Diagnostic Facilities",
  "Advanced Operation Theatre",
  "Safe Normal & Cesarean Deliveries",
  "High-Risk Pregnancy Management",
  "Affordable & Personalized Treatment",
  "Hygienic Infrastructure",
  "24×7 Emergency Medical Support",
  "Patient-Centered Care",
];

export default function Gynecology() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
            Women's Healthcare
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6">
            Gynecology Department
          </h2>

          <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            At <strong>Abhay Jeevan Hospital</strong>, we provide compassionate
            and advanced healthcare for women at every stage of life. From
            pregnancy care and infertility treatment to advanced gynecological
            surgeries, our specialists combine modern medical technology with
            personalized care for the best possible outcomes.
          </p>
        </div>

        {/* Services */}

        <div className="mt-20">

          <div className="text-center mb-14">

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Services
            </h3>

            <p className="text-gray-500 mt-3">
              Comprehensive care designed for every stage of a woman's life.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] flex items-center justify-center group-hover:bg-[#FCA311] duration-300">

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

        {/* Why Choose */}

        <div className="mt-24 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="text-[#FCA311] font-semibold">
              WHY CHOOSE US
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Why Choose Abhay Jeevan Hospital?
            </h3>

            <p className="text-gray-600 mt-6 leading-8">
              We are committed to delivering safe, personalized, and
              evidence-based healthcare with compassion and excellence.
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

                  <p className="text-gray-700">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-[#0B1F3A] rounded-3xl p-10 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Our Commitment
            </h3>

            <div className="w-20 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

            <p className="leading-8 text-gray-200">
              Every woman deserves quality healthcare delivered with dignity,
              compassion, and expertise. From adolescence and pregnancy to
              motherhood and menopause, our dedicated team provides safe,
              personalized, and comprehensive medical care using modern
              technology and evidence-based treatment practices.
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
              Obstetrics & Gynecology Specialist
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our experienced Obstetrician & Gynecologist is committed to providing
              compassionate, comprehensive, and personalized healthcare for women at
              every stage of life, from adolescence to pregnancy and menopause.
            </p>

          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Doctor Image */}

              <div className="relative h-[420px] lg:h-auto bg-gray-100">

                <img
                  src={DrAnjali}
                  alt="Obs & Gynecology Specialist"
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
                  Obstetrics & Gynecology Specialist
                </span>

                <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
                  Dr. Anjali Singh
                </h3>

                <p className="text-xl text-gray-600 font-medium mt-2">
                  MBBS, MS (Obstetrics & Gynecology)
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
                      Deliveries & Procedures
                    </p>

                    <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                      3000+
                    </h4>

                  </div>

                </div>

                <p className="text-gray-600 leading-8 mt-8">
                  Dr. Doctor Name specializes in comprehensive women's healthcare,
                  including high-risk pregnancy management, normal and cesarean
                  deliveries, infertility evaluation, menstrual disorders,
                  gynecological surgeries, menopause care, and preventive women's
                  health services. She is dedicated to providing safe, compassionate,
                  and evidence-based care for every patient.
                </p>

                {/* Expertise */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {[
                    "High-Risk Pregnancy",
                    "Normal Delivery",
                    "C-Section",
                    "Infertility Care",
                    "PCOS Treatment",
                    "Gynecological Surgery",
                    "Menopause Care",
                    "Women's Wellness",
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