export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  year: string;
  images: string[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "al-bahrain-tv",
    title: "Al Bahrain TV",
    category: "Media",
    client: "Al Bahrain TV",
    description: "A comprehensive brand identity and proposal presentation for Al Bahrain TV, modernizing their digital and physical presence to appeal to a contemporary audience.",
    year: "2026",
    images: ["/images/al_bahrain_tv.png"],
    thumbnail: "/images/al_bahrain_tv.png",
  },
  {
    id: "chez-kateline",
    title: "Chez Kateline",
    category: "F&B",
    client: "Chez Kateline",
    description: "Premium restaurant branding and visual identity. Creating a cohesive aesthetic that translates the culinary excellence into a visual feast.",
    year: "2025",
    images: ["/images/chez_kateline.png"],
    thumbnail: "/images/chez_kateline.png",
  },
  {
    id: "jettz-burger",
    title: "Jettz Burger",
    category: "F&B",
    client: "Jettz Burger",
    description: "Dynamic and bold branding for a fast-casual burger joint. The identity was designed to be instantly recognizable and highly engaging.",
    year: "2025",
    images: ["/images/fb_branding.png"],
    thumbnail: "/images/fb_branding.png",
  },
  {
    id: "mtg",
    title: "MTG Automotive",
    category: "Automotive",
    client: "MTG",
    description: "High-octane visual campaign and branding for MTG showrooms. We focused on sleek lines, dark aesthetics, and premium presentation.",
    year: "2026",
    images: ["/images/auto_showroom.png"],
    thumbnail: "/images/auto_showroom.png",
  },
  {
    id: "metl-valley",
    title: "Metl Valley",
    category: "Industrial / B2B",
    client: "Metl Valley",
    description: "A solid and reliable brand identity for an industrial powerhouse. The design language communicates trust, strength, and innovation.",
    year: "2024",
    images: ["/images/metl_valley.png"],
    thumbnail: "/images/metl_valley.png",
  },
  {
    id: "drip-coffee",
    title: "Drip Coffee",
    category: "F&B",
    client: "Drip Coffee",
    description: "Minimalist and artisanal branding for a specialty coffee shop, focusing on the craft of coffee making.",
    year: "2025",
    images: ["/images/drip_coffee.png"],
    thumbnail: "/images/drip_coffee.png",
  },
  {
    id: "el-ghawy",
    title: "El Ghawy",
    category: "Automotive",
    client: "El Ghawy",
    description: "High-end visual branding for an elite automotive enthusiast brand. The identity captures the sleek, adrenaline-fueled passion of luxury car culture with cinematic lighting and dark, premium aesthetics.",
    year: "2026",
    images: ["/images/el_ghawy_cars.png"],
    thumbnail: "/images/el_ghawy_cars.png",
  },
  {
    id: "kataleya",
    title: "Kataleya",
    category: "F&B",
    client: "Kataleya",
    description: "Elegant and sophisticated branding for a high-end dining experience.",
    year: "2024",
    images: ["/images/kataleya.png"],
    thumbnail: "/images/kataleya.png",
  },
  {
    id: "octa",
    title: "Octa Ads",
    category: "Advertising",
    client: "Octa",
    description: "A bold, geometric, and highly scalable advertising campaign structure.",
    year: "2025",
    images: ["/images/madbird_hero.png"],
    thumbnail: "/images/madbird_hero.png",
  }
];
