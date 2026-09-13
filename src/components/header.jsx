
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "אודות המכוורת", href: "#about" },
  { label: "יתרונות הדבש", href: "#benefits" },
  { label: "תעודת כשרות", href: "#kosher" },
  { label: "הדבשים שלנו", href: "#products" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--border))]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-baseline gap-3 group">
            <span className="font-display text-2xl tracking-tight text-primary leading-none">פצ׳ורניק</span>
            <span className="hidden sm:inline-block text-[11px] font-medium tracking-[0.25em] text-muted-foreground uppercase border-r border-border pr-3">
              1890
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:right-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className="text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              לרכישת דבש
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label="תפריט"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/85 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="text-center text-sm font-semibold text-primary-foreground bg-primary px-5 py-3 rounded-full"
            >
              לרכישת דבש
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
