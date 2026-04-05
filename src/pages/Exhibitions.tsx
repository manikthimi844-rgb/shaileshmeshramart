import { Star } from "lucide-react";

const timeline = [
  { year: "1992", desc: "Youth Festival Gulbarga — Silver Medal, Collage Competition" },
  { year: "1993", desc: "Youth Festival Jabalpur — Gold Medal, Collage Competition" },
  { year: "1994", desc: "PASS Group Show, South Central Zone Cultural Centre, Nagpur" },
  { year: "2010", desc: "Painting Group Show, Bal Gandharva Kala Mandir, Pune" },
  { year: "2011", desc: "Painting Group Show, Darpan Art Gallery, Pune" },
  { year: "2011", desc: "Solo Painting Show, Grupshup Art Gallery, Pune" },
  { year: "2014", desc: "Indian Art Collector Inaugural Show, Chandigarh" },
  { year: "2014", desc: "Painting Group Show, Darpan Art Gallery, Pune" },
  { year: "2015", desc: "1st International Watercolor Society, Turkey" },
  { year: "2015", desc: "1st International Watercolor Society India Biennale, Delhi" },
  { year: "2017", desc: "2nd International Watercolor Society India Biennale, Delhi" },
  { year: "2017", desc: "Fabriano Watercolour Biennale, Italy — 1st Joint Prize, On the spot watercolour landscape", highlight: true },
  { year: "2018", desc: "Fabriano Watercolour Biennale, Italy" },
  { year: "2018", desc: "Among Best 50, GAWA International Watercolor Online Contest", highlight: true },
  { year: "2018", desc: "Invited Artist, International Watercolor Festival, Ranchi" },
  { year: "2018", desc: "Solo Painting Show, Jehangir Art Gallery, Mumbai", highlight: true },
  { year: "2019", desc: "Solo Painting Show, Malaka Spice, Pune" },
  { year: "2019", desc: "Group Show Nepal Diaries, Art2day Gallery, Pune" },
  { year: "2020", desc: "Wide Canvas Ranchi, Online Contest and Group Show" },
  { year: "2022", desc: "Mentor Master Artist, IAW Art Event, Darjeeling" },
  { year: "2023", desc: "Group Show, Art Mandai Festival, Pune" },
  { year: "2023", desc: "Invited Watercolor Artist, 3 Day Art Camp, Ambarnath" },
  { year: "2023", desc: "Solo Painting Show Art By SM, Raja Ravi Varma Art Gallery, Pune" },
  { year: "2024", desc: "Group Show, Aundh Art Heritage, Satara" },
  { year: "2024", desc: "Chitra Sanman Puraskar, Vidarbha Gaurav Prathisthan, Nagpur — Cash Award ₹1 Lac & Sanmanpatra", highlight: true },
  { year: "2024", desc: "Aundh Art Heritage, Group Show & Invited Artist for Demonstration" },
  { year: "2025", desc: "Group Show of Watercolour Paintings, Selected 8 Artist Group Show" },
  { year: "2025", desc: "Pune Watercolour Collective, Pune Theme Paintings" },
];

const Exhibitions = () => (
  <div className="section-spacing">
    <div className="page-container">
      <p className="label-text mb-3">Exhibitions & Recognition</p>
      <h1 className="heading-display mb-6">Shows & Recognitions</h1>
      <p className="body-text max-w-2xl mb-16">
        A timeline of exhibitions, awards, and milestones in Shailesh Meshram's artistic journey.
      </p>

      <div className="space-y-0">
        {timeline.map((item, i) => (
          <div
            key={i}
            className={`flex gap-6 md:gap-10 py-5 border-b border-border ${
              item.highlight ? "bg-accent/30" : ""
            }`}
          >
            <div className="w-16 md:w-20 shrink-0 flex items-start gap-2">
              {item.highlight && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" />}
              <span className="label-text whitespace-nowrap">{item.year}</span>
            </div>
            <p className={`body-text ${item.highlight ? "font-medium text-foreground" : ""}`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Exhibitions;
