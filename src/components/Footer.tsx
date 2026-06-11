import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { restaurant } from "@/lib/restaurant";
import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-ivory border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src={logoAsset.url}
              alt="Dakshina Ruchulu logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-display text-2xl text-charcoal">
              Dakshina <span className="text-terracotta-deep">Ruchulu</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
            A premium South Indian dining destination in the heart of Vijayawada — serving
            authentic biryanis, coastal specials and warm hospitality since day one.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-charcoal hover:bg-terracotta-deep hover:text-cream hover:border-terracotta-deep transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-charcoal hover:bg-terracotta-deep hover:text-cream hover:border-terracotta-deep transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-charcoal mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#menu" className="hover:text-terracotta-deep">Menu</a></li>
            <li><a href="#dishes" className="hover:text-terracotta-deep">Popular Dishes</a></li>
            <li><a href="#reviews" className="hover:text-terracotta-deep">Reviews</a></li>
            <li><a href="#experience" className="hover:text-terracotta-deep">Experience</a></li>
            <li><a href="#visit" className="hover:text-terracotta-deep">Location</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-charcoal mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-terracotta-deep shrink-0" />
              <a href={`tel:${restaurant.phone}`} className="hover:text-terracotta-deep">
                {restaurant.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-terracotta-deep shrink-0" />
              <span>{restaurant.address.line2}, {restaurant.address.city}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">{restaurant.hours}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dakshina Ruchulu. All rights reserved.</p>
          <p>Crafted with care in Vijayawada.</p>
        </div>
      </div>
    </footer>
  );
}
