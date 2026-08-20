import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-[var(--border)]">
    <button
      onClick={onToggle}
      className="group w-full flex items-center justify-between gap-4 py-5 text-left"
      aria-expanded={isOpen}
    >
      <span className="type-subhead text-[16px] text-[var(--navy)] transition-colors group-hover:text-[var(--navy-2)]">
        {item.q}
      </span>
      <ChevronDown
        className={`h-5 w-5 shrink-0 transition-all duration-300 ${
          isOpen ? "rotate-180 text-[var(--navy)]" : "text-[var(--muted)] group-hover:text-[var(--navy)]"
        }`}
      />
    </button>
    <div
      className="grid overflow-hidden transition-all duration-300 ease-out"
      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className="type-body-sm text-[var(--muted)] pb-5 max-w-2xl">
          {item.a}
        </p>
      </div>
    </div>
  </div>
);

const FaqAccordion = ({ faqs, title = "Questions, answered directly.", tag = "FAQ" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <span className="type-overline text-[var(--navy)]">
            {tag}
          </span>
          <h2 className="type-headline text-[var(--navy)] mt-3">
            {title}
          </h2>
        </Reveal>

        <Reveal className="rounded-lg bg-[var(--offwhite)] border border-[var(--border)] px-6 sm:px-8">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default FaqAccordion;
