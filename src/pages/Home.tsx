import { useState } from "react";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import artworkAcrylic from "@/assets/artwork-acrylic.jpg";
import artworkSketch from "@/assets/artwork-sketch.jpg";
import ImageSlider from "@/components/ImageSlider";
import Lightbox from "@/components/Lightbox";

const sliderImages = [
  { src: heroArtwork, alt: "Landscape painting by Shailesh Meshram" },
  { src: artworkWatercolor, alt: "Watercolour painting by Shailesh Meshram" },
  { src: artworkPleinair, alt: "Plein air painting by Shailesh Meshram" },
  { src: artworkAcrylic, alt: "Acrylic painting by Shailesh Meshram" },
  { src: artworkSketch, alt: "Sketch by Shailesh Meshram" },
];

const works = [
  { title: "Golden Hour, Western Ghats", medium: "Oil on Canvas", year: "2024", image: heroArtwork },
  { title: "Morning Mist, Konkan", medium: "Watercolour on Paper", year: "2024", image: artworkWatercolor },
  { title: "Coastal Sunset, Ratnagiri", medium: "Acrylic on Canvas", year: "2024", image: artworkAcrylic },
  { title: "Afternoon Study, Pune", medium: "Pencil & Wash", year: "2024", image: artworkSketch },
];

const Home = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = works.map((w) => ({ src: w.image, alt: w.title }));

  return (
    <div>
      {/* Hero Slider */}
      <ImageSlider images={sliderImages} interval={5000} />

      {/* Intro */}
      <section className="section-spacing">
        <div className="page-container text-center">
          <p className="label-text mb-4">Artist</p>
          <h1 className="heading-display mb-6">Shailesh Meshram</h1>
          <p className="font-serif text-xl md:text-2xl font-light text-muted-foreground mb-8">
            Artist
          </p>
          <p className="body-text max-w-2xl mx-auto mb-10">
            Landscapes are never still. Light shifts, air moves, and moments dissolve quietly into memory.
            Through plein air and studio practice, Shailesh Meshram captures these fleeting transitions —
            translating atmosphere into paint.
          </p>
          <Link to="/work" className="btn-outline">
            View Work
          </Link>
        </div>
      </section>

      {/* Works Preview */}
      <section className="section-spacing">
        <div className="page-container">
          <p className="label-text mb-3">Works</p>
          <h2 className="heading-section mb-12">Recent Paintings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <div key={i} className="artwork-card block overflow-hidden cursor-pointer" onClick={() => setLightboxIndex(i)}>
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
                <h3 className="heading-sub text-lg mb-1">{work.title}</h3>
                <p className="body-text text-sm">{work.medium} · {work.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Home;
