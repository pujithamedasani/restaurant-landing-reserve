import { MapPin, Phone, Clock, Car, MessageCircle, Navigation } from "lucide-react";
import { restaurant, waLink } from "@/lib/restaurant";

export function Location() {
  return (
    <section id="visit" className="py-20 md:py-32 bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-terracotta-deep text-xs tracking-[0.3em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal text-balance">
            Come dine with us in <span className="italic text-terracotta-deep">Vijayawada</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] lg:aspect-auto min-h-[400px]">
            <iframe
              src={restaurant.mapsEmbed}
              title="Dakshina Ruchulu Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>

          <div className="lg:col-span-2 bg-card rounded-2xl p-7 md:p-9 shadow-[var(--shadow-card)] flex flex-col">
            <h3 className="font-display text-3xl text-charcoal">{restaurant.name}</h3>

            <div className="mt-6 space-y-5 text-sm">
              <Row icon={MapPin} title="Address">
                {restaurant.address.line1}
                <br />
                {restaurant.address.line2}
                <br />
                {restaurant.address.city}
              </Row>
              <Row icon={Phone} title="Phone">
                <a href={`tel:${restaurant.phone}`} className="hover:text-terracotta-deep">
                  {restaurant.phoneDisplay}
                </a>
              </Row>
              <Row icon={Clock} title="Hours">
                {restaurant.hours}
                <br />
                <span className="text-muted-foreground">Average visit: {restaurant.visitDuration}</span>
              </Row>
              <Row icon={Car} title="Parking">
                On-street parking available nearby.
              </Row>
            </div>

            <div className="mt-auto pt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={restaurant.directionsUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-charcoal text-cream text-sm font-medium hover:bg-terracotta-deep transition-colors"
              >
                <Navigation className="w-4 h-4" /> Directions
              </a>
              <a
                href={`tel:${restaurant.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-card border border-charcoal text-charcoal text-sm font-medium hover:bg-ivory transition-colors"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-whatsapp text-cream text-sm font-medium hover:bg-whatsapp-deep transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Reserve on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-terracotta-deep" />
      </div>
      <div className="leading-relaxed text-charcoal">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{title}</p>
        {children}
      </div>
    </div>
  );
}
