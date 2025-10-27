'use client';

import { useState } from "react";
import { ArrowLeft, BookOpen, Rocket, Code2, Settings, Zap, Users, Github, Terminal, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const navigation = [
    { id: "getting-started", title: "Getting Started", icon: Rocket },
    { id: "installation", title: "Installation", icon: Terminal },
    { id: "configuration", title: "Configuration", icon: Settings },
    { id: "usage", title: "Usage Guide", icon: BookOpen },
    { id: "features", title: "Features", icon: Zap },
    { id: "api", title: "API Reference", icon: Code2 },
    { id: "contributing", title: "Contributing", icon: Users },
    { id: "troubleshooting", title: "Troubleshooting", icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#A459E1] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-md border border-[#A459E1]/30 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-[#F0CDFF]" />
              <span className="text-sm font-medium text-[#F0CDFF]">Documentation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
              Clarity AI Docs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Everything you need to know to get started with Clarity AI and enhance your GitHub Copilot experience.
            </p>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 text-[#F0CDFF]'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <IconComponent className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert max-w-none">
                
                {/* Getting Started */}
                {activeSection === "getting-started" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Getting Started</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Clarity AI is an open-source prompt enhancement tool that transforms your basic GitHub Copilot prompts 
                        into intelligent, context-rich instructions. Get started in less than 5 minutes.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#A459E1]" />
                        Prerequisites
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-[#A459E1] mt-1">•</span>
                          <span>VS Code version 1.85.0 or higher</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#A459E1] mt-1">•</span>
                          <span>GitHub Copilot subscription (required)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#A459E1] mt-1">•</span>
                          <span>Node.js 18+ (for local development)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Start</h3>
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Install the Extension", desc: "Search for 'Clarity AI' in VS Code marketplace and click Install" },
                          { step: 2, title: "Connect GitHub Copilot", desc: "Sign in with your GitHub account when prompted" },
                          { step: 3, title: "Start Coding", desc: "Write your prompts as usual - Clarity AI works automatically in the background" }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] flex items-center justify-center text-black font-bold">
                              {item.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                              <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Installation */}
                {activeSection === "installation" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Installation</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Multiple ways to install Clarity AI depending on your preference.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">VS Code Marketplace</h3>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                          <Terminal className="h-4 w-4" />
                          <span>Command Palette</span>
                        </div>
                        <code className="text-[#F0CDFF]">ext install clarity-ai.vscode</code>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">From Source (Self-Hosting)</h3>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm space-y-2">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                          <Github className="h-4 w-4" />
                          <span>Clone Repository</span>
                        </div>
                        <code className="block text-[#F0CDFF]">git clone https://github.com/yourusername/clarity-ai.git</code>
                        <code className="block text-[#F0CDFF]">cd clarity-ai</code>
                        <code className="block text-[#F0CDFF]">npm install</code>
                        <code className="block text-[#F0CDFF]">npm run build</code>
                        <code className="block text-[#F0CDFF]">code --install-extension ./clarity-ai.vsix</code>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Note
                      </h4>
                      <p className="text-muted-foreground">
                        After installation, reload VS Code for the extension to take effect.
                      </p>
                    </div>
                  </div>
                )}

                {/* Configuration */}
                {activeSection === "configuration" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Configuration</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Customize Clarity AI to match your workflow and preferences.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Settings</h3>
                      <div className="space-y-4">
                        {[
                          {
                            setting: "clarityai.enabled",
                            type: "boolean",
                            default: "true",
                            desc: "Enable/disable Clarity AI enhancement"
                          },
                          {
                            setting: "clarityai.enhancementLevel",
                            type: "string",
                            default: "\"balanced\"",
                            desc: "Options: minimal, balanced, detailed"
                          },
                          {
                            setting: "clarityai.autoEnhance",
                            type: "boolean",
                            default: "true",
                            desc: "Automatically enhance prompts on trigger"
                          },
                          {
                            setting: "clarityai.showDiff",
                            type: "boolean",
                            default: "true",
                            desc: "Show before/after prompt comparison"
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-background/50 border border-border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <code className="text-[#F0CDFF] font-mono text-sm">{item.setting}</code>
                              <span className="text-xs px-2 py-1 bg-muted rounded">{item.type}</span>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{item.desc}</p>
                            <div className="text-xs text-muted-foreground">
                              Default: <code className="text-[#A459E1]">{item.default}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Custom Templates</h3>
                      <p className="text-muted-foreground mb-4">
                        Create custom prompt templates for your specific use cases:
                      </p>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <code className="text-[#F0CDFF] block whitespace-pre">
{`{
  "templates": {
    "react-component": {
      "pattern": "create component",
      "enhancement": "TypeScript, functional, hooks, props interface"
    },
    "api-endpoint": {
      "pattern": "create api",
      "enhancement": "Express, error handling, validation, types"
    }
  }
}`}
                        </code>
                      </div>
                    </div>
                  </div>
                )}

                {/* Usage Guide */}
                {activeSection === "usage" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Usage Guide</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Learn how to get the most out of Clarity AI with these practical examples.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Basic Usage</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">1. Write Your Prompt</h4>
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-3">
                            <span className="text-xs text-red-400 font-medium mb-2 block">BEFORE</span>
                            <code className="text-muted-foreground">create a login function</code>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">2. Clarity AI Enhances</h4>
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                            <span className="text-xs text-green-400 font-medium mb-2 block">AFTER</span>
                            <code className="text-foreground text-sm block whitespace-pre-line">
{`Create a secure login function that:
- Accepts email and password parameters
- Validates input format
- Hashes password with bcrypt
- Queries database for user
- Returns JWT token on success
- Includes proper error handling
- TypeScript with proper types`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Keyboard Shortcuts</h3>
                      <div className="space-y-2">
                        {[
                          { key: "Ctrl/Cmd + Shift + E", action: "Enhance current prompt" },
                          { key: "Ctrl/Cmd + Shift + D", action: "Show enhancement diff" },
                          { key: "Ctrl/Cmd + Shift + T", action: "Toggle Clarity AI" }
                        ].map((shortcut, index) => (
                          <div key={index} className="flex items-center justify-between bg-background/50 border border-border rounded-lg p-4">
                            <span className="text-muted-foreground">{shortcut.action}</span>
                            <kbd className="px-3 py-1 bg-muted rounded font-mono text-sm">{shortcut.key}</kbd>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Features */}
                {activeSection === "features" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Features</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Explore all the powerful features Clarity AI offers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Smart Context Analysis",
                          desc: "Analyzes your codebase to add relevant context to prompts",
                          icon: "🧠"
                        },
                        {
                          title: "One-Shot Prompts",
                          desc: "Generate comprehensive prompts that build complete features in one go",
                          icon: "⚡"
                        },
                        {
                          title: "Custom Templates",
                          desc: "Create and share reusable prompt templates with your team",
                          icon: "📝"
                        },
                        {
                          title: "Analytics Dashboard",
                          desc: "Track your productivity improvements and prompt effectiveness",
                          icon: "📊"
                        },
                        {
                          title: "Team Collaboration",
                          desc: "Share best practices and prompt libraries across your team",
                          icon: "👥"
                        },
                        {
                          title: "Multi-Language Support",
                          desc: "Works with all programming languages supported by Copilot",
                          icon: "🌐"
                        }
                      ].map((feature, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 border border-[#A459E1]/20 rounded-xl p-6">
                          <div className="text-3xl mb-3">{feature.icon}</div>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* API Reference */}
                {activeSection === "api" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">API Reference</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Integrate Clarity AI into your custom tools and workflows.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">REST API</h3>
                      <div className="space-y-6">
                        <div className="bg-background/50 border border-border rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded font-mono text-xs font-bold">POST</span>
                            <code className="text-[#F0CDFF] font-mono">/api/enhance</code>
                          </div>
                          <p className="text-muted-foreground mb-4">Enhance a prompt with AI-powered context</p>
                          <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 font-mono text-sm">
                            <code className="text-foreground block whitespace-pre">
{`{
  "prompt": "create a function",
  "context": {
    "language": "typescript",
    "framework": "react"
  }
}`}
                            </code>
                          </div>
                        </div>

                        <div className="bg-background/50 border border-border rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded font-mono text-xs font-bold">GET</span>
                            <code className="text-[#F0CDFF] font-mono">/api/templates</code>
                          </div>
                          <p className="text-muted-foreground mb-4">Retrieve available prompt templates</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">SDK Example</h3>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <code className="text-foreground block whitespace-pre">
{`import { ClarityAI } from '@clarity-ai/sdk';

const clarity = new ClarityAI({
  apiKey: process.env.CLARITY_API_KEY
});

const enhanced = await clarity.enhance({
  prompt: "create a REST API",
  options: { level: "detailed" }
});

console.log(enhanced.prompt);`}
                        </code>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contributing */}
                {activeSection === "contributing" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Contributing</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        We welcome contributions from the community! Here's how you can help make Clarity AI better.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Ways to Contribute</h3>
                      <div className="space-y-4">
                        {[
                          { title: "Code Contributions", desc: "Submit pull requests for new features or bug fixes", icon: Code2 },
                          { title: "Bug Reports", desc: "Report issues you encounter with detailed reproduction steps", icon: AlertCircle },
                          { title: "Documentation", desc: "Help improve or translate documentation", icon: FileText },
                          { title: "Feature Requests", desc: "Suggest new features and enhancements", icon: Zap }
                        ].map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={index} className="flex gap-4 bg-background/50 border border-border rounded-lg p-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 text-[#F0CDFF]" />
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Development Setup</h3>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm space-y-2">
                        <code className="block text-[#F0CDFF]">git clone https://github.com/yourusername/clarity-ai.git</code>
                        <code className="block text-[#F0CDFF]">cd clarity-ai</code>
                        <code className="block text-[#F0CDFF]">npm install</code>
                        <code className="block text-[#F0CDFF]">npm run dev</code>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-3">Code of Conduct</h4>
                      <p className="text-muted-foreground mb-4">
                        We are committed to providing a welcoming and inclusive environment. Please read our Code of Conduct before contributing.
                      </p>
                      <Button
                        variant="outline"
                        className="border-[#A459E1]/50 hover:border-[#F0CDFF] text-[#F0CDFF] hover:bg-[#A459E1]/10"
                        asChild
                      >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Troubleshooting */}
                {activeSection === "troubleshooting" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Troubleshooting</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Common issues and their solutions.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          issue: "Extension not activating",
                          solution: "Ensure VS Code is updated to the latest version and reload the window after installation."
                        },
                        {
                          issue: "Prompts not being enhanced",
                          solution: "Check that Clarity AI is enabled in settings and GitHub Copilot is properly authenticated."
                        },
                        {
                          issue: "Slow enhancement speed",
                          solution: "Try reducing the enhancement level to 'minimal' or 'balanced' in settings."
                        },
                        {
                          issue: "Can't connect to GitHub Copilot",
                          solution: "Verify your GitHub Copilot subscription is active and sign out/in again from VS Code."
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-background/50 border border-border rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-[#A459E1]" />
                            {item.issue}
                          </h3>
                          <p className="text-muted-foreground">{item.solution}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Still Need Help?</h3>
                      <p className="text-muted-foreground mb-4">
                        If you're still experiencing issues, reach out to our community:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          className="border-[#A459E1]/50 hover:border-[#F0CDFF] text-[#F0CDFF] hover:bg-[#A459E1]/10"
                          asChild
                        >
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub Issues
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#A459E1]/50 hover:border-[#F0CDFF] text-[#F0CDFF] hover:bg-[#A459E1]/10"
                        >
                          Community Forum
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Floating Navigation Dock */}
      <FloatingDockSection />
    </div>
  );
}
