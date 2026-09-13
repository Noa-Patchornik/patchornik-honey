import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

const PILLARS = [
  { 
    icon: BadgeCheck, 
    title: "תעודת כשרות רשמית", 
    text: "המכוורת נושאת תעודת כשרות בד״ץ תקפה, המתחדשת מדי שנה באופן קבוע." 
  },
  { 
    icon: Sparkles, 
    title: "טהרה ללא פשרות", 
    text: "אנו מקפידים על הפרדה מלאה, ציוד ייעודי ונהלי עבודה המבטיחים טהרה ברמה הגבוהה ביותר." 
  },
];

export default function Kosher() {
  return (
    <section id="kosher" className="relative py-20 lg:py-28 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] honey-grain pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative">
        
        {/* כותרת ופסקת פתיחה */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">
            חותם הטהרה
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight text-balance">
            תעודת <span className="text-primary">כשרות</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            תעודת הכשרות של מכוורת פצ׳ורניק אינה רק אישור — היא חלק בלתי־נפרד מהמסורת המשפחתית שלנו. חותם
            הטהרה שמבטיח לכם דבש טהור ואיכותי שעבר פיקוח מלא בכל שלב.
          </p>
        </div>

        {/* כרטיסי עקרונות ברקע בהיר */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* תעודה מוגדלת ומרכזית */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-4xl bg-card p-3 sm:p-5 rounded-2xl border border-border shadow-xl">
            <img
              src="/images/kosher.jpg"
              alt="תעודת כשרות מכוורת פצ׳ורניק"
              className="w-full h-auto rounded-xl object-contain mx-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}