import React from "react";

const NAV_LINKS = [
  "Home",
  "Services",
  "Doctors",
  "About",
  "Facilities",
  "Contact",
];

const SERVICES = [
  { title: "Cardiology" },
  { title: "General Medicine" },
  { title: "General Surgery" },
  { title: "Gynecology & Obstetrics" },
  { title: "Orthopedics" },
  { title: "Neurology" },
  { title: "Pulmonology" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] border-t-4 border-red-700 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-lg">
                ✚
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  Abhay Jeevan Hospital
                </h3>

                <p className="text-red-600 text-[10px] tracking-widest font-semibold">
                  RAEBARELI · UTTAR PRADESH
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-7 mb-4">
              Raebareli ka trusted multispecialty hospital jahan 15+ saalon se
              Dr. Anjali Singh aur Dr. Lal Ratnakar Singh ki expert team
              thousands of patients ki seva kar rahi hai.
            </p>

            <h4 className="text-red-600 font-bold text-xl">
              📞 98765 43210
            </h4>

            <p className="text-slate-500 text-sm mt-1">
              24×7 Emergency Available
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-white/10 pb-3">
              Quick Links
            </h4>

            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  className="block text-slate-400 hover:text-red-600 transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-white/10 pb-3">
              Services
            </h4>

            <div className="space-y-2">
              {SERVICES.map((service) => (
                <p
                  key={service.title}
                  className="text-slate-400 text-sm"
                >
                  {service.title}
                </p>
              ))}
            </div>
          </div>

          {/* OPD Timing */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-white/10 pb-3">
              OPD Timing
            </h4>

            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-xs font-semibold">
                  Monday – Saturday
                </p>

                <p className="text-red-600 font-bold">
                  9:00 AM – 2:00 PM
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-semibold">
                  Monday – Saturday
                </p>

                <p className="text-red-600 font-bold">
                  5:00 PM – 8:00 PM
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-semibold">
                  Sunday
                </p>

                <p className="text-red-600 font-bold">
                  Emergency Only
                </p>
              </div>
            </div>

            <div className="mt-5 bg-red-900/20 border border-red-700/40 rounded-xl p-4">
              <p className="text-red-400 text-sm font-semibold">
                🚨 EMERGENCY
              </p>

              <p className="text-red-500 font-extrabold text-lg">
                24 × 7 OPEN
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2024 Abhay Jeevan Hospital. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm text-center md:text-right">
            Designed & Developed by{" "}
            <span className="text-red-600 font-semibold">
              Salfartech
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;