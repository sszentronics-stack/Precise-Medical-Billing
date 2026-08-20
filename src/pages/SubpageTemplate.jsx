import React from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import FinalCta from "../components/FinalCta.jsx";

const SubpageTemplate = ({ kind, title, tagline, heroStat, benefits, faqs }) => (
  <>
    <section className="relative bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            {kind}
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="type-body-lg text-white/60 mt-5 max-w-lg">
            {tagline}
          </p>
          <a
            href="#cta"
            className="inline-block mt-8 rounded-lg bg-white hover:bg-white/90 transition-colors px-6 py-3 text-[15px] font-semibold font-sans text-[var(--navy)] min-h-[44px]"
          >
            Get My Free Billing Audit
          </a>
        </Reveal>

        {heroStat && (
          <Reveal delay={120} className="rounded-xl bg-white/5 border border-white/10 p-7 text-center">
            <div className="text-4xl font-bold font-data text-[var(--gold)]">
              {heroStat.value}
            </div>
            <div className="type-caption text-white/55 mt-2">
              {heroStat.label}
            </div>
          </Reveal>
        )}
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="max-w-xl mb-12">
          <span className="type-overline text-[var(--navy)]">
            What's included
          </span>
          <h2 className="type-headline text-[var(--navy)] mt-3">
            Built specifically for this.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <Reveal
              as="div"
              key={b.title}
              delay={i * 70}
              className="rounded-lg bg-[var(--offwhite)] border border-[var(--border)] p-6"
            >
              <CheckCircle2 className="h-5 w-5 text-[var(--success)]" strokeWidth={2} />
              <h3 className="type-subhead text-[15.5px] text-[var(--navy)] mt-3">
                {b.title}
              </h3>
              <p className="type-body-sm text-[var(--muted)] mt-1.5">
                {b.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FaqAccordion faqs={faqs} tag="FAQ" title="Questions about this, answered." />

    <div id="cta">
      <FinalCta />
    </div>
  </>
);

export default SubpageTemplate;
