'use client';

import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
};

export default function Pricing() {
  const [sectionRef, isVisible] = useScrollAnimation();
  const plan = {
    name: "Open Source",
    price: "$0",
    period: "forever",
    description: "Free for everyone, always",
    features: [
      "Unlimited prompt enhancements",
      "Triple command support (@clarity, @clarity-thinking, @clarity-fast)",
      "Context-aware AI analysis",
      "VS Code & Copilot Chat integration",
      "TODO detection & grammar correction",
      "Community support",
      "100% Open-source codebase",
      "Self-hosting option",
      "No vendor lock-in",
      "Privacy-focused (prompts only, never code)"
    ],
    cta: "Get Started Free",
    icon: Sparkles
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className={`py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A459E1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F0CDFF]/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-md border border-[#A459E1]/30 rounded-full mb-6">
            <span className="text-sm font-bold text-[#F0CDFF]">🎉 100% FREE & OPEN SOURCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
            Always Free, Forever Open
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden costs, no premium tiers. Built by the community, for the community.
          </p>
        </div>

        {/* Pricing Card */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 transform hover:scale-105 cursor-pointer ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <div className="relative rounded-2xl p-10 backdrop-blur-sm bg-gradient-to-b from-[#A459E1]/20 to-[#F0CDFF]/10 border-2 border-[#A459E1]/50 shadow-2xl shadow-[#A459E1]/20 hover:shadow-[#A459E1]/40 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                ALWAYS FREE
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

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-muted-foreground text-sm">
            100% free and open-source. No credit card required.{' '}
            <a href="https://github.com/Attafii/ClarityAI" className="text-[#A459E1] hover:text-[#F0CDFF] transition-colors underline">
              View on GitHub
            </a>
          </p>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto">
            <strong>Privacy Note:</strong> Only your prompts are sent for enhancement - never your actual code. 
            Read our{' '}
            <a href="/privacy" className="text-[#A459E1] hover:text-[#F0CDFF] underline">Privacy Policy</a>
            {' '}for details.
          </p>
        </div>
      </div>
    </section>
  );
}
