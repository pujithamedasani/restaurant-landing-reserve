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
          "Dakshina Ruchulu — Vijayawada's 4.4★ restaurant loved by 1,550+ guests. Signature biryanis, Andhra classics & warm family dining. Reserve via WhatsApp.",
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
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Dakshina Ruchulu | Best Restaurant in Vijayawada" },
      {
        name: "twitter:description",
        content:
          "Vijayawada's favourite dining destination — 4.4★ from 1,550+ guests. Reserve on WhatsApp.",
      },
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
