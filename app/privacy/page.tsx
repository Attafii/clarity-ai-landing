import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, GitBranch, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ClarityAI',
  description: 'Learn how ClarityAI handles your data with complete transparency. Only prompts are processed - never your code.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-[#A459E1]" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Last updated: November 6, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* TL;DR Section */}
        <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/5 border-2 border-[#A459E1]/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="h-6 w-6 text-[#A459E1]" />
            TL;DR
          </h2>
          <ul className="space-y-3 text-foreground/90">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong>Only your prompts are sent</strong> to our enhancement service - never your actual code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong>No tracking or analytics</strong> - we don't collect usage data or telemetry</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong>Open source</strong> - you can verify everything we say by reading the code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span><strong>Self-hosting option</strong> - run ClarityAI on your own infrastructure</span>
            </li>
          </ul>
        </div>

        {/* Main Sections */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* What We Collect */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-[#A459E1]" />
              What Data We Collect
            </h2>
            
            <div className="space-y-6">
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">Prompt Text Only</h3>
                <p className="text-muted-foreground mb-3">
                  When you use the <code className="px-2 py-1 bg-background rounded text-[#A459E1]">@clarity</code> command, 
                  we send your prompt text to Google's Gemini API for enhancement.
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm text-green-400 mb-2"><strong>What IS sent:</strong></p>
                  <ul className="text-sm text-foreground/80 space-y-1 ml-4">
                    <li>• Your original prompt text</li>
                    <li>• Project context metadata (framework names, file structure patterns)</li>
                  </ul>
                  <p className="text-sm text-red-400 mt-4 mb-2"><strong>What is NOT sent:</strong></p>
                  <ul className="text-sm text-foreground/80 space-y-1 ml-4">
                    <li>• Your source code</li>
                    <li>• File contents</li>
                    <li>• Environment variables or secrets</li>
                    <li>• Personal information from your system</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">No Telemetry or Tracking</h3>
                <p className="text-muted-foreground">
                  ClarityAI does not include any analytics, telemetry, or usage tracking. We don't know:
                </p>
                <ul className="text-muted-foreground ml-6 mt-3 space-y-1">
                  <li>• How many times you use the extension</li>
                  <li>• What projects you're working on</li>
                  <li>• Your identity or VS Code setup</li>
                  <li>• Any other usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="h-8 w-8 text-[#A459E1]" />
              How We Use Your Data
            </h2>
            
            <div className="space-y-4">
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">Prompt Enhancement</h3>
                <p className="text-muted-foreground">
                  Your prompt is sent to Google's Gemini API to analyze and enhance it. The enhanced prompt is 
                  returned to your VS Code editor. We do not store, log, or retain your prompts.
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">Third-Party Services</h3>
                <p className="text-muted-foreground mb-3">
                  ClarityAI uses Google's Gemini API for AI processing. Your prompts are subject to 
                  Google's privacy policy. Learn more:
                </p>
                <a 
                  href="https://ai.google.dev/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A459E1] hover:text-[#F0CDFF] underline transition-colors"
                >
                  Google Gemini API Terms of Service
                </a>
              </div>
            </div>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-[#A459E1]" />
              Data Storage
            </h2>
            
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">We do not store your data.</strong> ClarityAI is a pass-through 
                service that sends your prompt to Google's API and returns the enhanced version.
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6">
                <li>• No database to store prompts</li>
                <li>• No server-side logging</li>
                <li>• No long-term data retention</li>
                <li>• Prompts are processed in real-time and discarded</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#A459E1]" />
              Your Rights & Control
            </h2>
            
            <div className="space-y-4">
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">API Key Control</h3>
                <p className="text-muted-foreground">
                  You provide your own Gemini API key, which you can revoke at any time through the 
                  Google AI Studio. This gives you complete control over the service.
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">Self-Hosting</h3>
                <p className="text-muted-foreground mb-3">
                  ClarityAI is fully open source. You can:
                </p>
                <ul className="text-muted-foreground ml-6 space-y-1">
                  <li>• Fork the repository and modify the code</li>
                  <li>• Run your own instance with complete control</li>
                  <li>• Use alternative AI providers</li>
                  <li>• Audit the entire codebase</li>
                </ul>
                <a 
                  href="https://github.com/Attafii/ClarityAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#A459E1] hover:text-[#F0CDFF] transition-colors"
                >
                  <GitBranch className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#F0CDFF]">Uninstall Anytime</h3>
                <p className="text-muted-foreground">
                  Simply uninstall the extension from VS Code. Since we don't store any data, 
                  there's nothing to delete from our end.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="h-8 w-8 text-[#A459E1]" />
              Security
            </h2>
            
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>HTTPS/TLS encryption</strong> for all API communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>No server-side storage</strong> means no data breach risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Open source code</strong> allows security audits by anyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>API keys stored locally</strong> in VS Code settings, never transmitted to us</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Changes to This Policy</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be posted on this page 
                with an updated revision date. Since the extension is open source, you can review changes in 
                the GitHub repository.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Mail className="h-8 w-8 text-[#A459E1]" />
              Questions?
            </h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                If you have questions about this privacy policy or how ClarityAI handles data:
              </p>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/Attafii/ClarityAI/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#A459E1] hover:text-[#F0CDFF] underline transition-colors"
                  >
                    Open an issue on GitHub
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Review the source code: </span>
                  <a 
                    href="https://github.com/Attafii/ClarityAI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#A459E1] hover:text-[#F0CDFF] underline transition-colors"
                  >
                    github.com/Attafii/ClarityAI
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Transparency is Our Priority</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ClarityAI is built on the principles of openness and user control. Every line of code is 
            auditable, and you maintain complete ownership of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#A459E1]/30 transition-all"
            >
              Read Documentation
            </Link>
            <a 
              href="https://github.com/Attafii/ClarityAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-background border border-[#A459E1]/30 text-foreground font-semibold rounded-lg hover:bg-[#A459E1]/10 transition-all"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
