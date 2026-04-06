import { useState } from "react";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";
import kashi from "@/assets/kashi.jpg";
import puneMorning from "@/assets/pune_morning.jpg";
import watercolorStreet from "@/assets/watercolor-street.jpg";
import watercolorGodaGhat from "@/assets/watercolor-goda-ghat.jpg";
import watercolorVintagePune from "@/assets/watercolor-vintage-pune.jpg";
import artworkAcrylic from "@/assets/artwork-acrylic.jpg";
import artworkSketch from "@/assets/artwork-sketch.jpg";
import ImageSlider from "@/components/ImageSlider";
import Lightbox from "@/components/Lightbox";

const sliderImages = [
  { src: kashi, alt: "Kashi by Shailesh Meshram" },
  { src: puneMorning, alt: "Pune Morning by Shailesh Meshram" },
  { src: watercolorStreet, alt: "Street Scene by Shailesh Meshram" },
  { src: watercolorGodaGhat, alt: "Goda Ghat by Shailesh Meshram" },
  { src: watercolorVintagePune, alt: "Vintage Pune by Shailesh Meshram" },
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
       <div className="absolute inset-0 flex items-center justify-start z-10 pointer-events-none">
          <div className="page-container">
           <div className="max-w-lg pointer-events-auto text-left ml-8 md:ml-16">
              <p className="label-text mb-4 text-white/80 tracking-widest">
                Artist
              </p>
              <h1 className="heading-display mb-6 text-white drop-shadow-lg">
                Shailesh Meshram
              </h1>
              <p className="font-serif text-xl font-light text-white/90 mb-8 drop-shadow-md">
                Capturing light before it disappears
              </p>
              <Link 
                to="/work" 
                className="btn-outline border-white text-white hover:bg-white hover:text-black">
                View Work
              </Link>
            </div>
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
