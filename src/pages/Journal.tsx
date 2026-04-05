import { useState } from "react";
import artworkPleinair from "@/assets/artwork-pleinair.jpg";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";
import artworkSketch from "@/assets/artwork-sketch.jpg";
import heroArtwork from "@/assets/hero-artwork.jpg";
import Lightbox from "@/components/Lightbox";

const categories = ["All", "Plein Air Days", "Travel Sketches", "Painting Process", "Thoughts on Light", "Color Studies"] as const;

const posts = [
  { title: "Chasing Light in the Western Ghats", excerpt: "An early morning drive to catch the first golden hour. The mist was thick, and the light was…", date: "March 12, 2025", category: "Plein Air Days", image: artworkPleinair },
  { title: "Watercolour Studies from Goa", excerpt: "Three days of painting by the coast. Quick studies, color notes, and the challenge of painting moving water.", date: "February 28, 2025", category: "Travel Sketches", image: artworkWatercolor },
  { title: "Why I Paint Small First", excerpt: "The small study is where painting begins. Before committing to a large canvas, I spend time…", date: "February 10, 2025", category: "Painting Process", image: artworkSketch },
  { title: "The Quality of Winter Light", excerpt: "Winter light in the Deccan is unlike anything else. Low, warm, and impossibly soft…", date: "January 22, 2025", category: "Thoughts on Light", image: heroArtwork },
  { title: "Limited Palette: Yellow Ochre, Ultramarine, and White", excerpt: "Stripping down to three colors. What you lose in range, you gain in harmony…", date: "January 5, 2025", category: "Color Studies", image: artworkWatercolor },
  { title: "A Morning at Pawna Lake", excerpt: "Arrived before dawn. The water was perfectly still, reflecting the sky in shades I couldn't name…", date: "December 18, 2024", category: "Plein Air Days", image: artworkPleinair },
];

const Journal = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = posts.map((p) => ({ src: p.image, alt: p.title }));

  return (
    <div className="section-spacing">
      <div className="page-container">
        <p className="label-text mb-3">Journal</p>
        <h1 className="heading-display mb-6">Notes from the Field</h1>
        <p className="body-text mb-12 italic text-muted-foreground/70">
          [Journal content and data will be provided later — placeholder entries below]
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <span key={cat} className="label-text px-4 py-2 border border-border cursor-pointer hover:bg-secondary transition-colors">
              {cat}
            </span>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="artwork-card cursor-pointer" onClick={() => setLightboxIndex(i)}>
              <div className="aspect-[3/2] overflow-hidden bg-muted mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" width={1200} height={900} />
              </div>
              <p className="label-text text-xs mb-2">{post.category} · {post.date}</p>
              <h3 className="font-serif text-lg mb-2">{post.title}</h3>
              <p className="body-text text-sm">{post.excerpt}</p>
            </article>
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

export default Journal;
