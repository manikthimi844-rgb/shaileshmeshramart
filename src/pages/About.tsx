import { Star } from "lucide-react";
import artistPortrait from "@/assets/image.png";

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
];

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      {/* Hero Section */}
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Bio */}
          <div className="flex-1">
            <p className="label-text mb-2">About the Artist</p>
            <h1 className="heading-display mb-4">Shailesh Meshram</h1>
            <p className="text-sm text-muted-foreground mb-6 tracking-wide">
              Born 20 December 1972, Nagpur · BFA, Government Chitrakala Mahavidyalaya, Nagpur (1996)
            </p>

            <div className="space-y-4 mb-8">
              <p className="body-text">
                Shailesh is an old soul. He is a prolific painter despite being a full-time advertising professional. Hailing from Nagpur, and trained in Applied Arts, Shailesh chose Pune as his Karma Bhumi.
              </p>
              <p className="body-text">
                An avid traveller, he has painted Varanasi, Kathmandu, Rome, Venice, Rajasthan and many places around Pune. But his main subject is his city, Pune. Shailesh has developed a deep understanding of the city — the light, textures and the essential character.
              </p>
              <p className="body-text">
                Working a unique style of merging washes, white areas, colourful patches, and cleverly placed lines, he captures the viewers' imagination. He is a rare watercolour artist who has understood and mastered the art of letting the painting paint itself.
              </p>
            </div>

            <blockquote className="quote-block mb-8">
              "I am less interested in painting a location, and more drawn to painting what the moment feels like."
            </blockquote>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <p className="font-serif text-2xl text-foreground">30+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Years of Practice</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-foreground">25+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Exhibitions</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-foreground">5</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Solo Shows</p>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="w-48 flex-shrink-0">
            <div className="aspect-square overflow-hidden bg-muted rounded-sm">
              <img
                src={artistPortrait}
                alt="Shailesh Meshram"
                className="w-full h-full object-cover"
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
            <p className="text-center font-serif text-sm mt-4 text-foreground">Shailesh Meshram</p>
          </div>
        </div>
      </div>

      {/* Exhibitions & Awards Section */}
      <div className="mb-20">
        <p className="label-text mb-3">Exhibitions & Recognition</p>
        <h2 className="heading-display mb-6">Exhibitions & Awards</h2>
        <p className="body-text max-w-2xl mb-16">
          A journey spanning over three decades — from early recognitions at youth festivals
          to international biennales and prestigious solo shows across India and Europe.
        </p>

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
  </div>
);

export default About;
