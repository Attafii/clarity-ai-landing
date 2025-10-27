'use client';

import { Zap, Sparkles, Rocket, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OneShotPrompt() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-[#1a0b2e]/30 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A459E1]/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Trending Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] rounded-full shadow-xl animate-pulse">
            <TrendingUp className="h-5 w-5 text-black" />
            <span className="text-sm font-bold text-black">TRENDING: One-Shot Website Development</span>
            <Sparkles className="h-5 w-5 text-black" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Compelling Copy */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
                Build Entire Websites
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] bg-clip-text text-transparent">
                With One Prompt
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the <span className="text-[#F0CDFF] font-semibold">one-shot revolution</span>. 
              Clarity AI transforms your simple idea into a comprehensive, 
              AI-ready prompt that builds complete applications in a single shot.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Go from idea to full website in minutes, not days"
                },
                {
                  icon: Target,
                  title: "Precision Perfect",
                  description: "Every detail captured in one comprehensive prompt"
                },
                {
                  icon: Rocket,
                  title: "Production Ready",
                  description: "Get clean, maintainable code from the first try"
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-[#F0CDFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/30 transition-all duration-300 hover:scale-105 group"
            >
              Try One-Shot Mode
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Right: Visual Example */}
          <div className="relative">
            {/* Floating Example Card */}
            <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#0f051a] rounded-2xl border-2 border-[#A459E1]/30 shadow-2xl shadow-[#A459E1]/20 p-8 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A459E1]/10 via-transparent to-[#F0CDFF]/10" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 rounded-lg mb-6">
                  <span className="text-xs font-semibold text-[#F0CDFF]">ONE-SHOT PROMPT</span>
                </div>

                {/* Before */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">Your Basic Idea:</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <code className="text-sm text-muted-foreground font-mono">
                      "Create a landing page for my SaaS product"
                    </code>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 rounded-full border border-[#A459E1]/30">
                    <Sparkles className="h-4 w-4 text-[#F0CDFF] animate-pulse" />
                    <span className="text-xs font-semibold">Clarity AI Enhancement</span>
                    <Sparkles className="h-4 w-4 text-[#F0CDFF] animate-pulse" />
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-[#F0CDFF]">One-Shot Prompt Generated:</span>
                  </div>
                  <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 rounded-lg p-4 border-2 border-[#A459E1]/30 max-h-64 overflow-y-auto">
                    <code className="text-xs text-foreground/90 font-mono leading-relaxed block whitespace-pre-line">
{`Create a modern SaaS landing page with:

STRUCTURE:
- Hero section with animated gradient background
- Features showcase (grid layout, 6 features)
- Pricing table (3 tiers: Free, Pro, Enterprise)
- Testimonials carousel with social proof
- FAQ accordion (8-10 questions)
- CTA section with email capture
- Footer with sitemap and social links

DESIGN:
- Color scheme: Professional blues (#2563eb, #3b82f6)
- Typography: Inter for headings, System UI for body
- Responsive breakpoints: mobile, tablet, desktop
- Dark mode support with smooth transitions
- Micro-interactions on hover states

FEATURES:
- Smooth scroll navigation with active states
- Form validation with error handling
- Newsletter integration (API ready)
- Accessibility: ARIA labels, keyboard navigation
- SEO optimized: meta tags, semantic HTML
- Performance: lazy loading, optimized images

TECH STACK:
- Next.js 15 with App Router
- TypeScript with strict mode
- Tailwind CSS for styling
- Framer Motion for animations
- shadcn/ui component library

OUTPUT:
- Clean, production-ready code
- Proper file structure and organization
- Commented code for maintainability
- Mobile-first responsive design`}
                    </code>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F0CDFF]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#A459E1]/20 rounded-full blur-2xl" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-background to-[#1a0b2e] rounded-xl border border-[#A459E1]/30 p-4 shadow-xl backdrop-blur-sm">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-1">
                98%
              </div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-background to-[#1a0b2e] rounded-xl border border-[#A459E1]/30 p-4 shadow-xl backdrop-blur-sm">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-1">
                5min
              </div>
              <div className="text-xs text-muted-foreground">Avg. Build Time</div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-20 pt-12 border-t border-[#A459E1]/20">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by developers building the next generation of AI-powered applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "25K+", label: "One-Shot Prompts Created" },
              { stat: "500+", label: "Complete Apps Built" },
              { stat: "3.2M", label: "Lines of Code Generated" },
              { stat: "15sec", label: "Avg. Prompt Enhancement" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
