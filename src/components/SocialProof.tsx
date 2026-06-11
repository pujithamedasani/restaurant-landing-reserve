import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion, useInView } from "motion/react";
import { restaurant } from "@/lib/restaurant";

const reviews = [
  {
    text: "Good quality hygiene & tasty food. We enjoyed the ambience.",
    author: "Sandeep K.",
  },
  {
    text: "Good experience with the staff and service. The biryani is exceptional.",
    author: "Priya R.",
  },
  {
    text: "Delicious biryani and excellent dining experience. A must-visit in Vijayawada.",
    author: "Arjun M.",
  },
];

function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-ivory">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-terracotta-deep text-xs tracking-[0.3em] uppercase mb-4">
            Trusted by Vijayawada
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal text-balance">
            Why guests keep <span className="italic text-terracotta-deep">coming back</span>
          </h2>
        </div>

        {/* Rating summary */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)]"
          >
            <div className="font-display text-6xl text-charcoal">
              <Counter value={restaurant.rating} decimals={1} />
            </div>
            <div className="flex justify-center gap-1 mt-3 text-gold">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i <= 4 ? "fill-gold" : "fill-gold/40"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">Average Google Rating</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-charcoal rounded-2xl p-8 text-center text-cream shadow-[var(--shadow-elegant)]"
          >
            <div className="font-display text-6xl">
              <Counter value={restaurant.reviewsCount} suffix="+" />
            </div>
            <p className="text-sm text-cream/70 mt-3 tracking-wider uppercase">
              Google Reviews
            </p>
            <p className="text-xs text-cream/80 mt-2">From real, verified diners</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)]"
          >
            <div className="font-display text-6xl text-charcoal">
              <Counter value={95} suffix="%" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">Recommend us to friends</p>
            <p className="text-xs text-muted-foreground mt-2">Family-friendly · Group dining</p>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-[var(--shadow-card)] hover-lift relative"
            >
              <Quote className="w-8 h-8 text-terracotta/40 mb-4" />
              <blockquote className="text-charcoal/85 text-base leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-charcoal">{r.author}</p>
                  <p className="text-xs text-muted-foreground">Google Review</p>
                </div>
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
