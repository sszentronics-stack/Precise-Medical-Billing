import React from "react";
import Reveal from "../components/Reveal.jsx";
import FinalCta from "../components/FinalCta.jsx";
import { ShieldCheck, Handshake, Target, Users2 } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Precision over volume",
    desc: "We'd rather bill 40 practices well than 400 poorly. Every account gets a named team, not a rotating queue.",
  },
  {
    icon: Handshake,
    title: "Aligned incentives",
    desc: "We're paid a share of what we collect. If your revenue doesn't grow, neither does ours.",
  },
  {
    icon: Target,
    title: "No black boxes",
    desc: "You get the same aging reports and dashboards our own billers use — nothing summarized or withheld.",
  },
  {
    icon: Users2,
    title: "People who pick up the phone",
    desc: "A dedicated biller and coder, reachable directly — not a ticket queue that resets every time you call.",
  },
];

const TIMELINE = [
  { year: "2014", text: "Founded by a group of hospital billing supervisors frustrated with how outsourced billing usually worked." },
  { year: "2017", text: "Grew past 50 client practices and built our first in-house denial-analytics tooling." },
  { year: "2020", text: "Added dedicated behavioral health and telehealth billing teams as virtual care expanded." },
  { year: "2023", text: "Crossed $40M in annual collections managed on behalf of client practices." },
  { year: "Today", text: "A senior, US-based team serving 340+ independent practices in over 32 states." },
];

const About = () => (
  <>
    <section className="bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            About Us
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Billing, run the way a practice would run it.
          </h1>
          <p className="type-body-lg text-white/60 mt-5 max-w-lg mx-auto">
            We started this company because too many billing vendors treat
            claims like a volume business. We treat them like what they are:
            money your practice already earned.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <span className="type-overline text-[var(--navy)]">
            Our story
          </span>
          <h2 className="type-headline text-[var(--navy)] mt-3">
            Founded by billers, not investors.
          </h2>
          <p className="type-body text-[var(--muted)] mt-5">
            Precise Medical Billing was started by a small team of hospital
            billing supervisors who kept seeing the same problem from the
            outside: independent practices were losing real revenue to slow
            claims, uncorrected denials, and billing partners nobody could
            reach on the phone.
          </p>
          <p className="type-body text-[var(--muted)] mt-4">
            So we built the version of that service we'd want for our own
            practice — smaller client rosters, named teams, and reporting
            that doesn't hide behind a summary page.
          </p>
        </Reveal>

        <Reveal delay={120} className="rounded-lg bg-[var(--offwhite)] border border-[var(--border)] p-8">
          <h3 className="type-subhead text-[16px] text-[var(--navy)] mb-6">
            Company timeline
          </h3>
          <ol className="space-y-6">
            {TIMELINE.map((item) => (
              <li key={item.year} className="flex gap-4">
                <span className="type-body-sm font-data font-bold text-[var(--navy)] w-14 shrink-0">
                  {item.year}
                </span>
                <span className="type-body-sm text-[var(--muted)]">
                  {item.text}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>

    <section className="bg-[var(--offwhite)] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-xl mb-14 text-center mx-auto">
          <span className="type-overline text-[var(--navy)]">
            What we hold ourselves to
          </span>
          <h2 className="type-headline text-[var(--navy)] mt-3">
            Four principles, no exceptions.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal
                as="div"
                key={value.title}
                delay={i * 80}
                className="rounded-lg bg-white border border-[var(--border)] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                  <Icon className="h-5 w-5 text-[var(--navy)]" strokeWidth={1.75} />
                </div>
                <h3 className="type-subhead text-[15.5px] text-[var(--navy)] mt-5">
                  {value.title}
                </h3>
                <p className="type-body-sm text-[var(--muted)] mt-2">
                  {value.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    <FinalCta />
  </>
);

export default About;
