import artistPortrait from "@/assets/image.png";
import { Star } from "lucide-react";

const About = () => (
  <div className="section-spacing">
    <div className="page-container">
      <div className="mb-20">

        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "flex-start" }}>

          {/* Photo - LEFT */}
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

          {/* Bio - RIGHT */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="label-text" style={{ marginBottom: "0.5rem" }}>Abo
