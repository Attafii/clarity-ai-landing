import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import { TestimonialsSection } from "@/components/ui/testimonials-columns-1";
import { Features } from "@/components/ui/features-8";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Features Section */}
      <Features />

      {/* AI Solutions Section */}
      <section id="solutions" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">AI Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our cutting-edge AI solutions designed to transform your workflow and enhance productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our suite of AI-powered products that streamline development and boost team collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Innovation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading the future of AI-assisted development with breakthrough technologies and methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Analytics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gain insights into your development process with comprehensive analytics and performance metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Security</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security measures to protect your code and data throughout the development lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">About</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission to revolutionize software development through intelligent AI assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team to learn more about how Clarity AI can transform your development process.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Floating Navigation Dock */}
      <FloatingDockSection />
      
      <Footer />
    </div>
  );
}
