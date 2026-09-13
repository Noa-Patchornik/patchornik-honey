
import { motion } from "framer-motion";
import HeroCarousel from "./images";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 honey-grain opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-sm overflow-hidden shadow-2xl">
            <HeroCarousel />
          </div>
          {/* Wax seal mark */}
          <div className="absolute -bottom-6 -left-6 lg:-left-10 w-28 h-28 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-center shadow-xl rotate-[-8deg]">
            <span className="font-display text-3xl leading-none">1890</span>
            <span className="text-[9px] tracking-[0.2em] uppercase mt-1">נס ציונה</span>
          </div>
        </motion.div>

        {/* Text */}
        <div className="order-1 lg:order-2 text-center lg:text-right">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-xs font-semibold tracking-[0.3em] text-secondary uppercase mb-6"
          >
            המכוורת היהודית הראשונה בארץ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance"
          >
            פצ׳ורניק
            <span className="block text-primary mt-3">מאז 1890</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-7 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 lg:mr-0"
          >
            135 שנות מסורת משפחתית של ייצור דבש טהור בנס ציונה. מפרחי הדרי יהודה ועד צנצנת הזכוכית — כל טיפה היא רגע
            משומר מנשמת ארץ ישראל.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              גלו את סדרת הדבש
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              סיפור המשפחה
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizon rule */}
      <div className="absolute bottom-0 inset-x-0 h-px horizon-rule" />
    </section>
  );
}
