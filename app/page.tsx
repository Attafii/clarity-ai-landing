'use client';

import dynamic from 'next/dynamic';
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Demo from "@/components/sections/Demo";
import OneShotPrompt from "@/components/sections/OneShotPrompt";
import OpenSource from "@/components/sections/OpenSource";

// Lazy load heavy components for better initial load performance
const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-columns-1").then(mod => ({ default: mod.TestimonialsSection })), { ssr: false });
const Features = dynamic(() => import("@/components/ui/features-8").then(mod => ({ default: mod.Features })), { ssr: false });
const Features5 = dynamic(() => import("@/components/ui/features-5").then(mod => ({ default: mod.Features5 })), { ssr: false });
const CyberneticBentoGrid = dynamic(() => import("@/components/ui/cybernetic-bento-grid").then(mod => ({ default: mod.CyberneticBentoGrid })), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false });

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

      {/* Additional Features Section - Built for Scaling Teams */}
      <Features5 />

      {/* Open Source Section */}
      <OpenSource />

      {/* How It Works Section - Interactive Bento Grid */}
      <CyberneticBentoGrid />

      {/* Demo Section - See it in action */}
      <Demo />

      {/* One-Shot Prompt Section - Trending Feature */}
      <OneShotPrompt />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section - Final call to action */}
      <CTA />

      {/* Floating Navigation Dock */}
      <FloatingDockSection />
      
      <Footer />
    </div>
  );
}
