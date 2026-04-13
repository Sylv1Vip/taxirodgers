import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Baby } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const vehicles = [
  {
    name: "Berline Premium",
    seats: "5 places",
    image: "/images/mercedes-beach-vtc.webp",
    features: ["Sieges cuir & alcantara", "Climatisation bi-zone", "Coffre spacieux", "Chargeurs USB"],
  },
  {
    name: "Minibus Confort",
    seats: "9 places",
    image: "/images/taxi-road-guadeloupe.webp",
    features: ["Ideal familles & groupes", "Espace bagages XXL", "Sieges inclinables", "Transferts collectifs"],
  },
];

export default function Fleet() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const current = vehicles[active];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-fleet]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="flotte" ref={sectionRef} className="relative py-24 md:py-40 bg-white">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan/[0.04]
        blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div data-fleet className="mb-12 md:mb-16">
          <span className="font-data text-[11px] text-cyan tracking-[0.3em] uppercase block mb-4">
            Notre flotte
          </span>
          <h2 className="font-heading font-semibold text-ink text-3xl md:text-5xl tracking-tight max-w-xl text-balance">
            La meilleure solution
          </h2>
        </div>

        {/* Tabs */}
        <div data-fleet className="flex gap-3 mb-8">
          {vehicles.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-body
                transition-all duration-500
                ${i === active
                  ? "bg-navy text-white font-medium shadow-[0_4px_20px_rgba(36,57,105,0.2)]"
                  : "bg-snow border border-cloud text-ink-muted hover:text-navy hover:border-navy/20"
                }`}
            >
              <Users size={14} />
              {v.name}
            </button>
          ))}
        </div>

        {/* Vehicle card */}
        <div data-fleet className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white border border-cloud
          rounded-container-lg overflow-hidden shadow-[0_10px_50px_rgba(36,57,105,0.06)]">
          {/* Image */}
          <div className="lg:col-span-3 relative overflow-hidden min-h-[280px] md:min-h-[420px]">
            <img
              src={current.image}
              alt={`${current.name} Taxi Rodgers`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700
                ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/60 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-lg border border-cloud
              rounded-pill px-4 py-1.5">
              <span className="font-data text-[10px] text-navy tracking-[0.15em] uppercase">{current.seats}</span>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 p-7 md:p-10 flex flex-col justify-center">
            <h3 className="font-heading font-semibold text-ink text-2xl md:text-3xl tracking-tight mb-2">
              {current.name}
            </h3>
            <p className="font-data text-xs text-cyan tracking-[0.15em] uppercase mb-6">{current.seats}</p>
            <div className="space-y-2.5 mb-7">
              {current.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                  <span className="text-ink-muted text-sm font-body font-light">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 bg-cyan-light rounded-[1rem] px-5 py-3.5 mb-6">
              <Baby size={16} className="text-navy" />
              <span className="text-ink-light text-[13px] font-light">Siege bebe gratuit sur demande</span>
            </div>
            <a
              href="tel:0690246186"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white
                px-6 py-3.5 rounded-pill text-sm font-body font-semibold
                hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500
                shadow-[0_6px_25px_rgba(36,57,105,0.2)] overflow-hidden relative group"
            >
              <span className="relative z-10">Reserver ce vehicule</span>
              <span className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0
                transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
