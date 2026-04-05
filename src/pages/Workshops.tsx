import workshopImg from "@/assets/workshop.jpg";

const recentWorkshops = [
  { title: "Plein Air Retreat — Mahabaleshwar", date: "January 2025", location: "Mahabaleshwar", note: "Workshop images coming soon" },
  { title: "Landscape Painting Basics", date: "November 2024", location: "Pune Studio", note: "Workshop images coming soon" },
  { title: "Watercolour Sketching Outdoors", date: "September 2024", location: "Lonavala", note: "Workshop images coming soon" },
];

const upcomingWorkshops = [
  { title: "Plein Air in the Western Ghats", date: "April 12–14, 2025", location: "Mahabaleshwar", spots: "6 spots left", price: "₹12,000" },
  { title: "Watercolour & Light Workshop", date: "May 3–4, 2025", location: "Pune Studio", spots: "Open", price: "₹6,000" },
];

const testimonials = [
  { text: "Shailesh's approach to seeing light completely changed how I paint. An unforgettable experience.", name: "Priya Deshpande", role: "Workshop Participant, 2024" },
  { text: "The best plein air workshop I've attended in India. Immersive, thoughtful, and deeply inspiring.", name: "Rahul Menon", role: "Artist, Bengaluru" },
  { text: "I learned more in two days than in months of self-study. Highly recommended for anyone serious about painting.", name: "Ananya Kulkarni", role: "Workshop Participant, 2024" },
  { text: "A transformative experience. Shailesh has a gift for teaching observation and patience.", name: "Vikram Joshi", role: "Hobbyist Painter, Mumbai" },
];

const Workshops = () => (
  <div className="section-spacing">
    <div className="page-container">
      <p className="label-text mb-3">Learn</p>
      <h1 className="heading-display mb-4">Paint from Life. See Like an Artist.</h1>
      <p className="body-text max-w-2xl mb-16">
        Learn to see beyond the obvious. Experience the discipline and joy of plein air painting through
        immersive workshops designed for both emerging and experienced artists.
      </p>

      {/* Hero Image */}
      <div className="aspect-[16/7] overflow-hidden bg-muted mb-16">
        <img src={workshopImg} alt="Plein air painting workshop" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
      </div>

      {/* Workshop Images Placeholder */}
      <h2 className="heading-section mb-8">Workshop Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square bg-muted flex items-center justify-center">
            <p className="label-text text-center px-4">Image placeholder</p>
          </div>
        ))}
      </div>

      {/* Recent Workshops */}
      <h2 className="heading-section mb-8">Recent Workshops</h2>
      <div className="space-y-6 mb-16">
        {recentWorkshops.map((w, i) => (
          <div key={i} className="border border-border p-8">
            <h3 className="font-serif text-xl mb-2">{w.title}</h3>
            <p className="body-text text-sm mb-1">{w.date} · {w.location}</p>
            <p className="text-xs text-muted-foreground italic">{w.note}</p>
          </div>
        ))}
      </div>

      {/* Upcoming Workshops */}
      <h2 className="heading-section mb-8">Upcoming Workshops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {upcomingWorkshops.map((w, i) => (
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
