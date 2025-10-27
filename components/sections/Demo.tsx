'use client';

import { Play, Code2, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const beforePrompt = `create a function`;
  
  const afterPrompt = `Create a TypeScript function that:
- Accepts an array of user objects with name and email
- Validates email format using regex
- Filters out invalid entries
- Returns sorted array by name (ascending)
- Includes JSDoc comments
- Handles edge cases (null, undefined, empty array)
- Uses proper TypeScript types and interfaces`;

  return (
    <section id="demo" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A459E1]/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A459E1]/10 backdrop-blur-md border border-[#F0CDFF]/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-[#F0CDFF]" />
            <span className="text-sm font-medium text-[#F0CDFF]">See It In Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
            Watch Clarity AI Transform Your Prompts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Clarity AI enhances a simple prompt into a detailed, context-rich instruction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Before: Basic Prompt */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30">
                <Code2 className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Before: Basic Prompt</h3>
                <p className="text-sm text-muted-foreground">What most developers write</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-red-500/5 to-background border border-red-500/20 rounded-xl p-6 h-48 flex items-center justify-center group-hover:border-red-500/40 transition-colors">
              <code className="text-2xl font-mono text-muted-foreground">{beforePrompt}</code>
              <div className="absolute top-3 right-3">
                <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-md font-medium">
                  Vague
                </span>
              </div>
            </div>
          </div>

          {/* After: Enhanced Prompt */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#A459E1] to-[#F0CDFF]">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">After: Enhanced with Clarity AI</h3>
                <p className="text-sm text-muted-foreground">Context-rich & precise</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/5 border-2 border-[#A459E1]/30 rounded-xl p-6 h-48 overflow-auto group-hover:border-[#A459E1]/50 transition-colors">
              <code className="text-sm font-mono text-foreground/90 whitespace-pre-line leading-relaxed">
                {afterPrompt}
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
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-sm rounded-full border border-[#A459E1]/30">
            <span className="text-sm font-medium">Transformed in milliseconds</span>
            <ArrowRight className="h-4 w-4 text-[#A459E1] animate-pulse" />
          </div>
        </div>

        {/* Video Demo Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a0b2e] to-[#0f051a] rounded-2xl overflow-hidden border-2 border-[#A459E1]/30 shadow-2xl shadow-[#A459E1]/20">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
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
              className="text-center p-6 bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 rounded-xl border border-[#A459E1]/20 hover:border-[#A459E1]/40 transition-colors"
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
