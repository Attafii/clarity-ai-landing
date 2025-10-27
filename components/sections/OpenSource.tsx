'use client';

import { Github, Heart, Code2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OpenSource() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A459E1]/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] rounded-full shadow-xl">
            <Heart className="h-5 w-5 text-black fill-black" />
            <span className="text-sm font-bold text-black">BUILT IN THE OPEN</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
              100% Free & Open Source
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clarity AI is built by developers, for developers. No paywalls, no premium features, 
            no hidden costs. Just powerful AI tools that belong to the community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Code2,
              stat: "MIT Licensed",
              label: "Use it anywhere"
            },
            {
              icon: Github,
              stat: "Public Repo",
              label: "Fully transparent"
            },
            {
              icon: Users,
              stat: "Community",
              label: "Driven development"
            },
            {
              icon: Heart,
              stat: "$0",
              label: "Forever free"
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 rounded-xl border border-[#A459E1]/20 hover:border-[#A459E1]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 mb-4">
                  <IconComponent className="h-6 w-6 text-[#F0CDFF]" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Transparent Development",
              description: "All development happens in public. Watch features being built, bugs being fixed, and roadmap discussions in real-time.",
              icon: "👀"
            },
            {
              title: "Community Contributions",
              description: "Your ideas matter. Contribute code, report issues, suggest features, or help with documentation. Every contribution counts.",
              icon: "🤝"
            },
            {
              title: "Self-Hosting Ready",
              description: "Want full control? Host Clarity AI on your own infrastructure. Your data, your rules, your privacy guaranteed.",
              icon: "🏠"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-[#A459E1]/30 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/30 transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Star us on GitHub and join the community
          </p>
        </div>
      </div>
    </section>
  );
}
