import React from "react";
import Reveal from "../Reveal.jsx";
import CountUp from "../CountUp.jsx";
import { STAT_BAND } from "../../data/content.js";

const StatBand = () => (
  <section className="bg-[var(--navy)] py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10">
        {STAT_BAND.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Reveal as="div" key={stat.label} delay={i * 70} className="group text-center cursor-default">
              <Icon
                className="h-5 w-5 text-white/30 mx-auto mb-3 transition-all duration-300 group-hover:text-[var(--gold)] group-hover:scale-110 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
              <div className="text-3xl sm:text-[2.1rem] font-bold font-data text-[var(--gold)]">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="type-caption text-white/50 mt-1.5 max-w-[9rem] mx-auto">
                {stat.label}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default StatBand;
