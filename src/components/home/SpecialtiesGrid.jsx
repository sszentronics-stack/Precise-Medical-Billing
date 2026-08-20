import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal.jsx";
import { SPECIALTIES } from "../../data/content.js";

const SpecialtiesGrid = () => (
  <section className="bg-pattern py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="max-w-xl mb-14 text-center mx-auto">
        <span className="type-overline text-[var(--navy)]">
          Specialties we serve
        </span>
        <h2 className="type-headline text-[var(--navy)] mt-3">
          Coders who already know your codes.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SPECIALTIES.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal
              as={Link}
              to={`/specialties/${item.slug}`}
              key={item.slug}
              delay={i * 70}
              className="group block rounded-lg bg-[var(--offwhite)] border border-[var(--border)] hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-soft transition-shadow duration-300 group-hover:shadow-card">
                <Icon
                  className="h-5 w-5 text-[var(--navy)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="type-subhead text-[var(--navy)] mt-5">
                {item.title}
              </h3>
              <p className="type-body-sm text-[var(--muted)] mt-2">
                {item.painPoint}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold font-sans text-[var(--navy)] group-hover:gap-2.5 transition-all">
                See how we help <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          to="/specialties"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--navy)] hover:gap-3 transition-all"
        >
          View all specialties <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default SpecialtiesGrid;
