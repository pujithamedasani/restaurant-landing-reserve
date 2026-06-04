import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { PopularDishes } from "@/components/PopularDishes";
import { MenuSection } from "@/components/MenuSection";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { ReserveCTA } from "@/components/ReserveCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { restaurant } from "@/lib/restaurant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dakshina Ruchulu | Best Restaurant in Vijayawada" },
      {
        name: "description",
        content:
          "Experience authentic flavors at Dakshina Ruchulu, Vijayawada's highly-rated restaurant with 1,550+ Google reviews. Signature biryanis, coastal Andhra specials, family dining. Reserve your table on WhatsApp today.",
      },
      {
        name: "keywords",
        content:
          "Dakshina Ruchulu, Vijayawada Restaurant, Best Biryani Vijayawada, Family Restaurant Vijayawada, Restaurant Near Labbipet, Andhra Biryani",
      },
      { property: "og:title", content: "Dakshina Ruchulu | Best Restaurant in Vijayawada" },
      {
        property: "og:description",
        content:
          "Vijayawada's favourite dining destination — 4.4★ from 1,550+ guests. Reserve on WhatsApp.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: restaurant.name,
          servesCuisine: ["South Indian", "Andhra", "Biryani", "Indian"],
          priceRange: "₹₹",
          telephone: restaurant.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${restaurant.address.line1}, ${restaurant.address.line2}`,
            addressLocality: "Vijayawada",
            addressRegion: "Andhra Pradesh",
            postalCode: "520010",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: restaurant.rating,
            reviewCount: restaurant.reviewsCount,
          },
          openingHours: "Mo-Su 11:00-01:30",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-cream text-charcoal min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PopularDishes />
        <MenuSection />
        <Experience />
        <Gallery />
        <Location />
        <ReserveCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
