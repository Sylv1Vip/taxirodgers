import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Clock, Plane, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Animated counter ─── */
function AnimatedNumber({ target, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: parseFloat(target),
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            setValue(
              target.includes(".")
                ? this.targets()[0].val.toFixed(1)
                : Math.round(this.targets()[0].val)
            );
          },
        });
      },
    });
    return () => trigger.kill();
  }, [target]);

  return (
    <span ref={ref} className="font-variant-tabular">
      {value}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-stat]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        y: 40, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
      });
      gsap.from("[data-badge]", {
        scrollTrigger: { trigger: "[data-badge]", start: "top 85%", once: true },
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.08,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "2019", label: "Annee de creation", isYear: true },
    { value: "971", label: "Guadeloupe", isYear: true },
    { value: "5.0", label: "Note Google" },
    { value: "24", label: "Heures / 7j", suffix: "h" },
  ];

  const badges = [
    { icon: Plane, label: "Agree Aeroport Pole Caraibes" },
    { icon: Shield, label: "Taxi Conventionne" },
    { icon: Clock, label: "Reservation depuis l'etranger" },
    { icon: Star, label: "Avis 5 etoiles Google" },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-white">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-navy/[0.02]
        blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-24">
          {stats.map((stat) => (
            <div key={stat.label} data-stat className="text-center md:text-left">
              <span className="block font-data text-4xl md:text-5xl lg:text-6xl text-gradient-blue
                font-light tracking-tight leading-none"
                style={{
                  background: "linear-gradient(135deg, #243969 0%, #1ebbf0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                {stat.isYear ? stat.value : <AnimatedNumber target={stat.value} suffix={stat.suffix || ""} />}
              </span>
              <span className="block font-data text-[10px] md:text-[11px] text-ink-muted tracking-[0.15em] uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Guadeloupe image banner */}
        <div className="rounded-container-lg overflow-hidden mb-16 md:mb-20 relative h-48 md:h-64">
          <img
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1400&q=80&fit=crop"
            alt="Vue aerienne de la Guadeloupe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/30 to-transparent
            flex items-center px-8 md:px-14">
            <div>
              <span className="font-data text-[10px] text-white/60 tracking-[0.2em] uppercase block mb-2">
                Depuis 2019
              </span>
              <span className="font-heading font-semibold text-white text-xl md:text-3xl tracking-tight">
                Au service de la Guadeloupe
              </span>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              data-badge
              className="flex items-center gap-3.5 bg-snow border border-cloud
                rounded-container px-5 py-4 hover:border-cyan/30
                hover:shadow-[0_4px_25px_rgba(30,187,240,0.06)] transition-all duration-500"
            >
              <div className="w-9 h-9 rounded-[0.7rem] bg-cyan-light flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-navy" strokeWidth={1.5} />
              </div>
              <span className="font-body font-light text-ink-light text-[13px] leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
