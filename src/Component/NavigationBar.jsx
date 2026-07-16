import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoAH from "../assets/LogoAH.png";

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [specialityOpen, setSpecialityOpen] = useState(false);
    const [mobileSpecialityOpen, setMobileSpecialityOpen] = useState(false);

    const specialities = [
        {
            name: "General Medicine",
            path: "/specialities/general-medicine",
        },
        {
            name: "Infertility & IVF",
            path: "/specialities/infertility-and-ivf",
        },
        {
            name: "Obstetrician & Gynecology",
            path: "/specialities/obstetrics-gynecology",
        },
        {
            name: "General Surgery",
            path: "/specialities/general-surgery",
        },
        {
            name: "Plastic Surgery",
            path: "/specialities/plastic-and-reconstructive-surgery",
        },
        {
            name: "Pediatrics ",
            path: "/specialities/Pediatrics",
        },
    ];

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white/90 backdrop-blur-md"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={LogoAH}
                            className="w-11 h-11"
                            alt="Hospital Logo"
                        />

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
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#082c77] transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#082c77] transition"
                        >
                            About
                        </Link>

                        {/* Specialities Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setSpecialityOpen(true)}
                            onMouseLeave={() => setSpecialityOpen(false)}
                        >
                            <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#082c77] transition">
                                Our Specialities ▼
                            </button>

                            {specialityOpen && (
                                <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                                    {specialities.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="block px-5 py-3 text-sm text-slate-700 hover:bg-[#082c77] hover:text-white transition"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/consultants"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#082c77] transition"
                        >
                            Consultants
                        </Link>

                        <Link
                            to="/gallery"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#082c77] transition"
                        >
                            Gallery
                        </Link>
                                            </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="bg-gray-50 border border-[#082c77] rounded-xl px-4 py-2 text-center">
                            <p className="text-[10px] font-bold text-[#082c77]">
                                EMERGENCY
                            </p>

                            <a href="tel:+919876543210" className="text-sm font-extrabold text-[#082c77]">
                                📞 +91 93353 99454
                            </a>
                        </div>

                        <Link
                            to="/book-appointment"
                            className="bg-blue-950 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition"
                        >
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

                        {/* Mobile Specialities Dropdown */}
                        <div className="border-b">
                            <button
                                className="w-full flex justify-between items-center py-3"
                                onClick={() =>
                                    setMobileSpecialityOpen(
                                        !mobileSpecialityOpen
                                    )
                                }
                            >
                                <span>Our Specialities</span>
                                <span>
                                    {mobileSpecialityOpen ? "−" : "+"}
                                </span>
                            </button>

                            {mobileSpecialityOpen && (
                                <div className="pl-4 pb-3">
                                    {specialities.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="block py-2 text-sm text-slate-700"
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setMobileSpecialityOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

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
                            <p className="text-xs font-bold text-blue-950">
                                24×7 Emergency
                            </p>

                            <p className="text-lg font-extrabold text-red-800">
                                📞 +91 93353 99454
                            </p>
                        </div>

                        <Link
                            to="/book-appointment"
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 w-full bg-blue-950 text-white py-3 rounded-xl font-semibold text-center"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;