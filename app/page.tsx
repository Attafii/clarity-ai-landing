'use client';

import dynamic from 'next/dynamic';
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import OneShotPrompt from "@/components/sections/OneShotPrompt";
import OpenSource from "@/components/sections/OpenSource";

import { GitHubStarBanner } from "@/components/widgets/GitHubStarBanner";

const FeatureSpotlightCarousel = dynamic(() => import("@/components/sections/FeatureSpotlightCarousel").then(mod => ({ default: mod.FeatureSpotlightCarousel })), { ssr: false });
const ComparisonTable = dynamic(() => import("@/components/sections/ComparisonTable").then(mod => ({ default: mod.ComparisonTable })), { ssr: false });
const AnimatedStatistics = dynamic(() => import("@/components/sections/AnimatedStatistics").then(mod => ({ default: mod.AnimatedStatistics })), { ssr: false });
const BlogPostPreviews = dynamic(() => import("@/components/sections/BlogPostPreviews").then(mod => ({ default: mod.BlogPostPreviews })), { ssr: false });
const Testimonials = dynamic(() => import("@/components/ui/testimonials").then(mod => ({ default: mod.Testimonials })), { ssr: false });
const GlobalSearch = dynamic(() => import("@/components/widgets/GlobalSearch").then(mod => ({ default: mod.GlobalSearch })), { ssr: false });
const ExitIntentPopup = dynamic(() => import("@/components/widgets/ExitIntentPopup").then(mod => ({ default: mod.ExitIntentPopup })), { ssr: false });
const SocialProofNotifications = dynamic(() => import("@/components/widgets/SocialProofNotifications").then(mod => ({ default: mod.SocialProofNotifications })), { ssr: false });
const EmailCaptureWidget = dynamic(() => import("@/components/widgets/EmailCaptureWidget").then(mod => ({ default: mod.EmailCaptureWidget })), { ssr: false });
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

      {/* NEW: GitHub Star Banner */}
      <GitHubStarBanner />

      {/* NEW: Feature Spotlight Carousel */}
      <FeatureSpotlightCarousel />

      {/* Features Section */}
      <Features />

      {/* NEW: Animated Statistics */}
      <AnimatedStatistics />

      {/* Additional Features Section - Built for Scaling Teams */}
      <Features5 />

      {/* Open Source Section */}
      <OpenSource />

      {/* How It Works Section - Interactive Bento Grid */}
      <CyberneticBentoGrid />

      {/* One-Shot Prompt Section - Trending Feature */}
      <OneShotPrompt />

      {/* NEW: Comparison Table */}
      <ComparisonTable />

      {/* NEW: Testimonials Section */}
      <Testimonials />

      {/* NEW: Blog Post Previews */}
      <BlogPostPreviews />

      {/* NEW: Email Capture Widget */}
      <EmailCaptureWidget />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section - Final call to action */}
      <CTA />

      {/* Floating Navigation Dock */}
      <FloatingDockSection />

      {/* NEW: Floating Widgets */}
      <GlobalSearch />
      <ExitIntentPopup />
      <SocialProofNotifications />
      
      <Footer />
    </div>
  );
}
