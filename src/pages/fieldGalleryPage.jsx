import Header from "@/components/header";
import Footer from "@/components/footer";

const FIELD_GALLERY = [
  { src: "images/bees-zoom-in.JPG", title: "דבורים מקרוב" },
  { src: "images/bees.JPG", title: "דבורים על חלת דבש" },
  { src: "images/working.jpeg", title: "עבודה בשקדיות" },
  { src: "images/working-in-field.jpeg", title: "בדיקת מסגרות כוורת" },
  { src: "images/showing-queen.jpeg", title: "הצגת המלכה" },
  { src: "images/queen-bee.JPG", title: "מלכת הכוורת" },
];

export default function FieldGalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main className="pt-28 pb-24 flex-grow mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-secondary uppercase">חיבור לאדמה</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">תמונות שטח ומכוורת</h1>
          <p className="mt-4 text-muted-foreground text-lg">הצצה לעבודה בכוורות</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FIELD_GALLERY.map((img, i) => (
            <div key={i} className="group relative aspect-square rounded-lg overflow-hidden bg-card shadow-md">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium text-sm">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}