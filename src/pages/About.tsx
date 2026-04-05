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

        {/* Portrait placeholder */}
        <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center">
          <p className="label-text text-muted-foreground">Artist Photo</p>
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
    </div>
  </div>
);

export default About;
