'use client';

import { Check, Sparkles, Zap, Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDockSection from "@/components/sections/FloatingDockSection";

export default function PricingPage() {
  const plan = {
    name: "Open Source",
    price: "$0",
    period: "forever",
    description: "Free and open-source for everyone",
    badge: "100% Free",
    features: [
      "Unlimited prompt enhancements",
      "Advanced AI analysis",
      "VS Code integration",
      "Custom prompt templates",
      "Team collaboration",
      "Analytics dashboard",
      "Community support",
      "API access",
      "Regular updates",
      "Open-source codebase",
      "Self-hosting option",
      "Community contributions welcome",
      "Transparent development",
      "No vendor lock-in"
    ],
    cta: "Get Started Free",
    icon: Sparkles
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A459E1]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F0CDFF]/10 rounded-full blur-3xl" />
          
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            {/* Back Link */}
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#A459E1] transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            {/* Open Source Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] rounded-full shadow-xl">
                <Sparkles className="h-5 w-5 text-black" />
                <span className="text-sm font-bold text-black">100% FREE & OPEN SOURCE</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
                Pricing Plans
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Clarity AI is a <span className="text-[#F0CDFF] font-semibold">100% free and open-source</span> project. 
                No hidden costs, no premium tiers, no paywalls. Built by the community, for the community.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                "No credit card required",
                "Open-source forever",
                "Self-hosting available",
                "Community driven"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#A459E1]" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-12 relative">
          <div className="mx-auto max-w-2xl px-6">
            <div className="relative rounded-2xl p-10 backdrop-blur-sm bg-gradient-to-b from-[#A459E1]/20 to-[#F0CDFF]/10 border-2 border-[#A459E1]/50 shadow-2xl shadow-[#A459E1]/20">
              {/* Open Source Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  🎉 ALWAYS FREE & OPEN SOURCE
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#A459E1] to-[#F0CDFF]">
                  <Sparkles className="h-8 w-8 text-black" />
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-3xl font-bold mb-3 text-center">{plan.name}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-center mb-8">{plan.description}</p>

              {/* Price */}
              <div className="mb-8 text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <p className="text-lg text-[#F0CDFF] font-semibold mt-2">
                  Free {plan.period}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full mb-10 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold shadow-lg hover:shadow-xl hover:shadow-[#A459E1]/25"
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#A459E1]" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Why is Clarity AI free?",
                  a: "Clarity AI is an open-source project built by the community, for the community. We believe powerful AI tools should be accessible to everyone, not locked behind paywalls. The code is public, transparent, and free to use forever."
                },
                {
                  q: "Will it ever become paid?",
                  a: "No. Clarity AI will always remain free and open-source. You can even self-host it if you prefer. We're committed to keeping AI development tools accessible to all developers."
                },
                {
                  q: "How can I contribute?",
                  a: "We welcome contributions! You can contribute code, report bugs, suggest features, or help with documentation on our GitHub repository. Every contribution helps make Clarity AI better for everyone."
                },
                {
                  q: "Can I use it commercially?",
                  a: "Yes! Clarity AI is licensed under an open-source license that allows commercial use. Use it in your projects, at your company, or anywhere else without restrictions."
                },
                {
                  q: "How is the project funded?",
                  a: "Clarity AI is maintained by passionate developers and supported by the community. If you find it valuable, consider contributing code, spreading the word, or supporting the project through GitHub Sponsors."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-[#A459E1]/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-3 text-[#F0CDFF]">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/5 backdrop-blur-sm rounded-3xl p-12 border border-[#A459E1]/30 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of developers using Clarity AI to enhance their GitHub Copilot experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/30 transition-all duration-300 hover:scale-105"
                >
                  Start Using Clarity AI
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#A459E1]/50 hover:border-[#F0CDFF] text-[#F0CDFF] hover:bg-[#A459E1]/10 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/#demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Navigation Dock */}
      <FloatingDockSection />
    </div>
  );
}
