import { Star, Utensils, Leaf, Users, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-biryani.jpg";
import { restaurant, waLink } from "@/lib/restaurant";

const badges = [
  { icon: Star, label: `${restaurant.rating} Rating` },
  { icon: Utensils, label: `${restaurant.reviewsCount.toLocaleString()}+ Reviews` },
  { icon: Leaf, label: "Vegetarian Options" },
  { icon: Users, label: "Family Friendly" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Signature biryani at Dakshina Ruchulu"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-charcoal/20" />

      <div className="relative z-10 container-px mx-auto max-w-7xl flex flex-col justify-end min-h-[100svh] pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-cream"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-cream/20 mb-6 text-xs md:text-sm tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            Vijayawada · Since Day One
          </div>

          <h1 className="font-display text-balance text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-medium">
            Authentic Flavors.
            <br />
            <span className="italic font-light text-terracotta">Memorable</span> Experiences.
          </h1>

          <p className="mt-6 text-base md:text-xl text-cream/85 max-w-2xl text-balance">
            Discover Vijayawada's favourite dining destination — loved by{" "}
            <span className="text-cream font-medium">1,550+ guests</span> for slow-cooked
            biryanis, coastal classics & warm hospitality.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-cream/10 backdrop-blur-md border border-cream/15 text-xs md:text-sm"
              >
                <b.icon className="w-4 h-4 text-terracotta" />
                <span className="text-cream/95">{b.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-terracotta-deep text-cream font-medium shadow-[var(--shadow-elegant)] hover:bg-terracotta transition-all duration-300"
            >
              Reserve Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream/10 backdrop-blur-md text-cream border border-cream/30 hover:bg-cream hover:text-charcoal transition-all duration-300 font-medium"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.3em] uppercase animate-float hidden md:block">
        Scroll
      </div>
    </section>
  );
}
