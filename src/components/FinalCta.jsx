import React, { useState } from "react";
import { Phone } from "lucide-react";
import LeadModal from "./LeadModal.jsx";

const FinalCta = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[var(--gold)] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="type-headline text-[var(--navy)]" style={{ fontSize: "28px" }}>
          98.4% clean claims. 11-day A/R. Your practice, next.
        </h2>
        <p className="type-body-lg text-[var(--navy)]/70 mt-4 max-w-lg mx-auto">
          No long-term contract. No upfront cost. Just a straight look at what
          your billing could recover.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-shine rounded-lg bg-[var(--navy)] hover:bg-[var(--navy-2)] active:bg-[var(--navy-active)] transition-all duration-200 px-7 py-3 text-[15px] font-semibold font-sans text-white min-h-[44px] inline-flex items-center"
          >
            Get My Free Billing Audit
          </button>
          <a
            href="tel:+18005551234"
            className="group flex items-center gap-2 text-[15px] font-semibold text-[var(--navy)]"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" /> (800) 555-1234
          </a>
        </div>
      </div>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default FinalCta;
