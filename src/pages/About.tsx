import artistPortrait from "@/assets/artist-portrait.jpg";

const shows = [
  { year: "1992", desc: "Youth Festival, Gulbarga (Silver Medal in Collage Competition)" },
  { year: "1993", desc: "Youth Festival, Jabalpur (Gold Medal in Collage Competition)" },
  { year: "1994", desc: "PASS – Group show, South Central Zone Cultural Centre, Nagpur" },
  { year: "2010", desc: "Group show at Bal Gandharva Kala Mandir (Impressions Group)" },
  { year: "2011", desc: "Group show at Darpan Art Gallery, Pune (Impressions Group)" },
  { year: "2011", desc: "Solo Show – Grupshup Art Gallery, Pune" },
  { year: "2014", desc: "Indian Art Collector Inaugural Show, Chandigarh" },
  { year: "2015", desc: "1st International Watercolor Society, Turkey" },
  { year: "2015", desc: "1st International Watercolor Society India Biennale, Delhi" },
  { year: "2017", desc: "2nd International Watercolor Society India Biennale, Delhi" },
  { year: "2017", desc: "Fabriano Watercolour Biennale, Italy (1st Joint Prize – On the Spot Landscape)" },
  { year: "2018", desc: "Fabriano Watercolour Biennale, Italy" },
  { year: "2018", desc: "'Among Best 50' – GAWA International Watercolor Online Contest" },
  { year: "2018", desc: "Invited Artist – International Watercolor Festival, Ranchi" },
  { year: "2018", desc: "Solo Show – Jehangir Art Gallery, Mumbai" },
  { year: "2019", desc: "Solo Show – Malaka Spice, Pune" },
  { year: "2019", desc: "Group show 'Nepal Diaries' – Art2day Gallery, Pune" },
  { year: "2022", desc: "Mentor Master Artist & Pune Coordinator – IAW Art Event, Darjeeling" },
  { year: "2023", desc: "Art Mandai Festival, Pune" },
  { year: "2023", desc: "Invited Watercolor Artist – 3 Day Art Camp, Ambarnath, Thane" },
  { year: "2023", desc: "Solo Show – Raja Ravi Varma Art Gallery, Pune" },
  { year: "2024", desc: "Aundh Art Heritage – Group Show, Satara" },
  { year: "2024", desc: "'Chitra Sanman Puraskar' by Vidarbha Gaurav Prathisthan, Nagpur" },
  { year: "2025", desc: "Group Show of Watercolour Paintings – Selected 8 Artist Group Show" },
  { year: "2025", desc: "'Pune Watercolour Collective' – Pune Theme Paintings" },
];

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Portrait */}
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={artistPortrait}
            alt="Shailesh Meshram in his studio"
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center">
          <p className="label-text mb-3">About</p>
          <h1 className="heading-display mb-6">Shailesh Meshram</h1>
          <p className="body-text mb-4 text-sm text-muted-foreground">
            Born 20 December 1972, Nagpur · Bachelor of Fine Art, Government Chitrakala Mahavidyalaya, Nagpur (1996, 1st Grade)
          </p>
          <p className="body-text mb-6">
            Shailesh is an old soul. He is a prolific painter despite being a full-time advertising professional. Hailing from Nagpur, and trained in Applied Arts, Shailesh chose Pune as his Karma Bhumi.
          </p>
          <p className="body-text mb-6">
            An avid traveller, he has painted Varanasi, Kathmandu, Rome, Venice, Rajasthan and many places around Pune. But his main subject is his city, Pune. Shailesh has developed a deep understanding of the city — the light, textures and the essential character. Working a unique style of merging washes, white areas, colourful patches, and cleverly placed lines, he captures the viewers' imagination.
          </p>
          <p className="body-text mb-8">
            He is a rare watercolour artist who has understood and mastered the art of letting the painting paint itself. It is an almost spiritual experience to watch him paint. Like himself, the paintings exude grace, calm and character.
          </p>
          <blockquote className="quote-block">
            "I am less interested in painting a location, and more drawn to painting what the moment feels like."
          </blockquote>
        </div>
      </div>

      {/* Shows & Recognitions */}
      <div className="mb-20">
        <p className="label-text mb-3">Shows & Recognitions</p>
        <h2 className="heading-section mb-8">Exhibitions & Awards</h2>
        <div className="space-y-3">
          {shows.map((s, i) => (
            <div key={i} className="flex gap-4 items-baseline border-b border-border pb-3">
              <span className="font-serif text-sm text-muted-foreground whitespace-nowrap">{s.year}</span>
              <p className="body-text text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            title: "Artistic Philosophy",
            text: "Each painting is an attempt to hold a moment that is already passing — to translate the intangible qualities of light, air, and atmosphere into something that can be felt on canvas.",
          },
          {
            title: "Journey",
            text: "Beginning with formal training at Government Chitrakala Mahavidyalaya, Nagpur, Shailesh found his voice through years of plein air painting across India and Europe — from the ghats of Varanasi to the canals of Venice.",
          },
          {
            title: "Influences",
            text: "Inspired by the Impressionists, the Barbizon school, and the rich tradition of Indian landscape painting. Plein air work remains central to his practice.",
          },
        ].map((section, i) => (
          <div key={i}>
            <h3 className="heading-sub text-lg mb-3">{section.title}</h3>
            <p className="body-text text-sm">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
