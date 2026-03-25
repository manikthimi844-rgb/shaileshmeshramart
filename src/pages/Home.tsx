import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artworkWatercolor from "@/assets/artwork-watercolor.jpg";

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative h-screen flex items-end">
      <div className="absolute inset-0">
        <img
          src={heroArtwork}
          alt="Atmospheric landscape painting by Shailesh Meshram"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      </div>
      <div className="relative page-container pb-16 md:pb-24 text-primary-foreground">
        <p className="label-text mb-4 !text-primary-foreground/70">Contemporary Painter</p>
        <h1 className="heading-display !text-primary-foreground mb-4">Shailesh Meshram</h1>
        <p className="font-serif text-xl md:text-2xl font-light text-primary-foreground/90 mb-8">
          Painting Light, Air, and Memory.
        </p>
        <p className="body-text max-w-xl !text-primary-foreground/80 mb-10">
          Landscapes are never still. Light shifts, air moves, and moments dissolve quietly into memory.
          Through plein air and studio practice, Shailesh Meshram captures these fleeting transitions —
          translating atmosphere into paint.
        </p>
        <Link to="/work" className="btn-outline !border-primary-foreground/50 !text-primary-foreground hover:!bg-primary-foreground hover:!text-foreground">
          View Work
        </Link>
      </div>
    </section>

    {/* Selected Works Preview */}
    <section className="section-spacing">
      <div className="page-container">
        <p className="label-text mb-3">Selected Works</p>
        <h2 className="heading-section mb-12">Recent Paintings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Golden Hour, Western Ghats", medium: "Oil on Canvas", year: "2024", image: heroArtwork },
            { title: "Morning Mist, Konkan", medium: "Watercolour on Paper", year: "2024", image: artworkWatercolor },
          ].map((work, i) => (
            <Link to="/work" key={i} className="artwork-card block overflow-hidden">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
