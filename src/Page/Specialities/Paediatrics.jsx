import React from "react";
import {
    Baby,
    Syringe,
    Stethoscope,
    HeartPulse,
    ShieldPlus,
    Thermometer,
    Activity,
    ClipboardCheck,
    Apple,
    CheckCircle2,
} from "lucide-react";
import Docemoji from "../../assets/Consultants/Docemoji.jpeg";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Baby,
        title: "Newborn & Infant Care",
        desc: "Comprehensive healthcare for newborns and infants including growth monitoring, feeding guidance, developmental assessments, and routine medical care.",
    },
    {
        icon: Syringe,
        title: "Child Vaccination",
        desc: "Complete immunization services following national vaccination schedules to protect children from preventable diseases.",
    },
    {
        icon: Thermometer,
        title: "Fever & Infection Treatment",
        desc: "Expert diagnosis and treatment for viral fever, bacterial infections, seasonal illnesses, respiratory infections, and childhood diseases.",
    },
    {
        icon: HeartPulse,
        title: "Growth & Development Monitoring",
        desc: "Regular health evaluations to monitor physical growth, nutrition, milestones, and overall child development.",
    },
    {
        icon: Activity,
        title: "Respiratory Disease Care",
        desc: "Specialized treatment for asthma, allergies, bronchitis, pneumonia, chronic cough, and other pediatric respiratory conditions.",
    },
    {
        icon: Apple,
        title: "Nutritional Counseling",
        desc: "Personalized dietary guidance to support healthy growth, proper nutrition, and prevention of childhood nutritional deficiencies.",
    },
    {
        icon: ClipboardCheck,
        title: "Preventive Health Check-ups",
        desc: "Routine pediatric examinations, wellness assessments, developmental screenings, and preventive healthcare services.",
    },
    {
        icon: ShieldPlus,
        title: "Emergency Pediatric Care",
        desc: "Prompt medical attention for childhood emergencies with compassionate care and advanced treatment facilities.",
    },
    {
        icon: Stethoscope,
        title: "General Pediatric Consultation",
        desc: "Comprehensive consultation for common childhood illnesses, chronic conditions, and overall child healthcare needs.",
    },
];

const features = [
    "Experienced Pediatricians",
    "15-Bedded Multispecialty Hospital",
    "Complete Child Vaccination",
    "Growth & Development Monitoring",
    "Advanced Diagnostic Facilities",
    "Emergency Pediatric Care",
    "Child-Friendly Environment",
    "Personalized Treatment Plans",
    "Preventive Child Healthcare",
    "Affordable Pediatric Services",
    "24×7 Emergency Support",
    "Compassionate Family-Centered Care",
];

export default function Pediatrics() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero Section */}

                <div className="text-center max-w-4xl mx-auto">

                    <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
                        Child Healthcare
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6 leading-tight">
                        Pediatrics Department
                    </h2>

                    <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-5 rounded-full"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-8">
                        At <strong>Abhay Jeevan Hospital</strong>, our Pediatrics
                        Department is dedicated to providing comprehensive healthcare for
                        newborns, infants, children, and adolescents. We focus on
                        preventive care, early diagnosis, timely treatment, and healthy
                        development to ensure every child receives the best possible
                        medical attention.
                    </p>

                    <p className="text-gray-600 text-lg leading-8 mt-5">
                        From routine health check-ups and vaccinations to the management of
                        childhood illnesses and emergencies, our experienced pediatricians
                        deliver compassionate, evidence-based care in a safe and
                        child-friendly environment.
                    </p>

                </div>

                {/* Services */}

                <div className="mt-24">

                    <div className="text-center mb-14">

                        <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
                            Our Services
                        </span>

                        <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
                            Comprehensive Pediatric Services
                        </h3>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Providing expert pediatric consultation, vaccination, preventive
                            healthcare, nutritional guidance, and comprehensive medical care
                            for children of all ages.
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
                            Our Pediatrics Department is committed to providing compassionate,
                            evidence-based healthcare for children from birth through
                            adolescence. We combine experienced pediatricians, advanced
                            diagnostic facilities, and a child-friendly environment to ensure
                            every child receives safe, personalized, and high-quality medical
                            care for healthy growth and development.
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
                            Caring for Every Child with Compassion
                        </h3>

                        <div className="w-24 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

                        <p className="text-gray-200 leading-8">
                            At <strong>Abhay Jeevan Hospital</strong>, we believe every child
                            deserves expert medical care in a safe, friendly, and supportive
                            environment. Our Pediatrics Department focuses on preventive
                            healthcare, accurate diagnosis, timely treatment, and continuous
                            monitoring to ensure every child grows healthy, strong, and
                            confident.
                        </p>

                        <p className="text-gray-300 leading-8 mt-6">
                            Whether your child needs routine health check-ups, vaccinations,
                            treatment for common illnesses, nutritional guidance, developmental
                            assessments, or emergency pediatric care, our dedicated team is
                            committed to providing trusted healthcare with compassion,
                            professionalism, and excellence.
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
                            Pediatrician
                        </h3>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Our experienced Pediatrician is dedicated to providing compassionate,
                            comprehensive, and personalized healthcare for newborns, infants,
                            children, and adolescents, ensuring healthy growth and development at
                            every stage of childhood.
                        </p>

                    </div>

                    <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

                        <div className="grid lg:grid-cols-2">

                            {/* Doctor Image */}

                            <div className="relative h-[420px] lg:h-auto bg-gray-100">

                                <img
                                    src={Docemoji}
                                    alt="Pediatrician"
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
                                    Child Health Specialist
                                </span>

                                <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
                                    Dr. S. J. Patel
                                </h3>

                                <p className="text-xl text-gray-600 font-medium mt-2">
                                    MBBS, DCH (Pediatrics)
                                </p>

                                <div className="grid sm:grid-cols-2 gap-5 mt-8">

                                    <div className="bg-[#F8FAFC] rounded-2xl p-5">

                                        <p className="text-sm text-gray-500">
                                            Experience
                                        </p>

                                        <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                                            14+ Years
                                        </h4>

                                    </div>

                                    <div className="bg-[#F8FAFC] rounded-2xl p-5">

                                        <p className="text-sm text-gray-500">
                                            Children Treated
                                        </p>

                                        <h4 className="text-2xl font-bold text-[#0B1F3A] mt-1">
                                            10,000+
                                        </h4>

                                    </div>

                                </div>

                                <p className="text-gray-600 leading-8 mt-8">
                                    Dr. Doctor Name is an experienced Pediatrician specializing in
                                    newborn care, childhood illnesses, immunization, growth and
                                    development monitoring, nutritional counseling, allergy management,
                                    respiratory infections, and preventive healthcare. With a gentle and
                                    child-friendly approach, the doctor is committed to ensuring the
                                    healthy physical, emotional, and developmental well-being of every
                                    child.
                                </p>

                                {/* Expertise */}

                                <div className="flex flex-wrap gap-3 mt-8">

                                    {[
                                        "Newborn Care",
                                        "Child Vaccination",
                                        "Growth Monitoring",
                                        "Nutrition Counseling",
                                        "Respiratory Diseases",
                                        "Childhood Infections",
                                        "Preventive Healthcare",
                                        "Emergency Pediatric Care",
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