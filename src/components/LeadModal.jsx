import React, { useEffect } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm.jsx";

const LeadModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-[var(--navy)]/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-lift p-7 sm:p-8 anim-fadeSlideUp">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="type-subhead text-[var(--navy)]">
          Get your free billing audit
        </h3>
        <p className="type-body-sm text-[var(--muted)] mt-1.5">
          Tell us how to reach you — we'll follow up within one business day.
        </p>
        <div className="mt-6">
          <LeadForm compact />
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
