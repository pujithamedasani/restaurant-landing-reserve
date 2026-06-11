import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { restaurant, waLink } from "@/lib/restaurant";

export function ReserveCTA() {
  return (
    <section className="py-20 md:py-32 bg-charcoal text-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(900px 400px at 20% 10%, oklch(0.745 0.08 40 / 0.55), transparent 60%), radial-gradient(700px 380px at 90% 90%, oklch(0.62 0.05 140 / 0.4), transparent 60%)",
        }}
      />
      <div className="relative container-px mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-terracotta text-xs tracking-[0.3em] uppercase mb-5"
        >
          Reservations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl text-balance"
        >
          Reserve your table <span className="italic text-terracotta">today</span>.
        </motion.h2>
        <p className="mt-6 text-cream/75 text-lg max-w-2xl mx-auto text-balance">
          Perfect for family dinners, celebrations, and casual catch-ups. Our team will
          confirm your booking on WhatsApp within minutes.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-whatsapp hover:bg-whatsapp-deep text-cream font-medium transition-all shadow-[var(--shadow-elegant)]"
          >
            <MessageCircle className="w-5 h-5" /> Reserve on WhatsApp
          </a>
          <a
            href={`tel:${restaurant.phone}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cream/10 border border-cream/30 hover:bg-cream hover:text-charcoal text-cream font-medium transition-all"
          >
            <Phone className="w-5 h-5" /> Call Restaurant
          </a>
        </div>
        <p className="mt-8 text-xs text-cream/85 tracking-wider uppercase">
          ⭐ {restaurant.rating} · {restaurant.reviewsCount.toLocaleString()}+ Google Reviews
        </p>
      </div>
    </section>
  );
}
