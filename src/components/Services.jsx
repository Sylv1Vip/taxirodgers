import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, Car, HeartPulse, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Card 1: Telemetry Typewriter ─── */
function TransferCard() {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const lines = [
    "Aeroport Pole Caraibes .. OK",
    "Port maritime ........... OK",
    "Hotels & residences ..... OK",
    "Gites & villas .......... OK",
    "Toute la Guadeloupe ..... OK",
  ];

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => { setDisplayText(""); setLineIndex(0); setCharIndex(0); }, 3000);
      return () => clearTimeout(t);
    }
    if (charIndex <= lines[lineIndex].length) {
      const t = setTimeout(() => {
        setDisplayText((prev) => {
          const cl = prev.split("\n");
          if (cl.length <= lineIndex) cl.push("");
          cl[lineIndex] = lines[lineIndex].slice(0, charIndex);
          return cl.join("\n");
        });
        setCharIndex((c) => c + 1);
      }, 28);
      return () => clearTimeout(t);
    }
    setLineIndex((l) => l + 1);
    setCharIndex(0);
  }, [charIndex, lineIndex]);

  return (
    <div className="group bg-white border border-cloud rounded-container p-7 md:p-8
      hover:border-cyan/30 hover:shadow-[0_8px_40px_rgba(30,187,240,0.08)]
      transition-all duration-500 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-[0.8rem] bg-cyan-light flex items-center justify-center">
          <Plane size={17} className="text-navy" />
        </div>
        <div>
          <h3 className="font-heading font-medium text-ink text-base">Transferts Aeroport & Port</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            <span className="font-data text-[9px] text-ink-muted tracking-[0.15em] uppercase">En direct</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-snow rounded-[1rem] p-4 border border-cloud/60">
        <pre className="font-data text-[11px] md:text-xs text-navy leading-relaxed whitespace-pre-wrap min-h-[110px]">
          {displayText}
          <span className="inline-block w-[2px] h-3.5 bg-cyan ml-0.5 animate-pulse" />
        </pre>
      </div>
    </div>
  );
}

/* ─── Card 2: Confort ─── */
function ComfortCard() {
  const features = [
    "Sieges cuir & alcantara",
    "Climatisation bi-zone",
    "Bouteilles d'eau offertes",
    "Chargeurs USB a disposition",
  ];

  return (
    <div className="group bg-white border border-cloud rounded-container p-7 md:p-8
      hover:border-cyan/30 hover:shadow-[0_8px_40px_rgba(30,187,240,0.08)]
      transition-all duration-500 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-[0.8rem] bg-cyan-light flex items-center justify-center">
          <Car size={17} className="text-navy" />
        </div>
        <h3 className="font-heading font-medium text-ink text-base">Vehicules tout confort</h3>
      </div>
      <p className="text-ink-muted text-sm font-light leading-relaxed mb-5">
        Berlines 5 places et minibus 9 places. Tarifs adaptes et transparents.
      </p>
      <div className="flex-1 space-y-2">
        {features.map((feat) => (
          <div key={feat} className="flex items-center gap-3 bg-snow rounded-[0.7rem] px-4 py-2.5 border border-cloud/40">
            <span className="w-5 h-5 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            </span>
            <span className="text-ink-light text-[13px] font-body font-light">{feat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card 3: Medical ─── */
function MedicalCard() {
  return (
    <div className="group bg-white border border-cloud rounded-container p-7 md:p-8
      hover:border-cyan/30 hover:shadow-[0_8px_40px_rgba(30,187,240,0.08)]
      transition-all duration-500 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-[0.8rem] bg-cyan-light flex items-center justify-center">
          <HeartPulse size={17} className="text-navy" />
        </div>
        <div>
          <h3 className="font-heading font-medium text-ink text-base">Transport Medical</h3>
          <span className="font-data text-[9px] text-cyan tracking-[0.15em] uppercase">Conventionne</span>
        </div>
      </div>
      {/* Animated heartbeat */}
      <div className="mb-5 flex items-center justify-center py-3">
        <svg viewBox="0 0 200 50" className="w-full max-w-[260px] h-auto">
          <path
            d="M0,25 L40,25 L50,8 L60,42 L70,15 L80,35 L90,25 L200,25"
            fill="none" stroke="#1ebbf0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: "heartbeat 3s linear infinite" }}
          />
          <style>{`@keyframes heartbeat { to { stroke-dashoffset: 0; } }`}</style>
        </svg>
      </div>
      <div className="flex-1 space-y-2">
        {["Hopitaux & cliniques", "Centres de kinesitherapie", "Consultations specialisees", "Tarifs reglementes"].map((item) => (
          <div key={item} className="flex items-center gap-3 text-[13px] text-ink-muted font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-navy/30 flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card 4: Excursions ─── */
function ExcursionsCard() {
  return (
    <div className="group bg-white border border-cloud rounded-container p-7 md:p-8
      hover:border-cyan/30 hover:shadow-[0_8px_40px_rgba(30,187,240,0.08)]
      transition-all duration-500 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-[0.8rem] bg-cyan-light flex items-center justify-center">
          <MapPin size={17} className="text-navy" />
        </div>
        <h3 className="font-heading font-medium text-ink text-base">Excursions & Tourisme</h3>
      </div>
      {/* Guadeloupe image */}
      <div className="rounded-[1rem] overflow-hidden mb-5 border border-cloud/40">
        <img
          src="/images/guadeloupe-beach.webp"
          alt="Plage paradisiaque de Guadeloupe"
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <p className="text-ink-muted text-sm font-light leading-relaxed mb-4">
        Decouvrez la Guadeloupe avec un chauffeur qui connait chaque recoin de l'ile.
      </p>
      <div className="flex-1 grid grid-cols-2 gap-2">
        {[
          { name: "Pointe-a-Pitre", tag: "Centre" },
          { name: "Sainte-Anne", tag: "Sud" },
          { name: "Deshaies", tag: "Nord" },
          { name: "Les Saintes", tag: "Iles" },
        ].map((d) => (
          <div key={d.name} className="bg-snow rounded-[0.7rem] px-3 py-2.5 border border-cloud/40 text-center">
            <span className="block font-body text-ink-light text-[12px]">{d.name}</span>
            <span className="block font-data text-[9px] text-cyan tracking-widest uppercase mt-0.5">{d.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-svc]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        y: 60, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-40 bg-snow">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="mb-12 md:mb-20">
          <span className="font-data text-[11px] text-cyan tracking-[0.3em] uppercase block mb-4">
            Nos services
          </span>
          <h2 className="font-heading font-semibold text-ink text-3xl md:text-5xl tracking-tight max-w-2xl text-balance">
            Nous faisons tout pour vous
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div data-svc><TransferCard /></div>
          <div data-svc><ComfortCard /></div>
          <div data-svc><MedicalCard /></div>
          <div data-svc><ExcursionsCard /></div>
        </div>
      </div>
    </section>
  );
}
