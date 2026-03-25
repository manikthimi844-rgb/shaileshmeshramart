import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNavigate }: LightboxProps) => {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(currentIndex + 1);
    },
    [onClose, onNavigate, currentIndex, hasPrev, hasNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95" onClick={onClose}>
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }}
          className="absolute left-4 md:left-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      {/* Image */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="max-h-[85vh] max-w-[90vw] object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }}
          className="absolute right-4 md:right-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>
      )}

      {/* Counter */}
      <p className="absolute bottom-5 text-primary-foreground/50 text-sm tracking-widest">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
};

export default Lightbox;
