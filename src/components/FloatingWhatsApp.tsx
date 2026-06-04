import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/restaurant";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      {/* Floating bubble */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Reserve on WhatsApp"
        className={`fixed bottom-24 md:bottom-6 right-5 z-40 w-14 h-14 rounded-full bg-whatsapp text-cream flex items-center justify-center shadow-[var(--shadow-elegant)] transition-all duration-500 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
        } hover:scale-110`}
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
        <MessageCircle className="w-6 h-6 relative" />
      </a>

      {/* Mobile sticky reserve bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-cream/95 backdrop-blur-xl border-t border-border">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-whatsapp text-cream font-medium shadow-[var(--shadow-soft)]"
        >
          <MessageCircle className="w-5 h-5" /> Reserve Table on WhatsApp
        </a>
      </div>
    </>
  );
}
