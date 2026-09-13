import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Phone, MapPin, Clock, MessageSquare, AlertCircle } from "lucide-react";

// מספרי וואטסאפ בפורמט בינלאומי לקישורים
const WHATSAPP_NUMBER_TIRZA = "972545653070";
const WHATSAPP_NUMBER_NITZAN = "972505308770";

// מספרי טלפון לתצוגה
const DISPLAY_PHONE_TIRZA = "054-565-3070";
const DISPLAY_PHONE_NITZAN = "050-530-8770";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // איפוס הודעת השגיאה בזמן הקלדה
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // בדיקת ולידציה - האם כל השדות מולאו
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("נא למלא את כל השדות כדי שנוכל לחזור אליכם.");
      return;
    }

    // ניסוח הודעה אוטומטית שתישלח לתרזה (אמא)
    const text = `שלום תרזה, פנייה חדשה מאתר המכוורת:\n\n👤 שם: ${formData.fullName}\n📞 טלפון: ${formData.phone}\n💬 הודעה: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER_TIRZA}?text=${encodeURIComponent(text)}`;

    // פתיחת וואטסאפ עם ההודעה המוכנה
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main className="pt-28 pb-24 flex-grow mx-auto max-w-5xl px-6 lg:px-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">
            אנחנו כאן
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            צרו קשר
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            נשמח לענות על כל שאלה, לייעץ בבחירת הדבש או לתאם איסוף והזמנות מיוחדות.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* פרטי התקשרות */}
          <div className="bg-card border border-border p-8 rounded-2xl space-y-6 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-foreground">פרטי התקשרות</h2>
            
            <div className="space-y-4 text-foreground/80">
              {/* כתובת */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">כתובת</p>
                  <p className="font-medium">נס ציונה (המכוורת ההיסטורית)</p>
                </div>
              </div>

              {/* טלפון ניצן */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">טלפון — ניצן</p>
                  <a 
                    href={`tel:${DISPLAY_PHONE_NITZAN}`} 
                    className="font-medium hover:text-primary transition-colors block text-left" 
                    dir="ltr"
                  >
                    {DISPLAY_PHONE_NITZAN}
                  </a>
                </div>
              </div>

              {/* טלפון תרזה */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">טלפון — תרזה</p>
                  <a 
                    href={`tel:${DISPLAY_PHONE_TIRZA}`} 
                    className="font-medium hover:text-primary transition-colors block text-left" 
                    dir="ltr"
                  >
                    {DISPLAY_PHONE_TIRZA}
                  </a>
                </div>
              </div>

              {/* שעות פעילות */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">שעות פעילות</p>
                  <p className="font-medium">ראשון – חמישי: 09:00 – 18:00</p>
                </div>
              </div>
            </div>

            {/* כפתורי וואטסאפ ישירים */}
            <div className="pt-6 border-t border-border space-y-3">
              <p className="text-xs font-semibold text-muted-foreground mb-1">
                וואטסאפ ישיר לשיחה מהירה:
              </p>
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER_TIRZA}?text=${encodeURIComponent("שלום תרזה, אשמח לפרטים על הדבש")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-sm text-sm"
              >
                <MessageSquare size={17} />
                הודעת וואטסאפ לתרזה
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER_NITZAN}?text=${encodeURIComponent("שלום ניצן, אשמח לפרטים על הדבש")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl transition-colors shadow-sm text-sm"
              >
                <MessageSquare size={17} />
                הודעת וואטסאפ לניצן
              </a>
            </div>
          </div>

          {/* טופס פנייה (שולח ישירות לוואטסאפ של תרזה) */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h2 className="font-heading text-2xl font-bold mb-2">השאירו פנייה</h2>
            <p className="text-sm text-muted-foreground mb-6">
              מלאו את הפרטים וההודעה תיפתח ישירות בוואטסאפ מול תרזה.
            </p>

            {/* הצגת שגיאה במידה ושדות חסרים */}
            {error && (
              <div className="mb-4 p-3.5 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-2">
                <AlertCircle size={18} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">שם מלא</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                  placeholder="ישראל ישראלי"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">טלפון</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground text-right"
                  placeholder="050-0000000"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">הודעה</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground resize-none"
                  placeholder="במה נוכל לעזור?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                שליחת הודעה לתרזה בוואטסאפ
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}