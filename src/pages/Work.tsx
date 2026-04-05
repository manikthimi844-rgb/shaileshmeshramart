import { useState } from "react";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";
import artworkAcrylic from "@/assets/artwork-acrylic.jpg";
import artworkSketch from "@/assets/artwork-sketch.jpg";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artworkPleinair from "@/assets/artwork-pleinair.jpg";
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

// Placeholder artworks — images and details to be replaced
const artworks: Artwork[] = [
  // Watercolours (12)
  { title: "Lake Reflections, Lonavala", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Misty Peaks", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2023", availability: "Sold", image: artworkWatercolor, category: "Watercolours" },
  { title: "Monsoon Fields", size: "14 × 18 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "River Bend, Kolad", size: "12 × 16 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Deccan Plateau at Dusk", size: "15 × 22 in", medium: "Watercolour on Paper", year: "2024", availability: "Sold", image: artworkWatercolor, category: "Watercolours" },
  { title: "Temple by the Lake", size: "11 × 14 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Coastal Morning", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Paddy Fields, Konkan", size: "12 × 18 in", medium: "Watercolour on Paper", year: "2023", availability: "Sold", image: artworkWatercolor, category: "Watercolours" },
  { title: "Hilltop Village", size: "10 × 14 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Forest Stream", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Evening Clouds, Pune", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Valley Road", size: "12 × 16 in", medium: "Watercolour on Paper", year: "2023", availability: "Sold", image: artworkWatercolor, category: "Watercolours" },

  // Acrylics (12)
  { title: "Coastal Sunset, Ratnagiri", size: "30 × 40 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Golden Light, Sahyadris", size: "24 × 36 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Monsoon Road", size: "20 × 30 in", medium: "Acrylic on Canvas", year: "2023", availability: "Sold", image: artworkAcrylic, category: "Acrylics" },
  { title: "Village at Dawn", size: "24 × 30 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Western Ghats Panorama", size: "36 × 48 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "River at Twilight", size: "24 × 36 in", medium: "Acrylic on Canvas", year: "2024", availability: "Sold", image: artworkAcrylic, category: "Acrylics" },
  { title: "Autumn Hillside", size: "20 × 24 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Fog Over the Valley", size: "30 × 40 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Plateau Study", size: "18 × 24 in", medium: "Acrylic on Board", year: "2023", availability: "Sold", image: artworkAcrylic, category: "Acrylics" },
  { title: "Sunset at Mulshi", size: "24 × 36 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Morning Mist, Mahabaleshwar", size: "20 × 30 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: artworkAcrylic, category: "Acrylics" },
  { title: "Lakeside Reflections", size: "24 × 30 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics" },

  // Sketchbooks & Studies (12)
  { title: "Afternoon Study, Pune", size: "9 × 12 in", medium: "Pencil & Wash", year: "2024", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Tree Study, Mahabaleshwar", size: "8 × 10 in", medium: "Ink & Watercolour", year: "2023", availability: "Available", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Quick Study — Pawna Lake", size: "6 × 8 in", medium: "Pencil on Paper", year: "2024", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Cloud Studies", size: "9 × 12 in", medium: "Charcoal", year: "2023", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Konkan Village Sketch", size: "8 × 10 in", medium: "Ink on Paper", year: "2024", availability: "Available", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Boat Study, Alibaug", size: "6 × 9 in", medium: "Pencil & Wash", year: "2023", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Market Scene, Pune", size: "9 × 12 in", medium: "Ink & Watercolour", year: "2024", availability: "Available", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Mountain Path", size: "8 × 10 in", medium: "Pencil on Paper", year: "2023", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Light Study — Morning", size: "6 × 8 in", medium: "Charcoal & Wash", year: "2024", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Temple Steps", size: "9 × 12 in", medium: "Ink on Paper", year: "2023", availability: "Available", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Coastal Rocks", size: "8 × 10 in", medium: "Pencil & Wash", year: "2024", availability: "Not for Sale", image: artworkSketch, category: "Sketchbooks & Studies" },
  { title: "Banyan Tree Study", size: "10 × 14 in", medium: "Ink & Watercolour", year: "2023", availability: "Available", image: artworkSketch, category: "Sketchbooks & Studies" },
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
        <h1 className="heading-display mb-12">Works</h1>

        {/* Category Tabs */}
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

        {/* Artworks Grid */}
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
