import Header from "@/components/header";
import Kosher from "@/components/kosher";
import Footer from "@/components/footer";

export default function KosherPage() {
  return (
    <div className="min-h-screen bg-foreground text-background flex flex-col justify-between">
      <Header />
      <main className="pt-20 flex-grow">
        <Kosher />
      </main>
      <Footer />
    </div>
  );
}