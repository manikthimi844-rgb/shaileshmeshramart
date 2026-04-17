import { useState } from "react";
import artworkSketch from "@/assets/sketch-studies.jpg";
import sk2 from "@/assets/sk-2.jpg";
import sk3 from "@/assets/sk3.jpg";
import sk4 from "@/assets/sk4.jpg";
import sk5 from "@/assets/sk5.jpg";
import sk6 from "@/assets/sk6.jpg";
import wi3 from "@/assets/wi3.jpg";
import img_0017 from "@/assets/img_0017.jpg";
import wcLadakh from "@/assets/wc-Ladakh.jpg";
import wcitalysquare from "@/assets/wc-italy-square.jpg";
import wcpainting from "@/assets/wc-painting.jpg";
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
  { title: "Varanasi", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Not Available", image: wcKashi, category: "Watercolours" },
  { title: "Wada, Nashik", size: "14.5'' × 18''", medium: "Watercolour on Paper", year: "2026", availability: "Available", image: wcPuneMorning, category: "Watercolours" },
  { title: "Nagarkhana, Pune", size: "11'' × 8''", medium: "Watercolour on Paper", year: "2026", availability: "Available", image: wcRedWindows, category: "Watercolours" },
  { title: "Vintage Pune", size: "12 × 12 in", medium: "Watercolour on Paper", year: "2022", availability: "Available", image: wcVintagePune, category: "Watercolours" },
  { title: "Thimi Village", size: "11'' × 8''", medium: "Watercolour on Paper", year: "2026", availability: "Available", image: wcPainting2, category: "Watercolours" },
  { title: "Market Street, Pune", size: "11'' × 8''", medium: "Watercolour on Paper", year: "2026", availability: "Available", image: wcMarketLight, category: "Watercolours" },
  { title: "Trimbakeshwar, Nashik", size: "14.5'' × 18''", medium: "Watercolour on Paper", year: "2026", availability: "Available", image: wcStreetScene, category: "Watercolours" },
  { title: "Wada, Pune", size: "10 × 12 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: img_0017, category: "Watercolours" },
  { title: "Leh", size: "11'' × 8''", medium: "Watercolour on Paper", year: "2026", availability: "Not Available", image: wcLadakh, category: "Watercolours" },
  { title: "Lane, Nashik", size: "9'' × 12''", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcpainting, category: "Watercolours" },
  { title: "Fabriano, Italy", size: "10'' × 12''", medium: "Watercolour on Paper", year: "2023", availability: "Not Available", image: wcitalysquare, category: "Watercolours" },
  { title: "Solitary Boat, Goa", size: "8'' × 8''", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: wcBoat, category: "Watercolours" },
  { title: "Wada, Pune", size: "14.5'' × 18''", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: wcVintagePuneLarge, category: "Watercolours" },
  { title: "Mandai Market, Pune", size: "10 × 14 in", medium: "Watercolour on Paper", year: "2023", availability: "Not Available", image: wi3, category: "Watercolours" },
  { title: "Goda Ghat, Nashik", size: "8'' × 8''", medium: "Watercolour on Paper", year: "2022", availability: "Available", image: wcGodaGhat, category: "Watercolours" },
  { title: "Venice", size: "12'' × 12''", medium: "Acrylic on Canvas", year: "2026", availability: "Available", image: acrylic1, category: "Acrylics" },
  { title: "Venice", size: "12'' × 12''", medium: "Acrylic on Canvas", year: "2026", availability: "Available", image: acrylic2, category: "Acrylics" },
  { title: "Wada, Pune", size: "24'' × 24''", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: acrylic3, category: "Acrylics" },
  { title: "Marketplace", size: "24'' × 24''", medium: "Acrylic on Canvas", year: "2018", availability: "Not Available", image: acrylic7, category: "Acrylics" },
  { title: "Old Shop, Pune", size: "48'' × 48''", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: acrylic8, category: "Acrylics" },
  { title: "Kasba Peth, Pune", size: "24'' × 24''", medium: "Acrylic on Canvas", year: "2023", availability: "Not Available", image: acrylicPainting, category: "Acrylics" },
  { title: "Yogi", size: "", medium: "Graphite & Ink on Paper", year: "2024", availability: "Not for Sale", image: sk2 , category: "Sketchbooks & Studies" },
  { title: "Meditation", size: "", medium: "Pen & Wash", year: "2024", availability: "Not for Sale", image: sk3, category: "Sketchbooks & Studies" },
  { title: "Figure Study", size: "", medium: "Charcoal & Ink", year: "2024", availability: "Not for Sale", image: sk4, category: "Sketchbooks & Studies" },
  { title: "Street Scene", size: "", medium: "Graphite & Color Pencil", year: "2024", availability: "Not for Sale", image: sk5, category: "Sketchbooks & Studies" },
  { title: "Landscape Exploration", size: "", medium: "Watercolor & Pencil", year: "2024", availability: "Not for Sale", image: sk6, category: "Sketchbooks & Studies" },
  { title: "Sketchbooks & Studies", size: "", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
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
              <p className="body-text text-sm">{work.medium}{work.size ? ` · ${work.size}` : ""}</p>
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
