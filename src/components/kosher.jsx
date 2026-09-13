
import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ScrollText, Sparkles } from "lucide-react";

const PILLARS = [
  { icon: ScrollText, title: "פיקוח רבני מלא", text: "כל שלבי הייצור — מהכוורת ועד האריזה — נעשים בהשגחה צמודה של גוף כשרות מוסמך." },
  { icon: BadgeCheck, title: "תעודת כשרות רשמית", text: "המכוורת נושאת תעודת כשרות בד״ץ תקפה, המתחדשת מדי שנה באופן קבוע מאז שנות ה-60." },
  { icon: Sparkles, title: "טהרה ללא פשרות", text: "אנו מקפידים על הפרדה מלאה, ציוד ייעודי ונהלי עבודה המבטיחים טהרה ברמה הגבוהה ביותר." },
];

export default function Kosher() {
  return (
    <section id="kosher" className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] honey-grain" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Seal of purity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-primary/40 flex items-center justify-center text-center bg-gradient-to-br from-primary/15 to-transparent">
                <div className="absolute inset-4 rounded-full border border-primary/30" />
                <div className="relative px-8">
                  <span className="block text-xs tracking-[0.3em] text-secondary uppercase mb-3">חותם הטהרה</span>
                  <span className="font-display text-5xl lg:text-6xl text-primary block">בד״ץ</span>
                  <span className="block text-sm tracking-widest text-background/70 mt-3">תעודת כשרות</span>
                  <div className="mt-4 w-12 h-px horizon-rule mx-auto" />
                  <span className="block text-xs text-background/60 mt-3">נס ציונה · 1890</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">חותם הטהרה</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight text-balance">
              כשרות שהיא <span className="text-primary">אות וברית</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/75 max-w-xl">
              תעודת הכשרות של מכוורת פצ׳ורניק אינה רק אישור — היא חלק בלתי־נפרד מהמסורת שלנו מזה עשרות שנים. חותם
              הטהרה שמבטיח לכם דבש שעבר פיקוח מלא בכל שלב.
            </p>

            <div className="mt-10 space-y-6">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">{p.title}</h3>
                      <p className="text-background/65 leading-relaxed text-[15px]">{p.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
