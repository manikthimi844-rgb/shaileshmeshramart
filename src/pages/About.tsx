import artistPortrait from "@/assets/image.png";

const About = () => (
  <div className="section-spacing">
    <div className="page-container">

      {/* Hero Section */}
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Portrait — LEFT side */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-xs lg:max-w-none overflow-hidden rounded-sm shadow-lg">
              <img
                src={artistPortrait}
                alt="Shailesh Meshram"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <p className="text-center lg:text-left font-serif text-sm mt-4 text-muted-foreground italic">
              Shailesh Meshram
            </p>

            {/* Stats below photo — desktop */}
            <div className="hidden lg:flex flex-col gap-5 mt-8 w-full border-t border-border pt-6">
              <div>
                <p className="font-serif text-3xl text-foreground">30+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Years of Practice</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">25+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Exhibitions</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">5</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Solo Shows</p>
              </div>
            </div>
          </div>

          {/* Bio — RIGHT side */}
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

            {/* Stats — mobile only */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border lg:hidden">
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
      </div>

    </div>
  </div>
);

export default About;
