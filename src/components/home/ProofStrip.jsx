import React from "react";
import Reveal from "../Reveal.jsx";
import { CLIENT_LOGOS } from "../../data/content.js";

const ProofStrip = () => {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="bg-pattern py-14 border-y border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="text-center mb-8">
          <p className="text-[13.5px] font-semibold text-[var(--muted)] uppercase tracking-wide">
            Trusted by 340+ providers across 32 states
          </p>
        </Reveal>
        <div className="overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-12 w-max anim-marquee">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-[16px] font-bold text-[var(--navy)]/25 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
