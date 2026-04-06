

import { useState } from "react";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";
import artworkAcrylic from "@/assets/artwork-acrylic.jpg";
import acrylic1 from "@/assets/acrylic-1.jpg";
import acrylic2 from "@/assets/acrylic-2.jpg";
import artworkSketch from "@/assets/artwork-sketch.jpg";
import heroArtwork from "@/assets/hero-artwork.jpg";
import watercolor5 from "@/assets/watercolor-5.jpg";
import watercolor6 from "@/assets/watercolor-6.jpg";
import watercolor7 from "@/assets/watercolor-7.jpg";
import artworkPleinair from "@/assets/artwork-pleinair.jpg";
import watercolorGodaGhat from "@/assets/watercolor-goda-ghat.jpg";
import watercolorStreet from "@/assets/watercolor-street.jpg";
import watercolorDoor from "@/assets/watercolor-door.jpg";
import watercolorMountains from "@/assets/watercolor-mountains.jpg";
import watercolorScene from "@/assets/watercolor-scene.jpg";
import watercolorBoat from "@/assets/watercolor-boat.jpg";
import watercolorVintagePune from "@/assets/watercolor-vintage-pune.jpg";
import watercolorVintagePune2 from "@/assets/watercolor-vintage-pune2.jpg";
import watercolorKashi from "@/assets/kashi.jpg";
import puneMorning from "@/assets/pune_morning.jpg";
import watercolorScene1 from "@/assets/Screenshot_2026-04-06_101459.jpg";
import watercolorScene2 from "@/assets/Screenshot_2026-04-06_1015460.jpg";
import watercolorScene3 from "@/assets/Screenshot_2026-04-06_101912.jpg";
import venice from "@/assets/Screenshot-2026-04-06.jpg";
import puneAlley from "@/assets/Screenshot-2026-04-06-103609.jpg";
import oldBuilding from "@/assets/Screenshot-2026-04-06-103639.jpg";
import romeStreet1 from "@/assets/Screenshot-2026-04-06-103704.jpg";
import romeStreet2 from "@/assets/Screenshot-2026-04-06-103727.jpg";
import vintagePuneShop from "@/assets/Screenshot-2026-04-06-103755.jpg";
import kashiGhat from "@/assets/Screenshot-2026-04-06-103826.jpg";
import kathmanduStreet from "@/assets/Screenshot-2026-04-06-103857.jpg";
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
  { title: "Goda Ghat, Nashik", size: "12 × 12 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorGodaGhat, category: "Watercolours" },
  { title: "Street Scene", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorStreet, category: "Watercolours" },
  { title: "Old Door", size: "14 × 18 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: watercolorDoor, category: "Watercolours" },
  { title: "Mountain Village", size: "11 × 15 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorMountains, category: "Watercolours" },
  { title: "Watercolour Study", size: "12 × 16 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolor5, category: "Watercolours" },
  { title: "Lake Reflections, Lonavala", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolor6, category: "Watercolours" },
  { title: "Kashi Ghat", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorKashi, category: "Watercolours" },
  { title: "Pune Morning", size: "12 × 16 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: puneMorning, category: "Watercolours" },
  { title: "Market Street", size: "14 × 18 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorScene1, category: "Watercolours" },
  { title: "Urban Harmony", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorScene2, category: "Watercolours" },
  { title: "Rust & History", size: "12 × 18 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: watercolorScene3, category: "Watercolours" },
  { title: "Hilltop Village", size: "10 × 14 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: artworkWatercolor, category: "Watercolours" },
  { title: "Boat at Sea", size: "12 × 12 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: watercolorBoat, category: "Watercolours" },
  { title: "Vintage Pune", size: "14 × 14 in", medium: "Watercolour on Paper", year: "2022", availability: "Available", image: watercolorVintagePune, category: "Watercolours" },
  { title: "Vintage Pune Street", size: "14 × 16 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: watercolorVintagePune2, category: "Watercolours" },

  // Acrylics (12)
{ title: "Venice Canal", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: venice, category: "Acrylics" },
{ title: "Pune Alley", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: puneAlley, category: "Acrylics" },
{ title: "Old Building, Pune", size: "24 × 24 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: oldBuilding, category: "Acrylics" },
{ title: "Rome Street I", size: "10 × 12 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: romeStreet1, category: "Acrylics" },
{ title: "Rome Street II", size: "10 × 12 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: romeStreet2, category: "Acrylics" },
{ title: "Vintage Pune Shop", size: "24 × 24 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: vintagePuneShop, category: "Acrylics" },
{ title: "Kashi Ghat", size: "14 × 18 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: kashiGhat, category: "Acrylics" },
{ title: "Kathmandu Street", size: "24 × 24 in", medium: "Acrylic on Canvas", year: "2023", availability: "Available", image: kathmanduStreet, category: "Acrylics" },
{ title: "Coastal Sunset", size: "30 × 40 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: acrylic1, category: "Acrylics" },
{ title: "Golden Light", size: "24 × 36 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: acrylic2, category: "Acrylics" },
{ title: "Monsoon Road", size: "20 × 30 in", medium: "Acrylic on Canvas", year: "2023", availability: "Sold", image: artworkAcrylic, category: "Acrylics" },
{ title: "Village at Dawn", size: "24 × 30 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: artworkAcrylic, category: "Acrylics"},
  
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
