import artistPortrait from "@/assets/artist-portrait.jpg";

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
          <p className="body-text mb-6 italic text-muted-foreground/70">
            [New writeup to be provided — placeholder text below]
          </p>
          <p className="body-text mb-6">
            Shailesh Meshram is an Indian contemporary artist whose work explores the delicate
            relationship between light, space, and emotion through plein air and studio practice.
          </p>
          <p className="body-text mb-8">
            Each painting is not merely a depiction of place, but a record of presence — a lived moment
            shaped by weather, silence, and shifting color. Working both outdoors and in the studio,
            his paintings balance immediacy with reflection, spontaneity with structure.
          </p>
          <blockquote className="quote-block">
            "I am less interested in painting a location, and more drawn to painting what the moment feels like."
          </blockquote>
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
            text: "Beginning with formal training in fine arts, Shailesh found his voice through years of plein air painting across India — from the Western Ghats to the Konkan coast.",
          },
          {
            title: "Influences",
            text: "Inspired by the Impressionists, the Barbizon school, and the rich tradition of Indian landscape painting.",
          },
          {
            title: "Exhibitions",
            text: "Exhibited across India in both solo and group shows, including galleries in Mumbai, Pune, and Delhi.",
          },
          {
            title: "Awards",
            text: "Recipient of awards and recognitions for landscape and plein air painting. Details to be updated.",
          },
          {
            title: "Collections",
            text: "Works held in private collections across India, the UK, and the United States.",
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
