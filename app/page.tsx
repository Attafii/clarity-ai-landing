'use client';

import dynamic from 'next/dynamic';
import { lazy, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import FloatingDockSection from '@/components/sections/FloatingDockSection';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import OneShotPrompt from '@/components/sections/OneShotPrompt';
import OpenSource from '@/components/sections/OpenSource';

import { GitHubStarBanner } from '@/components/widgets/GitHubStarBanner';

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="w-full h-64 bg-gradient-to-r from-gray-900 to-gray-800 animate-pulse rounded-lg" />
);

// ============================================
// ABOVE-THE-FOLD COMPONENTS (SSR enabled)
// ============================================
// These load immediately with server-side rendering for better first paint
const FeatureSpotlightCarousel = dynamic(
  () =>
    import('@/components/sections/FeatureSpotlightCarousel').then((mod) => ({
      default: mod.FeatureSpotlightCarousel,
    })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true, // Enable SSR for above-the-fold
  }
);

const Features = dynamic(
  () => import('@/components/ui/features-8').then((mod) => ({ default: mod.Features })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true, // Enable SSR for above-the-fold
  }
);

// ============================================
// MIDDLE-OF-PAGE COMPONENTS (Lazy loading)
// ============================================
const AnimatedStatistics = dynamic(
  () =>
    import('@/components/sections/AnimatedStatistics').then((mod) => ({
      default: mod.AnimatedStatistics,
    })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false, // Lazy load
  }
);

const Features5 = dynamic(
  () => import('@/components/ui/features-5').then((mod) => ({ default: mod.Features5 })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const CyberneticBentoGrid = dynamic(
  () =>
    import('@/components/ui/cybernetic-bento-grid').then((mod) => ({
      default: mod.CyberneticBentoGrid,
    })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const ComparisonTable = dynamic(
  () =>
    import('@/components/sections/ComparisonTable').then((mod) => ({
      default: mod.ComparisonTable,
    })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

// ============================================
// BELOW-THE-FOLD COMPONENTS (Defer loading)
// ============================================
const Testimonials = dynamic(
  () => import('@/components/ui/testimonials').then((mod) => ({ default: mod.Testimonials })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const BlogPostPreviews = dynamic(
  () =>
    import('@/components/sections/BlogPostPreviews').then((mod) => ({
      default: mod.BlogPostPreviews,
    })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const EmailCaptureWidget = dynamic(
  () =>
    import('@/components/widgets/EmailCaptureWidget').then((mod) => ({
      default: mod.EmailCaptureWidget,
    })),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

// ============================================
// INTERACTIVE WIDGETS (Load on demand)
// ============================================
const GlobalSearch = dynamic(
  () =>
    import('@/components/widgets/GlobalSearch').then((mod) => ({
      default: mod.GlobalSearch,
    })),
  {
    ssr: false,
  }
);

const ExitIntentPopup = dynamic(
  () =>
    import('@/components/widgets/ExitIntentPopup').then((mod) => ({
      default: mod.ExitIntentPopup,
    })),
  {
    ssr: false,
  }
);

const SocialProofNotifications = dynamic(
  () =>
    import('@/components/widgets/SocialProofNotifications').then((mod) => ({
      default: mod.SocialProofNotifications,
    })),
  {
    ssr: false,
  }
);

// Footer - important for SEO, load early
const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden transition-colors">
      <Header />

      {/* ===== CRITICAL PATH ===== */}
      <section id="home">
        <Hero />
      </section>

      <GitHubStarBanner />

      <Suspense fallback={<LoadingSkeleton />}>
        <FeatureSpotlightCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Features />
      </Suspense>

      {/* ===== SECONDARY CONTENT ===== */}
      <Suspense fallback={<LoadingSkeleton />}>
        <AnimatedStatistics />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Features5 />
      </Suspense>

      <OpenSource />

      <Suspense fallback={<LoadingSkeleton />}>
        <CyberneticBentoGrid />
      </Suspense>

      <OneShotPrompt />

      <Suspense fallback={<LoadingSkeleton />}>
        <ComparisonTable />
      </Suspense>

      {/* ===== ENGAGEMENT CONTENT ===== */}
      <Suspense fallback={<LoadingSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <BlogPostPreviews />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <EmailCaptureWidget />
      </Suspense>

      <FAQ />
      <CTA />

      <FloatingDockSection />

      {/* ===== INTERACTIVE WIDGETS (Load on demand) ===== */}
      <GlobalSearch />
      <ExitIntentPopup />
      <SocialProofNotifications />

      <Footer />
    </div>
  );
}
