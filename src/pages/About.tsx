import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 mb-20">
        {/* Portrait */}
        <div className="lg:col-span-2">
          <div className="aspect-[3/4] overflow-hidden bg-muted sticky top-24">
            <img
              src={artistPortrait}
              alt="Shailesh Meshram in his studio"
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-3 flex flex-col justify-center">
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
      </div>

      {/* Philosophy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
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
          <div key={i} className="p-6 border border-border rounded-sm">
            <h3 className="heading-sub text-lg mb-3">{section.title}</h3>
            <p className="body-text text-sm">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
