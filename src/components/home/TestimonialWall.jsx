import React from "react";
import { Star } from "lucide-react";
import Reveal from "../Reveal.jsx";
import { TESTIMONIALS } from "../../data/content.js";

const TestimonialWall = () => (
  <section className="bg-[var(--offwhite)] py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="max-w-xl mb-14 text-center mx-auto">
        <span className="type-overline text-[var(--navy)]">
          What practices say
        </span>
        <h2 className="type-headline text-[var(--navy)] mt-3">
          210+ reviews. Real practices, real numbers.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            as="div"
            key={t.name}
            delay={(i % 6) * 60}
            className="group rounded-lg bg-white border border-[var(--border)] p-6 hover:shadow-card hover:-translate-y-1 hover:border-[var(--navy-3)] transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex text-[var(--navy)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${j * 30}ms` }}
                  />
                ))}
              </div>
              <span className="type-caption font-semibold uppercase tracking-wide text-[var(--muted)] bg-[var(--offwhite)] rounded-full px-2.5 py-1">
                {t.specialty}
              </span>
            </div>
            <p className="type-body-sm text-[var(--ink)] mt-4">
              "{t.quote}"
            </p>
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <div className="text-[13.5px] font-semibold font-sans text-[var(--navy)]">{t.name}</div>
              <div className="type-caption text-[var(--muted)]">{t.practice}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialWall;
