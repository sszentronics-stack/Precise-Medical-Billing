import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import FinalCta from "../components/FinalCta.jsx";
import { SPECIALTIES } from "../data/content.js";

const Specialties = () => (
  <>
    <section className="bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            Specialties
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Coders who already know your codes.
          </h1>
          <p className="type-body-lg text-white/60 mt-5 max-w-lg mx-auto">
            Generic billing teams learn your specialty on your dime. Ours are
            matched to it from day one.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SPECIALTIES.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal
              as={Link}
              to={`/specialties/${item.slug}`}
              key={item.slug}
              delay={i * 60}
              className="group block rounded-lg bg-[var(--offwhite)] border border-[var(--border)] hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-soft">
                <Icon className="h-5 w-5 text-[var(--navy)]" strokeWidth={1.75} />
              </div>
              <h3 className="type-subhead text-[var(--navy)] mt-5">
                {item.title}
              </h3>
              <p className="type-body-sm text-[var(--muted)] mt-2">
                {item.painPoint}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[var(--navy)] group-hover:gap-2.5 transition-all">
                See how we help <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>

    <FinalCta />
  </>
);

export default Specialties;
