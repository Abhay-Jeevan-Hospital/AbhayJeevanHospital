import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoAH from '../assets/LogoAH.png'

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white/90 backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        {/* <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
              ✚
            </div> */}
                        <img src={LogoAH} className="w-11 h-11 flex items-center justify-center text-xl " alt="" />
                        <div>
                            <h2 className="text-lg font-extrabold text-[#082c77] underline leading-none">
                                Abhay Jeevan Hospital
                            </h2>

                            <p className="text-[10px] tracking-widest font-semibold text-[#FCA311] mt-1">
                                24×7 EMERGENCY · MULTISPECIALTY
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        <Link
                            to="/"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text-[#082c77] transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text-[#082c77] transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/specialities"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text-[#082c77] transition"
                        >
                            Our Specialities
                        </Link>

                        <Link
                            to="/consultants"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text-[#082c77] transition"
                        >
                            Consultants
                        </Link>

                        <Link
                            to="/gallery"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text- transition"
                        >
                            Gallery
                        </Link>

                        {/* <Link
                            to="/contact"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition"
                        >
                            Contact
                        </Link> */}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="bg-gay-50 border border-[#082c77] rounded-xl px-4 py-2 text-center">
                            <p className="text-[10px] font-bold text-[#082c77]">
                                EMERGENCY
                            </p>

                            <p className="text-sm font-extrabold text-[#082c77]">
                                📞 +91 93353 99454
                            </p>
                        </div>

                        <Link to='book-appointment' className="bg-blue-950 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition">
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden text-3xl text-slate-800"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <div className="px-5 py-4 flex flex-col">
                        <Link
                            to="/"
                            className="py-3 border-b"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="py-3 border-b"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            to="/specialities"
                            className="py-3 border-b"
                            onClick={() => setMenuOpen(false)}
                        >
                            Our Specialities
                        </Link>

                        <Link
                            to="/consultants"
                            className="py-3 border-b"
                            onClick={() => setMenuOpen(false)}
                        >
                            Consultants
                        </Link>

                        <Link
                            to="/gallery"
                            className="py-3 border-b"
                            onClick={() => setMenuOpen(false)}
                        >
                            Gallery
                        </Link>

                        <Link
                            to="/contact"
                            className="py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="mt-5 bg-gray-50 border border-cyan-200 rounded-xl p-4">
                            <p className="text-xs font-bold text-blue-900">
                                24×7 Emergency
                            </p>

                            <p className="text-lg font-extrabold text-red-700">
                                📞 98765 43210
                            </p>
                        </div>

                        <button className="mt-4 w-full bg-blue-900 text-white py-3 rounded-xl font-semibold">
                            Book Appointment
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}; 151

export default NavigationBar;