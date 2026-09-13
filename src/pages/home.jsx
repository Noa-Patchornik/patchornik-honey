import Header from "@/components/header";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}