import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, UserCheck, Clock, BadgeCheck, CreditCard, Route } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Taxi column ─── */
function TaxiColumn() {
  const features = [
    { icon: Clock, title: "Course immediate", desc: "Reponse rapide 7j/7, sans reservation prealable" },
    { icon: BadgeCheck, title: "Tarifs reglementes", desc: "Compteur officiel et tarifs prefecture" },
    { icon: Route, title: "Courses locales", desc: "Deplacements dans toute la Guadeloupe" },
  ];

  return (
    <div data-tv-col className="relative bg-snow border border-cloud rounded-container h-full
      hover:border-navy/20 transition-all duration-500 overflow-hidden flex flex-col">
      {/* Minimal header with pattern */}
      <div className="relative h-52 md:h-60 bg-gradient-to-br from-cloud to-snow overflow-hidden border-b border-cloud">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(36,57,105,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,57,105,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Large faded icon */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-[0.06]">
          <Car size={200} className="text-navy" strokeWidth={1} />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[200px] bg-cyan/[0.08] blur-[80px] rounded-full pointer-events-none" />

        {/* Status chip */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/80 backdrop-blur-sm
          border border-cloud rounded-pill px-3 py-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
          <span className="font-data text-[9px] text-ink tracking-[0.15em] uppercase font-medium">Disponible 7j/7</span>
        </div>

        {/* Service label */}
        <div className="absolute bottom-5 left-8">
          <span className="font-data text-[10px] text-ink-muted tracking-[0.2em] uppercase block mb-1">
            Service 01
          </span>
          <h3 className="font-heading font-semibold text-ink text-3xl md:text-4xl tracking-tight leading-none">
            Taxi
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex-1 flex flex-col">
        <p className="text-ink-light text-[15px] font-body font-light leading-relaxed mb-8">
          Le reflexe pour un deplacement immediat. Agree aeroport Pole Caraibes,
          nous intervenons dans toute la Guadeloupe avec des tarifs reglementes.
        </p>

        <div className="space-y-5 flex-1">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-[0.8rem] bg-white border border-cloud flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={15} className="text-navy" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <h4 className="font-body font-medium text-ink text-sm mb-1">{title}</h4>
                <p className="text-ink-muted text-[13px] font-light leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-cloud">
          <div className="flex items-center justify-between">
            <span className="font-data text-[10px] text-ink-muted tracking-[0.15em] uppercase">
              Ideal pour
            </span>
            <span className="font-body text-[13px] text-navy font-medium">
              Course ponctuelle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── VTC column ─── */
function VtcColumn() {
  const features = [
    { icon: UserCheck, title: "Chauffeur prive dedie", desc: "Service personnalise, discretion et prestance" },
    { icon: CreditCard, title: "Tarif forfaitaire", desc: "Prix connu et valide au moment de la reservation" },
    { icon: BadgeCheck, title: "Reservation planifiee", desc: "Trajets programmes a l'avance, mise a disposition" },
  ];

  return (
    <div data-tv-col className="relative bg-gradient-to-br from-navy to-navy-deep rounded-container h-full
      shadow-[0_20px_60px_rgba(36,57,105,0.25)] overflow-hidden flex flex-col">
      {/* Premium header with pattern */}
      <div className="relative h-52 md:h-60 bg-gradient-to-br from-navy to-navy-deep overflow-hidden border-b border-white/5">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(30,187,240,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,187,240,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Large faded icon */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-[0.08]">
          <UserCheck size={200} className="text-cyan" strokeWidth={1} />
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-cyan/[0.12] blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-cyan/[0.06] blur-[60px] rounded-full pointer-events-none" />

        {/* Premium badge */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-cyan/20 backdrop-blur-md
          border border-cyan/40 rounded-pill px-3 py-1.5 shadow-[0_4px_20px_rgba(30,187,240,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          <span className="font-data text-[9px] text-white tracking-[0.15em] uppercase font-medium">Premium</span>
        </div>

        {/* Service label */}
        <div className="absolute bottom-5 left-8">
          <span className="font-data text-[10px] text-cyan tracking-[0.2em] uppercase block mb-1">
            Service 02
          </span>
          <h3 className="font-heading font-semibold text-white text-3xl md:text-4xl tracking-tight leading-none">
            VTC
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-8 md:p-10 flex-1 flex flex-col">
        {/* Subtle orb */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan/[0.06] blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-cyan/[0.04] blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col">
          <p className="text-white/70 text-[15px] font-body font-light leading-relaxed mb-8">
            Voiture de Transport avec Chauffeur. L'elegance d'un service prive sur reservation,
            pour vos transferts business, evenements, ou trajets planifies.
          </p>

          <div className="space-y-5 flex-1">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[0.8rem] bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-cyan" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <h4 className="font-body font-medium text-white text-sm mb-1">{title}</h4>
                  <p className="text-white/60 text-[13px] font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-data text-[10px] text-white/50 tracking-[0.15em] uppercase">
                Ideal pour
              </span>
              <span className="font-body text-[13px] text-cyan font-medium">
                Business & evenements
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function TaxiVtc() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-tv-head]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
      });
      gsap.from("[data-tv-col]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        y: 60, opacity: 0, duration: 1.1, ease: "power3.out", stagger: 0.15,
      });
      gsap.from("[data-tv-note]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%", once: true },
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="taxi-vtc" ref={sectionRef} className="relative py-24 md:py-40 bg-white overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-1/3 right-[-100px] w-[500px] h-[500px] rounded-full
        bg-cyan/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Hero split: text (left) + image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Left — text */}
          <div data-tv-head>
            <span className="font-data text-[11px] text-cyan tracking-[0.3em] uppercase block mb-4">
              Taxi & VTC en Guadeloupe
            </span>
            <h2 className="font-heading font-semibold text-ink text-3xl md:text-5xl tracking-tight text-balance leading-[1.1] mb-6">
              Deux services, une{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(90deg, #243969 0%, #1ebbf0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                meme exigence
              </span>
            </h2>
            <p className="text-ink-light text-base md:text-lg font-body font-light leading-relaxed mb-8 max-w-xl">
              Taxi Rodgers, c'est l'immediate du taxi traditionnel et la tranquillite d'un service VTC premium.
              Vous choisissez la formule adaptee a votre besoin : course spontanee ou reservation planifiee.
            </p>

            {/* Legal badge */}
            <div className="bg-snow rounded-container p-5 md:p-6 border border-cloud mb-6 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[0.8rem] bg-cyan-light flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={17} className="text-navy" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-body font-medium text-ink text-sm mb-1">Agree prefecture & aeroport</h4>
                  <p className="text-ink-muted text-[13px] font-light leading-relaxed">
                    Taxi Rodgers opere sous les deux statuts reglementes en Guadeloupe.
                    Carte professionnelle, assurances et certifications a jour.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:0690246186"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-7 py-3.5
                rounded-pill text-sm font-body font-semibold overflow-hidden relative group
                hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500
                ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_6px_25px_rgba(36,57,105,0.2)]"
            >
              <span className="relative z-10">Reserver maintenant</span>
              <span className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0
                transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
            </a>
          </div>

          {/* Right — hero image */}
          <div data-tv-head className="relative">
            <div className="relative rounded-container-lg overflow-hidden shadow-[0_20px_60px_rgba(36,57,105,0.18)]
              border border-cloud/50">
              <img
                src="/images/chauffeur-vtc-premium.webp"
                alt="Chauffeur prive Taxi Rodgers accueillant un client devant une Mercedes noire — Service VTC premium Guadeloupe"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />

              {/* Premium chip */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm
                border border-white rounded-pill px-3 py-1.5 shadow-[0_4px_20px_rgba(36,57,105,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                <span className="font-data text-[9px] text-navy tracking-[0.15em] uppercase font-medium">
                  Service premium
                </span>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="font-data text-[9px] text-white/70 tracking-[0.2em] uppercase block">
                    Experience VIP
                  </span>
                  <span className="font-heading font-semibold text-white text-lg tracking-tight">
                    Mercedes-Benz
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="w-1 h-4 bg-cyan rounded-full" style={{ opacity: 1 - i * 0.15 }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative floating accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-cyan/20 pointer-events-none hidden lg:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-cyan/[0.08] blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* Comparison cards — side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <TaxiColumn />
          <VtcColumn />
        </div>
      </div>
    </section>
  );
}
