import { Instagram, Facebook, Youtube } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/shaileshmesh", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const SocialIcons = ({ className = "", iconSize = 18 }: SocialIconsProps) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <s.icon size={iconSize} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
