'use client';

import { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Rocket, Code2, Settings, Zap, Users, Github, Terminal, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navigation.some(item => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigation = [
    { id: "getting-started", title: "Getting Started", icon: Rocket },
    { id: "installation", title: "Installation", icon: Terminal },
    { id: "configuration", title: "Configuration", icon: Settings },
    { id: "usage", title: "Usage Guide", icon: BookOpen },
    { id: "features", title: "Features", icon: Zap },
    { id: "advanced-features", title: "Advanced Features", icon: Code2 },
    { id: "integrations", title: "IDE Integrations", icon: Code2 },
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
                        using the ClarityAI LLM model and our dedicated ClarityAI service. Get better, more accurate code suggestions in minutes.
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
                          <span>ClarityAI extension installed and configured</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Start</h3>
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Install the Extension", desc: "Install from VS Code marketplace or download the VSIX file" },
                          { step: 2, title: "Configure ClarityAI", desc: "Open VS Code settings and configure ClarityAI preferences" },
                          { step: 3, title: "Start Using", desc: "Type @clarity, @clarity-thinking, or @clarity-fast in GitHub Copilot chat followed by your prompt" }
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
                        Install ClarityAI directly from the VS Code Extensions marketplace or open it in VS Code.
                      </p>
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF] underline font-medium">
                          → Install from VS Code Marketplace
                        </a>
                      </div>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                          <Terminal className="h-4 w-4" />
                          <span>Or use Command Line</span>
                        </div>
                        <code className="text-[#F0CDFF]">code --install-extension clarity-1.0.9.vsix</code>
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
                        <code className="block text-[#F0CDFF]">code --install-extension clarity-1.0.9.vsix</code>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Note
                      </h4>
                      <p className="text-muted-foreground">
                        After installation, reload VS Code for the extension to take effect. You can start using ClarityAI immediately with @clarity in GitHub Copilot Chat.
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
                        Customize ClarityAI settings to match your workflow.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">ClarityAI Settings</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Access ClarityAI settings through VS Code Settings (Ctrl+, or Cmd+,) and search for "ClarityAI".
                        </p>
                        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6">
                          <h4 className="font-semibold text-foreground mb-3">Available Settings:</h4>
                          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                            <li>Enhancement level (minimal, balanced, comprehensive)</li>
                            <li>Auto-enhancement on/off</li>
                            <li>Context detection preferences</li>
                            <li>Custom prompt templates</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Getting Started</h3>
                      <p className="text-muted-foreground mb-4">
                        After installation, ClarityAI is ready to use immediately:
                      </p>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                        <code className="text-[#F0CDFF] block">
                          Open GitHub Copilot Chat → Type @clarity [your prompt]
                        </code>
                        <div className="mt-4 pt-4 border-t border-[#A459E1]/20">
                          <span className="text-muted-foreground block mb-2">Example:</span>
                          <code className="text-[#F0CDFF] block whitespace-pre">
{`@clarity create a login form with validation`}
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#A459E1]" />
                        Free & Open Source
                      </h4>
                      <p className="text-muted-foreground">
                        ClarityAI is completely free to use. API keys are provided for free by the ClarityAI service directly through the extension. Check our <a href="https://github.com/Attafii/ClarityAI" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF] underline">GitHub repository</a> for more details.
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
                          <h4 className="font-semibold text-foreground mb-3">Choice of Commands</h4>
                          <p className="text-muted-foreground mb-4">
                            In GitHub Copilot Chat, choose the command that fits your needs:
                          </p>
                          <div className="space-y-3 mb-6">
                            <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4">
                              <code className="text-[#F0CDFF]">@clarity [prompt]</code>
                              <p className="text-xs text-muted-foreground mt-2"><strong>Standard:</strong> Uses Smart Routing to determine the best path automatically.</p>
                            </div>
                            <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4">
                              <code className="text-[#F0CDFF]">@clarity-thinking [prompt]</code>
                              <p className="text-xs text-muted-foreground mt-2"><strong>Deep Analysis:</strong> Forces the thinking engine for complex logical tasks.</p>
                            </div>
                            <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4">
                              <code className="text-[#F0CDFF]">@clarity-fast [prompt]</code>
                              <p className="text-xs text-muted-foreground mt-2"><strong>Instant:</strong> Optimized for quick fixes and simple unit tests.</p>
                            </div>
                          </div>
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
                            title: "Smart Routing",
                            desc: "Analyzes prompt complexity and routes to the optimal ClarityAI service mode (@clarity-fast or @clarity-thinking)",
                            icon: "🧠"
                          },
                          {
                            title: "Auto-Context",
                            desc: "Automatically detects frameworks and project structure to ground ClarityAI LLM model responses",
                            icon: "🎯"
                          },
                          {
                            title: "Prompt Templates",
                            desc: "Instant access to optimized structures for common coding tasks",
                            icon: "📋"
                          },
                          {
                            title: "Educational Diffs",
                            desc: "See exactly how your prompt evolved into a master-class specification",
                            icon: "💡"
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
                          title: "Smart Routing",
                          desc: "Automatically routes prompts between standard and 'thinking' modes for optimal quality/speed",
                          icon: "🧠"
                        },
                        {
                          title: "Auto-Context Injection",
                          desc: "Injects project metadata, framework versions, and file structure insights into your prompts",
                          icon: "🎯"
                        },
                        {
                          title: "Template Library",
                          desc: "Ready-to-use enhancement templates for common development patterns",
                          icon: "📚"
                        },
                        {
                          title: "Educational Diff View",
                          desc: "Visualizes the enhancement process so you can learn prompt engineering",
                          icon: "🔍"
                        },
                        {
                          title: "One-Click Refinements",
                          desc: "Quick action buttons to iterate on Copilot's output instantly",
                          icon: "⚡"
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

                {/* Advanced Features */}
                {activeSection === "advanced-features" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">Advanced Features</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Unlock the full power of ClarityAI with these advanced capabilities designed for professional workflows.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Persona Engine</h3>
                      <p className="text-muted-foreground mb-4">
                        Activate specialized AI personas through subcommands. Each persona prioritizes different technical aspects and best practices.
                      </p>
                      <div className="space-y-3">
                        {[
                          { cmd: "@clarity /architect", desc: "Scalability, design patterns (SOLID, Clean Arch), system structure" },
                          { cmd: "@clarity /security", desc: "Vulnerability prevention, input sanitization, OWASP standards" },
                          { cmd: "@clarity /reviewer", desc: "Lead-developer style critique of logic, technical debt, edge cases" },
                          { cmd: "@clarity /tester", desc: "Test coverage, boundary conditions, mock strategies" },
                          { cmd: "@clarity /frontend", desc: "Accessibility (A11y), responsive design, CSS best practices" },
                          { cmd: "@clarity /performance", desc: "Big-O complexity, memory footprint, optimization" }
                        ].map((persona, index) => (
                          <div key={index} className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4">
                            <code className="text-[#F0CDFF] font-semibold">{persona.cmd}</code>
                            <p className="text-xs text-muted-foreground mt-2">{persona.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Security & Privacy Guardrails</h3>
                      <p className="text-muted-foreground mb-4">
                        Local-first privacy tools that protect your codebase before prompts ever leave your machine.
                      </p>
                      <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#A459E1]" />
                          Secret Shield
                        </h4>
                        <ul className="space-y-2 text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <span className="text-[#A459E1] mt-1">•</span>
                            <span>Automatically detects and masks API keys, JWT tokens, database credentials</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#A459E1] mt-1">•</span>
                            <span>PII (Personally Identifiable Information) detection and redaction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#A459E1] mt-1">•</span>
                            <span>Pattern recognition for 15+ secret types (AWS, GCP, Azure, GitHub, etc.)</span>
                          </li>
                        </ul>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#A459E1]" />
                          Logic Vulnerability Scanner
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-[#A459E1] mt-1">•</span>
                            <span>Warns before enhancing prompts with dangerous patterns (eval, SQLi, insecure HTTP)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#A459E1] mt-1">•</span>
                            <span>Real-time security best practice suggestions</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Prompt Vault</h3>
                      <p className="text-muted-foreground mb-4">
                        Standardize and share high-performing prompts across your workflow and team.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Local Vault</h4>
                          <p className="text-muted-foreground mb-3">Private storage for your optimized prompts (saved in VS Code Global State).</p>
                          <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                            <code className="text-[#F0CDFF]">@clarity /vault</code>
                            <p className="text-xs text-muted-foreground mt-2">Browse, search, and recall saved prompts</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Team Vault</h4>
                          <p className="text-muted-foreground mb-3">Shared <code className="text-[#F0CDFF] bg-[#1a0b2e] px-2 py-1 rounded">.clarity/vault.json</code> file for team-wide prompt standardization.</p>
                          <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6 font-mono text-sm">
                            <code className="text-muted-foreground">// .clarity/vault.json</code>
                            <pre className="text-[#F0CDFF] mt-2">{`{
  "Company API Standard": {
    "template": "...",
    "tags": ["api", "rest"]
  }
}`}</pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Visual Architectural Roadmaps</h3>
                      <p className="text-muted-foreground mb-4">
                        ClarityAI integrates Mermaid.js for visual communication and architecture diagrams.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 border border-[#A459E1]/20 rounded-xl p-6">
                          <div className="text-3xl mb-3">🗺️</div>
                          <h4 className="font-semibold text-foreground mb-2">Auto-Diagram</h4>
                          <p className="text-sm text-muted-foreground">Automatically appends Mermaid.js diagram blocks when prompts involve "design", "flow", or "process".</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 border border-[#A459E1]/20 rounded-xl p-6">
                          <div className="text-3xl mb-3">👁️</div>
                          <h4 className="font-semibold text-foreground mb-2">Visual Preview</h4>
                          <p className="text-sm text-muted-foreground">Renders diagrams directly in VS Code Chat panel with "Open in Mermaid Live" button.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Quality Analysis & Educational UI</h3>
                      <p className="text-muted-foreground mb-4">
                        ClarityAI doesn't just improve your prompt—it teaches you how to write better ones.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-background/50 border border-border rounded-lg p-4 flex gap-4">
                          <div className="text-3xl">📊</div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Quality Score (1-10)</h4>
                            <p className="text-sm text-muted-foreground">Real-time feedback on how detailed your original prompt was.</p>
                          </div>
                        </div>
                        <div className="bg-background/50 border border-border rounded-lg p-4 flex gap-4">
                          <div className="text-3xl">💡</div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Educational Insights</h4>
                            <p className="text-sm text-muted-foreground">Highlights key additions (e.g., "Added Error Handling because it prevents runtime crashes").</p>
                          </div>
                        </div>
                        <div className="bg-background/50 border border-border rounded-lg p-4 flex gap-4">
                          <div className="text-3xl">🔀</div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Interactive Diff View</h4>
                            <p className="text-sm text-muted-foreground">Side-by-side comparison of "Before" and "After" instructions.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Technical Context Awareness</h3>
                      <p className="text-muted-foreground mb-4">
                        ClarityAI "speaks your tech stack" by analyzing your development environment.
                      </p>
                      <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">Automatic Detection:</h4>
                        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                          <li>Tech Stack Sync: Reads package.json to detect framework versions (Next.js 14, React 18, etc.)</li>
                          <li>.clarityrules Enforcement: Root-level config file for strict project constraints</li>
                          <li>Workspace Mapping: Indexes src folder to understand internal utilities and exports</li>
                        </ul>
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
                        <code className="block text-[#F0CDFF]">git clone https://github.com/Attafii/ClarityAI-Extension</code>
                        <code className="block text-[#F0CDFF]">cd ClarityAI-Extension</code>
                        <code className="block text-[#F0CDFF]">npm install</code>
                        <code className="block text-[#F0CDFF]">Press F5 in VS Code to open a new window with the extension loaded.</code>
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

                {/* IDE Integrations */}
                {activeSection === "integrations" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">IDE Integrations</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        ClarityAI works across multiple development environments with seamless integration.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Terminal className="h-6 w-6 text-[#A459E1]" />
                          <h3 className="text-xl font-bold text-foreground">Visual Studio Code</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Native support with first-class integration. Install directly from the VS Code Marketplace.
                        </p>
                        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 font-mono text-sm mb-4">
                          <code className="block text-[#F0CDFF]">ext install AhmedAttafii.clarityai</code>
                        </div>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#A459E1] mt-0.5 shrink-0" />
                            <span>Automatic GitHub Copilot detection and enhancement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#A459E1] mt-0.5 shrink-0" />
                            <span>Inline suggestions and code actions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#A459E1] mt-0.5 shrink-0" />
                            <span>Command palette integration (Ctrl+Shift+P)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Code2 className="h-6 w-6 text-[#F0CDFF]" />
                          <h3 className="text-xl font-bold text-foreground">Cursor IDE</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          ClarityAI works seamlessly with Cursor's AI-first development environment.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-2">Setup Steps:</p>
                            <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
                              <li>Install ClarityAI from VS Code Marketplace</li>
                              <li>Open Cursor Settings → Extensions</li>
                              <li>Enable ClarityAI for all workspaces</li>
                              <li>Configure custom prompts in Cursor Rules</li>
                            </ol>
                          </div>
                          <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 font-mono text-sm">
                            <code className="block text-[#F0CDFF] mb-1"># .cursorrules</code>
                            <code className="block text-[#F0CDFF]">Use ClarityAI for all code suggestions</code>
                            <code className="block text-[#F0CDFF]">Enable security scanning for production code</code>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Terminal className="h-6 w-6 text-green-400" />
                          <h3 className="text-xl font-bold text-foreground">JetBrains IDEs</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            Beta
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Support for IntelliJ IDEA, WebStorm, PyCharm, and other JetBrains products.
                        </p>
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                          <p className="text-sm text-yellow-300 flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>JetBrains plugin currently in beta. Install via settings → Plugins → Marketplace.</span>
                          </p>
                        </div>
                        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 font-mono text-sm">
                          <code className="block text-[#F0CDFF]">Settings → Plugins → Search "ClarityAI"</code>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Terminal className="h-6 w-6 text-blue-400" />
                          <h3 className="text-xl font-bold text-foreground">CI/CD Integration</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Run ClarityAI security scans and quality checks in your CI/CD pipeline.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-2">GitHub Actions:</p>
                            <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 font-mono text-xs">
                              <code className="block text-gray-400 mb-2"># .github/workflows/clarityai.yml</code>
                              <code className="block text-[#F0CDFF]">name: ClarityAI Security Scan</code>
                              <code className="block text-[#F0CDFF]">on: [push, pull_request]</code>
                              <code className="block text-[#F0CDFF]">jobs:</code>
                              <code className="block text-[#F0CDFF]">  scan:</code>
                              <code className="block text-[#F0CDFF]">    runs-on: ubuntu-latest</code>
                              <code className="block text-[#F0CDFF]">    steps:</code>
                              <code className="block text-[#F0CDFF]">      - uses: actions/checkout@v3</code>
                              <code className="block text-[#F0CDFF]">      - uses: clarityai/scan-action@v1</code>
                              <code className="block text-[#F0CDFF]">        with:</code>
                              <code className="block text-[#F0CDFF]">          severity: high</code>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-2">GitLab CI:</p>
                            <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-lg p-4 font-mono text-xs">
                              <code className="block text-gray-400 mb-2"># .gitlab-ci.yml</code>
                              <code className="block text-[#F0CDFF]">clarityai_scan:</code>
                              <code className="block text-[#F0CDFF]">  image: clarityai/cli:latest</code>
                              <code className="block text-[#F0CDFF]">  script:</code>
                              <code className="block text-[#F0CDFF]">    - clarityai scan --workspace .</code>
                            </div>
                          </div>
                        </div>
                      </div>
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
