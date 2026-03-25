import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Workshops", path: "/workshops" },
  { label: "Exhibitions", path: "/exhibitions" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="page-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Shailesh Meshram - Art by SM" className="h-10 md:h-12" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "text-foreground" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="page-container py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="nav-link block"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
