import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words1 = line1Ref.current.querySelectorAll(".word");
      gsap.from(words1, {
        scrollTrigger: { trigger: line1Ref.current, start: "top 80%", end: "top 40%", scrub: 1 },
        opacity: 0.06, y: 20, stagger: 0.04,
      });

      const words2 = line2Ref.current.querySelectorAll(".word");
      gsap.from(words2, {
        scrollTrigger: { trigger: line2Ref.current, start: "top 80%", end: "top 40%", scrub: 1 },
        opacity: 0.06, y: 20, stagger: 0.04,
      });

      gsap.to("[data-parallax-bg]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
        y: -80,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
    ));

  return (
    <section
      id="apropos"
      ref={sectionRef}
      className="relative py-28 md:py-48 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #243969 0%, #1e5882 50%, #1ebbf0 100%)" }}
    >
      {/* Parallax image */}
      <div
        data-parallax-bg
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=60&fit=crop')",
        }}
      />

      {/* Light orb */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.06]
        blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        <span className="font-data text-[11px] text-white/40 tracking-[0.3em] uppercase block mb-16 md:mb-24">
          Notre engagement
        </span>

        <div ref={line1Ref} className="mb-12 md:mb-20 max-w-4xl">
          <p className="font-body font-light text-white/40 text-lg md:text-2xl leading-relaxed tracking-tight">
            {splitWords("Taxi Rodgers, c'est un service de transport de qualite a travers Pointe-a-Pitre et toutes les villes de la Guadeloupe. Cree en 2019, nous mettons la securite et le confort au centre de chaque trajet.")}
          </p>
        </div>

        <div ref={line2Ref} className="max-w-5xl">
          <p className="font-heading font-semibold text-white text-2xl md:text-4xl lg:text-6xl leading-[1.15] tracking-tight">
            {splitWords("Chaque trajet est une promesse de")}
            {" "}
            <span className="word inline-block mr-[0.3em] text-cyan-light">confort,</span>
            {splitWords("de")}
            {" "}
            <span className="word inline-block mr-[0.3em] text-cyan-light">confiance</span>
            {splitWords("et de")}
            {" "}
            <span className="word inline-block text-cyan-light">ponctualite.</span>
          </p>
        </div>

        <div className="mt-12 md:mt-20 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="font-data text-xs text-white/30 tracking-[0.15em] uppercase">
            Rodgers — Votre chauffeur depuis 2019
          </span>
        </div>
      </div>
    </section>
  );
}
