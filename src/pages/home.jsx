import Header from "@/components/header";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Kosher from "@/components/kosher";
import Products from "@/components/products";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Kosher />
        <Products />
      </main>
      <Footer />
    </div>
  );
}