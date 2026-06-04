import { motion } from "motion/react";
import interior from "@/assets/interior-ambience.jpg";
import family from "@/assets/family-dining.jpg";
import group from "@/assets/group-dining.jpg";
import privateDining from "@/assets/private-dining.jpg";

const tiles = [
  { img: interior, title: "Ambience", desc: "Elegant interiors, soft pendant lighting, comfortable seating." },
  { img: family, title: "Family Dining", desc: "Spacious tables built for multi-generational gatherings." },
  { img: group, title: "Group Dining", desc: "Perfect for friends, celebrations & big appetites." },
  { img: privateDining, title: "Private Dining", desc: "Exclusive private room for intimate occasions." },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-terracotta-deep text-xs tracking-[0.3em] uppercase mb-4">
            The Experience
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal text-balance">
            More than a meal — <span className="italic text-terracotta-deep">a moment</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover-lift"
            >
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                width={1200}
                height={900}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <h3 className="font-display text-2xl">{t.title}</h3>
                <p className="text-sm text-cream/85 mt-1.5 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
