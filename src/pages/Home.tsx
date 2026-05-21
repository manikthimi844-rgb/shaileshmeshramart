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
    title: "Thimi village, Nepal",
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
      {/* Hero Slider */}
      <section className="relative h-screen flex items-center">
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

            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative w-full h-full flex items-center page-container">
          <div className="max-w-xl text-primary-foreground">
            <p className="label-text mb-4 !text-primary-foreground/70">
              Contemporary Artist
            </p>

            <h1 className="heading-display !text-primary-foreground mb-4">
              Shailesh Meshram
            </h1>

            <p className="font-serif text-xl md:text-2xl font-light text-primary-foreground/90 mb-8">
              Painting Light, Air, and Memory.
            </p>

            <p className="body-text !text-primary-foreground/80 mb-10">
              Landscapes are never still. Light shifts, air moves, and moments
              dissolve quietly into memory. Through plein air and studio
              practice, Shailesh Meshram captures these fleeting transitions —
              translating atmosphere into paint.
            </p>

            <Link
              to="/work"
              className="btn-outline !border-primary-foreground/50 !text-primary-foreground hover:!bg-primary-foreground hover:!text-foreground"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919673468973"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-8 h-8"
            >
              <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.737 5.574 2.137 8.004L0 32l7.828-2.053a15.93 15.93 0 0 0 8.172 2.223c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.09a13.1 13.1 0 0 1-6.68-1.83l-.477-.283-4.646 1.218 1.24-4.53-.31-.465a13.05 13.05 0 1 1 10.873 5.89zm7.188-9.835c-.394-.197-2.33-1.15-2.69-1.282-.36-.13-.623-.197-.885.197-.262.394-1.016 1.282-1.246 1.544-.23.262-.459.295-.852.098-.394-.197-1.662-.612-3.166-1.95-1.17-1.044-1.96-2.333-2.19-2.727-.23-.394-.024-.607.173-.803.177-.176.394-.459.59-.688.197-.23.262-.394.394-.656.131-.262.066-.492-.033-.688-.098-.197-.885-2.134-1.213-2.92-.32-.77-.646-.664-.885-.676l-.754-.013c-.262 0-.688.098-1.05.492-.36.394-1.377 1.344-1.377 3.278 0 1.934 1.41 3.802 1.607 4.065.197.262 2.777 4.24 6.73 5.944.94.406 1.673.648 2.245.83.943.3 1.8.258 2.478.156.756-.113 2.33-.95 2.658-1.87.328-.918.328-1.705.23-1.87-.098-.164-.36-.262-.754-.459z" />
            </svg>
          </div>
        </a>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === i
                  ? "bg-primary-foreground w-6"
                  : "bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Recent Watercolour Paintings */}
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

      {/* Recent Acrylic Paintings */}
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

      {/* Lightbox */}
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
