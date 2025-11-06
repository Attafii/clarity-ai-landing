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
                        ClarityAI is an open-source VS Code extension that enhances your GitHub Copilot prompts 
                        using AI-powered analysis. Get better, more accurate code suggestions in minutes.
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
                          <span>Gemini API key from ai.google.dev (free tier available)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Start</h3>
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Install the Extension", desc: "Install from VS Code marketplace or download the VSIX file" },
                          { step: 2, title: "Get API Key", desc: "Visit ai.google.dev and generate your free Gemini API key" },
                          { step: 3, title: "Configure Extension", desc: "Add your API key to VS Code settings: clarity.geminiApiKey" },
                          { step: 4, title: "Start Using", desc: "Type @clarity in GitHub Copilot chat followed by your prompt" }
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
                        Install ClarityAI from the VS Code marketplace or manually using the VSIX file.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">From VS Code Marketplace</h3>
                      <p className="text-muted-foreground mb-4">
                        Search for "ClarityAI" in the VS Code Extensions marketplace and click Install.
                      </p>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                          <Terminal className="h-4 w-4" />
                          <span>Or use Command Line</span>
                        </div>
                        <code className="text-[#F0CDFF]">code --install-extension clarity-0.0.1.vsix</code>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Manual Installation</h3>
                      <p className="text-muted-foreground mb-4">
                        Download the VSIX file from our GitHub releases page and install it manually.
                      </p>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm space-y-2">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                          <Terminal className="h-4 w-4" />
                          <span>Installation Command</span>
                        </div>
                        <code className="block text-[#F0CDFF]">code --install-extension clarity-0.0.1.vsix</code>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Note
                      </h4>
                      <p className="text-muted-foreground">
                        After installation, reload VS Code for the extension to take effect. You'll need to configure your Gemini API key before first use.
                      </p>
                    </div>
                  </div>
                )}

                {/* Configuration */}
                {activeSection === "configuration" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Setup & Configuration</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Configure your Gemini API key and customize ClarityAI settings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Get Gemini API Key</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Visit <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF] underline">ai.google.dev</a> to create a free Gemini API key.
                        </p>
                        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6">
                          <h4 className="font-semibold text-foreground mb-3">Steps:</h4>
                          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                            <li>Go to ai.google.dev</li>
                            <li>Sign in with your Google account</li>
                            <li>Navigate to "Get API Key"</li>
                            <li>Create a new API key</li>
                            <li>Copy the key for the next step</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Add API Key to VS Code</h3>
                      <p className="text-muted-foreground mb-4">
                        Open VS Code Settings and add your API key:
                      </p>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <code className="text-[#F0CDFF] block">
                          Settings → Extensions → ClarityAI → Gemini API Key
                        </code>
                        <div className="mt-4 pt-4 border-t border-[#A459E1]/20">
                          <span className="text-muted-foreground block mb-2">Or in settings.json:</span>
                          <code className="text-[#F0CDFF] block whitespace-pre">
{`{
  "clarity.geminiApiKey": "your-api-key-here"
}`}
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#A459E1]" />
                        Free Tier Available
                      </h4>
                      <p className="text-muted-foreground">
                        Gemini API offers a generous free tier. Check <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF] underline">ai.google.dev/pricing</a> for current limits.
                      </p>
                    </div>
                  </div>
                )}

                {/* Usage Guide */}
                {activeSection === "usage" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Usage Guide</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Learn how to use ClarityAI with GitHub Copilot Chat.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Basic Usage</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">How to Use</h4>
                          <p className="text-muted-foreground mb-4">
                            In GitHub Copilot Chat, use <code className="px-2 py-1 bg-muted rounded text-[#F0CDFF]">@clarity</code> followed by your prompt:
                          </p>
                          <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 mb-3">
                            <code className="text-[#F0CDFF]">@clarity create a login function</code>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            ClarityAI will enhance your prompt and send the improved version to Copilot.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Example Enhancement</h4>
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-3">
                            <span className="text-xs text-red-400 font-medium mb-2 block">YOUR PROMPT</span>
                            <code className="text-muted-foreground">@clarity create login function</code>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                            <span className="text-xs text-green-400 font-medium mb-2 block">ENHANCED BY CLARITYAI</span>
                            <code className="text-foreground text-sm block whitespace-pre-line">
{`Create a secure login function with the following specifications:
- Accept email and password as parameters
- Validate email format using regex
- Hash password using bcrypt
- Query database for user credentials
- Return JWT token on successful authentication
- Include comprehensive error handling for invalid credentials
- Add TypeScript type definitions
- Include JSDoc comments`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Features in Action</h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Context Detection",
                            desc: "Automatically detects your project context and adds relevant details",
                            icon: "🎯"
                          },
                          {
                            title: "Todo Awareness",
                            desc: "Identifies TODO comments and integrates them into suggestions",
                            icon: "📝"
                          },
                          {
                            title: "Typo Correction",
                            desc: "Fixes spelling and grammar errors in your prompts",
                            icon: "✨"
                          },
                          {
                            title: "Best Practices",
                            desc: "Adds industry best practices to your requirements",
                            icon: "⚡"
                          }
                        ].map((feature, index) => (
                          <div key={index} className="bg-background/50 border border-border rounded-lg p-4 flex gap-4">
                            <div className="text-3xl">{feature.icon}</div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                              <p className="text-sm text-muted-foreground">{feature.desc}</p>
                            </div>
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
                        Powerful features that make ClarityAI indispensable for developers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Context Detection",
                          desc: "Automatically analyzes your project structure and active files to add relevant context",
                          icon: "🎯"
                        },
                        {
                          title: "Todo Awareness",
                          desc: "Scans for TODO comments in your codebase and integrates them into suggestions",
                          icon: "📝"
                        },
                        {
                          title: "Typo Correction",
                          desc: "Automatically fixes spelling and grammar errors in your prompts",
                          icon: "✨"
                        },
                        {
                          title: "Smart Enhancement",
                          desc: "Transforms vague prompts into detailed, actionable specifications",
                          icon: "🧠"
                        },
                        {
                          title: "GitHub Copilot Integration",
                          desc: "Seamless integration with GitHub Copilot Chat using @clarity command",
                          icon: "�"
                        },
                        {
                          title: "Free & Open Source",
                          desc: "100% free to use with full source code available on GitHub",
                          icon: "💎"
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
                        <code className="block text-[#F0CDFF]">git clone https://github.com/Attafii/ClarityAI.git</code>
                        <code className="block text-[#F0CDFF]">cd ClarityAI</code>
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
                        <a href="https://github.com/Attafii/ClarityAI" target="_blank" rel="noopener noreferrer">
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
                          <a href="https://github.com/Attafii/ClarityAI/issues" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub Issues
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#A459E1]/50 hover:border-[#F0CDFF] text-[#F0CDFF] hover:bg-[#A459E1]/10"
                          asChild
                        >
                          <a href="https://github.com/Attafii/ClarityAI" target="_blank" rel="noopener noreferrer">
                            View Documentation
                          </a>
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
