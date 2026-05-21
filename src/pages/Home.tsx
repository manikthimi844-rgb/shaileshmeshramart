import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";


import artwork1 from "@/assets/artwork-1.jpg";
import artworkThimi from "@/assets/thimi_village_nepal_(1).jpg";
import acrylic3 from "@/assets/3.(2).jpg";
import acrylicVenice from "@/assets/acrylic-venice.jpg";
import acrylicPco from "@/assets/acrylic-pco.jpg";

import wcMarket from "@/assets/watercolor-market.jpg";
import wcStreet from "@/assets/watercolor-street.jpg";
import wcWindows from "@/assets/watercolor-windows.jpg";
import wcGate from "@/assets/imgww.jpg";
import wi2 from "@/assets/wi2.jpg";

import Lightbox from "@/components/Lightbox";

const slides = [
  { image: artwork1, alt: "Auto rickshaws in rain" },
  { image: artworkThimi, alt: "Thimi Village, Nepal" },
  { image: acrylic3, alt: "Wada, Pune" },
];

const watercolorWorks = [
  {
    title: "Market Street, Pune",
    medium: "Watercolour on Paper",
    size: "11''×8''",
    year: "2026",
    availability: "Available",
    image: wcMarket,
  },
  {
    title: "Trimbakeshwar, Nashik",
    medium: "Watercolour on Paper",
    size: "14.5''×18''",
    year: "2026",
    availability: "Available",
    image: wcStreet,
  },
  {
    title: "Nagarkhana, Pune",
    medium: "Watercolour on Paper",
    size: "11''×8''",
    year: "2026",
    availability: "Available",
    image: wcWindows,
  },
  {
    title: "Winter Light, Pune",
    medium: "Watercolour on Paper",
    size: "11''×8''",
    year: "2026",
    availability: "Available",
    image: wcGate,
  },
  {
    title: "Thimi Village, Nepal",
    medium: "Watercolour on Paper",
    size: "20''×24''",
    year: "2020",
    availability: "Available",
    image: artworkThimi,
  },
  {
    title: "Light on Windows",
    medium: "Watercolour on Paper",
    size: "8''×8''",
    year: "2026",
    availability: "Available",
    image: wi2,
  },
];

const acrylicWorks = [
  {
    title: "Venice",
    medium: "Acrylic on Canvas",
    size: "12''×12''",
    year: "2026",
    availability: "Available",
    image: acrylicVenice,
  },
  {
    title: "Old Shop, Pune",
    medium: "Acrylic on Canvas",
    size: "48''×48''",
    year: "2023",
    availability: "Available",
    image: acrylicPco,
  },
  {
    title: "Kasba Peth, Pune",
    medium: "Acrylic on Canvas",
    size: "24''×24''",
    year: "2023",
    availability: "Not Available",
    image: artwork1,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxSection, setLightboxSection] = useState<
    "acrylic" | "watercolor"
  >("watercolor");

  const currentWorks =
    lightboxSection === "acrylic" ? acrylicWorks : watercolorWorks;

  const lightboxImages = currentWorks.map((work) => ({
    src: work.image,
    alt: work.title,
  }));

  const openLightbox = (
    section: "acrylic" | "watercolor",
    index: number
  ) => {
    setLightboxSection(section);
    setLightboxIndex(index);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              width={1800}
              height={900}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full h-full flex items-center page-container">
          <div className="max-w-2xl text-primary-foreground">
            <p className="label-text mb-4 !text-primary-foreground/70 uppercase tracking-[0.2em]">
              Contemporary Artist
            </p>

            <h1 className="heading-display !text-primary-foreground mb-4">
              Shailesh Meshram
            </h1>

            <p className="font-serif text-xl md:text-2xl font-light text-primary-foreground/90 mb-8">
              Painting Light, Air, and Memory.
            </p>

            <p className="body-text !text-primary-foreground/80 mb-10 max-w-xl">
              Landscapes are never still. Light shifts, air moves, and moments
              dissolve quietly into memory. Through plein air and studio
              practice, Shailesh Meshram captures these fleeting transitions —
              translating atmosphere into paint.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/work"
                className="btn-outline !border-primary-foreground/50 !text-primary-foreground hover:!bg-primary-foreground hover:!text-foreground"
              >
                View Work
              </Link>

              <a
                href="https://wa.me/919673468973"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* FLOATING WHATSAPP */}
        <a
          href="https://wa.me/919673468973"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300">
            <FaWhatsapp className="text-white text-3xl" />
          </div>
        </a>

        {/* SLIDER DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? "bg-primary-foreground w-6"
                  : "bg-primary-foreground/40 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* WATERCOLOR WORKS */}
      <section className="section-spacing">
        <div className="page-container">
          <p className="label-text mb-3">Selected Works</p>

          <h2 className="heading-section mb-12">
            Recent Watercolour Paintings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watercolorWorks.map((work, i) => (
              <div
                key={i}
                className="artwork-card block overflow-hidden cursor-pointer"
                onClick={() => openLightbox("watercolor", i)}
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

                <h3 className="heading-sub text-lg mb-1">
                  {work.title}
                </h3>

                <p className="body-text text-sm">
                  {work.medium} · {work.size} · {work.year}
                </p>

                <p className="body-text text-sm">
                  <span
                    className={
                      work.availability === "Available"
                        ? "text-accent"
                        : ""
                    }
                  >
                    {work.availability}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACRYLIC WORKS */}
      <section className="section-spacing">
        <div className="page-container">
          <h2 className="heading-section mb-12">
            Recent Acrylic Paintings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acrylicWorks.map((work, i) => (
              <div
                key={i}
                className="artwork-card block overflow-hidden cursor-pointer"
                onClick={() => openLightbox("acrylic", i)}
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

                <h3 className="heading-sub text-lg mb-1">
                  {work.title}
                </h3>

                <p className="body-text text-sm">
                  {work.medium} · {work.size} · {work.year}
                </p>

                <p className="body-text text-sm">
                  <span
                    className={
                      work.availability === "Available"
                        ? "text-accent"
                        : ""
                    }
                  >
                    {work.availability}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
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
