// MobileActionBar.jsx
import React from "react";

const MobileActionBar = () => {
  const phoneNumber = "919999999999"; // apna number country code ke saath

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleBooking = () => {
    window.location.href = "/book-appointment"; // apna route/modal
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-16 shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
      {/* Call section */}
      <button
        onClick={handleCall}
        aria-label="Call now"
        className="relative flex-1 flex items-center justify-center gap-2 bg-red-500 overflow-hidden active:brightness-95"
      >
        <span
          className="absolute w-[70px] h-[70px] rounded-full bg-white/25"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: "-45px",
            marginTop: "-35px",
            animation: "callRing 1.8s ease-out infinite",
          }}
        ></span>
        <svg
          className="relative z-10 w-[18px] h-[18px] text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="relative z-10 text-white text-sm font-medium">
          Emergency
        </span>
      </button>

      {/* Divider */}
      <div className="w-px bg-white/15"></div>

      {/* Book appointment section */}
      <button
        onClick={handleBooking}
        className="relative flex-1 flex items-center justify-center gap-2 overflow-hidden active:brightness-95 bg-blue-950"
      >
        <span
          className="absolute top-0 h-full w-2/5"
          style={{
            left: "-40%",
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
            animation: "sheen 2.6s ease-in-out infinite",
          }}
        ></span>

        <svg
          className="relative z-10 w-[17px] h-[17px] text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className="relative z-10 text-white text-sm font-medium">
          Book appointment
        </span>
      </button>

      <style>{`
        @keyframes callRing {
          0% { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes sheen {
          0% { left: -40%; }
          100% { left: 140%; }
        }
      `}</style>
    </div>
  );
};

export default MobileActionBar;