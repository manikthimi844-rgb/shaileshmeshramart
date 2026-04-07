import artistPortrait from "@/assets/image.png";

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      <div className="mb-20">

        {/* Side by side - ALWAYS, every screen, every zoom */}
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "flex-start" }}>

          {/* Photo - LEFT - always */}
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
                filter: "grayscale(100%)",
                borderRadius: "2px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
              }}
              loading="lazy"
