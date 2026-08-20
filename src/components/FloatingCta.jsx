import React, { useState } from "react";
import { Calendar, X, MessageCircle } from "lucide-react";

const FloatingCta = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-3 w-72 rounded-xl bg-white shadow-overlay border border-[var(--border)] p-5 anim-fadeSlideUp">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-3 right-3 text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <X className="h-4 w-4" />
          </button>
          <h4 className="type-subhead text-[15px] text-[var(--navy)] pr-4">
            See your numbers before you decide.
          </h4>
          <p className="type-body-sm text-[var(--muted)] mt-2">
            A 20-minute call, no pitch deck — just a look at your current
            claims and where they're leaking revenue.
          </p>
          <a
            href="tel:+18005551234"
            className="btn-shine mt-4 flex items-center justify-center gap-2 rounded-lg bg-[var(--navy)] hover:bg-[var(--navy-2)] active:bg-[var(--navy-active)] transition-all duration-200 px-4 py-2.5 text-[14px] font-semibold font-sans text-white min-h-[36px]"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Book a call"
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[var(--navy)] text-white shadow-lift hover:bg-[var(--navy-2)] hover:scale-105 active:scale-95 transition-all duration-200 ${
          !open ? "anim-pulseRing" : ""
        }`}
      >
        <span className="transition-transform duration-300" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
          {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </span>
      </button>
    </div>
  );
};

export default FloatingCta;
