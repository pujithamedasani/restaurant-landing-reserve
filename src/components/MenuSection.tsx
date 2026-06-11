import { useMemo, useState } from "react";
import { Search, Star, ChefHat, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chefRecommendations, menu, type DietType, type MenuItem } from "@/lib/menu-data";
import { waLink } from "@/lib/restaurant";

const filters: { id: "all" | DietType; label: string; dot: string }[] = [
  { id: "all", label: "All", dot: "bg-charcoal" },
  { id: "veg", label: "Veg", dot: "bg-sage-deep" },
  { id: "non-veg", label: "Non-Veg", dot: "bg-terracotta-deep" },
  { id: "seafood", label: "Seafood", dot: "bg-sky-600" },
];

function DietDot({ diet }: { diet: DietType }) {
  const map: Record<DietType, string> = {
    veg: "border-sage-deep",
    "non-veg": "border-terracotta-deep",
    seafood: "border-sky-600",
    egg: "border-gold",
  };
  const inner: Record<DietType, string> = {
    veg: "bg-sage-deep",
    "non-veg": "bg-terracotta-deep",
    seafood: "bg-sky-600",
    egg: "bg-gold",
  };
  return (
    <span
      aria-label={diet}
      className={`inline-flex w-3.5 h-3.5 border ${map[diet]} rounded-sm items-center justify-center shrink-0`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${inner[diet]}`} />
    </span>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-border/60 last:border-0">
      <div className="pt-1.5">
        <DietDot diet={item.diet} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="font-medium text-charcoal text-base">{item.name}</h4>
          {item.chef && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-terracotta/15 text-terracotta-deep text-[10px] uppercase tracking-wider">
              <ChefHat className="w-3 h-3" /> Chef
            </span>
          )}
          {item.popular && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sage/30 text-sage-deep text-[10px] uppercase tracking-wider">
              <Star className="w-3 h-3" /> Popular
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
      <div className="font-display text-lg text-charcoal whitespace-nowrap">
        ₹{item.price}
      </div>
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState<string>(menu[0].id);
  const [diet, setDiet] = useState<"all" | DietType>("all");
  const [query, setQuery] = useState("");

  const visibleCats = useMemo(() => {
    return menu
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => {
          const matchDiet = diet === "all" || it.diet === diet;
          const matchQ =
            !query.trim() ||
            it.name.toLowerCase().includes(query.toLowerCase());
          return matchDiet && matchQ;
        }),
      }))
      .filter((c) => c.items.length > 0);
  }, [diet, query]);

  const activeCat = visibleCats.find((c) => c.id === active) ?? visibleCats[0];

  const chefVisible = chefRecommendations.filter((it) => {
    const matchDiet = diet === "all" || it.diet === diet;
    const matchQ = !query.trim() || it.name.toLowerCase().includes(query.toLowerCase());
    return matchDiet && matchQ;
  });

  return (
    <section id="menu" className="py-20 md:py-32 bg-ivory">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-terracotta-deep text-xs tracking-[0.3em] uppercase mb-4">
            The Menu
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal text-balance">
            Crafted with <span className="italic text-terracotta-deep">heart</span>, served with pride
          </h2>
          <p className="mt-5 text-muted-foreground">
            Search, filter and browse our full kitchen — from signature dum biryanis to
            coastal Andhra specials.
          </p>
        </div>

        {/* Chef's Recommendations */}
        {chefVisible.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-5 h-5 text-terracotta-deep" />
              <h3 className="font-display text-2xl md:text-3xl text-charcoal">
                Chef's Recommendations
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-1 bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] border border-terracotta/15">
              {chefVisible.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Search & filters */}
        <div className="sticky top-16 md:top-20 z-30 bg-ivory/90 backdrop-blur-xl -mx-5 px-5 md:-mx-8 md:px-8 py-4 rounded-b-2xl">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search menu dishes"
                placeholder="Search dishes — biryani, paneer, prawns..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-terracotta-deep/40"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setDiet(f.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm border transition-all ${
                    diet === f.id
                      ? "bg-charcoal text-cream border-charcoal"
                      : "bg-card text-charcoal border-border hover:border-charcoal"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${f.dot}`} />
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop category tabs */}
          <div className="hidden md:flex mt-4 gap-1 overflow-x-auto no-scrollbar">
            {visibleCats.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCat?.id === c.id
                    ? "bg-terracotta-deep text-cream"
                    : "text-charcoal/70 hover:text-charcoal hover:bg-cream"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop view: active category */}
        <div className="hidden md:block mt-10">
          <AnimatePresence mode="wait">
            {activeCat && (
              <motion.div
                key={activeCat.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-6">
                  <h3 className="font-display text-3xl text-charcoal">{activeCat.name}</h3>
                  {activeCat.description && (
                    <p className="text-muted-foreground mt-2 max-w-2xl">{activeCat.description}</p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-1 bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)]">
                  {activeCat.items.map((item) => (
                    <ItemRow key={item.name} item={item} />
                  ))}
                </div>
                {activeCat.id === "biryani" && (
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    "Delicious biryani and excellent dining experience." — verified Google review
                  </p>
                )}
                <ReserveStrip />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile view: accordion */}
        <div className="md:hidden mt-8 space-y-3">
          {visibleCats.map((c) => (
            <details
              key={c.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-card)]"
              open={c.id === "biryani"}
            >
              <summary className="cursor-pointer list-none flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-xl text-charcoal">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {c.items.length} items
                  </p>
                </div>
                <span className="text-terracotta-deep text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                {c.items.map((it) => (
                  <ItemRow key={it.name} item={it} />
                ))}
                <a
                  href={waLink(`Hi! I'd like to reserve a table — looking at ${c.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-whatsapp text-cream text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" /> Reserve on WhatsApp
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReserveStrip() {
  return (
    <div className="mt-8 rounded-2xl bg-charcoal text-cream p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-cream/60">Ready to taste?</p>
        <p className="font-display text-2xl md:text-3xl mt-1">
          Reserve your table at Dakshina Ruchulu
        </p>
      </div>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp hover:bg-whatsapp-deep text-cream font-medium transition-colors"
      >
        <MessageCircle className="w-4 h-4" /> Reserve on WhatsApp
      </a>
    </div>
  );
}
