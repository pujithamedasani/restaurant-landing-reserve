export const restaurant = {
  name: "Dakshina Ruchulu",
  tagline: "Authentic Flavors. Memorable Experiences.",
  rating: 4.4,
  reviewsCount: 1550,
  phone: "+916301639409",
  phoneDisplay: "+91 63016 39409",
  whatsappNumber: "916301639409",
  address: {
    line1: "Chandra Rajeshwar, Kanakamedala Seshagiri Rao Rd",
    line2: "Badavapet, Labbipet",
    city: "Vijayawada, Andhra Pradesh 520010",
  },
  hours: "Open Daily · Closes 1:30 AM",
  visitDuration: "45 min – 1.5 hrs",
  mapsEmbed:
    "https://www.google.com/maps?q=Dakshina+Ruchulu+Vijayawada&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Dakshina+Ruchulu+Vijayawada+Labbipet",
};

export const waLink = (message = "Hi! I'd like to reserve a table at Dakshina Ruchulu.") =>
  `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(message)}`;
