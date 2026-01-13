export interface SiteTheme {
  primaryColor: string
  accentColor: string
  surfaceColor: string
}

export interface Restaurant {
  name: string
  tagline: string
  shortDescription: string
}

export interface Contact {
  phone: string
  email: string
  address: string
  googleMapsUrl: string
}

export interface Hours {
  label: string
  value: string
}

export interface CTA {
  label: string
  href: string
}

export interface Social {
  label: string
  href: string
}

export interface Testimonial {
  name: string
  quote: string
}

export interface FAQ {
  q: string
  a: string
}

export interface Feature {
  title: string
  desc: string
}

export interface Images {
  hero: string
  gallery: string[]
}

export interface SiteConfig {
  theme: SiteTheme
  restaurant: Restaurant
  contact: Contact
  hours: Hours[]
  ctas: {
    primary: CTA
    secondary: CTA
  }
  socials: Social[]
  ordering?: CTA
  reservations?: CTA
  images: Images
  testimonials: Testimonial[]
  faqs: FAQ[]
  features: Feature[]
}

export const siteConfig: SiteConfig = {
  theme: {
    primaryColor: "bg-amber-700",
    accentColor: "bg-amber-600",
    surfaceColor: "bg-amber-50",
  },
  restaurant: {
    name: "Nonna's Kitchen",
    tagline: "Authentic Family Recipes Since 1985",
    shortDescription:
      "Experience the warmth of home-cooked Italian cuisine made with love, fresh ingredients, and recipes passed down through generations.",
  },
  contact: {
    phone: "(555) 123-4567",
    email: "hello@nonnaskitchen.com",
    address: "123 Main Street, Downtown, CA 90210",
    googleMapsUrl: "https://maps.google.com/?q=123+Main+Street+Downtown+CA+90210",
  },
  hours: [
    { label: "Monday – Thursday", value: "11:00 AM – 9:00 PM" },
    { label: "Friday – Saturday", value: "11:00 AM – 10:00 PM" },
    { label: "Sunday", value: "12:00 PM – 8:00 PM" },
  ],
  ctas: {
    primary: { label: "View Menu", href: "#menu" },
    secondary: { label: "Get Directions", href: "#location" },
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/nonnaskitchen" },
    { label: "Facebook", href: "https://facebook.com/nonnaskitchen" },
    { label: "Yelp", href: "https://yelp.com/biz/nonnaskitchen" },
  ],
  images: {
    hero: "/images/originals/storefront-view.jpg",
    gallery: [
      "/images/originals/outdoor-view.jpg",
      "/images/originals/pasta-penne.jpg",
      "/images/originals/pizza-oven.jpg",
      "/images/originals/pizza-pie.jpg",
      "/images/originals/spaghetti-mushroom.jpg",
      "/images/originals/spaghetti.jpg",
    ],
  },
  testimonials: [
    {
      name: "Maria Rodriguez",
      quote:
        "Best Italian food outside of Italy! Nonna's lasagna tastes exactly like my grandmother used to make. This place feels like home.",
    },
    {
      name: "James Chen",
      quote:
        "I've been coming here for 10 years and the quality never disappoints. Fresh ingredients, generous portions, and the staff treats you like family.",
    },
    {
      name: "Sarah Thompson",
      quote:
        "The carbonara is to die for! Authentic recipes and a cozy atmosphere. Perfect for date nights or family dinners.",
    },
  ],
  faqs: [
    {
      q: "Do you take reservations?",
      a: "Yes! We accept reservations for parties of 4 or more. You can call us directly to book a table. Walk-ins are always welcome for smaller groups.",
    },
    {
      q: "Do you offer vegetarian or gluten-free options?",
      a: "We have several vegetarian dishes and can accommodate gluten-free requests. Please inform your server of any dietary restrictions.",
    },
    {
      q: "Is there parking available?",
      a: "We have plenty of parking in front of the restaurant, so you don't need to worry about finding parking",
    },
    {
      q: "Do you offer catering services?",
      a: "Yes, we cater events of all sizes! Contact us at least 48 hours in advance to discuss menu options and pricing.",
    },
  ],
  features: [
    {
      title: "Family-Owned Since 1985",
      desc: "Three generations of tradition and passion",
    },
    {
      title: "Fresh Daily Ingredients",
      desc: "Local produce and imported Italian goods",
    },
    {
      title: "Vegetarian Friendly",
      desc: "Delicious plant-based options available",
    },
    {
      title: "Dine-In & Takeout",
      desc: "Enjoy our food your way",
    },
  ],
}
