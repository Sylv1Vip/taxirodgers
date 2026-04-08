import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Facebook, Clock, Send, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [rgpdChecked, setRgpdChecked] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-contact]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rgpdChecked) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Phone, label: "0690 246 186", href: "tel:0690246186" },
    { icon: Mail, label: "taxi.rodgers971@gmail.com", href: "mailto:taxi.rodgers971@gmail.com" },
    { icon: Facebook, label: "Taximan Rodgers Guadeloupe", href: "https://www.facebook.com/TaximanRodgers" },
    { icon: Clock, label: "Disponible 7 jours sur 7", href: null },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-40 bg-snow">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div data-contact className="mb-12 md:mb-20">
          <span className="font-data text-[11px] text-cyan tracking-[0.3em] uppercase block mb-4">Contact</span>
          <h2 className="font-heading font-semibold text-ink text-3xl md:text-5xl tracking-tight max-w-xl text-balance">
            Contactez-nous
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left */}
          <div data-contact>
            <p className="text-ink-muted text-base font-body font-light leading-relaxed mb-8 max-w-md">
              Pour toute reservation ou renseignement, appelez-nous directement ou remplissez le formulaire.
              Reponse garantie sous 2 heures.
            </p>
            <div className="space-y-4 mb-8">
              {contactItems.map(({ icon: Icon, label, href }) => {
                const inner = (
                  <div className="flex items-center gap-3.5 group">
                    <div className="w-9 h-9 rounded-[0.7rem] bg-cyan-light flex items-center justify-center
                      flex-shrink-0 group-hover:bg-cyan/20 transition-colors duration-300">
                      <Icon size={15} className="text-navy" strokeWidth={1.5} />
                    </div>
                    <span className="text-ink-light text-sm font-body font-light group-hover:text-navy transition-colors duration-300">
                      {label}
                    </span>
                  </div>
                );
                return href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : <div key={label}>{inner}</div>;
              })}
            </div>

            {/* Image */}
            <div className="rounded-container overflow-hidden border border-cloud mb-6">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80&fit=crop"
                alt="Interieur vehicule confort Taxi Rodgers"
                className="w-full h-48 object-cover"
              />
            </div>

            <a href="tel:0690246186"
              className="inline-flex items-center gap-3 bg-navy text-white px-7 py-3.5 rounded-pill
                text-sm font-body font-semibold overflow-hidden relative group
                hover:scale-[1.03] active:scale-[0.98] transition-transform duration-500
                shadow-[0_6px_25px_rgba(36,57,105,0.2)]">
              <Phone size={15} strokeWidth={2.5} />
              <span className="relative z-10">Appeler maintenant</span>
              <span className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0
                transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
            </a>
          </div>

          {/* Right — form */}
          <div data-contact>
            <form onSubmit={handleSubmit}
              className="bg-white border border-cloud rounded-container-lg p-7 md:p-9 space-y-5
                shadow-[0_4px_30px_rgba(36,57,105,0.04)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{ name: "prenom", label: "Prenom", ph: "Votre prenom" }, { name: "nom", label: "Nom", ph: "Votre nom" }].map((f) => (
                  <div key={f.name} className="space-y-1.5">
                    <label className="block font-data text-[10px] text-ink-muted tracking-[0.15em] uppercase">{f.label}</label>
                    <input type="text" name={f.name} required placeholder={f.ph}
                      className="w-full bg-snow border border-cloud rounded-[1rem] px-4 py-3
                        text-ink text-sm font-body font-light placeholder:text-ink-muted/40
                        focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/10
                        transition-all duration-300" />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <label className="block font-data text-[10px] text-ink-muted tracking-[0.15em] uppercase">Email</label>
                <input type="email" name="email" required placeholder="votre@email.com"
                  className="w-full bg-snow border border-cloud rounded-[1rem] px-4 py-3
                    text-ink text-sm font-body font-light placeholder:text-ink-muted/40
                    focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/10
                    transition-all duration-300" />
              </div>
              <div className="space-y-1.5">
                <label className="block font-data text-[10px] text-ink-muted tracking-[0.15em] uppercase">Telephone</label>
                <input type="tel" name="telephone" required placeholder="0690 XX XX XX"
                  className="w-full bg-snow border border-cloud rounded-[1rem] px-4 py-3
                    text-ink text-sm font-body font-light placeholder:text-ink-muted/40
                    focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/10
                    transition-all duration-300" />
              </div>
              <div className="space-y-1.5">
                <label className="block font-data text-[10px] text-ink-muted tracking-[0.15em] uppercase">Message</label>
                <textarea name="message" rows={4} placeholder="Date, heure, lieu de prise en charge, destination..."
                  className="w-full bg-snow border border-cloud rounded-[1rem] px-4 py-3
                    text-ink text-sm font-body font-light placeholder:text-ink-muted/40 resize-none
                    focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/10
                    transition-all duration-300" />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <button type="button" onClick={() => setRgpdChecked(!rgpdChecked)}
                  className={`w-5 h-5 rounded-md border flex-shrink-0 mt-0.5 flex items-center justify-center
                    transition-all duration-300
                    ${rgpdChecked ? "bg-navy border-navy" : "border-mist group-hover:border-navy/30"}`}>
                  {rgpdChecked && <Check size={11} className="text-white" strokeWidth={3} />}
                </button>
                <span onClick={() => setRgpdChecked(!rgpdChecked)}
                  className="text-ink-muted text-xs font-body font-light leading-relaxed">
                  J'accepte que mes donnees soient traitees conformement au RGPD.
                </span>
              </label>

              <button type="submit" disabled={!rgpdChecked}
                className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-pill
                  text-sm font-body font-semibold overflow-hidden relative group transition-all duration-500
                  ${submitted
                    ? "bg-mint/15 border border-mint/30 text-green-700"
                    : rgpdChecked
                      ? "bg-navy text-white hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(36,57,105,0.15)]"
                      : "bg-cloud text-ink-muted/40 cursor-not-allowed"
                  }`}>
                {submitted ? (
                  <><Check size={15} /> Message envoye avec succes</>
                ) : (
                  <>
                    <Send size={13} />
                    <span className="relative z-10">Envoyer ma demande</span>
                    {rgpdChecked && (
                      <span className="absolute inset-0 bg-cyan translate-y-full group-hover:translate-y-0
                        transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    )}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
