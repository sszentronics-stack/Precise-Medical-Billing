import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import FinalCta from "../components/FinalCta.jsx";
import { SERVICES } from "../data/content.js";

const Services = () => (
  <>
    <section className="bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            Services
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Every part of your revenue cycle.
          </h1>
          <p className="type-body-lg text-white/60 mt-5 max-w-lg mx-auto">
            From charge capture to payment posting, one team owns the whole
            chain — not just the parts that are easy to bill.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal
              as={Link}
              to={`/services/${service.slug}`}
              key={service.slug}
              delay={i * 60}
              className="group block rounded-lg bg-white border border-[var(--border)] shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                <Icon className="h-5 w-5 text-[var(--navy)]" strokeWidth={1.75} />
              </div>
              <h3 className="type-subhead text-[var(--navy)] mt-5">
                {service.title}
              </h3>
              <p className="type-body-sm text-[var(--muted)] mt-2">
                {service.shortDesc}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[var(--navy)] group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>

    <FinalCta />
  </>
);

export default Services;
