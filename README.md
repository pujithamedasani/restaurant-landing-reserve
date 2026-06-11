# Dakshina Ruchulu - Restaurant Landing & Reservation Website

A modern, responsive restaurant landing page and reservation system built for **Dakshina Ruchulu**, a premium South Indian dining destination in Vijayawada.

**Tagline:** Authentic Flavors. Memorable Experiences.

---

## 🌟 Features

### 🎯 Core Functionality
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **WhatsApp Integration** - Direct table reservations through WhatsApp messaging
- **Call-to-Action Buttons** - Easy access to phone and reservation links
- **Floating WhatsApp Widget** - Persistent contact option throughout the site
- **Location & Directions** - Integrated Google Maps embedding and directions link
- **Business Hours Display** - Current status and operating hours information

### 📱 Website Sections

#### 1. **Navigation Bar**
- Sticky header with restaurant branding
- Navigation links to all major sections
- Mobile-responsive hamburger menu
- Quick access to phone contact and reserve buttons
- New professional restaurant logo

#### 2. **Hero Section**
- Eye-catching banner with high-quality imagery
- Restaurant tagline and brand messaging
- Call-to-action buttons for immediate engagement
- Optimized for visual impact on first visit

#### 3. **Menu Section**
- Complete restaurant menu showcase
- Organized by categories
- Attractive dish presentation
- Easy browsing experience

#### 4. **Popular Dishes**
- Curated showcase of signature dishes
- Dish photos, names, and descriptions
- Highlights of restaurant specialties
- Social proof through popular items

#### 5. **Gallery**
- High-quality images of dishes and dining ambiance
- Restaurant interior showcase
- Professional food photography
- Customer dining experience display

#### 6. **Experience Section**
- Dining experience highlights
- Ambiance and service features
- Why customers choose Dakshina Ruchulu
- Unique selling propositions

#### 7. **Social Proof & Reviews**
- Customer ratings and reviews display
- Current rating: **4.4/5 stars**
- **1,550+ customer reviews**
- Testimonials and feedback showcase

#### 8. **Location Section**
- Full address information
- Embedded Google Maps
- Direct directions link
- Estimated visit duration (45 min - 1.5 hrs)

#### 9. **Footer**
- Complete business contact information
- Quick navigation links
- Social media links (Instagram, Facebook)
- Operating hours and copyright information

### 💬 Communication Channels
- **Phone:** +91 63016 39409
- **WhatsApp:** Direct messaging for reservations
- **Address:** Badavapet, Labbipet, Vijayawada, Andhra Pradesh 520010
- **Hours:** Open Daily · Closes 1:30 AM

---

## 🛠 Tech Stack

### Frontend Framework
- **React 19** - Latest React with hooks and server components
- **TypeScript** - Type-safe JavaScript development
- **TanStack React Router** - Modern client-side routing
- **TanStack React Query** - Server state management

### Build & Development
- **Vite** - Lightning-fast build tool and dev server
- **TanStack Start** - Full-stack React framework
- **Nitro** - Server engine for SSR

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Headless UI component library
- **Lucide React** - Modern icon library
- **Motion** - Animation library for smooth interactions

### Additional Libraries
- **React Hook Form** - Efficient form handling
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **Embla Carousel** - Carousel/slider component

---

## 📁 Project Structure

```
restaurant-landing-reserve/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Header navigation
│   │   ├── Hero.tsx                # Hero banner section
│   │   ├── MenuSection.tsx         # Menu display
│   │   ├── PopularDishes.tsx       # Featured dishes
│   │   ├── Gallery.tsx             # Image gallery
│   │   ├── Experience.tsx          # Dining experience
│   │   ├── SocialProof.tsx         # Reviews & ratings
│   │   ├── Location.tsx            # Location & maps
│   │   ├── ReserveCTA.tsx          # Reservation call-to-action
│   │   ├── FloatingWhatsApp.tsx    # WhatsApp widget
│   │   ├── Footer.tsx              # Footer section
│   │   └── ui/                     # Radix UI components
│   ├── assets/
│   │   ├── *.jpg                   # High-quality images
│   │   └── new-logo.svg            # Restaurant logo
│   ├── lib/
│   │   ├── restaurant.ts           # Restaurant config & constants
│   │   └── restaurant-error-reporting.ts  # Error tracking
│   ├── routes/
│   │   ├── __root.tsx              # Root layout
│   │   ├── index.tsx               # Homepage
│   │   └── sitemap[.]xml.ts        # XML sitemap
│   ├── styles.css                  # Global styles
│   └── hooks/
│       └── use-mobile.tsx          # Mobile detection hook
├── public/                         # Static assets
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ or **Bun** runtime
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-landing-reserve
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

   The website will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Build in development mode
npm run build:dev

# Run linter
npm lint

# Format code
npm run format
```

---

## 🎨 Design Features

### Professional Styling
- **Color Palette:**
  - Primary: Charcoal (#2C2C2C)
  - Accent: Terracotta Deep (#C41C3B)
  - Background: Cream/Ivory
  - Supporting: Sage green accents

- **Typography:** Professional serif and sans-serif fonts
- **Spacing:** Consistent, balanced layout with Tailwind utilities
- **Responsive Images:** Optimized images for all screen sizes
- **Animations:** Smooth transitions and interactive elements

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability
- Mobile-friendly touch targets

---

## 📱 Responsive Design

- **Mobile (< 640px):** Single column layout, optimized navigation
- **Tablet (640px - 1024px):** Two-column sections, adjusted spacing
- **Desktop (> 1024px):** Full multi-column layout, side-by-side content
- **Large Screens:** Maximum width constraints for optimal readability

---

## 🔍 SEO Optimization

- **XML Sitemap** - Automatic sitemap generation
- **Meta Tags** - Optimized open graph and Twitter cards
- **Responsive Headings** - Semantic heading hierarchy
- **Fast Performance** - Optimized build and load times

---

## 📊 Restaurant Information

| Detail | Information |
|--------|-------------|
| **Name** | Dakshina Ruchulu |
| **Cuisine** | South Indian |
| **Location** | Badavapet, Labbipet, Vijayawada |
| **Rating** | 4.4/5 ⭐ (1,550+ reviews) |
| **Hours** | Open Daily · Closes 1:30 AM |
| **Phone** | +91 63016 39409 |
| **Visit Duration** | 45 min – 1.5 hrs |

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy to Various Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

**Other Platforms:**
- Most hosting services support static site deployment
- Ensure Node.js 18+ runtime for SSR

---

## 🔧 Configuration

### Update Restaurant Details
Edit `src/lib/restaurant.ts` to update:
- Restaurant name, address, phone
- WhatsApp number
- Google Maps embed and directions links
- Business hours

### Customize Domain
Update `src/routes/sitemap[.]xml.ts`:
```typescript
const BASE_URL = "https://yourdomain.com";
```

### Environment Variables
Create `.env.local` if needed for API keys or sensitive data.

---

## 📝 Content Management

### Update Menu Items
Edit menu data in the `MenuSection.tsx` component or create a separate menu configuration file.

### Update Dish Gallery
Replace images in `src/assets/` directory with your own dish photography.

### Update Restaurant Info
Modify restaurant configuration in `src/lib/restaurant.ts`.

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Issues
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Image Not Loading
- Ensure images are in `src/assets/` directory
- Check image file paths in components
- Verify image format and size

---

## 📄 License

This project is proprietary to Dakshina Ruchulu restaurant.

---

## 👥 Contact & Support

**Dakshina Ruchulu**
- 📞 Phone: +91 63016 39409
- 💬 WhatsApp: Available for reservations
- 📍 Address: Badavapet, Labbipet, Vijayawada, Andhra Pradesh 520010
- 🕐 Hours: Open Daily · Closes 1:30 AM

---

## 🎯 Future Enhancements

Potential features for future versions:
- Online ordering system
- Customer loyalty program
- Event/private dining bookings
- Photo upload from customers
- Multi-language support
- AI-powered recommendations
- Integration with popular restaurant platforms

---

**Last Updated:** June 2026

Built with ❤️ for Dakshina Ruchulu
