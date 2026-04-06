import { useState } from "react";
import Lightbox from "@/components/Lightbox";

// Correct imports for images that actually exist in your public folder
import godaghat from "@/assets/Goda Ghat, Nashik.jpg";
import img0997 from "@/assets/IMG_0997.JPG";
import img4683 from "@/assets/IMG_4683.JPG";
import painting2 from "@/assets/Painting2.jpg";
import kashi from "@/assets/kashi.jpg";
import heroArtwork from "@/assets/hero-artwork.jpg";
import vintagePune from "@/assets/Vintage Pune.jpg";
import vintagePune2 from "@/assets/Vintage Pune14x16(1).jpg";

// Note: Many of your uploaded screenshots are also watercolours/acrylics. 
// You can add more later by importing them the same way.

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
  // ==================== WATERCOLOURS ====================
  { 
    title: "Goda Ghat, Nashik", 
    size: "12 × 12 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: godaghat, 
    category: "Watercolours" 
  },
  { 
    title: "Watercolour Study 1", 
    size: "14 × 20 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: img0997, 
    category: "Watercolours" 
  },
  { 
    title: "Watercolour Study 2", 
    size: "14 × 18 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: img4683, 
    category: "Watercolours" 
  },
  { 
    title: "Painting 2", 
    size: "12 × 16 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: painting2, 
    category: "Watercolours" 
  },
  { 
    title: "Kashi", 
    size: "14 × 20 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: kashi, 
    category: "Watercolours" 
  },
  { 
    title: "Vintage Pune", 
    size: "14 × 14 in", 
    medium: "Watercolour on Paper", 
    year: "2022", 
    availability: "Available", 
    image: vintagePune, 
    category: "Watercolours" 
  },
  { 
    title: "Vintage Pune Street", 
    size: "14 × 16 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: vintagePune2, 
    category: "Watercolours" 
  },
  { 
    title: "Hero Artwork", 
    size: "20 × 30 in", 
    medium: "Watercolour on Paper", 
    year: "2024", 
    availability: "Available", 
    image: heroArtwork, 
    category: "Watercolours" 
  },

  // ==================== ACRYLICS ====================
  { 
    title: "Venice Canal", 
    size: "12 × 12 in", 
    medium: "Acrylic on Canvas", 
    year: "2023", 
    availability: "Available", 
    image: heroArtwork, // temporary - replace with real acrylic image later
    category: "Acrylics" 
  },
  { 
    title: "Pune Alley", 
    size: "12 × 12 in", 
    medium: "Acrylic on Canvas", 
    year: "2023", 
    availability: "Available", 
    image: heroArtwork, // temporary
    category: "Acrylics" 
  },

  // ==================== SKETCHBOOKS & STUDIES ====================
  { 
    title: "Afternoon Study, Pune", 
    size: "9 × 12 in", 
    medium: "Pencil & Wash", 
    year: "2024", 
    availability: "Not for Sale", 
    image: heroArtwork, // temporary - replace later
    category: "Sketchbooks & Studies" 
  },
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
            <div 
              key={i} 
              className="artwork-card cursor-pointer" 
              onClick={() => setLightboxIndex(i)}
            >
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
