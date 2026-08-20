import React from "react";
import Reveal from "../Reveal.jsx";
import { INTEGRATIONS } from "../../data/content.js";

const IntegrationWall = () => (
  <section className="bg-[var(--offwhite)] py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <Reveal className="text-center mb-12">
        <span className="type-overline text-[var(--navy)]">
          Works with your stack
        </span>
        <h2 className="type-headline text-[var(--navy)] mt-3" style={{ fontSize: "22px" }}>
          Compatible with 40+ EHR &amp; practice management platforms.
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {INTEGRATIONS.map((name, i) => (
          <Reveal
            as="div"
            key={name}
            delay={i * 40}
            className="rounded-lg bg-white border border-[var(--border)] px-5 py-5 flex items-center justify-center text-center hover:border-[var(--navy)]/30 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300"
          >
            <span className="type-body-sm font-semibold text-[var(--muted)]">{name}</span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationWall;
