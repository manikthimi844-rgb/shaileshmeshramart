{/* Hero Slider */}
<section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
  {slides.map((slide, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
        currentSlide === i ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className="w-full h-full object-cover scale-105"
        width={1800}
        height={900}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
    </div>
  ))}

  {/* Hero Content */}
  <div className="relative z-10 w-full h-full flex items-center page-container">
    <div className="max-w-2xl text-primary-foreground animate-fade-in">
      <p className="label-text mb-4 !text-primary-foreground/70 tracking-[0.2em] uppercase">
        Contemporary Artist
      </p>

      <h1 className="heading-display !text-primary-foreground mb-6 leading-tight">
        Shailesh Meshram
      </h1>

      <p className="font-serif text-xl md:text-3xl font-light text-primary-foreground/90 mb-6">
        Painting Light, Air, and Memory.
      </p>

      <p className="body-text !text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
        Landscapes are never still. Light shifts, air moves, and moments dissolve quietly into memory.
        Through plein air and studio practice, Shailesh Meshram captures fleeting transitions —
        translating atmosphere into paint.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/work"
          className="btn-outline !border-primary-foreground/60 !text-primary-foreground hover:!bg-primary-foreground hover:!text-foreground transition-all duration-300"
        >
          View Work
        </Link>

        <a
          href="https://wa.me/919673468973"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transition-all duration-300 hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  </div>

  {/* Floating WhatsApp Button */}
  <a
    href="https://wa.me/919673468973"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50"
  >
    <div className="bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce">
      <FaWhatsapp className="text-white text-4xl" />
    </div>
  </a>

  {/* Slider Dots */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentSlide(i)}
        className={`h-2 rounded-full transition-all duration-300 ${
          currentSlide === i
            ? "bg-primary-foreground w-8"
            : "bg-primary-foreground/40 w-2 hover:bg-primary-foreground/70"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</section>
