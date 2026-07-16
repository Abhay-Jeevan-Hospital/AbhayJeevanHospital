import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Navigation,
  CalendarDays,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="mb-12">
          <Reveal>


            <p className="uppercase tracking-[5px] text-[#FCA311] font-semibold">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-3">
              Hospital Location & Contact
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl">
              Visit Abhay Jeevan Hospital for quality healthcare. Find our
              location, contact details, and clinic timings below.
            </p>

          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="lg:col-span-2">
            <Reveal>


              <div className="rounded-3xl overflow-hidden shadow-xl border">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.268953150553!2d81.91205959999999!3d25.4292703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854b0017005259%3A0x5c504563f065cb07!2s%E2%9C%85Abhay%20Jeevan%20Hospital%20-%20Best%20Hospital%20in%20Allahabad%20I%20Best%20Gynecologist%20in%20Prayagraj%20I%20Best%20Diabetes%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1783881520328!5m2!1sen!2sin"
                  className="w-full h-[500px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

              </div>

              <div className="bg-[#0B1F3A] rounded-3xl mt-6 p-8">

                <div className="flex items-start gap-4">

                  <div className="bg-[#FCA311] p-3 rounded-xl">

                    <MapPin className="text-white" size={22} />

                  </div>

                  <div>

                    <h4 className="text-white text-xl font-semibold">
                      Abhay Jeevan Hospital
                    </h4>

                    <p className="text-white/80 mt-2 leading-7">
                      Yojna-3, Jhusi, Jhusi Kohna, Uttar Pradesh 211019
                    </p>

                  </div>

                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 bg-[#FCA311] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>

              </div>
            </Reveal>

          </div>

          {/* Right */}

          <div className="space-y-6">
            <Reveal>


              {/* Address */}

              <div className="border rounded-3xl p-6 shadow-lg">

                <div className="flex gap-5">

                  <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                    <MapPin className="text-[#FCA311]" />

                  </div>

                  <div>

                    <h5 className="font-bold text-[#0B1F3A]">
                      Hospital Address
                    </h5>

                    <p className="text-gray-600 mt-2">
                      Yojna-3, Jhusi, Jhusi Kohna, Uttar Pradesh 211019
                    </p>

                  </div>

                </div>

          </div>
            </Reveal>

          {/* Phone */}

          <div className="border rounded-3xl p-6 shadow-lg">
            <Reveal>


              <div className="flex gap-5">

                <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                  <Phone className="text-[#FCA311]" />

                </div>

                <div>

                  <h5 className="font-bold text-[#0B1F3A]">
                    Phone
                  </h5>

                  <p className="text-gray-600 mt-2">
                    +91 9335399454
                  </p>

                </div>

              </div>

            </Reveal>
          </div>

          {/* Email */}

          <div className="border rounded-3xl p-6 shadow-lg">
            <Reveal>


              <div className="flex gap-5">

                <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                  <Mail className="text-[#FCA311]" />

                </div>

                <div>

                  <h5 className="font-bold text-[#0B1F3A]">
                    Email
                  </h5>

                  <p className="text-gray-600 mt-2 break-all">
                    hospitalabhayjeevan@gmail.com
                  </p>

                </div>

              </div>
            </Reveal>

          </div>

          {/* Timing */}

          <div className="border rounded-3xl p-6 shadow-lg">
            <Reveal>


              <div className="flex gap-5">

                <div className="bg-[#0B1F3A] w-14 h-14 rounded-2xl flex items-center justify-center">

                  <Clock3 className="text-[#FCA311]" />

                </div>

                <div>

                  <h5 className="font-bold text-[#0B1F3A]">
                    Clinic Hours
                  </h5>

                  <p className="text-gray-600 mt-2">
                    Monday - Sunday
                    <br />
                    24×7 Emergency Services
                  </p>

                </div>

              </div>
            </Reveal>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

            <a
              href="tel:+919876543210"
              className="bg-[#0B1F3A] text-white rounded-xl py-4 text-center font-semibold hover:bg-[#FCA311] duration-300"
            >
              Call Hospital
            </a>

            <a
              href="mailto:info@abhayjeevanhospital.com"
              className="border-2 border-[#0B1F3A] text-[#0B1F3A] rounded-xl py-4 text-center font-semibold hover:bg-[#0B1F3A] hover:text-white duration-300"
            >
              Email
            </a>

            <a
              href="https://wa.me/919335399454"
              className="bg-[#FCA311] text-white rounded-xl py-4 text-center font-semibold hover:bg-[#0B1F3A] duration-300"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </div>
    </section >
  );
}