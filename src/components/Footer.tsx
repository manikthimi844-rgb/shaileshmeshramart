import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="page-container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="font-serif text-lg text-foreground mb-2">Shailesh Meshram</p>
          <p className="body-text text-sm italic">"Capturing light before it disappears."</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/workshops" className="nav-link">Workshops</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Shailesh Meshram. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
