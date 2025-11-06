'use client';

import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDockSection from "@/components/sections/FloatingDockSection";

const blogPosts: Record<string, {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: JSX.Element;
}> = {
  "introducing-clarityai": {
    title: "Introducing ClarityAI: Open Source Prompt Enhancement for VS Code",
    author: "ClarityAI Team",
    date: "November 6, 2025",
    readTime: "5 min read",
    category: "Product",
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed">
          We're excited to introduce ClarityAI, a powerful VS Code extension that transforms how developers interact with GitHub Copilot through intelligent prompt enhancement.
        </p>

        <h2>The Problem We're Solving</h2>
        <p>
          GitHub Copilot is an incredible tool, but it's only as good as the prompts you give it. Vague, unclear, or poorly structured prompts lead to mediocre suggestions that require multiple iterations to get right. We've all been there - typing "create a function" and getting something that's technically correct but not quite what we needed.
        </p>

        <h2>How ClarityAI Works</h2>
        <p>
          ClarityAI sits between you and GitHub Copilot, enhancing your prompts in real-time. Simply use the <code>@clarity</code> command in GitHub Copilot Chat, followed by your prompt. ClarityAI will:
        </p>
        <ul>
          <li><strong>Detect context</strong> from your current file and project structure</li>
          <li><strong>Fix typos and grammar</strong> automatically</li>
          <li><strong>Add relevant details</strong> based on best practices</li>
          <li><strong>Include TODOs</strong> it finds in your codebase</li>
          <li><strong>Transform vague requests</strong> into detailed specifications</li>
        </ul>

        <h2>Key Features</h2>
        
        <h3>Context Detection</h3>
        <p>
          ClarityAI analyzes your active file, recent edits, and project structure to understand what you're working on. This context is automatically added to your prompts, making suggestions more relevant and accurate.
        </p>

        <h3>Todo Awareness</h3>
        <p>
          Got TODO comments scattered throughout your code? ClarityAI finds them and can incorporate them into suggestions, helping you tackle your backlog naturally as you code.
        </p>

        <h3>Typo Correction</h3>
        <p>
          We all make typos, especially when coding quickly. ClarityAI automatically fixes spelling and grammar errors in your prompts, so Copilot receives clean, professional instructions.
        </p>

        <h2>100% Free and Open Source</h2>
        <p>
          We believe powerful development tools should be accessible to everyone. That's why ClarityAI is completely free and open source under the MIT license. No paywalls, no premium tiers, no hidden costs.
        </p>
        <p>
          The only cost is the Gemini API, which has a generous free tier perfect for most developers. You can check current pricing at <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF]">ai.google.dev/pricing</a>.
        </p>

        <h2>Getting Started</h2>
        <p>Ready to try ClarityAI? Here's how to get started in under 5 minutes:</p>
        <ol>
          <li>Install the extension from VS Code marketplace or download the VSIX file</li>
          <li>Get your free API key from <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF]">ai.google.dev</a></li>
          <li>Add the API key to VS Code settings: <code>clarity.geminiApiKey</code></li>
          <li>Use <code>@clarity</code> in GitHub Copilot Chat with your prompt</li>
        </ol>

        <h2>What's Next</h2>
        <p>
          We're just getting started! Our roadmap includes support for more LLMs, custom prompt templates, team collaboration features, and much more. Want to contribute? Check out our <a href="https://github.com/Attafii/ClarityAI" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF]">GitHub repository</a>.
        </p>

        <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
          <p className="mb-4">
            Have questions or feedback? Join our growing community on GitHub. We'd love to hear from you!
          </p>
          <a 
            href="https://github.com/Attafii/ClarityAI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black rounded-full font-semibold transition-all duration-300"
          >
            Star on GitHub
          </a>
        </div>
      </div>
    )
  },
  "how-to-get-started-with-clarityai": {
    title: "How to Get Started with ClarityAI",
    author: "ClarityAI Team",
    date: "November 6, 2025",
    readTime: "8 min read",
    category: "Tutorial",
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed">
          This comprehensive guide will walk you through installing ClarityAI, setting up your API key, and enhancing your first prompt in just 5 minutes.
        </p>

        <h2>Prerequisites</h2>
        <p>Before we begin, make sure you have:</p>
        <ul>
          <li>VS Code version 1.85.0 or higher</li>
          <li>GitHub Copilot subscription (required for ClarityAI to work)</li>
          <li>Internet connection for API communication</li>
        </ul>

        <h2>Step 1: Installation</h2>
        
        <h3>From VS Code Marketplace</h3>
        <p>
          The easiest way to install ClarityAI is directly from the VS Code Extensions marketplace:
        </p>
        <ol>
          <li>Open VS Code</li>
          <li>Press <code>Ctrl+Shift+X</code> (Windows/Linux) or <code>Cmd+Shift+X</code> (Mac) to open Extensions</li>
          <li>Search for "ClarityAI"</li>
          <li>Click "Install"</li>
          <li>Reload VS Code when prompted</li>
        </ol>

        <h3>Manual Installation</h3>
        <p>
          Alternatively, you can install from the VSIX file:
        </p>
        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-4 my-4">
          <code className="text-[#F0CDFF]">code --install-extension clarity-0.0.1.vsix</code>
        </div>

        <h2>Step 2: Get Your Gemini API Key</h2>
        <p>
          ClarityAI uses Google's Gemini API for prompt enhancement. Here's how to get your free API key:
        </p>
        <ol>
          <li>Visit <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF]">ai.google.dev</a></li>
          <li>Sign in with your Google account</li>
          <li>Click "Get API Key" in the top navigation</li>
          <li>Click "Create API Key" button</li>
          <li>Copy your new API key (keep it safe!)</li>
        </ol>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
          <h4 className="font-semibold text-blue-400 mb-2">💡 Pro Tip</h4>
          <p className="text-muted-foreground mb-0">
            The Gemini API has a generous free tier with 15 requests per minute and 1 million tokens per day - perfect for most developers. Check <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF]">ai.google.dev/pricing</a> for current limits.
          </p>
        </div>

        <h2>Step 3: Configure ClarityAI</h2>
        <p>
          Now let's add your API key to VS Code:
        </p>

        <h3>Using Settings UI</h3>
        <ol>
          <li>Open VS Code Settings (<code>Ctrl+,</code> or <code>Cmd+,</code>)</li>
          <li>Search for "clarity"</li>
          <li>Find "Clarity: Gemini Api Key"</li>
          <li>Paste your API key</li>
        </ol>

        <h3>Using settings.json</h3>
        <p>Alternatively, add it directly to your settings.json:</p>
        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-4 my-4">
          <pre className="text-[#F0CDFF]">{`{
  "clarity.geminiApiKey": "your-api-key-here"
}`}</pre>
        </div>

        <h2>Step 4: Enhance Your First Prompt</h2>
        <p>
          You're all set! Let's try your first enhanced prompt:
        </p>
        <ol>
          <li>Open any code file in VS Code</li>
          <li>Open GitHub Copilot Chat (click the chat icon in the sidebar)</li>
          <li>Type: <code>@clarity create a login function</code></li>
          <li>Press Enter and watch the magic happen!</li>
        </ol>

        <h3>What Just Happened?</h3>
        <p>
          ClarityAI analyzed your simple prompt and transformed it into a detailed specification. Instead of just "create a login function", Copilot received something like:
        </p>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 my-4">
          <pre className="text-sm">{`Create a secure login function with the following specifications:
- Accept email and password as parameters
- Validate email format using regex
- Hash password using bcrypt
- Query database for user credentials
- Return JWT token on successful authentication
- Include comprehensive error handling
- Add TypeScript type definitions
- Include JSDoc comments`}</pre>
        </div>

        <h2>Understanding the Features</h2>

        <h3>Context Detection</h3>
        <p>
          ClarityAI automatically detects:
        </p>
        <ul>
          <li>Your current programming language</li>
          <li>Framework/library being used (React, Express, etc.)</li>
          <li>Recent code patterns in your file</li>
          <li>Project structure and conventions</li>
        </ul>

        <h3>Todo Awareness</h3>
        <p>
          If you have TODO comments like:
        </p>
        <div className="bg-[#1a0b2e] border border-[#A459E1]/30 rounded-xl p-4 my-4">
          <code className="text-[#F0CDFF]">// TODO: Add input validation</code>
        </div>
        <p>
          ClarityAI will incorporate them into relevant prompts automatically.
        </p>

        <h3>Typo Correction</h3>
        <p>
          Type "crete a funtion" and ClarityAI will fix it to "create a function" before sending to Copilot.
        </p>

        <h2>Best Practices</h2>

        <h3>Be Specific (But Not Too Specific)</h3>
        <p>
          ClarityAI works best with prompts that have clear intent but leave room for enhancement. Instead of:
        </p>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 my-4">
          <code>❌ function</code>
        </div>
        <p>Try:</p>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 my-4">
          <code>✅ @clarity create a function to validate user input</code>
        </div>

        <h3>Use Natural Language</h3>
        <p>
          Don't worry about perfect grammar or technical jargon. ClarityAI understands natural language and will enhance it appropriately.
        </p>

        <h3>Iterate and Learn</h3>
        <p>
          Pay attention to how ClarityAI enhances your prompts. You'll learn what kinds of details lead to better code suggestions.
        </p>

        <h2>Troubleshooting</h2>

        <h3>Extension Not Working</h3>
        <ul>
          <li>Ensure VS Code is version 1.85.0 or higher</li>
          <li>Check that your API key is correctly set</li>
          <li>Verify GitHub Copilot is installed and active</li>
          <li>Reload VS Code window</li>
        </ul>

        <h3>API Key Errors</h3>
        <ul>
          <li>Double-check your API key is correct (no extra spaces)</li>
          <li>Verify your API key is active at ai.google.dev</li>
          <li>Check you haven't exceeded free tier limits</li>
        </ul>

        <h3>Slow Responses</h3>
        <ul>
          <li>Check your internet connection</li>
          <li>Verify API status at ai.google.dev</li>
          <li>Try again during off-peak hours</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          Now that you're up and running, explore:
        </p>
        <ul>
          <li><Link href="/docs" className="text-[#A459E1] hover:text-[#F0CDFF]">Full Documentation</Link> - Dive deeper into all features</li>
          <li><a href="https://github.com/Attafii/ClarityAI" target="_blank" rel="noopener noreferrer" className="text-[#A459E1] hover:text-[#F0CDFF]">GitHub Repository</a> - Contribute or report issues</li>
          <li><Link href="/blog" className="text-[#A459E1] hover:text-[#F0CDFF]">Blog</Link> - Read more tutorials and tips</li>
        </ul>

        <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
          <p className="mb-4">
            Join our community on GitHub for support, feature requests, and discussions.
          </p>
          <a 
            href="https://github.com/Attafii/ClarityAI/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black rounded-full font-semibold transition-all duration-300"
          >
            Get Support
          </a>
        </div>
      </div>
    )
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-[#A459E1] hover:text-[#F0CDFF] underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-4xl px-6">
          {/* Back Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#A459E1] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-md border border-[#A459E1]/30 rounded-full mb-6">
            <span className="text-sm font-medium text-[#F0CDFF]">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-12 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-[#F0CDFF] prose-code:bg-[#1a0b2e] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-a:text-[#A459E1] prose-a:no-underline hover:prose-a:text-[#F0CDFF] prose-li:text-muted-foreground">
            {post.content}
          </div>
        </article>
      </main>

      <Footer />
      <FloatingDockSection />
    </div>
  );
}
