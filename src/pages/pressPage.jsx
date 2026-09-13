import Header from "@/components/header";
import Footer from "@/components/footer";
import { MessageCircle, Award, Star } from "lucide-react";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main className="pt-28 pb-24 flex-grow mx-auto max-w-7xl px-6 lg:px-10 w-full">
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

        {/* מקום להודעות / כתבות / תמונות עיתונות */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="text-foreground/90 italic leading-relaxed mb-4">
              "הדבש של פצ׳ורניק מחזיר אותי לילדות בנס ציונה. איכות ללא פשרות, מרקם מושלם וטעם שלא מוצאים בשום סופרמרקט."
            </p>
            <span className="text-sm font-semibold text-secondary block">— הודעת לקוח</span>
          </div>

          <div className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Award size={20} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">מסורת של 135 שנה</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              אזכור המכוורת הוותיקה בארץ בכתבת מורשת על חלוצי ההתיישבות וענף הדבוראות בישראל.
            </p>
            <span className="text-xs text-primary font-medium">עיתונות מקומית</span>
          </div>

          <div className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <MessageCircle size={20} />
            </div>
            <p className="text-foreground/90 italic leading-relaxed mb-4">
              "הזמנו מארזים לראש השנה לכל עובדי החברה, המשוב היה מדהים! כולם התלהבו מהאותנטיות והאריזה."
            </p>
            <span className="text-sm font-semibold text-secondary block">— המלצת ווטסאפ</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}