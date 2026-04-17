import workshopImg1 from "@/assets/workshop-collage-1.jpg";
import workshopImg2 from "@/assets/workshop-collage-2.jpg";

const testimonials = [
  { text: "Shailesh's approach to seeing light completely changed how I paint. An unforgettable experience.", name: "Priya Deshpande", role: "Workshop Participant, 2024" },
  { text: "The best plein air workshop I've attended in India. Immersive, thoughtful, and deeply inspiring.", name: "Rahul Menon", role: "Artist, Bengaluru" },
];

const Workshops = () => (
  <div className="section-spacing">
    <div className="page-container">
      <p className="label-text mb-3"></p>
      <p className="label-text mb-3">Workshop</p>
      <h1 className="heading-display mb-6">Watercolour Workshops & Mentorship Experience</h1>
      <p className="body-text max-w-2xl mb-16">
       Shailesh has actively conducted watercolour workshops, sharing techniques, creative approaches, and the joy of expressive painting with learners of all levels. His sessions focus on developing compositions, understanding colour harmony, and mastering fluid brushwork.
Alongside teaching, Shailesh has had the privilege of working and learning under esteemed master artists. This invaluable mentorship has deeply influenced his artistic practice, strengthening his foundation in traditional techniques while encouraging contemporary exploration. The experience has enriched both his teaching methodology and creative vision, allowing him to guide students with authenticity and depth.
      </p>

      {/* Hero Images */}
      <div className="grid grid-cols-1 gap-8 mb-16">
        <div className="overflow-hidden bg-muted">
          <img src={workshopImg1} alt="Plein air painting workshop moments" className="w-full h-auto object-cover" loading="lazy" width={1200} height={800} />
        </div>
        <div className="overflow-hidden bg-muted">
          <img src={workshopImg2} alt="Workshop sessions and group activities" className="w-full h-auto object-cover" loading="lazy" width={1200} height={800} />
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="heading-section mb-8">What Participants Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="border-l-2 border-accent pl-6 py-2">
            <p className="font-serif text-lg italic text-foreground/80 mb-3">"{t.text}"</p>
            <cite className="not-italic">
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </cite>
          </blockquote>
        ))}
      </div>
    </div>
  </div>
);

export default Workshops;
