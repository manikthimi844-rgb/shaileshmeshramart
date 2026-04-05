import { Star } from "lucide-react";
import artistPhoto from "@/assets/artist-photo.png";

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

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Bio */}
        <div className="flex flex-col justify-center">
          <p className="label-text mb-3">About</p>
          <h1 className="heading-display mb-6">Shailesh Meshram</h1>
          <div className="space-y-6">
            <p className="body-text">
              Shailesh is an old soul. He is a prolific painter despite being a full-time advertising
              professional. Hailing from Nagpur, and trained in Applied Arts, Shailesh chose Pune as
              his Karma Bhumi.
            </p>
            <p className="body-text">
              An avid traveller, he has painted Varanasi, Kathmandu, Rome, Venice, Rajasthan and many
              places around Pune. But his main subject is his city, Pune. Shailesh has developed a
              deep understanding of the city, the light, textures and the essential character of the
              city. Working a unique style of merging washes, white areas, a few colourful patches,
              and very cleverly placed lines he creates the character with which he captures the
              viewers imagination.
            </p>
            <p className="body-text">
              He is a rare watercolour artist who has understood and mastered the art of letting the
              painting paint itself. It is an almost spiritual experience to watch him paint. Like
              himself the paintings exude grace, calm and character.
            </p>
            <p className="body-text">
              Shailesh has several workshops, Watercolour Landscape Demonstrations and exhibitions to
              his credit.
            </p>
          </div>
        </div>

        {/* Portrait */}
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={artistPhoto}
            alt="Shailesh Meshram"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Education */}
      <div className="mb-20">
        <h2 className="heading-section mb-8">Education</h2>
        <div className="border-l-2 border-border pl-6">
          <h3 className="font-serif text-lg mb-1">Bachelor of Fine Arts</h3>
          <p className="body-text">Government Chitrakala Mahavidyalaya, Nagpur (India)</p>
          <p className="body-text text-sm text-muted-foreground">
            5 Years Course · Graduation Year — 1996 · 1st Grade
          </p>
        </div>
      </div>

      {/* Shows & Recognitions */}
      <div>
        <p className="label-text mb-3">Exhibitions & Recognition</p>
        <h2 className="heading-section mb-6">Shows & Recognitions</h2>
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
  </div>
);

export default About;
