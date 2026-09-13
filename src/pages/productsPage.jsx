import Header from "@/components/header";
import Products from "@/components/products";
import Footer from "@/components/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main className="pt-20 flex-grow">
        <Products />
      </main>
      <Footer />
    </div>
  );
}