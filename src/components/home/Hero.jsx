import React, { useEffect, useRef, useState } from "react";
import { Star, ShieldCheck } from "lucide-react";
import LeadModal from "../LeadModal.jsx";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80";

const Hero = () => {
  const blobRef = useRef(null);
  const blob2Ref = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${x * -14}px, ${y * -14}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative bg-pattern pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      <div
        ref={blobRef}
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[var(--navy)]/[0.05] blur-3xl transition-transform duration-500 ease-out"
        aria-hidden="true"
      />
      <div
        ref={blob2Ref}
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[var(--navy-3)]/[0.08] blur-3xl transition-transform duration-500 ease-out"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="anim-fadeSlideUp inline-flex items-center gap-2 rounded-full bg-[var(--navy)]/5 px-4 py-1.5 mb-6 text-[13px] font-semibold font-sans text-[var(--navy)]">
            Revenue Cycle Management for US Practices
          </span>

          <h1
            className="anim-fadeSlideUp type-display text-[var(--navy)] text-[2.125rem] lg:text-[2.75rem]"
            style={{ animationDelay: "0.08s" }}
          >
            Collect 98.4% of claims clean.
            <br />
            <span className="bg-[var(--gold)]/40 text-[var(--navy)] rounded px-1">The first time.</span>
          </h1>

          <p
            className="anim-fadeSlideUp type-body-lg mt-6 text-[var(--muted)] max-w-lg"
            style={{ animationDelay: "0.16s" }}
          >
            We handle coding, claims, and collections for independent practices
            across the US. You don't lose control of your billing — you gain
            an actual team behind it.
          </p>

          <div
            className="anim-fadeSlideUp mt-7 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.22s" }}
          >
            <div className="flex text-[var(--navy)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-current anim-fadeIn"
                  style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                />
              ))}
            </div>
            <span className="type-body-sm text-[var(--muted)]">
              4.9 / 5 from 210+ practice reviews
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--navy)]/5 px-2.5 py-1 text-[11.5px] font-semibold font-sans text-[var(--navy)]">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--navy)]" />
              Verified practice reviews
            </span>
          </div>

          <div
            className="anim-fadeSlideUp mt-8 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="btn-shine rounded-lg bg-[var(--navy)] hover:bg-[var(--navy-2)] active:bg-[var(--navy-active)] transition-all duration-200 px-6 py-3 text-[15px] font-semibold font-sans text-white min-h-[44px] inline-flex items-center"
            >
              Get My Free Billing Audit
            </button>
            <a
              href="tel:+18005551234"
              className="text-[15px] font-semibold font-sans text-[var(--navy)] underline decoration-2 decoration-[var(--navy-3)] underline-offset-4 hover:decoration-[var(--navy)] transition-colors"
            >
              Talk to an expert now
            </a>
          </div>
        </div>

        <div
          className="anim-fadeSlideUp relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-lift h-72 sm:h-96 lg:h-full lg:min-h-[420px]"
          style={{ animationDelay: "0.1s" }}
        >
          <img
            src={`${HERO_IMAGE}&w=1200`}
            alt="Biller working alongside a stethoscope, reviewing claims"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,119,182,0.08), rgba(0,119,182,0.02))" }}
            aria-hidden="true"
          />
        </div>
      </div>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Hero;
