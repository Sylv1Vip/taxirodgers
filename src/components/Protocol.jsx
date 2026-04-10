import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarCheck, MapPin, CircleCheckBig } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function StepIcon({ children }) {
  return (
    <div className="relative w-16 h-16 flex-shrink-0">
      <div className="absolute inset-0 rounded-[1.2rem] bg-cyan-light flex items-center justify-center">
        {children}
      </div>
      <div className="absolute inset-0 rounded-[1.2rem] border border-cyan/20"
        style={{ animation: "stepPulse 3s ease-in-out infinite" }} />
      <style>{`
        @keyframes stepPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const steps = [
  {
    step: "01",
    title: "Reservez votre course",
    description: "Appelez le 0690 246 186 ou utilisez le formulaire de contact. Depuis l'etranger, reservez 48h a l'avance. Siege bebe disponible gratuitement.",
    icon: <CalendarCheck size={26} className="text-navy" strokeWidth={1.5} />,
    image: "/images/step1-reservation.webp",
  },
  {
    step: "02",
    title: "Prise en charge sur mesure",
    description: "Votre chauffeur vous attend a l'aeroport Pole Caraibes, au port maritime, a votre hotel ou domicile. Ponctualite garantie.",
    icon: <MapPin size={26} className="text-navy" strokeWidth={1.5} />,
    image: "/images/step2-pickup.webp",
  },
  {
    step: "03",
    title: "Arrivez en toute serenite",
    description: "Destination atteinte dans le confort d'une berline climatisee. A l'heure, en securite, l'esprit tranquille.",
    icon: <CircleCheckBig size={26} className="text-navy" strokeWidth={1.5} />,
    image: "/images/step3-arrival.webp",
  },
];

export default function Protocol() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
          y: 70, opacity: 0, duration: 1, ease: "power3.out", delay: i * 0.12,
        });

        if (i < steps.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            pin: true,
            pinSpacing: false,
            onUpdate: (self) => {
              gsap.to(card, {
                scale: 1 - self.progress * 0.04,
                filter: `blur(${self.progress * 5}px)`,
                opacity: 1 - self.progress * 0.3,
                duration: 0.1,
                overwrite: true,
              });
            },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-snow">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="mb-12 md:mb-20">
          <span className="font-data text-[11px] text-cyan tracking-[0.3em] uppercase block mb-4">
            Comment ca marche
          </span>
          <h2 className="font-heading font-semibold text-ink text-3xl md:text-5xl tracking-tight max-w-xl text-balance">
            Votre experience, etape par etape
          </h2>
        </div>

        <div className="relative">
          {steps.map((step, i) => (
            <div key={step.step} ref={(el) => (cardsRef.current[i] = el)} className="will-change-transform mb-5 last:mb-0">
              <div className="bg-white border border-cloud rounded-container-lg p-6 md:p-10
                flex flex-col md:flex-row gap-6 md:gap-10 items-start
                shadow-[0_4px_30px_rgba(36,57,105,0.04)]">
                {/* Left: icon + step */}
                <div className="flex flex-col items-center gap-3">
                  <StepIcon>{step.icon}</StepIcon>
                  <span className="font-data text-[10px] text-ink-muted tracking-[0.2em]">{step.step}</span>
                </div>

                {/* Middle: text */}
                <div className="flex-1">
                  <h3 className="font-heading font-medium text-ink text-xl md:text-2xl tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-muted text-sm md:text-base font-body font-light leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Right: image */}
                <div className="hidden md:block w-40 h-28 rounded-[1rem] overflow-hidden flex-shrink-0
                  border border-cloud/50">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
