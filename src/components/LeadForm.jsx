import React, { useState } from "react";
import { Send } from "lucide-react";

const FIELD_CLASS =
  "w-full h-11 rounded-lg border-[1.5px] border-[var(--border-input)] bg-white px-3.5 py-2.5 font-sans text-[16px] text-[var(--ink)] placeholder:text-[var(--placeholder)] outline-none focus:border-[var(--navy)] focus:shadow-[0_0_0_2px_var(--offwhite),0_0_0_6px_var(--navy)] transition-all";

const Field = ({ id, label, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-[14px] font-semibold font-sans text-[var(--ink)] mb-1.5">
      {label} <span className="text-[var(--error)]">*</span>
    </label>
    <input required id={id} type={type} placeholder={placeholder} className={FIELD_CLASS} />
  </div>
);

const LeadForm = ({ compact = false, onSubmitted }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitted) onSubmitted();
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--success)]/15 mx-auto">
          <Send className="h-5 w-5 text-[var(--success)]" />
        </div>
        <h3 className="type-subhead text-[17px] text-[var(--navy)] mt-4">
          Thanks — we'll be in touch shortly.
        </h3>
        <p className="type-body-sm text-[var(--muted)] mt-1">
          A senior biller will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      <Field id="lead-name" label="Full name" type="text" placeholder="Jane Smith" />
      <Field id="lead-email" label="Work email" type="email" placeholder="jane@practice.com" />
      <Field id="lead-phone" label="Phone number" type="tel" placeholder="(800) 555-1234" />
      <button
        type="submit"
        className="w-full min-h-[44px] rounded-lg bg-[var(--navy)] hover:bg-[var(--navy-2)] active:bg-[var(--navy-active)] transition-colors px-5 py-3 text-[15px] font-semibold font-sans text-white"
      >
        Get My Free Billing Audit
      </button>
      <p className="type-caption text-[var(--muted)] text-center">
        No cost, no commitment. We respond within one business day.
      </p>
    </form>
  );
};

export default LeadForm;
