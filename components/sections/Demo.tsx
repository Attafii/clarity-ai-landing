'use client';

import { Play, Code2, Sparkles, ArrowRight } from "lucide-react";
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

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sectionRef, isVisible] = useScrollAnimation();

  const [activeExample, setActiveExample] = useState(0);
  
  const examples = [
    {
      title: "Function Creation",
      before: "create a function",
      after: `[QUALITY SCORE: 9.2/10]
[ROUTE: @clarity-thinking]
[DETECTED: Next.js + TypeScript]

Create a TypeScript function that:
- Accepts an array of user objects with name and email
- Validates email format using zod (Project standard detected)
- Filters out invalid entries with detailed error logging
- Returns sorted array by name (ascending)
- Includes JSDoc comments & TSDoc tags
- Handles edge cases (null, undefined, empty array)
- Uses proper TypeScript interfaces for data safety`
    },
    {
      title: "API Endpoint",
      before: "make a login endpoint",
      after: `[QUALITY SCORE: 9.8/10]
[ROUTE: @clarity-thinking]
[CONTEXT: Prisma + NextAuth v5 detected]

Create a Next.js 15 API route for user login with:

AUTHENTICATION:
- Email and password validation via Zod
- Argon2 password hashing comparison
- JWT token generation with 7-day expiration
- HttpOnly cookie for session management

SECURITY:
- Rate limiting (Upstash Redis pattern)
- CSRF protection enabled
- Input sanitization
- Compliance with OWASP Top 10

ERROR HANDLING:
- Specialized Prisma error catching
- User-friendly error responses
- Detailed server logs via Winston

TypeScript types for all request/response models`
    },
    {
      title: "React Component",
      before: "create a todo app",
      after: `[QUALITY SCORE: 9.5/10]
[ROUTE: @clarity-thinking]
[TEMPLATE: ui:feature-list]

Create a React TypeScript todo application with:

COMPONENTS:
- TodoList: Main container using shadcn/ui
- TodoItem: Framer Motion animations included
- TodoInput: Validation with React Hook Form
- Accessibility: ARIA labels & Screen reader optimization

STATE MANAGEMENT:
- Use Context API / TanStack Query
- LocalStorage persistence
- Optimistic UI updates for zero-lag feeling

FEATURES:
- Responsive design (Tailwind mobile-first)
- Dark mode support
- Keyboard shortcuts (Ctrl+Enter to add)

OUTPUT: Production-ready clean code.`
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="demo"
      className={`py-24 bg-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A459E1]/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A459E1]/10 backdrop-blur-md border border-[#F0CDFF]/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-[#F0CDFF]" />
            <span className="text-sm font-medium text-[#F0CDFF]">See It In Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
            Watch ClarityAI Transform Your Prompts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real examples showing how ClarityAI enhances simple prompts into detailed, context-rich instructions
          </p>
        </div>

        {/* Example Tabs */}
        <div className={`flex justify-center gap-3 mb-8 flex-wrap transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeExample === index
                  ? 'bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          {/* Before: Basic Prompt */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30">
                <Code2 className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Before: Basic Prompt</h3>
                <p className="text-sm text-muted-foreground">What most developers write</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-red-500/5 to-background border border-red-500/20 rounded-xl p-6 min-h-48 flex items-center justify-center group-hover:border-red-500/40 transition-colors">
              <code className="text-2xl font-mono text-muted-foreground text-center">{examples[activeExample].before}</code>
              <div className="absolute top-3 right-3">
                <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-md font-medium">
                  Vague
                </span>
              </div>
            </div>
          </div>

          {/* After: Enhanced Prompt */}
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#A459E1] to-[#F0CDFF]">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">After: Enhanced with ClarityAI</h3>
                <p className="text-sm text-muted-foreground">Context-rich & precise</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/5 border-2 border-[#A459E1]/30 rounded-xl p-6 min-h-48 max-h-96 overflow-auto group-hover:border-[#A459E1]/50 transition-colors">
              <code className="text-sm font-mono text-foreground/90 whitespace-pre-line leading-relaxed">
                {examples[activeExample].after}
              </code>
              <div className="absolute top-3 right-3">
                <span className="text-xs px-2 py-1 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black rounded-md font-medium">
                  Precise
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-sm rounded-full border border-[#A459E1]/30">
            <span className="text-sm font-medium">Transformed in milliseconds</span>
            <ArrowRight className="h-4 w-4 text-[#A459E1] animate-pulse" />
          </div>
        </div>

        {/* Video Demo Placeholder */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '350ms' : '0ms' }}>
          <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#0f051a] rounded-2xl overflow-hidden border-2 border-[#A459E1]/30 shadow-2xl shadow-[#A459E1]/20 hover:shadow-[#A459E1]/40 hover:border-[#A459E1]/50 transition-all duration-300">
            {/* Video Thumbnail/Placeholder */}
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group flex flex-col items-center gap-4 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/50 transition-all duration-300 hover:scale-110 group-hover:rotate-12">
                    <Play className="h-10 w-10 text-black ml-1" fill="currentColor" />
                  </div>
                  <span className="text-lg font-semibold text-[#F0CDFF] group-hover:text-white transition-colors">
                    Watch 2-Minute Demo
                  </span>
                </button>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">
                    [Video player would be embedded here]
                  </p>
                </div>
              )}
            </div>

            {/* Video Info Bar */}
            <div className="bg-background/50 backdrop-blur-sm border-t border-[#A459E1]/20 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-1">Full Product Demo</h4>
                  <p className="text-sm text-muted-foreground">See Clarity AI in action with real-world examples</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>2:15</span>
                  <span>•</span>
                  <span>Updated Oct 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          {[
            {
              title: "10x Faster",
              description: "Get better code suggestions with your first prompt"
            },
            {
              title: "Context-Aware",
              description: "Clarity AI understands your codebase and intent"
            },
            {
              title: "Always Learning",
              description: "Our AI improves with every prompt you write"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 rounded-xl border border-[#A459E1]/20 hover:border-[#A459E1]/40 hover:shadow-lg hover:shadow-[#A459E1]/10 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
