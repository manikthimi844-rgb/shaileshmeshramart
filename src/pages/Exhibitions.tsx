const soloShows = [
  { title: "Fleeting Light", venue: "Gallery One, Mumbai", year: "2024" },
  { title: "Between Land and Sky", venue: "Art Corridor, Pune", year: "2023" },
  { title: "Plein Air Studies", venue: "The Canvas Space, Delhi", year: "2022" },
];

const groupShows = [
  { title: "Contemporary Landscapes of India", venue: "National Gallery of Modern Art, Mumbai", year: "2024" },
  { title: "The Outdoor Painters Collective", venue: "Jehangir Art Gallery, Mumbai", year: "2023" },
  { title: "Light & Land", venue: "India Art Fair, Delhi", year: "2023" },
];

const awards = [
  "Maharashtra State Art Award, 2023",
  "National Plein Air Painting Competition — Selected Artist, 2022",
  "Emerging Artists Fellowship — Shortlisted, 2021",
];

const Exhibitions = () => (
  <div className="section-spacing">
    <div className="page-container">
      <p className="label-text mb-3">Exhibitions & Recognition</p>
      <h1 className="heading-display mb-6">Exhibitions</h1>
      <p className="body-text max-w-2xl mb-4 italic text-muted-foreground/70">
        [Exhibition details to be updated — placeholder content below]
      </p>
      <p className="body-text max-w-2xl mb-16">
        Shailesh Meshram's works have been presented in exhibitions that celebrate contemporary
        landscape practice and observational painting.
      </p>

      {/* Solo Shows */}
      <h2 className="heading-section mb-8">Solo Shows</h2>
      <div className="space-y-6 mb-16">
        {soloShows.map((show, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="font-serif text-lg">{show.title}</h3>
              <p className="body-text text-sm">{show.venue}</p>
            </div>
            <p className="label-text mt-1 md:mt-0">{show.year}</p>
          </div>
        ))}
      </div>

      {/* Group Shows */}
      <h2 className="heading-section mb-8">Group Shows</h2>
      <div className="space-y-6 mb-16">
        {groupShows.map((show, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4">
            <div>
              <h3 className="font-serif text-lg">{show.title}</h3>
              <p className="body-text text-sm">{show.venue}</p>
            </div>
            <p className="label-text mt-1 md:mt-0">{show.year}</p>
          </div>
        ))}
      </div>

      {/* Awards */}
      <h2 className="heading-section mb-8">Awards & Recognition</h2>
      <p className="body-text mb-4 italic text-muted-foreground/70">
        [Awards list to be updated with full details]
      </p>
      <ul className="space-y-3 mb-16">
        {awards.map((a, i) => (
          <li key={i} className="body-text">{a}</li>
        ))}
      </ul>

      {/* Media */}
      <h2 className="heading-section mb-8">Media & Articles</h2>
      <div className="space-y-4">
        {[
          { title: '"The New Plein Air Movement in India"', pub: "Art India Magazine", year: "2024" },
          { title: '"Painting What Light Feels Like"', pub: "The Hindu Arts", year: "2023" },
        ].map((m, i) => (
          <div key={i} className="border-b border-border pb-4">
            <p className="font-serif text-lg">{m.title}</p>
            <p className="body-text text-sm">{m.pub} · {m.year}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Exhibitions;
