import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [glow, setGlow] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-background/15">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-primary">פצ׳ורניק</span>
              <span className="text-[11px] tracking-[0.25em] text-background/50 uppercase">1890</span>
            </div>
            <p className="mt-4 text-background/60 leading-relaxed max-w-xs">
              המכוורת היהודית הראשונה והוותיקה בארץ. נס ציונה, מאז 1890.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-background/80 mb-4">ניווט</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/60 hover:text-primary transition-colors">אודות המכוורת</Link></li>
              <li><Link to="/#benefits" className="text-background/60 hover:text-primary transition-colors">יתרונות הדבש</Link></li>
              <li><Link to="/kosher" className="text-background/60 hover:text-primary transition-colors">תעודת כשרות</Link></li>
              <li><Link to="/products" className="text-background/60 hover:text-primary transition-colors">הדבשים שלנו</Link></li>
              <li><Link to="/contact" className="text-background/60 hover:text-primary transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-background/80 mb-4">צרו קשר</h4>
            <ul className="space-y-3 text-background/60">
              <li>נס ציונה, מושבה היסטורית</li>
              <li dir="ltr" className="text-right">טל׳ 050-530-8770 </li>
              <li>א׳–ה׳ 9:00–18:00</li>
            </ul>
            <div
              onMouseEnter={() => setGlow(true)}
              onMouseLeave={() => setGlow(false)}
              className="relative inline-flex items-center gap-3 mt-6 cursor-default"
            >
              <div className={`absolute -inset-3 rounded-full bg-primary/30 blur-xl transition-opacity duration-500 ${glow ? "opacity-100" : "opacity-0"}`} />
              <div className="relative w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center bg-primary/10">
                <span className="font-display text-xs text-primary leading-tight text-center">בד״ץ<br/>כשר</span>
              </div>
              <span className="relative text-sm text-background/70">תחת כשרות בד״ץ</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/45">
          <p>© {year} מכוורת פצ׳ורניק. כל הזכויות שמורות.</p>
          <p className="font-display text-background/60">135 שנות דבש · נס ציונה</p>
        </div>
      </div>
    </footer>
  );
}
