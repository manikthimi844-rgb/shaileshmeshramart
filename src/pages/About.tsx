import artistPortrait from "@/assets/image.png";

const About = () => (
  <div className="section-spacing">
    <div className="page-container">

      <div className="mb-20">
        
        {/* ALWAYS side by side — on ALL screen sizes */}
        <div className="flex flex-row gap-6 md:gap-12 lg:gap-16 items-start">

          {/* Portrait — LEFT side always */}
          <div className="w-32 sm:w-48 md:w-64 lg:w-80 flex-shrink-0">
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img
                src={artistPortrait}
                alt="Shailesh Meshram"
                className="w-full h-40 sm:h-56 md:h-72 lg:h-96 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>

            {/* Stats below photo */}
            <div className="flex flex-col gap-3 mt-4 md:mt-8 w-full border-t border-border pt-4 md:pt-6">
              <div>
                <p className="font-serif text-lg md:text-3xl text-foreground">30+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Years of Practice</p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-3xl text-foreground">25+</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Exhibitions</p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-3xl text-foreground">5</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Solo Shows</p>
              </div>
            </div>
          </div>

          {/* Bio — RIGHT side always */}
          <div className="flex-1 min-w-0">
            <p className="label-text mb-1 md:mb-2 text-xs md:text-sm">About the Artist</p>
            <h1 className="heading-display mb-2 md:mb-4 text-xl sm:text-2xl md:text-4xl">Shailesh Meshram</h1>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 tracking-wide">
              Born 20 December 1972, Nagpur · BFA, Government Chitrakala Mahavidyalaya, Nagpur (1996)
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <p className="body-text text-xs md:text-base">
                Shailesh is an old soul. He is a prolific painter despite being a full-time advertising professional. Hailing from Nagpur, and trained in Applied Arts, Shailesh chose Pune as his Karma Bhumi.
              </p>
              <p className="body-text text-xs md:text-base hidden sm:block">
                An avid traveller, he has painted Varanasi, Kathmandu, Rome, Venice, Rajasthan and many places around Pune. But his main subject is his city, Pune. Shailesh has developed a deep understanding of the city — the light, textures and the essential character.
              </p>
              <p className="body-text text-xs md:text-base hidden md:block">
                Working a unique style of merging washes, white areas, colourful patches, and cleverly placed lines, he captures the viewers' imagination. He is a rare watercolour artist who has understood and mastered the art of letting the painting paint itself.
              </p>
            </div>

            <blockquote className="quote-block mb-4 md:mb-8 text-xs md:text-base">
              "I am less interested in painting a location, and more drawn to painting what the moment feels like."
            </blockquote>
          </div>

        </div>
      </div>

    </div>
  </div>
);

export default About;
