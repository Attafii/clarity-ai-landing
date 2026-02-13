'use client';

import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function FAQ() {
  const [sectionRef, isVisible] = useScrollAnimation();
  const faqs = [
    {
      question: "What is ClarityAI?",
      answer: "ClarityAI is a free and open-source VS Code extension that enhances your GitHub Copilot prompts using AI. Version 1.0.9 introduces the Smart Routing Engine, which analyzes prompt complexity to provide either rapid responses or deep architectural planning via the ClarityAI service."
    },
    {
      question: "Privacy: Does it send my code to external services?",
      answer: "Privacy is our priority. ClarityAI only sends your text prompts and high-level project metadata for enhancement. Your actual source code never leaves your machine. No code is ever sent to or stored on the ClarityAI service servers."
    },
    {
      question: "What is the Smart Routing Engine?",
      answer: "It's an algorithm that scores your prompts from 0-100. Simple prompts (<40) are handled by @clarity-fast for instant result. Complex prompts (>=40) use @clarity-thinking for deep reasoning and multi-step plan generation, all powered by the ClarityAI LLM model."
    },
    {
      question: "Is it really free?",
      answer: "Yes! The extension is 100% free and open source. The ClarityAI service provides a high-performance LLM model at no cost for all users, making advanced prompt engineering accessible to everyone."
    },
    {
      question: "How do I get an API key?",
      answer: "API keys are provided for free by the ClarityAI service. You can obtain your key directly through our platform and add it to your VS Code settings under clarity.apiKey to start enhancing your prompts instantly."
    },
    {
      question: "Can I use it offline?",
      answer: "No, ClarityAI requires an internet connection to communicate with the ClarityAI service for prompt enhancement. However, the ClarityAI LLM model is optimized for speed, ensuring typically very fast response times."
    },
    {
      question: "How does ClarityAI improve my prompts?",
      answer: "ClarityAI analyzes your prompts for context, detects todos in your code, corrects spelling and grammar errors, and adds best practices. It transforms vague requests into detailed specifications that help Copilot generate better, more accurate code."
    },
    {
      question: "Do I need GitHub Copilot to use ClarityAI?",
      answer: "Yes, ClarityAI is designed to work alongside GitHub Copilot. It enhances your prompts before they reach Copilot, making your existing Copilot subscription significantly more powerful and effective."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="faq"
      className={`py-24 bg-muted/30 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F0CDFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#A459E1]/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ClarityAI. Can't find what you're looking for?{' '}
            <a href="https://github.com/Attafii/ClarityAI/issues" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF] transition-colors underline">
              Ask on GitHub
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-lg px-6 hover:border-[#A459E1]/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-[#A459E1] transition-colors py-5">
                <span className="text-base font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-[#A459E1]/10 to-[#F0CDFF]/10 rounded-2xl border border-[#A459E1]/20">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our community is here to help you get the most out of ClarityAI.
          </p>
          <a
            href="https://github.com/Attafii/ClarityAI/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#A459E1]/25"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
