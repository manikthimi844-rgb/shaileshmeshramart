import workshopImg from "@/assets/workshop.jpg";

const workshops = [
  { title: "Plein Air in the Western Ghats", date: "April 12–14, 2025", location: "Mahabaleshwar", spots: "6 spots left", price: "₹12,000" },
  { title: "Watercolour & Light Workshop", date: "May 3–4, 2025", location: "Pune Studio", spots: "Open", price: "₹6,000" },
];

const testimonials = [
  { text: "Shailesh's approach to seeing light completely changed how I paint. An unforgettable experience.", name: "Priya Deshpande", role: "Workshop Participant, 2024" },
  { text: "The best plein air workshop I've attended in India. Immersive, thoughtful, and deeply inspiring.", name: "Rahul Menon", role: "Artist, Bengaluru" },
];

const Workshops = () => (
  <div className="section-spacing">
    <div className="page-container">
      <p className="label-text mb-3">Learn</p>
      <h1 className="heading-display mb-4">Paint from Life. See Like an Artist.</h1>
      <p className="heading-sub font-serif mb-6">Paint From Life — Step into the landscape.</p>
      <p className="body-text max-w-2xl mb-16">
        Learn to see beyond the obvious. Experience the discipline and joy of plein air painting through
        immersive workshops designed for both emerging and experienced artists.
      </p>

      {/* Hero Image */}
      <div className="aspect-[16/7] overflow-hidden bg-muted mb-16">
        <img src={workshopImg} alt="Plein air painting workshop" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
      </div>

      {/* Upcoming Workshops */}
      <h2 className="heading-section mb-8">Upcoming Workshops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {workshops.map((w, i) => (
          <div key={i} className="border border-border p-8">
            <h3 className="font-serif text-xl mb-2">{w.title}</h3>
            <p className="body-text text-sm mb-1">{w.date} · {w.location}</p>
            <p className="body-text text-sm mb-4">{w.spots} · {w.price}</p>
            <button className="btn-primary">Register Now</button>
          </div>
        ))}
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
