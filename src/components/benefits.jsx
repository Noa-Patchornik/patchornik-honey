
import { motion } from "framer-motion";
import { Sparkles, Activity, Flower, ShieldCheck, Heart, Brain } from "lucide-react";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "עשיר בנוגדי חמצון",
    text: "דבש טבעי מכיל ריכוז גבוה של פלבונואידים ונוגדי חמצון המסייעים בהגנה על תאי הגוף.",
    variety: "דבש אקליפטוס",
  },
  {
    icon: Activity,
    title: "חיות אנזימטית",
    text: "אנזימים טבעיים המיוצרים על ידי הדבורים תומכים בעיכול ובספיגת חומרים מזינים.",
    variety: "דבש פרחי בר",
  },
  {
    icon: Flower,
    title: "שלמות פולן מקומי",
    text: "פולן מאזור נס ציונה תורם לחיזוק המערכת החיסונית ולהתמודדות עם אלרגנים מקומיים.",
    variety: "דבש פרחי הדר",
  },
  {
    icon: ShieldCheck,
    title: "חיזוק טבעי למערכת החיסון",
    text: "תכונות אנטי-בקטריאליות טבעיות הופכות את הדבש לבעל ברית בעונת החורף.",
    variety: "דבש קורנית",
  },
  {
    icon: Heart,
    title: "אנרגיה טבעית מתמשכת",
    text: "סוכרים פשוטים בעלי ספיגה הדרגתית מספקים אנרגיה יציבה ללא תנודות חדות.",
    variety: "דבש פרחי בר",
  },
  {
    icon: Brain,
    title: "תמיכה בריכוז וברוגע",
    text: "צריכה מתונה של דבש טבעי מסייעת להרגעה ולשיפור איכות השינה.",
    variety: "דבש אקליפטוס",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">אלכימיה ובריאות</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-5 leading-tight text-balance">
              הטבלה המחזורית של יתרונות הדבש
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground lg:pb-2">
            דבש טהור אינו רק מתיקות — הוא מרכז של תרכובות פעילים. אלו הסגולות שהופכות כל צנצנת למעשה טבעי.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative bg-background p-8 lg:p-10 hover:bg-card transition-colors duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{b.text}</p>
                <div className="mt-5 pt-4 border-t border-border/60">
                  <span className="text-xs font-semibold tracking-wide text-secondary">{b.variety}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
