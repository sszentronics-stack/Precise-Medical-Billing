import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, SIMPLE_NAV_LINKS } from "../data/content.js";
import MegaMenu from "./MegaMenu.jsx";
import LeadModal from "./LeadModal.jsx";
import logoIcon from "../assets/logo-icon.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-soft" : "border-b border-[var(--border)]"
        }`}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <Link to="/" className="group flex items-center gap-2.5">
              <img
                src={logoIcon}
                alt="Precise Medical Billing"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-headline text-[16px] font-bold text-[var(--navy)] leading-tight">
                Precise <span className="font-medium text-[var(--muted)]">Medical Billing</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 h-full">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setOpenMega(item.label)}
                >
                  <Link
                    to={item.to}
                    className={`group/nav relative px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                      openMega === item.label
                        ? "bg-[var(--offwhite)] text-[var(--navy)]"
                        : "text-[var(--ink)] hover:text-[var(--navy)]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-[var(--gold)] origin-left transition-transform duration-300 ${
                        openMega === item.label ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                      }`}
                    />
                  </Link>
                </div>
              ))}
              {SIMPLE_NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="group/nav relative px-4 py-2 rounded-lg text-[14px] font-medium text-[var(--ink)] hover:text-[var(--navy)] transition-colors"
                >
                  {link.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-[var(--gold)] origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+18005551234"
                className="group flex items-center gap-2 text-[13.5px] font-medium text-[var(--ink)] hover:text-[var(--navy)] transition-colors"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                (800) 555-1234
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-shine rounded-lg bg-[var(--navy)] hover:bg-[var(--navy-2)] active:bg-[var(--navy-active)] transition-all duration-200 px-5 py-2.5 text-[13.5px] font-semibold font-sans text-white min-h-[36px]"
              >
                Get a Free Audit
              </button>
            </div>

            <button
              className="lg:hidden text-[var(--navy)] p-2 -mr-2 transition-transform duration-200 active:scale-90"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={`inline-block transition-transform duration-200 ${menuOpen ? "rotate-90" : ""}`}>
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </span>
            </button>
          </div>
        </div>

        <div
          className="h-[2px] bg-[var(--navy-3)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollPct}%` }}
          aria-hidden="true"
        />

        {openMega && (
          <MegaMenu
            item={NAV_ITEMS.find((i) => i.label === openMega)}
            onNavigate={() => setOpenMega(null)}
          />
        )}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[32rem]" : "max-h-0"
          } bg-white border-t border-[var(--border)]`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {[...NAV_ITEMS, ...SIMPLE_NAV_LINKS].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium text-[var(--ink)]"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="rounded-lg bg-[var(--navy)] active:bg-[var(--navy-active)] px-5 py-2.5 text-[13.5px] font-semibold font-sans text-white text-center mt-1 min-h-[44px] flex items-center justify-center"
            >
              Get a Free Audit
            </button>
          </div>
        </div>
      </header>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;
