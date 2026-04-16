import artistPortrait from "@/assets/artist-portrait-new.jpg";
import artistPleinair from "@/assets/artist-pleinair.jpg";

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      <div className="mb-20">

        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "flex-start" }}>

          {/* Bio - LEFT */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="label-text" style={{ marginBottom: "0.5rem" }}>About the Artist</p>
            <h1 className="heading-display" style={{ marginBottom: "1rem" }}>Shailesh Meshram</h1>
            <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "1.5rem", letterSpacing: "0.05em" }}>
              BFA, Government Chitrakala Mahavidyalaya, Nagpur (1996)
            </p>
            <div style={{ marginBottom: "2rem" }}>
              <p className="body-text" style={{ marginBottom: "1rem" }}>
                Shailesh is an old soul. He is a prolific painter despite being a full-time advertising professional. Hailing from Nagpur, and trained in Applied Arts, Shailesh chose Pune as his Karma Bhumi.
              </p>
              <p className="body-text" style={{ marginBottom: "1rem" }}>
                An avid traveller, he has painted Varanasi, Kathmandu, Rome, Venice, Rajasthan and many places around Pune. But his main subject is his city, Pune. Shailesh has developed a deep understanding of the city — the light, textures and the essential character.
              </p>
              <p className="body-text">
                Working a unique style of merging washes, white areas, colourful patches, and cleverly placed lines, he captures the viewers' imagination. He is a rare watercolour artist who has understood and mastered the art of letting the painting paint itself.
              </p>
            </div>
            <blockquote className="quote-block">
              "I am less interested in painting a location, and more drawn to painting what the moment feels like."
            </blockquote>

            {/* Plein Air collage */}
          </div>

          {/* Photo - RIGHT */}
          <div style={{ width: "35%", minWidth: "120px", flexShrink: 0 }}>
            <img
              src={artistPortrait}
              alt="Shailesh Meshram"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "2px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
              }}
            />
            <div style={{ marginTop: "1.5rem", borderTop: "1px solid #e0ddd8", paddingTop: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontFamily: "serif", fontSize: "1.5rem", margin: 0 }}>30+</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", margin: 0 }}>Years of Practice</p>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontFamily: "serif", fontSize: "1.5rem", margin: 0 }}>25+</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", margin: 0 }}>Exhibitions</p>
              </div>
              <div>
                <p style={{ fontFamily: "serif", fontSize: "1.5rem", margin: 0 }}>5</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", margin: 0 }}>Solo Shows</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width plein air collage */}
      <div style={{ marginTop: "1rem" }}>
        <img
          src={artistPleinair}
          alt="Shailesh Meshram painting en plein air"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            borderRadius: "2px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.10)"
          }}
        />
      </div>
    </div>
  </div>
);

export default About;
