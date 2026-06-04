import tandoori from "@/assets/gallery-tandoori.jpg";
import dessert from "@/assets/gallery-dessert.jpg";
import naan from "@/assets/gallery-naan.jpg";
import biryani from "@/assets/dish-chicken-biryani.jpg";
import mutton from "@/assets/dish-mutton-biryani.jpg";
import paneer from "@/assets/dish-paneer-majestic.jpg";
import interior from "@/assets/interior-ambience.jpg";
import apollo from "@/assets/dish-apollo-fish.jpg";

const items = [
  { img: tandoori, span: "row-span-2", alt: "Tandoori chicken" },
  { img: biryani, span: "", alt: "Chicken biryani" },
  { img: naan, span: "row-span-2", alt: "Indian breads" },
  { img: paneer, span: "", alt: "Paneer majestic" },
  { img: interior, span: "", alt: "Restaurant interior" },
  { img: mutton, span: "", alt: "Mutton biryani" },
  { img: dessert, span: "", alt: "Dessert" },
  { img: apollo, span: "row-span-2", alt: "Apollo fish" },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-terracotta-deep text-xs tracking-[0.3em] uppercase mb-4">
              Gallery
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal max-w-xl text-balance">
              A taste of our <span className="italic text-terracotta-deep">world</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
