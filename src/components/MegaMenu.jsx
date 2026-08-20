import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CORE_STATS } from "../data/content.js";

const MegaMenu = ({ item, onNavigate }) => (
  <div
    key={item.label}
    className="anim-menuDropIn absolute left-0 right-0 top-full bg-white border-t border-[var(--border)] shadow-overlay"
  >
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 grid grid-cols-3 gap-10">
      <div>
        <h4 className="type-overline text-[var(--muted)] mb-4">
          {item.label}
        </h4>
        <ul className="space-y-1">
          {item.sublinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <li
                key={link.label}
                className="anim-fadeIn"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                <Link
                  to={link.to}
                  onClick={onNavigate}
                  className="group/link flex items-center gap-2.5 py-1.5 type-body-sm text-[var(--ink)] hover:text-[var(--navy)] font-medium transition-colors"
                >
                  {Icon && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5 group-hover/link:bg-[var(--gold)]/40 transition-colors">
                      <Icon className="h-3.5 w-3.5 text-[var(--navy)]" strokeWidth={1.75} />
                    </span>
                  )}
                  <span className="group-hover/link:translate-x-0.5 transition-transform">
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-lg bg-[var(--offwhite)] p-6">
        <p className="type-body-sm text-[var(--ink)]">
          {item.blurb}
        </p>
        <Link
          to={item.to}
          onClick={onNavigate}
          className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold font-sans text-[var(--navy)] hover:gap-2.5 transition-all"
        >
          {item.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="space-y-4">
        {CORE_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="anim-fadeIn flex items-baseline gap-3"
            style={{ animationDelay: `${i * 60 + 80}ms` }}
          >
            <span className="text-xl font-bold font-data text-[var(--navy)] shrink-0">
              {stat.value}
            </span>
            <span className="type-caption text-[var(--muted)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MegaMenu;
