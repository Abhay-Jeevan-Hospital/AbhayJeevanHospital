import { useState } from "react";

/* ── Icons ─────────────────────────────────────────────────── */
const HomeIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21V12h6v9"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Breadcrumb Component ───────────────────────────────────── */
// Props:
//   crumbs  — [{ label, href }]
//   variant — "dark" | "light"
export function Breadcrumbin({ crumbs = [], variant = "light" }) {
    const isDark = variant === "dark";

    return (
        <nav aria-label="Breadcrumb">
            <ol className={`flex flex-wrap items-center gap-1 ${isDark ? "" : "bg-white border border-gray-100 shadow-sm rounded-2xl px-4 py-2.5 w-fit"
                }`}>
                {crumbs.map((crumb, i) => {
                    const isLast = i === crumbs.length - 1;
                    const isFirst = i === 0;

                    return (
                        <li key={i} className="flex items-center gap-1">

                            {/* Separator */}
                            {i > 0 && (
                                <span className={`opacity-40 flex items-center ${isDark ? "text-white" : "text-gray-400"}`}>
                                    <ChevronIcon />
                                </span>
                            )}

                            {isLast ? (
                                /* Active crumb */
                                <span
                                    aria-current="page"
                                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${isDark
                                            ? "text-white bg-white/20 border border-white/25 backdrop-blur-sm"
                                            : "text-red-700 bg-red-50 border border-red-200"
                                        }`}
                                >
                                    {isFirst && <HomeIcon />}
                                    {crumb.label}
                                </span>
                            ) : (
                                /* Clickable crumb */
                                <a
                                    href={crumb.href}
                                    className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-lg transition-colors duration-150 ${isDark
                                            ? "text-white/60 hover:text-white hover:bg-white/10"
                                            : "text-gray-400 hover:text-red-600 hover:bg-red-50"
                                        }`}
                                >
                                    {isFirst && <HomeIcon />}
                                    {crumb.label}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

/* ── Demo routes ────────────────────────────────────────────── */
const routes = [
    {
        label: "Home",
        crumbs: [{ label: "Home", href: "#" }],
    },
    {
        label: "Departments",
        crumbs: [
            { label: "Home", href: "#" },
            { label: "Departments", href: "#" },
        ],
    },
    {
        label: "Cardiology",
        crumbs: [
            { label: "Home", href: "#" },
            { label: "Departments", href: "#" },
            { label: "Cardiology", href: "#" },
        ],
    },
    {
        label: "Dr. Priya Sharma",
        crumbs: [
            { label: "Home", href: "#" },
            { label: "Departments", href: "#" },
            { label: "Cardiology", href: "#" },
            { label: "Dr. Priya Sharma", href: "#" },
        ],
    },
    {
        label: "Book Appointment",
        crumbs: [
            { label: "Home", href: "#" },
            { label: "Departments", href: "#" },
            { label: "Cardiology", href: "#" },
            { label: "Dr. Priya Sharma", href: "#" },
            { label: "Book Appointment", href: "#" },
        ],
    },
];

/* ── Preview / Showcase ─────────────────────────────────────── */
function BreadCrumb() {
    const [active, setActive] = useState(2);
    const crumbs = routes[active].crumbs;
    const currentPage = crumbs[crumbs.length - 1].label;

    return (
        <div className="min-h-screen bg-gray-100 font-sans">

            {/* ── Dark Hero Banner ── */}
            <div className="relative overflow-hidden px-8 pt-10 pb-12"
                style={{ background: "linear-gradient(120deg,#6b0000 0%,#be0002 55%,#c05000 100%)" }}>

                {/* ECG line */}
                <svg className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
                    height="60" viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path d="M0 30 L150 30 L180 14 L210 46 L240 6 L270 54 L300 30 L480 30 L510 18 L540 42 L570 8 L600 52 L630 30 L820 30 L850 16 L880 44 L910 4 L940 56 L970 30 L1440 30"
                        stroke="white" strokeWidth="1.5" fill="none" />
                </svg>

                {/* Cross watermark */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                    <div className="relative w-28 h-28">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-8 bg-white rounded" />
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-white rounded" />
                    </div>
                </div>

                {/* Breadcrumb — dark */}
                <Breadcrumbin crumbs={crumbs} variant="dark" />

                {/* Page title */}
                <div className="mt-4 flex items-center gap-2.5">
                    {/* Medical cross icon */}
                    <div className="relative w-4 h-4 flex-shrink-0">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5 bg-white rounded-sm" />
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-white rounded-sm" />
                    </div>
                    <h1 className="text-white text-2xl font-bold tracking-tight">{currentPage}</h1>
                </div>
                <p className="mt-1.5 ml-6 text-white/50 text-xs">
                    Abhay Jeevan Hospital · Multi-Speciality Care
                </p>
            </div>

            {/* ── Light Section ── */}
            <div className="px-8 pt-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Light Variant — White Sections Ke Liye
                </p>
                <Breadcrumb crumbs={crumbs} variant="light" />
            </div>

            {/* ── Route Switcher ── */}
            <div className="px-8 pt-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Try Different Pages
                </p>
                <div className="flex flex-wrap gap-2">
                    {routes.map((r, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`text-xs font-semibold px-4 py-2 rounded-xl border transition-all duration-150 ${active === i
                                    ? "bg-red-700 text-white border-red-700"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600"
                                }`}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Usage code block ── */}
            <div className="px-8 pt-8 pb-12">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Apne Project Mein Use Karo
                </p>
                <pre className="bg-gray-900 text-green-400 text-xs rounded-2xl p-5 overflow-x-auto leading-relaxed">
                    {`<Breadcrumb
  variant="dark"    // ya "light"
  crumbs={[
    { label: "Home",        href: "/" },
    { label: "Departments", href: "/departments" },
    { label: "Cardiology",  href: "#" },
  ]}
/>`}
                </pre>
            </div>

            <p className="text-center text-xs text-gray-300 pb-8">
                Designed by <span className="text-red-500 font-bold">Salfartech</span>
            </p>
        </div>
    );
}
export default BreadCrumb