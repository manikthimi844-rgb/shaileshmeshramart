const artworks: Artwork[] = [
  // Watercolours
  { title: "Goda Ghat, Nashik", size: "12 × 12 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/Goda Ghat, Nashik.jpg", category: "Watercolours" },
  { title: "Kashi Ghat", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/kashi.jpg", category: "Watercolours" },
  { title: "Watercolour Study 1", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/IMG_0997.JPG", category: "Watercolours" },
  { title: "Watercolour Study 2", size: "14 × 18 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/IMG_4683.JPG", category: "Watercolours" },
  { title: "Painting 2", size: "12 × 16 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/Painting2.jpg", category: "Watercolours" },
  { title: "Vintage Pune", size: "14 × 14 in", medium: "Watercolour on Paper", year: "2022", availability: "Available", image: "/Vintage Pune.jpg", category: "Watercolours" },
  { title: "Vintage Pune Street", size: "14 × 16 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/Vintage Pune14x16(1).jpg", category: "Watercolours" },
  { title: "Hero Artwork", size: "20 × 30 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/hero-artwork.jpg", category: "Watercolours" },
  { title: "Market Scene", size: "14 × 18 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/Screenshot 2026-04-06 101459.jpg", category: "Watercolours" },
  { title: "Urban Harmony", size: "14 × 20 in", medium: "Watercolour on Paper", year: "2024", availability: "Available", image: "/Screenshot 2026-04-06 1015460.jpg", category: "Watercolours" },
  { title: "Rust & History", size: "12 × 18 in", medium: "Watercolour on Paper", year: "2023", availability: "Available", image: "/Screenshot 2026-04-06 101912.jpg", category: "Watercolours" },

  // Acrylics
  { title: "Acrylic 1", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/1 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 2", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/2 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 3", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/3 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 4", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/4 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 5", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/5 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 6", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/6 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 7", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/7 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 8", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/8 (2).jpg", category: "Acrylics" },
  { title: "Acrylic 13", size: "12 × 12 in", medium: "Acrylic on Canvas", year: "2024", availability: "Available", image: "/13.jpg", category: "Acrylics" },

  // Sketchbooks & Studies
  { title: "Sketch Study 1", size: "9 × 12 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/1 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Sketch Study 2", size: "8 × 10 in", medium: "Mixed Media", year: "2024", availability: "Available", image: "/2 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Quick Study 1", size: "6 × 8 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/3 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Quick Study 2", size: "9 × 12 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/4 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Konkan Study", size: "8 × 10 in", medium: "Mixed Media", year: "2024", availability: "Available", image: "/5 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Boat Study", size: "6 × 9 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/6 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Market Sketch", size: "9 × 12 in", medium: "Mixed Media", year: "2024", availability: "Available", image: "/7 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Mountain Sketch", size: "8 × 10 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/8 (2).jpg", category: "Sketchbooks & Studies" },
  { title: "Light Study", size: "6 × 8 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/13.jpg", category: "Sketchbooks & Studies" },
  { title: "Temple Sketch", size: "9 × 12 in", medium: "Mixed Media", year: "2024", availability: "Available", image: "/Goda Ghat, Nashk.jpg", category: "Sketchbooks & Studies" },
  { title: "Coastal Sketch", size: "8 × 10 in", medium: "Mixed Media", year: "2024", availability: "Not for Sale", image: "/kashi.jpg", category: "Sketchbooks & Studies" },
  { title: "Banyan Sketch", size: "10 × 14 in", medium: "Mixed Media", year: "2024", availability: "Available", image: "/hero-artwork.jpg", category: "Sketchbooks & Studies" },
];
