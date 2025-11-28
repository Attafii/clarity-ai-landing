'use client';

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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

export default function CTA() {
  const [sectionRef, isVisible] = useScrollAnimation();
  return (
    <section
      ref={sectionRef}
      className={`py-24 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-background to-[#0f051a]" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A459E1]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F0CDFF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className={`mx-auto max-w-5xl px-6 relative z-10 transition-all duration-1000 transform ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-[#A459E1]/30 shadow-2xl shadow-[#A459E1]/10 hover:shadow-[#A459E1]/20 transition-all duration-300">
          
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A459E1]/20 backdrop-blur-md border border-[#F0CDFF]/30 rounded-full">
              <Sparkles className="h-4 w-4 text-[#F0CDFF]" />
              <span className="text-sm font-medium text-[#F0CDFF]">100% Free & Open Source</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
              Ready to 10x Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] bg-clip-text text-transparent">
              Coding Productivity?
            </span>
          </h2>

          {/* Subheading */}
          <p className={`text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            Join thousands of developers who are already using ClarityAI to transform their GitHub Copilot experience. Get started in minutes.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "100% Free Forever",
              "No Credit Card Required",
              "Open Source"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#A459E1]" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
            <Button
              size="lg"
              onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai', '_blank')}
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/30 transition-all duration-300 hover:scale-105 group"
            >
              Install Extension
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://github.com/Attafii/ClarityAI', '_blank')}
              className="border-2 border-[#A459E1]/50 hover:border-[#F0CDFF] text-[#F0CDFF] hover:bg-[#A459E1]/10 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              View on GitHub
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-[#A459E1]/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-1">
                  Open Source
                </div>
                <div className="text-sm text-muted-foreground">MIT Licensed</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#A459E1]/20" />
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-1">
                  Context-Aware
                </div>
                <div className="text-sm text-muted-foreground">Smart Enhancement</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#A459E1]/20" />
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-1">
                  Privacy First
                </div>
                <div className="text-sm text-muted-foreground">No Code Sent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
