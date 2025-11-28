import { Activity, DraftingCompass, Mail, Zap, Brain, Code, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { PinContainer } from '@/components/ui/3d-pin'

export function Features5() {
    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-background via-[#0a0014] to-background">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
                                Supercharge Your GitHub Copilot
                            </h2>
                            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                                Transform your AI coding experience with intelligent prompt enhancement. Clarity AI automatically optimizes your requests for better code quality, faster development, and team-wide consistency.
                            </p>
                        </div>
                        <ul className="mt-8 divide-y divide-[#A459E1]/20 border-y border-[#A459E1]/20 *:flex *:items-center *:gap-3 *:py-4">
                            <li className="group hover:bg-[#A459E1]/5 hover:border-[#F0CDFF]/20 rounded-lg p-2 transition-all duration-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 group-hover:from-[#F0CDFF]/40 group-hover:to-[#A459E1]/40 transition-all duration-300">
                                    <Brain className="size-4 text-[#F0CDFF] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-white group-hover:text-[#F0CDFF] transition-colors duration-300 font-medium">
                                    Intelligent Prompt Enhancement
                                </span>
                            </li>
                            <li className="group hover:bg-[#A459E1]/5 hover:border-[#F0CDFF]/20 rounded-lg p-2 transition-all duration-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 group-hover:from-[#F0CDFF]/40 group-hover:to-[#A459E1]/40 transition-all duration-300">
                                    <Zap className="size-4 text-[#A459E1] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-white group-hover:text-[#F0CDFF] transition-colors duration-300 font-medium">
                                    Instant VS Code Integration
                                </span>
                            </li>
                            <li className="group hover:bg-[#A459E1]/5 hover:border-[#F0CDFF]/20 rounded-lg p-2 transition-all duration-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 group-hover:from-[#F0CDFF]/40 group-hover:to-[#A459E1]/40 transition-all duration-300">
                                    <Activity className="size-4 text-[#F0CDFF] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-white group-hover:text-[#F0CDFF] transition-colors duration-300 font-medium">
                                    Performance Analytics & Insights
                                </span>
                            </li>
                            <li className="group hover:bg-[#A459E1]/5 hover:border-[#F0CDFF]/20 rounded-lg p-2 transition-all duration-300">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 group-hover:from-[#F0CDFF]/40 group-hover:to-[#A459E1]/40 transition-all duration-300">
                                    <DraftingCompass className="size-4 text-[#A459E1] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-white group-hover:text-[#F0CDFF] transition-colors duration-300 font-medium">
                                    Team Collaboration & Standards
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3 flex items-center justify-center h-[50rem]">
                        <PinContainer title="Try Clarity AI" href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai">
                            <div className="flex flex-col p-8 tracking-tight text-slate-100/50 w-[28rem] h-[28rem] bg-gradient-to-b from-[#1a0b2e]/80 to-[#0f051a]/90 backdrop-blur-sm border border-[#A459E1]/30 rounded-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-[#F0CDFF] animate-pulse" />
                                        <div className="text-xs text-[#F0CDFF]/80">AI Active</div>
                                    </div>
                                    <div className="text-xs text-gray-400">Clarity AI</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 mt-6 space-y-6">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
                                        Clarity AI Dashboard
                                    </div>
                                    
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <div className="text-4xl font-bold text-[#F0CDFF]">50K+</div>
                                            <div className="text-sm text-slate-400">Prompts Enhanced</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-4xl font-bold text-[#A459E1]">3x</div>
                                            <div className="text-sm text-slate-400">Faster Coding</div>
                                        </div>
                                    </div>

                                    {/* Feature Icons */}
                                    <div className="flex justify-center space-x-8 py-6">
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 flex items-center justify-center">
                                                <Brain className="size-6 text-[#F0CDFF]" />
                                            </div>
                                            <div className="text-sm text-slate-400 font-medium">Enhanced</div>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 flex items-center justify-center">
                                                <Code className="size-6 text-[#A459E1]" />
                                            </div>
                                            <div className="text-sm text-slate-400 font-medium">Optimized</div>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F0CDFF]/20 to-[#A459E1]/20 flex items-center justify-center">
                                                <TrendingUp className="size-6 text-[#F0CDFF]" />
                                            </div>
                                            <div className="text-sm text-slate-400 font-medium">Productive</div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-between items-end">
                                        <div className="text-sm text-slate-400">
                                            Active in VS Code
                                        </div>
                                        <div className="text-[#F0CDFF] text-lg font-medium">
                                            Try Now →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}