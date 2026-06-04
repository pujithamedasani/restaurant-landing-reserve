import { motion } from "motion/react";
import { Flame } from "lucide-react";
import biryani from "@/assets/dish-chicken-biryani.jpg";
import mutton from "@/assets/dish-mutton-biryani.jpg";
import apollo from "@/assets/dish-apollo-fish.jpg";
import paneer from "@/assets/dish-paneer-majestic.jpg";
import majestic from "@/assets/dish-chicken-majestic.jpg";
import thali from "@/assets/dish-veg-thali.jpg";
import { waLink } from "@/lib/restaurant";

const dishes = [
  { img: biryani, name: "Irani Chicken Biryani", desc: "Slow dum-cooked basmati layered with succulent chicken.", tag: "Most Ordered" },
  { img: mutton, name: "Mutton Ghee Roast Biryani", desc: "Coastal Andhra spice, ghee-roasted mutton perfection.", tag: "Chef's Pick" },
  { img: paneer, name: "Paneer Majestic", desc: "Crispy paneer in spicy-sweet majestic sauce.", tag: "Bestseller" },
  { img: apollo, name: "Apollo Fish", desc: "Crispy chilli-fried fish — Hyderabadi favourite.", tag: "Popular" },
  { img: majestic, name: "Chicken Majestic", desc: "Golden boneless chicken, curry leaves & green chilli.", tag: "Signature" },
  { img: thali, name: "South Indian Specials", desc: "Regional treasures from across coastal Andhra.", tag: "House Special" },
];

export function PopularDishes() {
  return (
    <section id="dishes" className="py-20 md:py-32 bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-terracotta-deep text-xs tracking-[0.3em] uppercase mb-4">
              Most Loved
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal max-w-xl text-balance">
              The dishes our <span className="italic text-terracotta-deep">guests order</span> again
            </h2>
          </div>
          <a
            href="#menu"
            className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-terracotta-deep transition-colors border-b border-charcoal pb-1"
          >
            See full menu →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] hover-lift"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/95 backdrop-blur text-charcoal text-xs font-medium shadow-[var(--shadow-soft)]">
                <Flame className="w-3 h-3 text-terracotta-deep" />
                {d.tag}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-charcoal">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.desc}</p>
                <a
                  href={waLink(`Hi! I'd like to reserve a table and try ${d.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-terracotta-deep hover:text-charcoal transition-colors"
                >
                  Reserve to taste →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
