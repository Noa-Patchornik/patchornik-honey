import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const IMAGES = [
  {
    src: "images\\hamania.jpeg",
    alt: "חמנייה עם דבורים",
  },
  {
    src: "images\\glass.jpeg",
    alt: "צנצנת זכוכית",
  },
  {
    src: "images\\working.jpeg",
    alt: "מהשדה לצנצנת",
  },
  {
    src: "images\\pouring.JPG",
    alt: "מזיגת דבש",
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={IMAGES[index].src}
            alt={IMAGES[index].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-background" : "w-1.5 bg-background/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}