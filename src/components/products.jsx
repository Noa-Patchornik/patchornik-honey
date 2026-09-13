import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PRODUCTS = [
  {
    name: "דבש אקליפטוס",
    source: "פרחי אקליפטוס",
    year: "קציר 2025",
    price: "₪48",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    note: "גוון ענבר כהה, טעם עמוק ומתקתק.",
  },
  {
    name: "דבש פרחי בר",
    source: "פרחי בר יהודיים",
    year: "קציר 2025",
    price: "₪52",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    note: "גוון זהוב בהיר, ארומה פרחונית עדינה.",
  },
];

export default function Products() {
  const [added, setAdded] = useState({});
  const toggle = (i) => setAdded((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">גלריית הקציר</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-5 leading-tight text-balance">
            הדבשים שלנו
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            כל צנצנת היא קציר של עונה, מקום ופרח. ללא חימום, ללא ערבוב — דבש חי במיצוי קר.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-background shadow-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                <span className="absolute top-4 right-4 text-[11px] font-semibold tracking-widest uppercase text-primary-foreground bg-foreground/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {p.year}
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
        <p className="text-center text-sm text-muted-foreground mt-12">
          משלוחים בכל הארץ · אריזת מתנה יוקרתית זמינה · ייצור מקומי בנס ציונה
        </p>
      </div>
    </section>
  );
}