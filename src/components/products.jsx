import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PRODUCTS = [
  {
    name: "דבש אקליפטוס",
    source: "פרחי אקליפטוס",
    year: "רדייה 2025",
    price: "₪48",
    // תמונת הדבש הראשית
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    // תמונת פריחת האקליפטוס ב-Hover
    flowerImage: "images\\eucalyptus.jpg",
    note: "גוון ענבר כהה, טעם עמוק ומתקתק.",
  },
  {
    name: "דבש פרחי בר",
    source: "פרחי בר",
    year: "רדייה 2025",
    price: "₪52",
    // תמונת הדבש הראשית
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    // תמונת שדה פרחי בר ב-Hover
    flowerImage: "images\\perhai-bar.avif",
    note: "גוון זהוב בהיר, ארומה פרחונית עדינה.",
  },
  {
    name: "דבש הדרים",
    source: "פרחי הדרים",
    year: "רדייה 2025",
    price: "₪56",
    // תמונת הדבש הראשית
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80",
    // תמונת פריחת הדרים/תפוזים ב-Hover
    flowerImage: "images\\hadarim.jfif",
    note: "גוון זהוב, טעם מתוק ומרומם.",
  }
];

export default function Products() {
  const [added, setAdded] = useState({});
  const toggle = (i) => setAdded((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">גלריית הרדייה</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-5 leading-tight text-balance">
            הדבשים שלנו
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            כל צנצנת היא רדייה של עונה, מקום ופרח. ללא חימום, ללא ערבוב — דבש חי במיצוי קר.
          </p>
        </div>

        {/* שונה ל-grid של 3 עמודות במסכים רחבים */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* מעטפת התמונות עם אפקט Hover חלק */}
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-background shadow-xl">
                  {/* תמונת ברירת המחדל (דבש) */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                  />
                  {/* תמונת הפרח המופיעה בריחוף (Hover) */}
                  <img
                    src={p.flowerImage}
                    alt={`מקור הפריחה - ${p.source}`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />

                  {/* תגית שנת רדייה */}
                  <span className="absolute top-4 right-4 text-[11px] font-semibold tracking-widest uppercase text-primary-foreground bg-foreground/50 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none">
                    {p.year}
                  </span>

                  {/* תגית צפה שמסבירה ב-Hover שמדובר במקור הפריחה */}
                  <span className="absolute bottom-4 left-4 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    🌸 מקור הפריחה
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{p.name}</h3>
                    <p className="text-sm text-secondary mt-1">{p.source}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.note}</p>
                  </div>
                  <span className="font-display text-2xl text-primary whitespace-nowrap">{p.price}</span>
                </div>
              </div>

              <button
                onClick={() => toggle(i)}
                className={`mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-500 ${
                  added[i]
                    ? "bg-foreground text-background"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {added[i] ? (
                  <>
                    <Check size={18} /> נוסף לסל
                  </>
                ) : (
                  "הוסף לסל"
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-16">
           ייצור מקומי בנס ציונה
        </p>
      </div>
    </section>
  );
}