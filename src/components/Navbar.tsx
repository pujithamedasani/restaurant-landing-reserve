import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { restaurant, waLink } from "@/lib/restaurant";
import newLogo from "@/assets/new-logo.svg";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#dishes", label: "Dishes" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <img
            src={newLogo}
            alt="Dakshina Ruchulu logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-display text-lg md:text-xl text-charcoal leading-tight">
            Dakshina <span className="text-terracotta-deep">Ruchulu</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal/80 hover:text-terracotta-deep transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${restaurant.phone}`}
            className="flex items-center gap-2 text-sm text-charcoal/80 hover:text-terracotta-deep transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">{restaurant.phoneDisplay}</span>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="px-5 py-2.5 rounded-full bg-charcoal text-cream text-sm font-medium hover:bg-terracotta-deep transition-all duration-300 shadow-[var(--shadow-soft)]"
          >
            Reserve Table
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-charcoal"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-border animate-fade-up">
          <div className="container-px py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-charcoal/85 py-2 border-b border-border/60 text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mt-2 px-5 py-3 rounded-full bg-charcoal text-cream text-center font-medium"
            >
              Reserve Table on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
