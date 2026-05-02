"use client";

import { Menu, MapPin, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navItems } from "@/components/site-data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 24) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-3 transition-transform duration-300 ease-out sm:pt-4 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[92px] bg-black/90 sm:h-[98px] lg:h-[104px]" />
      <div className="container-shell">
        <div className="relative z-10 mb-3 hidden px-6 py-3 text-white lg:flex lg:items-center lg:justify-end lg:gap-8">
          <div className="krona flex items-center gap-2 text-xs uppercase">
            <MapPin size={14} className="text-[var(--color-orange)]" />
            <span>{company.shortAddress}</span>
          </div>
          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="krona flex items-center gap-2 text-xs uppercase hover:text-[var(--color-orange)]"
          >
            <Phone size={14} className="text-[var(--color-orange)]" />
            <span>{company.phone}</span>
          </a>
        </div>
        <div className="relative z-20 rounded-[20px] border border-black/8 bg-white px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.18)] lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="logo-text text-[1.55rem] font-black text-black lg:text-[1.8rem]">
              {company.name}
            </a>
            <nav className="hidden items-center gap-12 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="krona text-[11px] uppercase text-black hover:-translate-y-0.5 hover:text-[var(--color-orange)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:block">
              <Button>Enquire Now</Button>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {menuOpen ? (
            <div className="mt-4 border-t border-black/10 pt-4 lg:hidden">
              <div className="mb-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="krona text-[11px] uppercase text-black hover:text-[var(--color-orange)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mb-4 space-y-3 border-t border-black/10 pt-4">
                <div className="krona flex items-start gap-2 text-[10px] uppercase text-black">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[var(--color-orange)]" />
                  <span>{company.shortAddress}</span>
                </div>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="krona flex items-center gap-2 text-[10px] uppercase text-black"
                >
                  <Phone size={14} className="text-[var(--color-orange)]" />
                  <span>{company.phone}</span>
                </a>
              </div>
              <Button className="w-full justify-center">Enquire Now</Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
