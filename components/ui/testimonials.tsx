"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  platform: "twitter" | "linkedin" | "producthunt";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Senior Full Stack Dev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "ClarityAI has completely transformed how I explain technical architecture to stakeholders. It identifies security risks I used to spend hours digging for. A total game changer.",
    rating: 5,
    platform: "twitter",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Lead at TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "The expert personas are incredibly accurate. Using /architect for our last sprint planning saved us at least two days of back-and-forth. The precision is unmatched.",
    rating: 5,
    platform: "linkedin",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "I was skeptical about AI-driven security analysis, but ClarityAI proved me wrong. Its focus on 'Privacy First' isn't just a marketing slogan—it's built into every core interaction.",
    rating: 5,
    platform: "producthunt",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "UX Researcher",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "ClarityAI helps me bridge the gap between user qualitative data and technical requirements. The clarity I get from its summaries is refreshing.",
    rating: 4,
    platform: "twitter",
  },
  {
    id: 5,
    name: "David Park",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "As a solo founder, I wear many hats. ClarityAI is like having a senior architect and a security lead on speed dial. It's the best investment for my MVP journey.",
    rating: 5,
    platform: "linkedin",
  },
  {
    id: 6,
    name: "Jessica Miller",
    role: "Security Analyst",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "The security-first approach of ClarityAI is what sold me. It handles sensitive data with the level of care a professional environment demands. Truly impressed.",
    rating: 5,
    platform: "producthunt",
  },
  {
    id: 7,
    name: "Marcus Aurelius",
    role: "Lead Software Architect",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "Integrating ClarityAI into our workflow reduced junior developer onboarding time by nearly 40%. The documentation quality it produces is world-class.",
    rating: 5,
    platform: "twitter",
  },
  {
    id: 8,
    name: "Elena Rodriguez",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "Scale requires precision. ClarityAI provides the exact level of detail we need for our microservices architecture without the usual AI fluff.",
    rating: 5,
    platform: "linkedin",
  },
  {
    id: 9,
    name: "Ryan Gosling",
    role: "Open Source Contributor",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
    content:
      "I use ClarityAI to clean up my PR descriptions. It's scary how good it is at summarizing complex diffs into human-readable changelogs.",
    rating: 5,
    platform: "twitter",
  },
];

export function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, testimonials.length));
  };

  return (
    <section className="py-20 bg-background overflow-hidden relative" id="testimonials">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#A459E1]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F0CDFF]/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Trusted by Builders <span className="text-primary italic">Worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how professional developers and industry leaders are using ClarityAI to ship faster,
            safer, and with more confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, visibleCount).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group border-[#A459E1]/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm hover:border-[#A459E1]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#A459E1]/5"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full ring-2 ring-[#A459E1]/10 group-hover:ring-[#A459E1]/30 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white dark:bg-black p-0.5 rounded-full ring-1 ring-border">
                        {testimonial.platform === "twitter" && (
                          <Icons.twitter className="w-3 h-3 text-[#1DA1F2]" />
                        )}
                        {testimonial.platform === "linkedin" && (
                          <div className="w-3 h-3 bg-[#0077B5] rounded-[2px]" />
                        )}
                        {testimonial.platform === "producthunt" && (
                          <div className="w-3 h-3 bg-[#DA552F] rounded-full flex items-center justify-center text-[8px] text-white font-bold">P</div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-3.5 h-3.5",
                          i < testimonial.rating
                            ? "fill-[#A459E1] text-[#A459E1]"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground text-sm italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          {visibleCount < testimonials.length ? (
            <div className="inline-flex items-center gap-4 p-2 px-6 rounded-full bg-[#A459E1]/5 border border-[#A459E1]/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-muted-foreground">Want to see more success stories?</span>
              <Button 
                onClick={showMore}
                className="rounded-full bg-[#A459E1]/10 hover:bg-[#A459E1]/20 border border-[#F0CDFF]/30 hover:border-[#F0CDFF]/50 text-[#A459E1] dark:text-[#F0CDFF] font-semibold transition-all duration-300 hover:scale-105 group"
              >
                Load More
                <Icons.spinner className="ml-2 w-4 h-4 animate-spin hidden group-active:block" />
                <span className="ml-2 group-active:hidden">↓</span>
              </Button>
            </div>
          ) : (
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-4 px-8 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 backdrop-blur-sm">
              <span className="text-lg font-semibold bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] bg-clip-text text-transparent">
                Ready to transform your development workflow?
              </span>
              <Button 
                asChild
                className="rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-white dark:text-black font-bold px-6 py-2 h-auto text-sm shadow-lg shadow-[#A459E1]/20 transition-all duration-300 hover:scale-105"
              >
                <a 
                  href={siteConfig.urls.marketplace} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Get Started for Free
                  <Icons.logo className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
