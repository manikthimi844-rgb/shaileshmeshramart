import { Star } from "lucide-react";
import epf from "@/assets/epf.jpg";
import eps from "@/assets/eps.jpg";

const shows = [
  { year: "1992", desc: "Youth Festival, Gulbarga (Silver Medal in Collage Competition)", highlight: false },
  { year: "1993", desc: "Youth Festival, Jabalpur (Gold Medal in Collage Competition)", highlight: true },
  { year: "1994", desc: "PASS – Group show, South Central Zone Cultural Centre, Nagpur", highlight: false },
  { year: "2010", desc: "Group show at Bal Gandharva Kala Mandir (Impressions Group)", highlight: false },
  { year: "2011", desc: "Group show at Darpan Art Gallery, Pune (Impressions Group)", highlight: false },
  { year: "2011", desc: "Solo Show – Grupshup Art Gallery, Pune", highlight: true },
  { year: "2014", desc: "Indian Art Collector Inaugural Show, Chandigarh", highlight: false },
  { year: "2015", desc: "1st International Watercolor Society, Turkey", highlight: true },
  { year: "2015", desc: "1st International Watercolor Society India Biennale, Delhi", highlight: false },
  { year: "2017", desc: "2nd International Watercolor Society India Biennale, Delhi", highlight: false },
  { year: "2017", desc: "Fabriano Watercolour Biennale, Italy (1st Joint Prize – On the Spot Landscape)", highlight: true },
  { year: "2018", desc: "Fabriano Watercolour Biennale, Italy", highlight: true },
  { year: "2018", desc: "'Among Best 50' – GAWA International Watercolor Online Contest", highlight: true },
  { year: "2018", desc: "Invited Artist – International Watercolor Festival, Ranchi", highlight: false },
  { year: "2018", desc: "Solo Show – Jehangir Art Gallery, Mumbai", highlight: true },
  { year: "2019", desc: "Solo Show – Malaka Spice, Pune", highlight: false },
  { year: "2019", desc: "Group show 'Nepal Diaries' – Art2day Gallery, Pune", highlight: false },
  { year: "2022", desc: "Mentor Master Artist & Pune Coordinator – IAW Art Event, Darjeeling", highlight: false },
  { year: "2023", desc: "Art Mandai Festival, Pune", highlight: false },
  { year: "2023", desc: "Invited Watercolor Artist – 3 Day Art Camp, Ambarnath, Thane", highlight: false },
  { year: "2023", desc: "Solo Show – Raja Ravi Varma Art Gallery, Pune", highlight: true },
  { year: "2024", desc: "Aundh Art Heritage – Group Show, Satara", highlight: false },
  { year: "2024", desc: "'Chitra Sanman Puraskar' by Vidarbha Gaurav Prathisthan, Nagpur", highlight: true },
  { year: "2025", desc: "Group Show of Watercolour Paintings – Selected 8 Artist Group Show", highlight: false },
  { year: "2025", desc: "'Pune Watercolour Collective' – Pune Theme Paintings", highlight: false },
  { year: "2026", desc: "11 to 17 August – Jehangir Art Gallery, Mumbai", highlight: true, isUpcoming: true },
];

const Exhibitions = () => (
  <div className="section-spacing">
    <div className="page-container">
      <p className="label-text mb-3">Exhibitions & Recognition</p>
      <h1 className="heading-display mb-6">Exhibitions & Awards</h1>
      <p className="body-text max-w-2xl mb-16">
        A journey spanning over three decades — from early recognitions at youth festivals
        to international biennales and prestigious solo shows across India and Europe.
      </p>

      {/* Exhibition Images and Upcoming Show */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        <div className="overflow-hidden bg-muted rounded-sm">
          <img
            src={epf}
            alt="Exhibition showcase - Hearts Capes"
            className="w-full h-auto"
            style={{ imageRendering: "auto" }}
            loading="lazy"
            width={1600}
            height={1200}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="overflow-hidden bg-muted rounded-sm">
            <img
              src={eps}
              alt="Exhibition opening and visitors"
              className="w-full h-auto"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
          {/* Upcoming Exhibition */}
          <div className="bg-accent/5 border border-accent/20 rounded-sm p-6 flex flex-col justify-center flex-1">
            <p className="label-text text-accent mb-3 uppercase tracking-widest">Upcoming</p>
            <h3 className="heading-display text-base mb-4">Exhibition</h3>
            <p className="body-text mb-6">
              <span className="font-semibold">11 – 17 August 2026</span>
            </p>
            <p className="body-text text-sm">Jehangir Art Gallery, Mumbai</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {shows.map((s, i) => (
          <div
            key={i}
            className={`flex gap-4 items-baseline border-b border-border pb-3 ${
              s.highlight ? "bg-accent/10 px-4 py-3 -mx-4 rounded-sm" : ""
            }`}
          >
            {s.highlight && <Star size={14} className="text-accent flex-shrink-0 mt-1" />}
            <span className="font-serif text-sm text-muted-foreground whitespace-nowrap">{s.year}</span>
            <p className="body-text text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Exhibitions;
