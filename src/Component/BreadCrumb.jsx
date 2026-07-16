import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();

  // Home page par breadcrumb hide
  if (location.pathname === "/") return null;

  const pathnames = location.pathname.split("/").filter(Boolean);

  const formatName = (name) =>
    name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section
      className="w-full py-8 sm:py-10 mt-20"
      style={{ backgroundColor: "#0B1F3A" }}
    >
        {/* <div className="absolute -top-20 overflow-hidden -right-24 w-64 h-64 bg-[#FCA311]/10 rounded-full"></div> */}

                        {/* <div className="absolute bottom-0 -left-20 w-56 h-56 bg-[#FCA311]/10 rounded-full"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          {formatName(pathnames[pathnames.length - 1])}
        </h1>

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm">

          <Link
            to="/"
            className="flex items-center gap-1 text-white/70 hover:text-[#FCA311] transition"
          >
            <Home size={16} />
            Home
          </Link>

          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
              <div key={to} className="flex items-center gap-2">
                <ChevronRight
                  size={16}
                  className="text-white/40"
                />

                {isLast ? (
                  <span className="font-semibold text-[#FCA311]">
                    {formatName(value)}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-white/70 hover:text-[#FCA311] transition"
                  >
                    {formatName(value)}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}