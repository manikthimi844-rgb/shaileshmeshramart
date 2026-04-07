import { useState } from "react";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";
import artworkAcrylic from "@/assets/artwork-acrylic.jpg";
import artworkSketch from "@/assets/artwork-sketch.jpg";
import wcstreetkathmandu from "@/assets/wc-street-kathmandu.jpg";
import  wcLadakh from "@/assets/wc-Ladakh.jpg";
import  wcitalysquare from "@/assets/wc-italy-square.jpg";
import  wcpainting from "@/assets/wc-painting.jpg";
import wcKashi from "@/assets/wc-kashi.jpg";
import wcPuneMorning from "@/assets/wc-pune-morning.jpg";
import wcRedWindows from "@/assets/wc-red-windows.jpg";
import wcVintagePune from "@/assets/wc-vintage-pune.jpg";
import wcPainting2 from "@/assets/wc-painting2.jpg";
import wcMarketLight from "@/assets/wc-market-light.jpg";
import wcStreetScene from "@/assets/wc-street-scene.jpg";
import wcBoat from "@/assets/wc-boat.jpg";
import wcVintagePuneLarge from "@/assets/wc-vintage-pune-large.jpg";
import wcGodaGhat from "@/assets/wc-goda-ghat.jpg";
import acrylic1 from "@/assets/1_(2).jpg";
import acrylic2 from "@/assets/2_(2).jpg";
import acrylic3 from "@/assets/3_(2).jpg";
import acrylic4 from "@/assets/4_(2).jpg";
import acrylic5 from "@/assets/5_(2).jpg";
import acrylic6 from "@/assets/6_(2).jpg";
import acrylic7 from "@/assets/7_(2).jpg";
import acrylic8 from "@/assets/8_(2).jpg";
import acrylicPainting from "@/assets/1.jpg";
import Lightbox from "@/components/Lightbox";

const categories = ["Watercolours", "Acrylics", "Sketchbooks & Studies"] as const;

type Category = typeof categories[number];

interface Artwork {
  title: string;
  size: string;
  medium: string;
  year: string;
  availability: string;
  image: string;
  category: Category;
}

const artworks: Artwork[] = [
  { title: "Kashi Ghats", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcKashi, category: "Watercolours" },
  { title: "Pune Morning", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcPuneMorning, category: "Watercolours" },
  { title: "Red Windows", size: "10 × 14 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcRedWindows, category: "Watercolours" },
  { title: "Vintage Pune", size: "12 × 12 in", medium: "Watercolour on Paper", year: "2022", availability: "Available", image: wcVintagePune, category: "Watercolours" },
  { title: "Afternoon Light", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2020", availability: "Sold", image: wcPainting2, category: "Watercolours" },
  { title: "Market Light", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcMarketLight, category: "Watercolours" },
  { title: "Street Scene, Pune", size: "10 × 12 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcStreetScene, category: "Watercolours" },
  { title: "Ladakh", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: wcLadakh, category: "Watercolours" },
  { title: "Street painting", size: "10 × 10 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: wcpainting, category: "Watercolours" }, 
  { title: "Italy square", size: "12 × 12 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: wcitalysquare, category: "Watercolours" },
  { title: "Solitary Boat", size: "10 × 10 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: wcBoat, category: "Watercolours" },
  { title: "Vintage Pune Corner", size: "14 × 16 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcVintagePuneLarge, category: "Watercolours" },
  { title: "street kathmandu", size: "10 × 14 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image:  wcstreetkathmandu, category: "Watercolours" },
  { title: "Goda Ghat, Nashik", size: "10 × 10 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: wcGodaGhat, category: "Watercolours" },
  { title: "Venetian Canal", size: "24 × 30 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: acrylic1, category: "Acrylics" },
  { title: "Urban Reflections", size: "20 × 24 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: acrylic2, category: "Acrylics" },
  { title: "Historic Passage", size: "18 × 24 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: acrylic3, category: "Acrylics" },
  { title: "Architectural Study", size: "20 × 26 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: acrylic4, category: "Acrylics" },
  { title: "Harbor Serenity", size: "22 × 28 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: acrylic5, category: "Acrylics" },
  { title: "Urban Marketplace", size: "18 × 22 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: acrylic7, category: "Acrylics" },
  { title: "Industrial Textures", size: "24 × 32 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: acrylic8, category: "Acrylics" },
  { title: "Street Vignette", size: "12 × 16 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: acrylicPainting, category: "Acrylics" },
  { title: "Afternoon Study, Pune", size: "9 × 12 in", medium: "Pencil & Wash", year: "2024", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
];

const Work = () => {
  const [active, setActive] = useState<Category>("Watercolours");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = artworks.filter((a) => a.category === active);
  const lightboxImages = filtered.map((w) => ({ src: w.image, alt: w.title }));

  return (
    <div className="section-spacing">
      <div className="page-container">
        <p className="label-text mb-3">Portfolio</p>
        <h1 className="heading-display mb-12">Work</h1>

        <div className="flex flex-wrap gap-4 mb-12 border-b border-border pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightboxIndex(null); }}
              className={`nav-link pb-2 transition-all ${active === cat ? "text-foreground border-b-2 border-foreground" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((work, i) => (
            <div key={i} className="artwork-card cursor-pointer" onClick={() => setLightboxIndex(i)}>
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </div>
              <h3 className="font-serif text-lg mb-1">{work.title}</h3>
              <p className="body-text text-sm">{work.medium} · {work.size}</p>
              <p className="body-text text-sm">{work.year} · <span className={work.availability === "Available" ? "text-accent" : ""}>{work.availability}</span></p>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
};

export default Work;
