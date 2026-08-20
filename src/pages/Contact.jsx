import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import LeadForm from "../components/LeadForm.jsx";

const Contact = () => (
  <>
    <section className="bg-[var(--navy)] pt-32 pb-20 lg:pt-36 lg:pb-24 text-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 type-overline text-white/70 mb-5">
            Contact
          </span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Let's look at your A/R together.
          </h1>
          <p className="type-body-lg text-white/60 mt-5 max-w-lg mx-auto">
            Tell us a bit about your practice and we'll follow up within one
            business day.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="bg-pattern py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <Reveal>
          <h2 className="type-headline text-[var(--navy)]" style={{ fontSize: "24px" }}>
            Reach us directly
          </h2>
          <ul className="mt-7 space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5 shrink-0">
                <Phone className="h-4.5 w-4.5 text-[var(--navy)]" />
              </span>
              <div>
                <div className="type-caption text-[var(--muted)]">Phone</div>
                <a href="tel:+18005551234" className="text-[15px] font-semibold text-[var(--navy)]">
                  (800) 555-1234
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5 shrink-0">
                <Mail className="h-4.5 w-4.5 text-[var(--navy)]" />
              </span>
              <div>
                <div className="type-caption text-[var(--muted)]">Email</div>
                <a href="mailto:hello@precisemedicalbilling.us" className="text-[15px] font-semibold text-[var(--navy)]">
                  hello@precisemedicalbilling.us
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5 shrink-0">
                <MapPin className="h-4.5 w-4.5 text-[var(--navy)]" />
              </span>
              <div>
                <div className="type-caption text-[var(--muted)]">Office</div>
                <div className="text-[15px] font-semibold text-[var(--navy)]">
                  400 Congress Ave, Austin, TX
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5 shrink-0">
                <Clock className="h-4.5 w-4.5 text-[var(--navy)]" />
              </span>
              <div>
                <div className="type-caption text-[var(--muted)]">Hours</div>
                <div className="text-[15px] font-semibold text-[var(--navy)]">
                  Monday – Friday, 8:00 AM – 6:00 PM CT
                </div>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-lg bg-white border border-[var(--border)] shadow-card p-8 sm:p-9">
          <h3 className="type-subhead text-[18px] text-[var(--navy)]">
            Get your free billing audit
          </h3>
          <p className="type-body-sm text-[var(--muted)] mt-1.5">
            No cost, no commitment. We'll respond within one business day.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Contact;
