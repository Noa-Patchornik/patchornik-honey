import { motion } from "framer-motion";

const TIMELINE = [
  {
    year: "1890",
    title: "ההתחלה בנס ציונה",
    text: "משפחת פצ׳ורניק מקימה את המכוורת היהודית הראשונה בארץ ישראל, בין פרדסי ההדרים של המושבה הצעירה נס ציונה.",
  },
  {
    year: "1920",
    title: "שורשים עמוקים",
    text: "הדור השני מרחיב את המכוורת ומפתח זני דבש מפרחי בר יהודיים, תוך שמירה קפדנית על שיטות ייצור מסורתיות.",
  },
  {
    year: "1960",
    title: "מסורת של כשרות",
    text: "המכוורת מקבלת לראשונה תעודת כשרות רשמית, ומציבה רף חדש של טהרה ופיקוח בענף הדבש הישראלי.",
  },
  {
    year: "היום",
    title: "דור חמישי, אותה נאמנות",
    text: "היום, 135 שנים אחרי, ממשיכים צאצאי המשפחה לגדל דבש באותו נחלה, עם אותה מסירות לאדמה, לפרחים ולדבורה.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">אודות המכוורת</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-5 leading-tight text-balance">
            ארכיון חי של 135 שנות דבש
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            מפרדסי נס ציונה של סוף המאה ה-19 ועד היום — סיפורה של משפחה אחת ששמרה על אומנות הדבש במשך חמישה דורות.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Artifact image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-background">
              <img
                src="images\father.jpeg"
                alt="עבודה מסורתית בכוורת בפרדסי נס ציונה"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 right-6 text-primary-foreground">
                <p className="font-display text-xl">פרדסי נס ציונה</p>
                <p className="text-sm opacity-80">ארכיון המשפחה</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute right-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative pr-10"
                >
                  <div className="absolute right-0 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <span className="font-display text-2xl text-primary block mb-2">{item.year}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}