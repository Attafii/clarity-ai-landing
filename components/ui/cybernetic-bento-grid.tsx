"use client";
import React, { useEffect, useRef, forwardRef } from 'react';
import { Brain, Zap, Shield, Users, BarChart3, Terminal, FileText, Github, Code } from 'lucide-react';
import { AnimatedBeam } from './animated-beam';
import { cn } from '@/lib/utils';

// Circle component for workflow nodes
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 border-[#A459E1]/30 bg-gradient-to-br from-[#1a0b2e] to-[#0f051a] p-3 shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// TypeScript interfaces
interface BentoItemProps {
    className?: string;
    children: React.ReactNode;
}

// Reusable BentoItem component with TypeScript and brand styling
const BentoItem: React.FC<BentoItemProps> = ({ className = "", children }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        let ticking = false;
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    item.style.setProperty('--mouse-x', `${x}px`);
                    item.style.setProperty('--mouse-y', `${y}px`);
                    ticking = false;
                });
                ticking = true;
            }
        };

        item.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={itemRef} 
            className={`group relative p-6 bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f051a]/90 border border-[#A459E1]/30 rounded-2xl backdrop-blur-sm hover:border-[#F0CDFF]/50 transition-all duration-300 overflow-hidden cursor-pointer ${className}`}
            style={{
                background: `
                    radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                    rgba(164, 89, 225, 0.1), 
                    transparent 40%),
                    linear-gradient(135deg, rgba(26, 11, 46, 0.8) 0%, rgba(15, 5, 26, 0.9) 100%)
                `
            }}
        >
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div 
                    className="absolute w-32 h-32 bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 rounded-full blur-xl"
                    style={{
                        left: 'var(--mouse-x, 50%)',
                        top: 'var(--mouse-y, 50%)',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

// Main Cybernetic Bento Grid Component with Clarity AI content
export const CyberneticBentoGrid: React.FC = () => {
    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-background via-[#0a0014] to-background">
            <div className="w-full max-w-6xl mx-auto px-6 z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-6">
                        How Clarity AI Works
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Transform your coding experience with intelligent prompt enhancement that seamlessly integrates into your VS Code workflow
                    </p>
                </div>
                
                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto">
                    
                    {/* Large Feature - Smart Routing Engine */}
                    <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 flex items-center justify-center">
                                    <Brain className="size-6 text-[#F0CDFF]" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Smart Routing Engine</h2>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our new "Complexity Analyzer" algorithm scores every prompt from 0-100. It measures technical depth and abstract requirements to route your request perfectly.
                            </p>
                        </div>
                        <div className="mt-6 p-4 bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/5 rounded-xl border border-[#A459E1]/20">
                            <div className="text-sm text-gray-400 mb-2">Complexity Score: 84/100</div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#A459E1] rounded-full"></div>
                                    <div className="text-[#F0CDFF] text-sm font-mono">Routing to @clarity-thinking</div>
                                </div>
                                <div className="text-gray-300 text-xs italic">
                                    Deep reasoning & architectural planning activated for complex request.
                                </div>
                            </div>
                        </div>
                    </BentoItem>

                    {/* Auto-Context Injection */}
                    <BentoItem>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 flex items-center justify-center">
                                <Zap className="size-5 text-[#A459E1]" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Auto-Context</h2>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Automatically detects Next.js, Tailwind, Prisma, and more to augment prompts with tech-stack reality.
                        </p>
                    </BentoItem>

                    {/* Template Library */}
                    <BentoItem>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 flex items-center justify-center">
                                <FileText className="size-5 text-[#F0CDFF]" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Templates</h2>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                            12+ professional templates for API, UI, and Testing.
                        </p>
                        <div className="text-xs text-[#F0CDFF]/80 font-mono bg-[#A459E1]/10 p-2 rounded">
                            @clarity t:rest-api
                        </div>
                    </BentoItem>

                    {/* Team Collaboration */}
                    <BentoItem className="md:row-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 flex items-center justify-center">
                                <Users className="size-5 text-[#A459E1]" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Team Sync</h2>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Share enhanced prompts and coding standards across your entire team for consistent results.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] flex items-center justify-center text-xs text-black font-bold">S</div>
                                <span className="text-sm text-gray-300">Sarah shared "React Hooks Template"</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] flex items-center justify-center text-xs text-black font-bold">M</div>
                                <span className="text-sm text-gray-300">Mike added "API Error Handling"</span>
                            </div>
                        </div>
                    </BentoItem>

                    {/* Real-time Processing */}
                    <BentoItem className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 flex items-center justify-center">
                                <Shield className="size-5 text-[#F0CDFF]" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Secure & Private Processing</h2>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your code and prompts are processed locally and securely. We never store or share your sensitive information.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 text-sm text-[#F0CDFF]">
                                <div className="w-2 h-2 bg-[#F0CDFF] rounded-full animate-pulse"></div>
                                End-to-end encrypted
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#A459E1]">
                                <div className="w-2 h-2 bg-[#A459E1] rounded-full animate-pulse"></div>
                                GDPR compliant
                            </div>
                        </div>
                    </BentoItem>

                    {/* CLI Integration */}
                    <BentoItem>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 flex items-center justify-center">
                                <Terminal className="size-5 text-[#A459E1]" />
                            </div>
                            <h2 className="text-xl font-bold text-white">CLI Access</h2>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                            Use Clarity AI from your terminal for automated workflows.
                        </p>
                        <div className="text-xs text-[#F0CDFF] font-mono bg-[#A459E1]/10 p-2 rounded">
                            $ clarity enhance "your prompt"
                        </div>
                    </BentoItem>

                </div>

                {/* Workflow Visualization Section */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent mb-4">
                            Your AI-Enhanced Workflow
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            See how Clarity AI seamlessly integrates into your development process, from prompt to production
                        </p>
                    </div>
                    
                    <WorkflowDemo />
                </div>
            </div>
        </section>
    );
};

// Workflow Demo Component
const WorkflowDemo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const promptRef = useRef<HTMLDivElement>(null);
    const clarityRef = useRef<HTMLDivElement>(null);
    const copilotRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const reviewRef = useRef<HTMLDivElement>(null);
    const deployRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#A459E1]/30 bg-gradient-to-br from-[#1a0b2e]/60 to-[#0f051a]/80 backdrop-blur-sm p-8"
            ref={containerRef}
        >
            <div className="flex size-full max-w-4xl max-h-[300px] items-stretch justify-between">
                {/* Input Layer */}
                <div className="flex flex-col items-center justify-between h-full">
                    <Circle ref={promptRef} className="bg-gradient-to-br from-[#F0CDFF]/20 to-[#A459E1]/20 border-[#F0CDFF]/40">
                        <FileText className="size-8 text-[#F0CDFF]" />
                    </Circle>
                    <div className="text-center mt-2">
                        <div className="text-sm font-medium text-white">Your Prompt</div>
                        <div className="text-xs text-gray-400">"Make a function"</div>
                    </div>
                </div>

                {/* Processing Layer */}
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Circle ref={clarityRef} className="size-20 bg-gradient-to-br from-[#A459E1]/30 to-[#F0CDFF]/20 border-[#A459E1]/60">
                        <Brain className="size-10 text-[#A459E1]" />
                    </Circle>
                    <div className="text-center">
                        <div className="text-lg font-semibold text-white">Clarity AI</div>
                        <div className="text-sm text-gray-400">Enhancement Engine</div>
                    </div>
                </div>

                {/* GitHub Copilot */}
                <div className="flex flex-col items-center justify-between h-full">
                    <Circle ref={copilotRef} className="bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 border-[#F0CDFF]/40">
                        <Github className="size-8 text-[#F0CDFF]" />
                    </Circle>
                    <div className="text-center mt-2">
                        <div className="text-sm font-medium text-white">GitHub Copilot</div>
                        <div className="text-xs text-gray-400">AI Assistant</div>
                    </div>
                </div>

                {/* Output Layer */}
                <div className="flex flex-col items-center justify-between h-full space-y-4">
                    <Circle ref={codeRef} className="bg-gradient-to-br from-[#F0CDFF]/20 to-[#A459E1]/20 border-[#A459E1]/40">
                        <Code className="size-8 text-[#A459E1]" />
                    </Circle>
                    <Circle ref={reviewRef} className="bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 border-[#F0CDFF]/40">
                        <BarChart3 className="size-8 text-[#F0CDFF]" />
                    </Circle>
                </div>

                {/* Result */}
                <div className="flex flex-col items-center justify-center h-full">
                    <Circle ref={deployRef} className="bg-gradient-to-br from-[#F0CDFF]/30 to-[#A459E1]/30 border-[#F0CDFF]/60">
                        <Zap className="size-8 text-white" />
                    </Circle>
                    <div className="text-center mt-2">
                        <div className="text-sm font-medium text-white">Production Ready</div>
                        <div className="text-xs text-gray-400">Quality Code</div>
                    </div>
                </div>
            </div>

            {/* Animated Beams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={promptRef}
                toRef={clarityRef}
                curvature={-30}
                duration={3}
                delay={0}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={clarityRef}
                toRef={copilotRef}
                curvature={30}
                duration={3}
                delay={0.5}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={copilotRef}
                toRef={codeRef}
                curvature={-20}
                duration={3}
                delay={1}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={codeRef}
                toRef={reviewRef}
                curvature={0}
                duration={2.5}
                delay={1.5}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={reviewRef}
                toRef={deployRef}
                curvature={20}
                duration={3}
                delay={2}
            />

            {/* Return beam for continuous flow */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={deployRef}
                toRef={clarityRef}
                curvature={-80}
                duration={4}
                delay={2.5}
                reverse={true}
                pathOpacity={0.1}
            />
        </div>
    );
};