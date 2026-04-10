import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Phone, ArrowDown, MapPin, Shield, Clock } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text elements
      gsap.from("[data-hero]", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      });

      // Float the image
      gsap.to("[data-hero-img]", {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Rotating badge
      gsap.to("[data-rotate]", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Text shimmer on heading
      gsap.fromTo("[data-shimmer-line]", {
        backgroundPosition: "200% center",
      }, {
        backgroundPosition: "-200% center",
        duration: 4,
        ease: "none",
        repeat: -1,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="accueil" ref={heroRef} className="relative min-h-[100dvh] bg-white overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full
        bg-cyan/[0.07] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full
        bg-navy/[0.04] blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-28 md:pt-36 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[80dvh]">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <div data-hero className="inline-flex items-center gap-2.5 bg-cyan-light border border-cyan/15
              rounded-pill px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="font-data text-[10px] text-navy tracking-[0.2em] uppercase">
                Agree aeroport Pole Caraibes
              </span>
            </div>

            {/* Headline with shimmer effect */}
            <h1 data-hero className="max-w-xl">
              <span className="block font-heading font-light text-ink-muted text-base md:text-lg
                tracking-[0.3em] uppercase mb-3">
                Votre taxi & VTC en Guadeloupe
              </span>
              <span className="block font-heading font-bold text-ink text-4xl sm:text-5xl md:text-6xl
                lg:text-7xl leading-[0.95] tracking-tight">
                Transport
                <br />
                <span
                  data-shimmer-line
                  className="text-shimmer inline-block"
                  style={{
                    background: "linear-gradient(90deg, #243969 0%, #1ebbf0 25%, #243969 50%, #1ebbf0 75%, #243969 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  premium
                </span>
              </span>
            </h1>

            <p data-hero className="text-ink-muted text-base md:text-lg mt-6 font-body font-light
              max-w-md leading-relaxed">
              Taxi agree et chauffeur prive VTC. Transferts aeroport, excursions touristiques
              et transport medical conventionne. Depuis 2019 en Guadeloupe.
            </p>

            {/* CTAs */}
            <div data-hero className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:0690246186"
                className="inline-flex items-center justify-center gap-3 bg-navy text-white
                  px-8 py-4 rounded-pill text-sm font-body font-semibold overflow-hidden relative group
                  hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500
                  ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_8px_30px_rgba(36,57,105,0.25)]"
              >
                <Phone size={16} strokeWidth={2.5} />
                <span className="relative z-10">Reserver mon transfert</span>
                <span className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-mist
                  text-ink-light px-8 py-4 rounded-pill text-sm font-body font-light tracking-wide
                  hover:border-navy/30 hover:text-navy transition-all duration-500
                  hover:scale-[1.03] active:scale-[0.98]"
              >
                Nos services
                <ArrowDown size={14} />
              </a>
            </div>

            {/* Mini trust badges */}
            <div data-hero className="flex flex-wrap gap-5 mt-10">
              {[
                { icon: MapPin, text: "Pole Caraibes" },
                { icon: Shield, text: "Conventionne" },
                { icon: Clock, text: "7j/7" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={13} className="text-cyan" strokeWidth={2} />
                  <span className="font-data text-[10px] text-ink-muted tracking-wider uppercase">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image with floating elements */}
          <div className="relative flex items-center justify-center">
            {/* Main vehicle image */}
            <div
              data-hero-img
              className="relative rounded-container-lg overflow-hidden shadow-[0_20px_60px_rgba(36,57,105,0.15)]
                will-change-transform"
            >
              <img
                src="https://www.taxirodgers.fr/wp-content/uploads/2021/10/vehicule-TAXIRODGERS-1.jpg"
                alt="Vehicule premium Taxi Rodgers Guadeloupe"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>

            {/* Floating card — top right */}
            <div
              data-hero
              className="absolute -top-4 -right-4 md:top-4 md:right-[-2rem] bg-white rounded-container
                px-5 py-4 shadow-[0_10px_40px_rgba(36,57,105,0.1)] border border-cloud
                animate-float z-10"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="font-data text-2xl text-navy font-medium font-variant-tabular">5.0</span>
              <span className="block font-data text-[9px] text-ink-muted tracking-[0.1em] uppercase mt-0.5">
                Google
              </span>
            </div>

            {/* Floating card — bottom left */}
            <div
              data-hero
              className="absolute -bottom-4 -left-4 md:bottom-8 md:left-[-2rem] bg-white rounded-container
                px-5 py-3 shadow-[0_10px_40px_rgba(36,57,105,0.1)] border border-cloud
                animate-float z-10"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="font-data text-[10px] text-navy tracking-wider uppercase">Disponible</span>
              </div>
            </div>

            {/* Rotating decorative ring */}
            <div
              data-rotate
              className="absolute -z-10 w-[120%] h-[120%] border border-dashed border-cyan/10
                rounded-full will-change-transform pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
