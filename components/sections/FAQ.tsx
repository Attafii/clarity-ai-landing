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
      question: "What is Clarity AI?",
      answer: "Clarity AI is a powerful prompt enhancement tool that transforms your basic GitHub Copilot prompts into intelligent, context-rich instructions. It analyzes your code, understands your intent, and generates optimized prompts that help Copilot produce better, more accurate code suggestions."
    },
    {
      question: "How does Clarity AI improve my GitHub Copilot experience?",
      answer: "Clarity AI acts as an intelligent layer between you and GitHub Copilot. It enhances your prompts by adding relevant context, best practices, and precise instructions. This results in more accurate code generation, fewer iterations, and up to 10x productivity improvement in your development workflow."
    },
    {
      question: "Do I need GitHub Copilot to use Clarity AI?",
      answer: "Yes, Clarity AI is designed to work alongside GitHub Copilot. It enhances your prompts before they reach Copilot, making your existing Copilot subscription significantly more powerful and effective."
    },
    {
      question: "How do I install Clarity AI?",
      answer: "Installation is simple! Just install our VS Code extension from the marketplace, connect it to your GitHub Copilot account, and you're ready to go. The entire setup process takes less than 5 minutes. We provide detailed documentation and video tutorials to guide you through the process."
    },
    {
      question: "What programming languages does Clarity AI support?",
      answer: "Clarity AI supports all major programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Rust, PHP, and many more. Since it works through GitHub Copilot, any language that Copilot supports is automatically enhanced by Clarity AI."
    },
    {
      question: "Is my code secure with Clarity AI?",
      answer: "Absolutely. We take security seriously. Your code is processed locally on your machine, and we never store or share your proprietary code. All prompt enhancements happen in real-time without sending your code to external servers. We're SOC 2 compliant and follow industry best practices for data security."
    },
    {
      question: "Can I use Clarity AI with my team?",
      answer: "Yes! Our Pro and Enterprise plans include team collaboration features. You can share custom prompt templates, analytics dashboards, and best practices across your team. Enterprise plans offer unlimited team members and advanced collaboration tools."
    },
    {
      question: "What's the difference between Free and Pro plans?",
      answer: "The Free plan includes 100 prompt enhancements per month with basic features, perfect for individual developers trying out Clarity AI. The Pro plan offers unlimited enhancements, advanced AI analysis, custom templates, team collaboration, priority support, and detailed analytics. Pro users also get priority processing for faster results."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with Clarity AI for any reason, contact our support team within 30 days of your purchase for a full refund."
    },
    {
      question: "How can I get support?",
      answer: "Free users have access to our community forums and documentation. Pro users get email support with priority response times. Enterprise customers receive dedicated support with a guaranteed SLA, including a dedicated account manager and priority bug fixes."
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
            Everything you need to know about Clarity AI. Can't find what you're looking for?{' '}
            <a href="#contact" className="text-[#A459E1] hover:text-[#F0CDFF] transition-colors underline">
              Contact us
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
            Our support team is here to help you get the most out of Clarity AI.
          </p>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#A459E1]/25"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
