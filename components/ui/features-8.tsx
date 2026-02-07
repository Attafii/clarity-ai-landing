import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Zap, Brain, Code, Sparkles, Database, Lock } from 'lucide-react'

export function Features() {
    return (
        <section className="bg-gradient-to-b from-background to-purple-950/10 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-6xl px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-md border border-[#A459E1]/30 rounded-full mb-6">
                        <Sparkles className="h-5 w-5 text-[#F0CDFF]" />
                        <span className="text-sm font-bold text-[#F0CDFF]">9 POWERFUL FEATURES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
                            Built for Modern Development
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Everything you need to supercharge your coding workflow with AI-powered intelligence
                    </p>
                </div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-4">
                        {/* Smart Routing Card */}
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center">
                                    <svg className="text-[#A459E1]/60 absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="mx-auto block w-fit text-5xl font-semibold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">95%</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold text-white">Prompt Enhancement</h2>
                            </CardContent>
                        </Card>

                        {/* Context Injection Card */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#A459E1]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F0CDFF]/20 bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10">
                                    <Brain className="m-auto size-16 text-[#A459E1]" strokeWidth={1} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">Auto-Context Injection</h2>
                                    <p className="text-gray-300">Detects your tech stack (Next.js, Tailwind, Prisma) to augment prompts with precise technical context.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Template Library Card */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="pt-6 lg:px-6">
                                    <div className="flex justify-center mb-4">
                                        <Code className="size-12 text-[#F0CDFF]" />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-sm font-medium text-[#F0CDFF]">12+ Pro Templates</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-14 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-white">Template Library</h2>
                                    <p className="text-gray-300">Professional blueprints for APIs, UI, Databases, and Testing. Use @clarity t:name.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* One-Click Refinements */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-[#A459E1]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F0CDFF]/20 bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10">
                                        <Sparkles className="m-auto size-5 text-[#A459E1]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="group-hover:text-secondary-950 text-lg font-medium text-white transition">One-Click Refinements</h2>
                                        <p className="text-gray-300">Instantly "Add Tests", "Make Production-Ready", or "Simplify" your code with dedicated refinement actions.</p>
                                    </div>
                                </div>
                                <div className="relative mt-6 flex flex-col gap-2 sm:ml-6">
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 rounded-full bg-[#A459E1]/20 border border-[#A459E1]/40 text-[10px] text-[#F0CDFF]">Add Tests</div>
                                        <div className="px-3 py-1 rounded-full bg-[#A459E1]/20 border border-[#A459E1]/40 text-[10px] text-[#F0CDFF]">Simplify</div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black font-bold text-[10px] w-fit">Production Ready</div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Copilot Integration */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-[#A459E1]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F0CDFF]/20 bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10">
                                        <Code className="m-auto size-6 text-[#A459E1]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition text-white">Direct Copilot Send</h2>
                                        <p className="text-gray-300">Seamlessly forward enhanced prompts directly to VS Code Chat with our native "Send to Copilot" integration.</p>
                                    </div>
                                </div>
                                <div className="before:bg-[#A459E1]/20 relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6 flex items-center justify-center">
                                     <div className="px-5 py-2 bg-[#A459E1] text-black rounded-lg font-bold text-sm shadow-lg animate-pulse">
                                         Send to Copilot
                                     </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Expert Personas */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#A459E1]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F0CDFF]/20 bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10">
                                    <Users className="m-auto size-16 text-[#A459E1]" strokeWidth={1} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">Expert Personas</h2>
                                    <p className="text-gray-300">Activate /architect, /security, /reviewer, /tester, /frontend, or /performance for specialized AI responses.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Security Shield */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="pt-6 lg:px-6">
                                    <div className="flex justify-center mb-4">
                                        <Shield className="size-12 text-[#F0CDFF]" />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-sm font-medium text-[#F0CDFF]">100% Local-First</span>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-14 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-white">Secret Shield</h2>
                                    <p className="text-gray-300">Auto-detects and masks API keys, secrets, and PII before prompts leave your machine.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Prompt Vault */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-2 border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="relative z-10 flex flex-col space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-[#A459E1]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F0CDFF]/20 bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10">
                                        <Database className="m-auto size-5 text-[#A459E1]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition text-white">Prompt Vault</h2>
                                        <p className="text-gray-300">Save and share high-performing prompts. Local vault for personal use, team vault syncs via .clarity/vault.json.</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="px-3 py-1 rounded-full bg-[#A459E1]/20 border border-[#A459E1]/40 text-[10px] text-[#F0CDFF]">Local Vault</div>
                                        <div className="px-3 py-1 rounded-full bg-[#A459E1]/20 border border-[#A459E1]/40 text-[10px] text-[#F0CDFF]">Team Sync</div>
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black font-bold text-[10px]">@clarity /vault</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}