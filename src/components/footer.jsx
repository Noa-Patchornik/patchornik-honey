import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [glow, setGlow] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#201813] text-[#f5efe6] pt-16 pb-10 border-t border-[#3a2c22]">
      {/* טקסטורת גרגר עדינה */}
      <div className="absolute inset-0 opacity-[0.04] honey-grain pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-[#3d2e24]">
          
          {/* מיתוג ולוגו */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3.5 group mb-4">
              <img 
                src="images/logo.jpg" 
                alt="לוגו מכוורת פצ׳ורניק" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl tracking-tight text-[#d48938] leading-none">
                  פצ׳ורניק
                </span>
                <span className="text-[11px] font-medium tracking-[0.25em] text-[#b8a99a] uppercase border-r border-[#4a3a2f] pr-2.5">
                  1890
                </span>
              </div>
            </Link>
            <p className="text-[#bfae9e] leading-relaxed max-w-xs text-sm">
              המכוורת היהודית הראשונה והוותיקה בארץ. מסורת משפחתית של דבש טהור בנס ציונה, מאז 1890.
            </p>
          </div>

          {/* ניווט מהיר */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-[#f0e3d2] mb-4">
              ניווט באתר
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-[#bfae9e] hover:text-[#d48938] transition-colors">
                  אודות המכוורת
                </Link>
              </li>
              <li>
                <Link to="/#benefits" className="text-[#bfae9e] hover:text-[#d48938] transition-colors">
                  יתרונות הדבש
                </Link>
              </li>
              <li>
                <Link to="/kosher" className="text-[#bfae9e] hover:text-[#d48938] transition-colors">
                  תעודת כשרות
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#bfae9e] hover:text-[#d48938] transition-colors">
                  הדבשים שלנו
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#bfae9e] hover:text-[#d48938] transition-colors">
                  צרו קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* יצירת קשר וחותם */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-[#f0e3d2] mb-4">
              צרו קשר
            </h4>
            <ul className="space-y-2.5 text-sm text-[#bfae9e]">
              <li>נס ציונה, מושבה היסטורית</li>
              <li dir="ltr" className="text-right">טל׳ 050-530-8770</li>
              <li>א׳–ה׳ 9:00–18:00</li>
            </ul>

            <div
              onMouseEnter={() => setGlow(true)}
              onMouseLeave={() => setGlow(false)}
              className="relative inline-flex items-center gap-3 mt-6 cursor-default"
            >
              <div
                className={`absolute -inset-2 rounded-full bg-[#d48938]/20 blur-lg transition-opacity duration-500 ${
                  glow ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="relative w-12 h-12 rounded-full border border-[#d48938]/50 flex items-center justify-center bg-[#d48938]/10 shadow-sm">
                <span className="font-display text-[11px] font-bold text-[#d48938] leading-tight text-center">
                  בד״ץ
                  <br />
                  כשר
                </span>
              </div>
              <span className="relative text-xs font-medium text-[#decbb8]">
                תחת השגחת בד״ץ מהדרין
              </span>
            </div>
          </div>

        </div>

        {/* שורת זכויות תחתונה */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#9d8c7c]">
          <p>© {year} מכוורת פצ׳ורניק. כל הזכויות שמורות.</p>
          <p className="font-display text-[#c8b7a4]">135 שנות דבש · נס ציונה</p>
        </div>
      </div>
    </footer>
  );
}