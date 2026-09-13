import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MessageCircle, Star, ZoomIn, X } from "lucide-react";

export default function PressPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // סגירת המודאל בלחיצה על מקש Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // חסימת גלילה כשהמודאל פתוח
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main className="pt-28 pb-24 flex-grow mx-auto max-w-7xl px-6 lg:px-10 w-full">
        {/* כותרת הדף */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">
            תקשורת וקהילה
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            כתבו עלינו
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            מילים חמות מעיתונות, לקוחות ואוהבי דבש לאורך השנים.
          </p>
        </div>

        {/* 3 כרטיסי המלצות וציטוטים */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="text-foreground/90 italic leading-relaxed mb-4">
              "הדבש של פצ׳ורניק מחזיר אותי לילדות בנס ציונה. איכות ללא פשרות, מרקם מושלם וטעם שלא מוצאים בשום מקום."
            </p>
            <span className="text-sm font-semibold text-secondary block">— הודעת לקוח</span>
          </div>

          <div className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <MessageCircle size={20} />
            </div>
            <p className="text-foreground/90 italic leading-relaxed mb-4">
              "הזמנו דבש לראש השנה לכל עובדי החברה, המשוב היה מדהים! כולם התלהבו מהאותנטיות והטעם."
            </p>
            <span className="text-sm font-semibold text-secondary block">— המלצת ווטסאפ</span>
          </div>
        </div>

        {/* אזור גזיר העיתון */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              מן העיתונות והארכיון
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              לחצו על הכתבה להגדלה וקריאה נוחה
            </p>
          </div>

          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer max-w-2xl mx-auto"
          >
            <img
              src="/images/about-us.jpeg"
              alt="כתבה בעיתונות על מכוורת פצ׳ורניק"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* שכבת Hover עם אייקון זכוכית מגדלת */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <ZoomIn size={24} />
              </div>
              <span className="text-sm font-semibold tracking-wide">
                לחצו להגדלת הכתבה
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Modal / Lightbox להגדלת התמונה */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all"
        >
          {/* כפתור סגירה */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 left-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="סגור"
          >
            <X size={24} />
          </button>

          {/* תמונה מוגדלת */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-xl shadow-2xl"
          >
            <img
              src="/images/about-us.jpeg"
              alt="כתבה בעיתונות על מכוורת פצ׳ורניק - מוגדל"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}