// WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919335399454"; // apna number country code ke saath daalo (bina + ke)
  const message = "Hi! Mujhe aapki services ke baare me jaankari chahiye.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed md:bottom-8 bottom-20 md:left-8 left-5 z-50">
      <div className="relative flex items-center justify-center">
        {/* Ping/pulse rings - continuous animation */}
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-75 animate-ping"></span>
        <span
          className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-40"
          style={{
            animation: "wa-pulse 1.8s ease-out infinite",
          }}
        ></span>

        {/* Actual button */}
        <button
          onClick={handleClick}
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-8 w-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.87-2.892-1.554-4.043-3.523-.306-.529.306-.492.876-1.637.099-.198.05-.371-.05-.52-.099-.148-.792-1.908-1.09-2.615-.297-.706-.594-.611-.816-.62-.208-.01-.446-.012-.685-.012-.238 0-.622.088-.94.436-.322.35-1.183 1.156-1.183 2.816 0 1.66 1.208 3.264 1.375 3.489.166.223 2.284 3.483 5.534 4.752 2.762 1.079 3.331.865 3.933.812.601-.052 1.94-.796 2.212-1.567.272-.771.272-1.432.19-1.567-.083-.135-.297-.198-.594-.347z" />
            <path d="M12.01 2C6.483 2 2 6.485 2 12.02c0 1.874.55 3.71 1.588 5.278L2 22l4.71-1.5A9.94 9.94 0 0 0 12.01 22C17.537 22 22 17.516 22 11.98 22 6.485 17.537 2 12.01 2zm5.83 15.79A8.13 8.13 0 0 1 12.01 20a8.02 8.02 0 0 1-4.083-1.114l-.293-.174-2.63.84.855-2.56-.19-.298A8.05 8.05 0 0 1 4 11.98C4 7.62 7.622 4 12.01 4c4.386 0 7.986 3.62 7.986 7.98a8.02 8.02 0 0 1-2.156 5.81z" />
          </svg>
        </button>
      </div>

      {/* Custom keyframe animation (inline CSS via style tag) */}
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;