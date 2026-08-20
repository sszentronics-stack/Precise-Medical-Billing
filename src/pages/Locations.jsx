import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import FinalCta from "../components/FinalCta.jsx";
import USMap from "../components/USMap.jsx";
import { LOCATIONS } from "../data/content.js";

const Locations = () => (
  <>
    <section className="bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            Locations
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight">
            340+ providers. 32 states.
          </h1>
          <p className="type-body-lg text-white/60 mt-5 max-w-lg mx-auto">
            Local payer expertise wherever your practice is located.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="max-w-xl mb-10 text-center mx-auto">
          <span className="type-overline text-[var(--navy)]">Where we operate</span>
          <h2 className="type-headline text-[var(--navy)] mt-3">
            Select a highlighted state.
          </h2>
          <p className="type-body-sm text-[var(--muted)] mt-3">
            Click or tab to a highlighted state to see practices served there.
          </p>
        </Reveal>

        <Reveal className="rounded-lg bg-[var(--offwhite)] border border-[var(--border)] p-6 sm:p-10">
          <USMap />
          <div className="mt-6 flex items-center justify-center gap-6">
            <span className="flex items-center gap-2 type-caption text-[var(--muted)]">
              <span className="h-3 w-3 rounded-sm bg-[var(--navy)]" aria-hidden="true" />
              Served
            </span>
            <span className="flex items-center gap-2 type-caption text-[var(--muted)]">
              <span className="h-3 w-3 rounded-sm bg-[var(--border-input)]" aria-hidden="true" />
              Not yet served
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group flex items-center justify-between gap-2 rounded-lg border border-[var(--border)] bg-white px-4 py-3 hover:border-[var(--navy)]/30 hover:shadow-soft transition-all duration-200"
            >
              <div>
                <div className="type-body-sm font-semibold text-[var(--navy)]">{loc.title}</div>
                <div className="type-caption text-[var(--muted)]">{loc.stat}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-[var(--navy)] shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <FinalCta />
  </>
);

export default Locations;
