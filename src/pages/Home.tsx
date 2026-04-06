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
  { src: slider1, alt: "Painting by Shailesh Meshram" },
  { src: slider2, alt: "Painting by Shailesh Meshram" },
  { src: heroArtwork, alt: "Painting by Shailesh Meshram" },
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
      {/* Hero Slider with Text Overlay */}
      <div className="relative">
        <ImageSlider images={sliderImages} interval={5000} />
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', zIndex: 10}}>
          <div style={{paddingLeft: '60px', maxWidth: '500px'}}>
            <p style={{color: 'rgba(255,255,255,0.8)', letterSpacing: '3px', fontSize: '12px', marginBottom: '16px', textTransform: 'uppercase'}}>
              Artist
            </p>
            <h1 style={{color: 'white', fontSize: '3rem', fontFamily: 'serif', marginBottom: '16px', textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
              Shailesh Meshram
            </h1>
            <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', fontFamily: 'serif', marginBottom: '32px', textShadow: '1px 1px 4px rgba(0,0,0,0.5)'}}>
              Capturing light before it disappears
            </p>
            <Link 
              to="/work" 
              style={{border: '1px solid white', color: 'white', padding: '12px 24px', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase'}}>
              View Work
            </Link>
          </div>
        </div>
      </div>

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
