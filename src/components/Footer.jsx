import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { SERVICES, SPECIALTIES, LOCATIONS } from "../data/content.js";
import logoIcon from "../assets/logo-icon.png";

const Footer = () => (
  <footer className="bg-[var(--navy)] pt-16 pb-8">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={logoIcon} alt="Precise Medical Billing" className="h-9 w-auto" />
            <span className="font-headline text-white text-[15px] font-bold">
              Precise Medical Billing
            </span>
          </div>
          <p className="text-white/45 text-[13px] mt-4 leading-relaxed">
            Revenue cycle management for independent US practices.
          </p>
          <div className="mt-5 space-y-2 text-white/55 text-[13px]">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> (800) 555-1234
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> hello@precisemedicalbilling.us
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> 400 Congress Ave, Austin, TX
            </div>
          </div>
        </div>

        <div>
          <h4 className="type-overline text-white/40 mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-[13.5px] text-white/60">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="type-overline text-white/40 mb-4">
            Specialties
          </h4>
          <ul className="space-y-2.5 text-[13.5px] text-white/60">
            {SPECIALTIES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/specialties/${s.slug}`} className="hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="type-overline text-white/40 mb-4">
            Locations
          </h4>
          <ul className="space-y-2.5 text-[13.5px] text-white/60">
            {LOCATIONS.slice(0, 6).map((l) => (
              <li key={l.slug}>
                <Link to={`/locations/${l.slug}`} className="hover:text-white transition-colors">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="type-overline text-white/40 mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-[13.5px] text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/35 text-[12px]">
          © {new Date().getFullYear()} Precise Medical Billing US. All rights reserved. ·{" "}
          <a href="#" className="hover:text-white/60">Privacy Policy</a> ·{" "}
          <a href="#" className="hover:text-white/60">Terms of Service</a>
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11.5px] text-white/60">
          <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
          HIPAA Compliant
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
