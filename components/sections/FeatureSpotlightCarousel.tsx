'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Sparkles, Shield, Users, Zap, FileCode, Brain, Puzzle, GitBranch, TrendingUp } from 'lucide-react';
import useScrollReveal from '@/hooks/use-scroll-reveal';

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  codeExample: string;
  gradient: {
    from: string;
    to: string;
  };
}

const FEATURES: Feature[] = [
  {
    id: 'expert-personas',
    icon: Brain,
    title: 'Expert Personas',
    description: 'Activate specialized AI roles like /architect, /security, or /reviewer to get deep domain-specific expertise instantly.',
    codeExample: '@clarity /architect design a scalable auth system',
    gradient: { from: '#A459E1', to: '#F0CDFF' },
  },
  {
    id: 'security-shield',
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Local-first secret masking and real-time vulnerability scanning protect your codebase before prompts leave your machine.',
    codeExample: '@clarity /security audit this component for leaks',
    gradient: { from: '#F0CDFF', to: '#A459E1' },
  },
  {
    id: 'prompt-vault',
    icon: Users,
    title: 'Team Prompt Vault',
    description: 'Standardize prompt engineering across your team by saving and sharing optimized templates in localized vaults.',
    codeExample: '@clarity /vault - search and load saved prompts',
    gradient: { from: '#A459E1', to: '#F0CDFF' },
  },
  {
    id: 'deep-thinking',
    icon: Zap,
    title: 'Deep Thinking Mode',
    description: 'Use @clarity-thinking to force deep reasoning and chain-of-thought analysis for complex logical and architectural tasks.',
    codeExample: '@clarity-thinking solve this complex state bug',
    gradient: { from: '#F0CDFF', to: '#A459E1' },
  },
  {
    id: 'mermaid-diagrams',
    icon: GitBranch,
    title: 'Visual Architecture',
    description: 'Generate flowcharts, sequence diagrams, and class maps automatically using Mermaid.js integration within the chat.',
    codeExample: '@clarity create a sequence diagram of this API',
    gradient: { from: '#A459E1', to: '#F0CDFF' },
  },
  {
    id: 'quality-analysis',
    icon: TrendingUp,
    title: 'Educational Scoring',
    description: 'Learn prompt engineering through real-time feedback with quality scores and detailed educational explanations.',
    codeExample: '@clarity (Score: 9/10 - Added Error Handling)',
    gradient: { from: '#F0CDFF', to: '#A459E1' },
  },
  {
    id: 'context-awareness',
    icon: FileCode,
    title: 'Tech Stack Sync',
    description: 'ClarityAI automatically indexes your dependencies and workspace structure to speak your project\'s specific language.',
    codeExample: '@clarity refactor using our current UI components',
    gradient: { from: '#A459E1', to: '#F0CDFF' },
  },
  {
    id: 'smart-routing',
    icon: Puzzle,
    title: 'Intelligent Routing',
    description: 'Automatically analyzes your prompt complexity and routes it to the optimal AI model for the perfect balance of speed and depth.',
    codeExample: '@clarity (Auto-routed to Deep Thinking Engine)',
    gradient: { from: '#F0CDFF', to: '#A459E1' },
  },
  {
    id: 'educational-ui',
    icon: Sparkles,
    title: 'Interactive Diff View',
    description: 'See exactly how your prompt was enhanced with a side-by-side comparison that highlights injected context and rules.',
    codeExample: '@clarity (View enhanced prompt transformations)',
    gradient: { from: '#A459E1', to: '#F0CDFF' },
  },
];

export function FeatureSpotlightCarousel() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      ref={ref}
      className={`relative py-24 px-4 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#A459E1]" />
            <span className="text-sm font-medium text-[#F0CDFF]">Feature Spotlight</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Powerful Features at Your Fingertips
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the comprehensive toolkit that makes ClarityAI the smartest AI coding assistant
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                  >
                    <Card className="h-full border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300 group">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="mb-4">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10 border border-[#A459E1]/40 group-hover:scale-110 transition-transform duration-300"
                          >
                            <Icon className="w-6 h-6 text-[#A459E1]" />
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {feature.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                          {feature.description}
                        </p>

                        <div className="mt-auto">
                          <div className="p-3 rounded-lg bg-black/40 border border-[#A459E1]/20">
                            <code className="text-xs font-mono text-[#F0CDFF] break-all">
                              {feature.codeExample}
                            </code>
                          </div>
                        </div>

                        <div
                          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur-xl -z-10 pointer-events-none"
                          style={{
                            background: `linear-gradient(to right, ${feature.gradient.from}, ${feature.gradient.to})`,
                          }}
                        />
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="border-[#A459E1]/30 bg-black/60 hover:bg-[#A459E1]/20 hover:border-[#F0CDFF]/40 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-[#A459E1]" />
            </Button>

            <div className="flex gap-2">
              {FEATURES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'w-8 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF]'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selectedIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="border-[#A459E1]/30 bg-black/60 hover:bg-[#A459E1]/20 hover:border-[#F0CDFF]/40 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-[#A459E1]" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a
              href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore All Features
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
