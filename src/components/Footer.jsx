import { Phone, Mail, Facebook } from "lucide-react";

const LOGO_WHITE_URL =
  "https://www.taxirodgers.fr/wp-content/uploads/2019/09/T-logo-blanc-e1567438874758.png";

export default function Footer() {
  return (
    <footer
      className="relative rounded-t-[2.5rem] md:rounded-t-[4rem] pt-14 md:pt-20 pb-6 mt-[-1.5rem]"
      style={{ background: "linear-gradient(135deg, #243969 0%, #1e5882 60%, #1a2744 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14 md:mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <img src={LOGO_WHITE_URL} alt="Logo Taxi Rodgers" className="h-12 w-auto mb-4 object-contain brightness-110" />
            <p className="text-white/30 text-sm font-body font-light leading-relaxed max-w-xs">
              Votre chauffeur prive en Guadeloupe depuis 2019. Taxi et VTC premium pour vos transferts,
              excursions et deplacements medicaux.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="font-data text-[10px] text-white/25 tracking-[0.2em] uppercase mb-5">Navigation</h3>
            <nav className="space-y-2.5">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#services", label: "Services" },
                { href: "#flotte", label: "Notre flotte" },
                { href: "#apropos", label: "A propos" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <a key={l.href} href={l.href}
                  className="block text-white/35 text-sm font-body font-light hover:text-cyan
                    transition-colors duration-300">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="font-data text-[10px] text-white/25 tracking-[0.2em] uppercase mb-5">Services</h3>
            <div className="space-y-2.5">
              {["Transferts aeroport", "Excursions", "Transport medical", "Groupes"].map((s) => (
                <span key={s} className="block text-white/35 text-sm font-body font-light">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-data text-[10px] text-white/25 tracking-[0.2em] uppercase mb-5">Contact</h3>
            <div className="space-y-2.5">
              <a href="tel:0690246186" className="flex items-center gap-2.5 text-white/35 text-sm font-body font-light hover:text-cyan transition-colors duration-300">
                <Phone size={13} strokeWidth={1.5} /> 0690 246 186
              </a>
              <a href="mailto:taxi.rodgers971@gmail.com" className="flex items-center gap-2.5 text-white/35 text-sm font-body font-light hover:text-cyan transition-colors duration-300">
                <Mail size={13} strokeWidth={1.5} /> taxi.rodgers971@gmail.com
              </a>
              <a href="https://www.facebook.com/TaximanRodgers" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/35 text-sm font-body font-light hover:text-cyan transition-colors duration-300">
                <Facebook size={13} strokeWidth={1.5} /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/[0.06] mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>
            <span className="font-data text-[10px] text-white/30 tracking-[0.15em] uppercase">Service disponible</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-white/20 text-[11px] font-body font-light">
            <span>&copy; 2026 Taxi Rodgers — Guadeloupe 971</span>
            <span className="hidden sm:inline">&middot;</span>
            <a href="#" className="hover:text-white/40 transition-colors">Mentions legales</a>
            <span>&middot;</span>
            <span>Realise par <a href="https://asanaweb.com" target="_blank" rel="noopener noreferrer" className="text-cyan/50 hover:text-cyan transition-colors">Asana Web</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
