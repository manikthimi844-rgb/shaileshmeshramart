import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import artwork1 from "@/assets/artwork-1.jpg";
import artworkThimi from "@/assets/thimi_village_nepal_(1).jpg";
import acrylic3 from "@/assets/3.(2).jpg";

const slides = [
  {
    image: artwork1,
    alt: "Artwork 1",
  },
  {
    image: artworkThimi,
    alt: "Artwork 2",
  },
  {
    image: acrylic3,
    alt: "Artwork 3",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
              Contemporary Artist
            </p>

            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Shailesh Meshram
            </h1>

            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              Painting Light, Air, and Memory.
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-gray-300">
              Landscapes are never still. Light shifts, air moves, and moments
              dissolve quietly into memory. Through plein air and studio
              practice, Shailesh Meshram captures fleeting transitions and
              translates atmosphere into paint.
            </p>

            <Link
              to="/work"
              className="inline-block rounded-full border border-white px-8 py-3 text-white transition hover:bg-white hover:text-black"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919673468973"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl transition hover:scale-110">
            💬
          </div>
        </a>

        {/* SLIDER DOTS */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
