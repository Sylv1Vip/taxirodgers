import { useState, useEffect } from "react";
import { Phone, Menu } from "lucide-react";

const LOGO_URL =
  "https://www.taxirodgers.fr/wp-content/uploads/2026/03/logo-taxi-rodgers-2026_350px.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#flotte", label: "Flotte" },
    { href: "#apropos", label: "A propos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 px-4 md:px-7 py-2.5
          rounded-pill transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          flex items-center gap-4 md:gap-7 max-w-[95vw]
          ${scrolled
            ? "bg-white/80 backdrop-blur-2xl border border-mist/60 shadow-[0_4px_30px_rgba(36,57,105,0.08)]"
            : "bg-white/40 backdrop-blur-md border border-white/60"
          }`}
      >
        <a href="#accueil" className="flex-shrink-0">
          <img src={LOGO_URL} alt="Logo Taxi Rodgers" className="h-9 md:h-10 w-auto rounded-lg object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide uppercase font-body font-light text-ink-light
                hover:text-navy transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:0690246186"
          className="hidden md:flex items-center gap-2 bg-navy text-white px-5 py-2.5
            rounded-pill text-[13px] font-body font-medium overflow-hidden relative group
            hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500
            ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0"
        >
          <Phone size={13} strokeWidth={2.5} />
          <span className="relative z-10 font-data text-xs tracking-wide">0690 246 186</span>
          <span className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0
            transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-ink-light hover:text-navy transition-colors p-1"
          aria-label="Menu"
        >
          <div className="relative w-5 h-5">
            <span className={`absolute left-0 w-5 h-[1.5px] bg-current transition-all duration-500
              ${mobileOpen ? "top-[9px] rotate-45" : "top-[4px]"}`} />
            <span className={`absolute left-0 top-[9px] w-5 h-[1.5px] bg-current transition-opacity duration-300
              ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 w-5 h-[1.5px] bg-current transition-all duration-500
              ${mobileOpen ? "top-[9px] -rotate-45" : "top-[14px]"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-3xl lg:hidden
          flex flex-col items-center justify-center gap-7
          transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img
          src={LOGO_URL} alt="Taxi Rodgers" className="h-16 w-auto rounded-xl mb-2 object-contain"
          style={{
            transitionDelay: mobileOpen ? "80ms" : "0ms",
            transform: mobileOpen ? "translateY(0) scale(1)" : "translateY(1rem) scale(0.95)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-xl text-ink-light hover:text-navy font-heading font-light
              tracking-[0.12em] uppercase transition-all duration-500"
            style={{
              transitionDelay: mobileOpen ? `${i * 70 + 150}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(1.5rem)",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:0690246186"
          className="mt-4 flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-pill font-body font-medium"
          style={{
            transitionDelay: mobileOpen ? "550ms" : "0ms",
            transform: mobileOpen ? "translateY(0)" : "translateY(1.5rem)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <Phone size={18} />
          <span className="font-data tracking-wide">0690 246 186</span>
        </a>
      </div>
    </>
  );
}
