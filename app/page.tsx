import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden transition-colors">
      <Header />
      <Hero />
    
      <Footer />
    </div>
  );
}
