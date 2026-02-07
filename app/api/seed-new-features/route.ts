import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    return NextResponse.json({ error: 'DATABASE_URL is not set' }, { status: 500 });
  }

  const sql = neon(dbUrl);
  const log: string[] = [];

  try {
    log.push('Adding new feature blog posts...');
    
    await sql`
      INSERT INTO blog_posts (slug, title, excerpt, content, author, category, image, read_time, featured)
      VALUES 
        (
          'expert-personas-introduction',
          'Introducing Expert Personas: 6 AI Specialists in One Extension',
          'Discover how ClarityAI Expert Personas transform your AI interactions. Activate specialized personas like /architect, /security, or /performance for domain-specific responses that match senior developer expertise.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070" alt="AI Experts" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">Not all code problems are the same—so why use the same AI for everything? ClarityAI Expert Personas let you activate specialized AI personalities through simple subcommands. Each persona brings focused expertise and industry best practices to your development workflow.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Problem: Generic AI Responses</h2>
            <p class="text-gray-300 leading-relaxed mb-6">Standard AI assistants treat every request the same way. Ask for a component, you get generic code. Ask for a security review, you get surface-level suggestions. But real development requires specialized knowledge—architectural thinking, security expertise, performance optimization skills.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Meet the 6 Expert Personas</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div class="bg-gray-900 border-2 border-blue-500/30 p-8 rounded-2xl hover:border-blue-500/60 transition-all">
                <code class="text-blue-400 font-bold text-xl block mb-4">@clarity /architect</code>
                <h4 class="text-white font-bold mb-2">System Architecture Expert</h4>
                <p class="text-gray-400 text-sm mb-4">Prioritizes SOLID principles, Clean Architecture, design patterns, and scalability. Perfect for refactoring legacy code or designing new systems.</p>
                <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-blue-300 mb-2">Example Output:</div>
                  "Implementing Repository Pattern with Dependency Injection. Separating concerns: data access in /lib/repositories, business logic in /services, API routes as thin controllers."
                </div>
              </div>

              <div class="bg-gray-900 border-2 border-red-500/30 p-8 rounded-2xl hover:border-red-500/60 transition-all">
                <code class="text-red-400 font-bold text-xl block mb-4">@clarity /security</code>
                <h4 class="text-white font-bold mb-2">Security Specialist</h4>
                <p class="text-gray-400 text-sm mb-4">Focuses on OWASP Top 10, input sanitization, authentication, and vulnerability prevention. Every suggestion includes security considerations.</p>
                <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-red-300 mb-2">Auto-Added:</div>
                  "✓ Input validation with Zod\n✓ SQL injection prevention\n✓ XSS protection via DOMPurify\n✓ CSRF tokens for forms"
                </div>
              </div>

              <div class="bg-gray-900 border-2 border-purple-500/30 p-8 rounded-2xl hover:border-purple-500/60 transition-all">
                <code class="text-purple-400 font-bold text-xl block mb-4">@clarity /reviewer</code>
                <h4 class="text-white font-bold mb-2">Lead Developer Reviewer</h4>
                <p class="text-gray-400 text-sm mb-4">Provides senior-level code critique, identifies technical debt, edge cases, and maintainability issues before code ships.</p>
                <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-purple-300 mb-2">Review Focus:</div>
                  "• Error boundaries missing\n• No loading states\n• Race condition in useEffect\n• Missing TypeScript strict null checks"
                </div>
              </div>

              <div class="bg-gray-900 border-2 border-green-500/30 p-8 rounded-2xl hover:border-green-500/60 transition-all">
                <code class="text-green-400 font-bold text-xl block mb-4">@clarity /tester</code>
                <h4 class="text-white font-bold mb-2">QA & Testing Expert</h4>
                <p class="text-gray-400 text-sm mb-4">Emphasizes test coverage, boundary conditions, mocking strategies, and TDD practices. Generates comprehensive test suites.</p>
                <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-green-300 mb-2">Test Coverage:</div>
                  "✓ Happy path\n✓ Error scenarios\n✓ Edge cases (null, empty, overflow)\n✓ Integration tests\n✓ E2E with Playwright"
                </div>
              </div>

              <div class="bg-gray-900 border-2 border-pink-500/30 p-8 rounded-2xl hover:border-pink-500/60 transition-all">
                <code class="text-pink-400 font-bold text-xl block mb-4">@clarity /frontend</code>
                <h4 class="text-white font-bold mb-2">UI/UX Specialist</h4>
                <p class="text-gray-400 text-sm mb-4">Prioritizes accessibility (A11y), responsive design, semantic HTML, and modern CSS best practices. WCAG 2.1 compliant by default.</p>
                <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-pink-300 mb-2">Accessibility:</div>
                  "• ARIA labels for all interactive elements\n• Keyboard navigation (Tab, Enter, Esc)\n• Screen reader support\n• Focus indicators"
                </div>
              </div>

              <div class="bg-gray-900 border-2 border-yellow-500/30 p-8 rounded-2xl hover:border-yellow-500/60 transition-all">
                <code class="text-yellow-400 font-bold text-xl block mb-4">@clarity /performance</code>
                <h4 class="text-white font-bold mb-2">Optimization Specialist</h4>
                <p class="text-gray-400 text-sm mb-4">Analyzes Big-O complexity, memory footprint, caching strategies, and runtime optimizations. Every solution is performance-first.</p>
                <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-yellow-300 mb-2">Optimizations:</div>
                  "• Memoization with useMemo\n• Virtualized lists for 10k+ items\n• Lazy loading images\n• Code splitting at route level"
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Use Cases</h2>
            
            <div class="space-y-6 my-10">
              <div class="bg-gradient-to-r from-blue-900/30 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
                <h4 class="text-blue-400 font-bold mb-2">Use Case: System Refactoring</h4>
                <code class="text-sm text-gray-300 block mb-3">@clarity /architect refactor this monolith into microservices</code>
                <p class="text-gray-400 text-sm">Gets you: Event-driven architecture design, service boundaries, communication patterns, database-per-service strategy, and deployment considerations.</p>
              </div>

              <div class="bg-gradient-to-r from-red-900/30 to-red-600/10 border border-red-500/20 rounded-xl p-6">
                <h4 class="text-red-400 font-bold mb-2">Use Case: Security Audit</h4>
                <code class="text-sm text-gray-300 block mb-3">@clarity /security review this authentication flow</code>
                <p class="text-gray-400 text-sm">Gets you: Vulnerability assessment, OWASP compliance check, secure token storage recommendations, and penetration test scenarios.</p>
              </div>

              <div class="bg-gradient-to-r from-pink-900/30 to-pink-600/10 border border-pink-500/20 rounded-xl p-6">
                <h4 class="text-pink-400 font-bold mb-2">Use Case: Accessibility Compliance</h4>
                <code class="text-sm text-gray-300 block mb-3">@clarity /frontend make this modal WCAG 2.1 AA compliant</code>
                <p class="text-gray-400 text-sm">Gets you: Focus trap implementation, ARIA attributes, keyboard navigation, screen reader announcements, and contrast ratio fixes.</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Combining Personas</h2>
            <p class="text-gray-300 mb-6">You can chain personas for comprehensive analysis:</p>
            <div class="bg-black/40 rounded-lg p-6 font-mono text-sm space-y-2 mb-8 border border-gray-800">
              <div><span class="text-blue-400">@clarity /architect</span> <span class="text-gray-500">design the system</span></div>
              <div><span class="text-red-400">@clarity /security</span> <span class="text-gray-500">review the architecture</span></div>
              <div><span class="text-green-400">@clarity /tester</span> <span class="text-gray-500">create integration tests</span></div>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Activate Your Experts Today</h3>
              <p class="text-purple-100 mb-8 text-xl max-w-2xl mx-auto">Stop using generic AI. Start working with specialists who understand your domain.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Install ClarityAI</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Features',
          'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070',
          '14 min read',
          false
        ),
        (
          'security-first-prompting',
          'Security-First Prompting: How ClarityAI Protects Your Code',
          'Deep dive into ClarityAI Secret Shield and Logic Vulnerability Scanner—local-first privacy tools that detect and mask API keys, secrets, and PII before prompts leave your machine.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070" alt="Security Shield" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">Most AI coding tools create a security blindspot: your code, API keys, and environment variables flow through their servers without scrutiny. ClarityAI takes a different approach—security is baked into every prompt enhancement, locally.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Silent Data Leak Problem</h2>
            <p class="text-gray-300 mb-6">When you ask GitHub Copilot to "create an API client", it sees your code context—including any hardcoded secrets. This context gets sent to OpenAI servers. While reputable providers delete logs, the risk remains: your secrets traveling across the internet.</p>

            <div class="bg-red-900/20 border-2 border-red-500/40 rounded-xl p-8 my-10">
              <h3 class="text-red-400 font-bold text-2xl mb-4">⚠️ Real Example</h3>
              <pre class="bg-black/60 p-6 rounded-lg overflow-x-auto text-sm"><code>const apiKey = "sk-proj-aBcDeFgH123456...";  // Exposed!
const dbUrl = "postgres://user:password@...";  // Sent to AI!</code></pre>
              <p class="text-gray-300 mt-4">Without protection, this code gets included in AI prompts. ClarityAI detects these patterns BEFORE enhancement.</p>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">ClarityAI Secret Shield</h2>
            <p class="text-gray-300 mb-6">Our local-first detection engine runs entirely in your VS Code instance. Zero network calls. Zero cloud analysis. It scans your code for 15+ secret patterns and masks them before enhancement:</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div class="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h4 class="text-blue-400 font-bold mb-3">Cloud Provider Keys</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• AWS Access Keys</li>
                  <li>• GCP Service Accounts</li>
                  <li>• Azure Connection Strings</li>
                  <li>• DigitalOcean Tokens</li>
                </ul>
              </div>
              <div class="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h4 class="text-green-400 font-bold mb-3">API Tokens</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• GitHub Personal Access Tokens</li>
                  <li>• Stripe API Keys</li>
                  <li>• OpenAI API Keys</li>
                  <li>• JWT Tokens</li>
                </ul>
              </div>
              <div class="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h4 class="text-purple-400 font-bold mb-3">Database & PII</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• Database URLs</li>
                  <li>• Email Addresses</li>
                  <li>• Phone Numbers</li>
                  <li>• Credit Card Numbers</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">How Secret Masking Works</h2>
            <p class="text-gray-300 mb-6">When ClarityAI detects a secret, it replaces it with a placeholder that preserves code structure without exposing sensitive data:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div>
                <div class="bg-red-900/10 border border-red-500/30 rounded-lg px-4 py-2 mb-3 text-center">
                  <span class="text-red-400 font-bold text-sm">BEFORE (Risky)</span>
                </div>
                <pre class="bg-black/80 p-6 rounded-lg text-sm overflow-x-auto border border-gray-800"><code className="text-red-300">const stripe = new Stripe(
  "sk_live_51abc123...",
  { apiVersion: "2023-10-16" }
);</code></pre>
              </div>
              <div>
                <div class="bg-green-900/10 border border-green-500/30 rounded-lg px-4 py-2 mb-3 text-center">
                  <span className="text-green-400 font-bold text-sm">AFTER (Protected)</span>
                </div>
                <pre class="bg-black/80 p-6 rounded-lg text-sm overflow-x-auto border border-gray-800"><code className="text-green-300">const stripe = new Stripe(
  "[REDACTED_STRIPE_KEY]",
  { apiVersion: "2023-10-16" }
);</code></pre>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Logic Vulnerability Scanner</h2>
            <p class="text-gray-300 mb-6">Beyond secrets, ClarityAI warns you about dangerous coding patterns in your prompts:</p>

            <div class="space-y-6 my-10">
              <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
                <h4 class="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                  <span>⚠️</span> eval() Usage
                </h4>
                <p class="text-gray-400 text-sm mb-3">If your prompt asks for code using <code>eval()</code>, ClarityAI shows a warning: "eval() is a security risk. Consider safer alternatives like Function constructor or JSON.parse."</p>
              </div>

              <div class="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
                <h4 class="text-orange-400 font-bold mb-2 flex items-center gap-2">
                  <span>🔓</span> SQL Injection Patterns
                </h4>
                <p class="text-gray-400 text-sm mb-3">Detects string concatenation in database queries and suggests parameterized queries or ORMs like Prisma.</p>
              </div>

              <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 class="text-red-400 font-bold mb-2 flex items-center gap-2">
                  <span>🌐</span> Insecure HTTP
                </h4>
                <p class="text-gray-400 text-sm mb-3">Flags <code>http://</code> URLs in production code and recommends HTTPS enforcement.</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Local-First Architecture</h2>
            <p class="text-gray-300 mb-6">ClarityAI security runs entirely in your VS Code process:</p>

            <div class="bg-gray-900 border border-gray-800 rounded-xl p-8 my-10">
              <h4 class="text-purple-400 font-bold mb-4">Data Flow (Secure)</h4>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="text-gray-300">You type a prompt in VS Code</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="text-gray-300">ClarityAI scans code context locally (CPU, no network)</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="text-gray-300">Secrets masked, vulnerabilities flagged</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div className="text-gray-300">Only safe, enhanced prompt sent to AI</div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Code Safely, Build Fearlessly</h3>
              <p class="text-blue-100 mb-8 text-xl">ClarityAI: The only AI assistant with enterprise-grade security baked in.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Install Now - 100% Free</a>
            </div>
          </div>',
          'Security Team',
          'Security',
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
          '16 min read',
          false
         ),
        (
          'team-prompt-vault',
          'Building a Team Prompt Library with .clarity/vault.json',
          'Learn how to create, sync, and share reusable prompt templates across your team using ClarityAI local and team vaults. From single-developer workflows to enterprise prompt governance.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" alt="Team Collaboration" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">Great prompts are hard-won knowledge. You spend hours refining a perfect system architecture prompt, then watch teammates struggle with the same task. ClarityAI Prompt Vault solves this—store, version, and share your best prompts as reusable templates.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Prompt Knowledge Problem</h2>
            <p class="text-gray-300 mb-6">Every developer builds their own prompt library mentally. "Ask for code with tests", "Request TypeScript strict mode", "Include error handling"—these patterns get refined through trial and error. But this knowledge stays siloed in individual heads.</p>

            <div class="bg-red-900/20 border-2 border-red-500/40 rounded-xl p-8 my-10">
              <h3 class="text-red-400 font-bold text-2xl mb-4">❌ Without Prompt Vault</h3>
              <ul class="space-y-2 text-gray-300">
                <li>• Junior devs write vague prompts, get poor results</li>
                <li>• Senior devs repeat the same prompt refinements daily</li>
                <li>• No consistency across team (everyone has different styles)</li>
                <li>• Onboarding takes weeks of "learning by osmosis"</li>
              </ul>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Vault Architecture: Local vs Team</h2>
            <p class="text-gray-300 mb-6">ClarityAI offers two vault types, designed to work together:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div class="bg-gradient-to-br from-blue-900/30 to-blue-600/10 border border-blue-500/30 rounded-2xl p-8">
                <h3 class="text-blue-400 font-bold text-2xl mb-4">🔒 Local Vault</h3>
                <p class="text-gray-400 mb-4">Stored in <code class="text-blue-300">~/.clarity/vault.json</code> (your home directory)</p>
                <h4 class="text-white font-bold mb-2">Best For:</h4>
                <ul class="text-sm text-gray-300 space-y-1 mb-4">
                  <li>• Personal prompt experiments</li>
                  <li>• Project-specific templates</li>
                  <li>• Sensitive/proprietary prompts</li>
                  <li>• Individual workflow optimization</li>
                </ul>
                <div class="bg-black/40 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-blue-300 mb-2">Example:</div>
                  Personal API integration prompt for your startup\'s secret project
                </div>
              </div>

              <div class="bg-gradient-to-br from-green-900/30 to-green-600/10 border border-green-500/30 rounded-2xl p-8">
                <h3 class="text-green-400 font-bold text-2xl mb-4">🌐 Team Vault</h3>
                <p class="text-gray-400 mb-4">Committed to <code class="text-green-300">.clarity/vault.json</code> in your Git repo</p>
                <h4 class="text-white font-bold mb-2">Best For:</h4>
                <ul class="text-sm text-gray-300 space-y-1 mb-4">
                  <li>• Company coding standards</li>
                  <li>• Shared best practices</li>
                  <li>• Onboarding templates</li>
                  <li>• Cross-team consistency</li>
                </ul>
                <div class="bg-black/40 rounded-lg p-4 font-mono text-xs text-gray-300">
                  <div class="text-green-300 mb-2">Example:</div>
                  "React Component" template enforcing your team\'s A11y standards
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Vault JSON Structure</h2>
            <p class="text-gray-300 mb-6">Both vault types use the same simple JSON format:</p>

            <pre class="bg-black/80 border border-gray-800 rounded-xl p-6 overflow-x-auto text-sm my-8"><code>{
  "prompts": [
    {
      "id": "react-component-a11y",
      "name": "Accessible React Component",
      "description": "Creates WCAG 2.1 AA compliant React components",
      "template": "Create a React component called {{componentName}} that:\\n- Uses semantic HTML\\n- Includes ARIA labels for interactive elements\\n- Supports keyboard navigation (Tab, Enter, Esc)\\n- Has focus indicators\\n- Tests with screen reader compatibility\\n\\nAdditional requirements: {{requirements}}",
      "variables": ["componentName", "requirements"],
      "category": "Frontend",
      "author": "Frontend Team",
      "version": "1.2.0"
    },
    {
      "id": "api-endpoint-secure",
      "name": "Secure API Endpoint",
      "description": "Node.js/Express endpoint with auth + validation",
      "template": "@clarity /security Create a {{method}} endpoint at {{path}} that:\\n- Validates input with Zod schema\\n- Requires JWT authentication\\n- Uses parameterized queries (no SQL injection)\\n- Returns proper HTTP status codes\\n- Includes rate limiting\\n\\nBusiness logic: {{logic}}",
      "variables": ["method", "path", "logic"],
      "category": "Backend",
      "author": "Security Team",
      "version": "2.0.1"
    }
  ]
}</code></pre>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Using Vault Prompts in VS Code</h2>
            <p class="text-gray-300 mb-6">Once templates are in your vault, ClarityAI detects them automatically:</p>

            <div class="space-y-6 my-10">
              <div class="bg-gradient-to-r from-purple-900/30 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
                <h4 class="text-purple-400 font-bold mb-3 flex items-center gap-2">
                  <span class="text-2xl">1️⃣</span> Type <code>@clarity</code> in chat
                </h4>
                <p class="text-gray-300 text-sm">ClarityAI shows vault prompts in autocomplete dropdown</p>
              </div>

              <div class="bg-gradient-to-r from-pink-900/30 to-pink-600/10 border border-pink-500/30 rounded-xl p-6">
                <h4 class="text-pink-400 font-bold mb-3 flex items-center gap-2">
                  <span class="text-2xl">2️⃣</span> Select Template
                </h4>
                <p class="text-gray-300 text-sm">Choose "Accessible React Component" from the list</p>
              </div>

              <div class="bg-gradient-to-r from-blue-900/30 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
                <h4 class="text-blue-400 font-bold mb-3 flex items-center gap-2">
                  <span class="text-2xl">3️⃣</span> Fill Variables
                </h4>
                <p class="text-gray-300 text-sm mb-3">ClarityAI prompts for <code>{{componentName}}</code> and <code>{{requirements}}</code></p>
                <div class="bg-black/60 rounded-lg p-4 font-mono text-xs text-gray-300">
                  componentName: <span class="text-blue-300">UserProfileCard</span><br/>
                  requirements: <span class="text-blue-300">Displays avatar, name, bio. Supports dark mode.</span>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-900/30 to-green-600/10 border border-green-500/30 rounded-xl p-6">
                <h4 class="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <span class="text-2xl">4️⃣</span> Enhanced Prompt Sent
                </h4>
                <p class="text-gray-300 text-sm">AI receives your filled template with all quality guardrails included</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Team Workflow</h2>
            
            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 my-10">
              <h3 class="text-white font-bold text-xl mb-6">🏢 Scenario: Onboarding New Frontend Developer</h3>
              
              <div class="space-y-4">
                <div class="flex gap-4">
                  <div class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 class="text-blue-400 font-bold mb-1">Senior Dev: Create Team Vault</h4>
                    <p class="text-gray-400 text-sm">Adds 10 core templates (React components, API endpoints, database migrations) to <code>.clarity/vault.json</code></p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 class="text-green-400 font-bold mb-1">Git Commit & Push</h4>
                    <p class="text-gray-400 text-sm">Vault templates now in version control, available to entire team</p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 class="text-purple-400 font-bold mb-1">Junior Dev: Clone Repo</h4>
                    <p class="text-gray-400 text-sm">On day 1, has access to all company prompt standards—no manual training needed</p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 class="text-pink-400 font-bold mb-1">First Task</h4>
                    <p class="text-gray-400 text-sm">Uses "Accessible React Component" template → Ships production-quality code on day 1</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Best Practices</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h4 class="text-green-400 font-bold mb-3">✅ DO</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Version your prompts (semantic versioning)</li>
                  <li>• Use clear variable names: <code>{{componentName}}</code> not <code>{{x}}</code></li>
                  <li>• Include categories for organization</li>
                  <li>• Document why the template exists (in description)</li>
                  <li>• Update templates based on team feedback</li>
                </ul>
              </div>

              <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 class="text-red-400 font-bold mb-3">❌ DON\'T</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Hardcode project-specific values in team vault</li>
                  <li>• Create 50-line mega-prompts (split into smaller templates)</li>
                  <li>• Commit API keys or secrets in templates</li>
                  <li>• Ignore vault versioning (breaks team sync)</li>
                  <li>• Mix local and team vault responsibilities</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Advanced: Vault Governance</h2>
            <p class="text-gray-300 mb-6">For enterprise teams, enforce vault standards via CI/CD:</p>

            <pre class="bg-black/80 border border-gray-800 rounded-xl p-6 overflow-x-auto text-sm my-8"><code># .github/workflows/vault-validation.yml
name: Validate Prompt Vault
on: [pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate JSON
        run: |
          # Check vault.json is valid JSON
          jq empty .clarity/vault.json
          
          # Ensure all prompts have required fields
          jq -e \'.prompts[] | select(.id and .name and .template)\' .clarity/vault.json
          
          # Check for secrets (should never be in vault)
          ! grep -E "(API_KEY|PASSWORD|SECRET)" .clarity/vault.json</code></pre>

            <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Scale Team Knowledge, Not Onboarding Time</h3>
              <p class="text-purple-100 mb-8 text-xl max-w-2xl mx-auto">Turn your best prompts into organizational assets. Start building your vault today.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Get ClarityAI</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Tutorial',
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
          '18 min read',
          false
        ),
        (
          'visual-architecture-mermaid',
          'Visual Architecture with Auto-Generated Mermaid Diagrams',
          'Stop drawing diagrams manually. Learn how ClarityAI automatically generates Mermaid.js architecture diagrams from your code and prompts, with one-click export to Mermaid Live Editor.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" alt="Diagrams and Architecture" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">Documentation goes stale. Hand-drawn diagrams become outdated the moment you commit code. ClarityAI solves this with auto-generated Mermaid.js diagrams that stay in sync with your architecture—generated fresh from every prompt response.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Diagram Decay Problem</h2>
            <p class="text-gray-300 mb-6">Every team has the same story: someone spends 3 hours creating beautiful architecture diagrams in Lucidchart or Draw.io. Two sprints later, the diagrams are completely wrong. Nobody updates them. New devs get confused. The cycle repeats.</p>

            <div class="bg-orange-900/20 border-2 border-orange-500/40 rounded-xl p-8 my-10">
              <h3 class="text-orange-400 font-bold text-2xl mb-4">⚠️ Traditional Diagram Workflow</h3>
              <div class="space-y-3 text-gray-300">
                <div class="flex items-start gap-3">
                  <span class="text-red-400 text-2xl">❌</span>
                  <div>
                    <h4 class="font-bold text-white mb-1">Manual Creation</h4>
                    <p class="text-sm text-gray-400">3 hours dragging boxes and arrows in a GUI tool</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-red-400 text-2xl">❌</span>
                  <div>
                    <h4 class="font-bold text-white mb-1">Immediate Staleness</h4>
                    <p class="text-sm text-gray-400">Diagram saved as PNG/PDF—can\'t edit or version control properly</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-red-400 text-2xl">❌</span>
                  <div>
                    <h4 class="font-bold text-white mb-1">Update Burden</h4>
                    <p class="text-sm text-gray-400">Nobody wants to spend another 3 hours updating. Gets ignored.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">ClarityAI Auto-Diagram Engine</h2>
            <p class="text-gray-300 mb-6">ClarityAI detects when an AI response describes system architecture and automatically generates Mermaid.js diagrams. No manual work. Always current with the latest code discussion.</p>

            <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8 my-10">
              <h3 class="text-blue-400 font-bold text-2xl mb-6">🤖 Automatic Triggers</h3>
              <p class="text-gray-300 mb-4">ClarityAI generates diagrams when AI responses contain:</p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start gap-3">
                  <span class="text-green-400">✓</span>
                  <span><strong>Component relationships:</strong> "UserService calls PaymentAPI"</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400">✓</span>
                  <span><strong>Data flows:</strong> "User submits form → validates → saves to DB"</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400">✓</span>
                  <span><strong>System architecture:</strong> "Frontend (React) → API Gateway → Microservices"</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400">✓</span>
                  <span><strong>Class hierarchies:</strong> "BaseModel extends Entity implements Auditable"</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400">✓</span>
                  <span><strong>Sequence diagrams:</strong> "Client → Auth → Database → Response"</span>
                </li>
              </ul>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Mermaid.js: Diagrams as Code</h2>
            <p class="text-gray-300 mb-6">Mermaid.js lets you write diagrams using text syntax—perfect for version control and AI generation. Here\'s a real example ClarityAI generates:</p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
              <div>
                <h4 class="text-purple-400 font-bold mb-3">Mermaid Source (Generated by AI)</h4>
                <pre class="bg-black/80 border border-gray-800 rounded-xl p-6 text-xs overflow-x-auto"><code>graph TD
    A[User Request] --> B[API Gateway]
    B --> C{Auth Valid?}
    C -->|Yes| D[Service Layer]
    C -->|No| E[401 Error]
    D --> F[Database]
    F --> G[Response]
    G --> A
    
    style C fill:#f96,stroke:#333
    style E fill:#f66,stroke:#333</code></pre>
              </div>
              <div>
                <h4 class="text-green-400 font-bold mb-3">Rendered Diagram (In VS Code)</h4>
                <div class="bg-white rounded-xl p-6 flex items-center justify-center">
                  <img src="https://mermaid.ink/img/pako:eNptkMFqwzAMhl9F-LRCXyAXQ9d12A4d3U2-KLaSGGI7s50tpfTdZ7fp6GCgk_R9Evz_YHBaE3AaGTpM2V8P1ztMx-EYrLXYRYiYPH7F6LFWH-sUHnzG6Kf_aX_e3-_e3-8-3-8-3-8-3-8" alt="System Flow Diagram" class="max-w-full" />
                </div>
                <p class="text-gray-400 text-xs mt-2 text-center">Auto-rendered in ClarityAI panel</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Diagram Types Supported</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div class="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 class="text-blue-400 font-bold mb-3">🔀 Flowcharts</h4>
                <p class="text-sm text-gray-400 mb-4">Decision trees, process flows, state machines</p>
                <code class="text-xs text-gray-500 block">graph TD / graph LR</code>
              </div>

              <div class="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 class="text-green-400 font-bold mb-3">📊 Sequence Diagrams</h4>
                <p class="text-sm text-gray-400 mb-4">API interactions, user flows, service communication</p>
                <code class="text-xs text-gray-500 block">sequenceDiagram</code>
              </div>

              <div class="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 class="text-purple-400 font-bold mb-3">🏗️ Class Diagrams</h4>
                <p class="text-sm text-gray-400 mb-4">OOP structures, entity relationships, inheritance</p>
                <code class="text-xs text-gray-500 block">classDiagram</code>
              </div>

              <div class="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 class="text-pink-400 font-bold mb-3">📈 Entity Relationships</h4>
                <p class="text-sm text-gray-400 mb-4">Database schemas, data models</p>
                <code class="text-xs text-gray-500 block">erDiagram</code>
              </div>

              <div class="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 class="text-yellow-400 font-bold mb-3">⏱️ Gantt Charts</h4>
                <p class="text-sm text-gray-400 mb-4">Project timelines, task dependencies</p>
                <code class="text-xs text-gray-500 block">gantt</code>
              </div>

              <div class="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 class="text-red-400 font-bold mb-3">🚦 State Diagrams</h4>
                <p class="text-sm text-gray-400 mb-4">Lifecycle states, workflows</p>
                <code class="text-xs text-gray-500 block">stateDiagram-v2</code>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Export to Mermaid Live Editor</h2>
            <p class="text-gray-300 mb-6">ClarityAI includes one-click export to <a href="https://mermaid.live" class="text-blue-400 hover:underline">Mermaid Live Editor</a> for advanced customization:</p>

            <div class="space-y-4 my-10">
              <div class="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="text-purple-400 font-bold mb-2">AI Generates Diagram</h4>
                  <p class="text-gray-300 text-sm">ClarityAI creates Mermaid code from architecture discussion</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="text-blue-400 font-bold mb-2">Preview in VS Code</h4>
                  <p class="text-gray-300 text-sm">See rendered diagram directly in ClarityAI panel</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-900/30 to-pink-900/30 border border-green-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="text-green-400 font-bold mb-2">Click "Open in Mermaid Live"</h4>
                  <p class="text-gray-300 text-sm">One-click export with URL pre-filled. Customize colors, styling, layout</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h4 class="text-pink-400 font-bold mb-2">Export PNG/SVG</h4>
                  <p class="text-gray-300 text-sm">Download for Confluence, Notion, or embed in docs</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Use Case: Microservices Planning</h2>
            
            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 my-10">
              <h3 class="text-white font-bold text-xl mb-4">Prompt:</h3>
              <div class="bg-black/60 rounded-lg p-4 mb-6 font-mono text-sm text-gray-300">
                @clarity /architect Design a microservices architecture for an e-commerce platform with auth, inventory, and payment services
              </div>

              <h3 class="text-white font-bold text-xl mb-4">AI Response (excerpt):</h3>
              <p class="text-gray-300 mb-4 text-sm">"I recommend a 3-tier microservices architecture: API Gateway handles routing, Auth Service manages JWT tokens, Inventory Service tracks stock via event sourcing, and Payment Service integrates Stripe with saga pattern for distributed transactions..."</p>

              <h3 class="text-green-400 font-bold text-xl mb-4">✨ ClarityAI Auto-Generates:</h3>
              <pre class="bg-black/80 border border-gray-800 rounded-xl p-6 text-xs overflow-x-auto"><code>graph TD
    Client[Client App] --> Gateway[API Gateway]
    Gateway --> Auth[Auth Service]
    Gateway --> Inv[Inventory Service]
    Gateway --> Pay[Payment Service]
    
    Auth --> DB1[(Users DB)]
    Inv --> DB2[(Products DB)]
    Pay --> Stripe[Stripe API]
    
    Inv -.Event Bus.-> Pay
    Pay -.Event Bus.-> Inv</code></pre>

              <p class="text-gray-400 text-sm mt-4">This diagram is now <strong>version-controlled</strong> (in chat history), <strong>editable</strong> (text-based), and <strong>shareable</strong> (one-click to Mermaid Live).</p>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Benefits vs Traditional Tools</h2>

            <div class="overflow-x-auto my-10">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-gray-800">
                    <th class="text-left p-4 text-white font-bold">Feature</th>
                    <th class="text-center p-4 text-green-400 font-bold">ClarityAI Mermaid</th>
                    <th class="text-center p-4 text-red-400 font-bold">Lucidchart/Draw.io</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Creation Time</td>
                    <td class="p-4 text-center text-green-400">Instant (auto-gen)</td>
                    <td class="p-4 text-center text-gray-400">Hours (manual)</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Version Control</td>
                    <td class="p-4 text-center text-green-400">✅ Text-based, Git-friendly</td>
                    <td class="p-4 text-center text-gray-400">❌ Binary files</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Stays Current</td>
                    <td class="p-4 text-center text-green-400">✅ Regenerates with context</td>
                    <td class="p-4 text-center text-gray-400">❌ Manual updates</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Collaboration</td>
                    <td class="p-4 text-center text-green-400">✅ Code review workflow</td>
                    <td class="p-4 text-center text-gray-400">⚠️ Separate tool</td>
                  </tr>
                  <tr>
                    <td class="p-4 text-gray-300">Cost</td>
                    <td class="p-4 text-center text-green-400">Free</td>
                    <td class="p-4 text-center text-gray-400">$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Never Draw a Diagram Again</h3>
              <p class="text-blue-100 mb-8 text-xl max-w-2xl mx-auto">Let AI document your architecture automatically. Focus on building, not diagramming.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Install ClarityAI</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Features',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
          '15 min read',
          false
        ),
        (
          'quality-scoring-deep-dive',
          'Understanding ClarityAI\'s Quality Scoring Algorithm',
          'How does ClarityAI rate prompt quality from 1-100? Learn the scoring algorithm behind educational insights, what makes a "great" prompt, and how to improve your score for better AI results.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070" alt="Data Analytics" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">"Why did the AI give me bad code?" Most developers never see the connection between prompt quality and output quality. ClarityAI makes this invisible process visible with a 1-100 quality score for every prompt you write—along with actionable insights to improve.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Hidden Skill: Prompt Engineering</h2>
            <p class="text-gray-300 mb-6">Everyone knows how to code. But prompt engineering? That\'s a new literacy. The difference between "create a button" and a well-structured prompt can be 10x better output. ClarityAI teaches you this skill in real-time.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div class="bg-red-900/20 border-2 border-red-500/40 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-red-500 text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center">32</div>
                  <h3 class="text-red-400 font-bold text-xl">Poor Prompt</h3>
                </div>
                <pre class="bg-black/60 rounded-lg p-4 text-sm text-gray-300 mb-4"><code>make a login page</code></pre>
                <h4 class="text-red-300 font-bold text-sm mb-2">Why Low Score:</h4>
                <ul class="text-xs text-gray-400 space-y-1">
                  <li>❌ No framework specified</li>
                  <li>❌ No UI requirements</li>
                  <li>❌ No auth strategy mentioned</li>
                  <li>❌ No validation details</li>
                </ul>
              </div>

              <div class="bg-green-900/20 border-2 border-green-500/40 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-green-500 text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center">91</div>
                  <h3 class="text-green-400 font-bold text-xl">Excellent Prompt</h3>
                </div>
                <pre class="bg-black/60 rounded-lg p-4 text-sm text-gray-300 mb-4"><code>Create a Next.js login page with:
- Email/password fields (Zod validation)
- JWT authentication via /api/auth
- Error states for invalid credentials
- Loading spinner during submit
- Tailwind CSS styling, dark mode
- TypeScript strict mode</code></pre>
                <h4 class="text-green-300 font-bold text-sm mb-2">Why High Score:</h4>
                <ul class="text-xs text-gray-400 space-y-1">
                  <li>✅ Framework specified (Next.js)</li>
                  <li>✅ Validation library (Zod)</li>
                  <li>✅ Auth strategy (JWT)</li>
                  <li>✅ Edge cases (errors, loading)</li>
                  <li>✅ Styling requirements (Tailwind, dark mode)</li>
                  <li>✅ Type safety (TypeScript strict)</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The 5-Pillar Scoring System</h2>
            <p class="text-gray-300 mb-6">ClarityAI evaluates prompts across 5 dimensions, weighted by importance:</p>

            <div class="space-y-6 my-10">
              <div class="bg-gradient-to-r from-blue-900/30 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-blue-400 font-bold text-xl">1. Specificity (30% weight)</h3>
                  <span class="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-bold">Most Important</span>
                </div>
                <p class="text-gray-300 mb-4">Are you asking for a concrete outcome with clear requirements?</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-black/40 rounded-lg p-4">
                    <div class="text-red-400 font-bold text-sm mb-2">❌ Vague (0 points)</div>
                    <code class="text-xs text-gray-400">"create an API"</code>
                  </div>
                  <div class="bg-black/40 rounded-lg p-4">
                    <div class="text-green-400 font-bold text-sm mb-2">✅ Specific (+30 points)</div>
                    <code class="text-xs text-gray-400">"Create a POST /api/users endpoint with email validation"</code>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-900/30 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-purple-400 font-bold text-xl">2. Technical Context (25% weight)</h3>
                  <span class="bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-bold">High Priority</span>
                </div>
                <p class="text-gray-300 mb-4">Do you provide framework, language, and tooling details?</p>
                <div class="space-y-2">
                  <div class="flex items-start gap-3">
                    <span class="text-green-400">+5</span>
                    <span class="text-gray-300 text-sm">Framework mentioned (React, Next.js, Express)</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-green-400">+5</span>
                    <span class="text-gray-300 text-sm">Language/type system (TypeScript, Python type hints)</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-green-400">+5</span>
                    <span class="text-gray-300 text-sm">Libraries specified (Zod, Prisma, React Query)</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-green-400">+10</span>
                    <span class="text-gray-300 text-sm">Architecture pattern (MVC, MVVM, Clean Architecture)</span>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-900/30 to-green-600/10 border border-green-500/30 rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-green-400 font-bold text-xl">3. Edge Case Awareness (20% weight)</h3>
                  <span class="bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm font-bold">Important</span>
                </div>
                <p class="text-gray-300 mb-4">Do you account for error states, loading, validation, and security?</p>
                <div class="bg-black/40 rounded-lg p-4 space-y-2">
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-green-400">✓</span>
                    <span class="text-gray-300">Error handling</span>
                    <span class="text-gray-500 ml-auto">+5</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-green-400">✓</span>
                    <span class="text-gray-300">Loading/pending states</span>
                    <span class="text-gray-500 ml-auto">+5</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-green-400">✓</span>
                    <span class="text-gray-300">Input validation</span>
                    <span class="text-gray-500 ml-auto">+5</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span class="text-green-400">✓</span>
                    <span class="text-gray-300">Security considerations</span>
                    <span class="text-gray-500 ml-auto">+5</span>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-pink-900/30 to-pink-600/10 border border-pink-500/30 rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-pink-400 font-bold text-xl">4. Code Quality Requirements (15% weight)</h3>
                  <span class="bg-pink-500/20 text-pink-300 px-4 py-1 rounded-full text-sm font-bold">Moderate</span>
                </div>
                <p class="text-gray-300 mb-4">Do you request tests, documentation, accessibility, performance?</p>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-black/40 rounded-lg p-3 text-xs">
                    <span class="text-pink-400">+3</span> <span class="text-gray-300">Tests requested</span>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-xs">
                    <span class="text-pink-400">+3</span> <span class="text-gray-300">Type safety</span>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-xs">
                    <span class="text-pink-400">+3</span> <span class="text-gray-300">A11y compliance</span>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-xs">
                    <span class="text-pink-400">+3</span> <span class="text-gray-300">Performance notes</span>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-xs">
                    <span class="text-pink-400">+3</span> <span class="text-gray-300">Documentation</span>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-yellow-900/30 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-yellow-400 font-bold text-xl">5. Clarity & Structure (10% weight)</h3>
                  <span class="bg-yellow-500/20 text-yellow-300 px-4 py-1 rounded-full text-sm font-bold">Nice to Have</span>
                </div>
                <p class="text-gray-300 mb-4">Is your prompt well-formatted and easy to parse?</p>
                <div class="space-y-2 text-sm">
                  <div class="flex gap-2 text-gray-300">
                    <span class="text-green-400">✓</span> Bullet points or numbered lists
                  </div>
                  <div class="flex gap-2 text-gray-300">
                    <span class="text-green-400">✓</span> Code examples or pseudocode
                  </div>
                  <div class="flex gap-2 text-gray-300">
                    <span class="text-green-400">✓</span> Clear separation of concerns
                  </div>
                  <div class="flex gap-2 text-gray-300">
                    <span class="text-red-400">✗</span> Wall of text (harder to parse)
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Score Ranges & Interpretation</h2>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
              <div class="bg-gradient-to-br from-red-900/30 to-red-600/20 border-2 border-red-500/50 rounded-xl p-6 text-center">
                <div class="text-5xl font-bold text-red-400 mb-2">1-40</div>
                <h4 class="text-red-300 font-bold mb-2">Poor</h4>
                <p class="text-xs text-gray-400">Vague, no context, missing requirements. Expect low-quality AI output.</p>
              </div>

              <div class="bg-gradient-to-br from-orange-900/30 to-orange-600/20 border-2 border-orange-500/50 rounded-xl p-6 text-center">
                <div class="text-5xl font-bold text-orange-400 mb-2">41-65</div>
                <h4 class="text-orange-300 font-bold mb-2">Fair</h4>
                <p class="text-xs text-gray-400">Some specifics, but missing key details. AI will make assumptions.</p>
              </div>

              <div class="bg-gradient-to-br from-yellow-900/30 to-yellow-600/20 border-2 border-yellow-500/50 rounded-xl p-6 text-center">
                <div class="text-5xl font-bold text-yellow-400 mb-2">66-85</div>
                <h4 class="text-yellow-300 font-bold mb-2">Good</h4>
                <p class="text-xs text-gray-400">Clear requirements, technical context. AI produces solid results.</p>
              </div>

              <div class="bg-gradient-to-br from-green-900/30 to-green-600/20 border-2 border-green-500/50 rounded-xl p-6 text-center">
                <div class="text-5xl font-bold text-green-400 mb-2">86-100</div>
                <h4 class="text-green-300 font-bold mb-2">Excellent</h4>
                <p class="text-xs text-gray-400">Comprehensive, edge-case aware, quality-focused. Best possible AI output.</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Educational Insights: Learn by Doing</h2>
            <p class="text-gray-300 mb-6">ClarityAI doesn\'t just score—it teaches. Every prompt gets actionable feedback:</p>

            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 my-10">
              <h3 class="text-purple-400 font-bold text-xl mb-4">Example: Score 58/100</h3>
              <pre class="bg-black/60 rounded-lg p-4 mb-6 text-sm text-gray-300"><code>Create a user dashboard with charts</code></pre>
              
              <h4 class="text-yellow-400 font-bold mb-3">💡 ClarityAI Insights:</h4>
              <div class="space-y-3">
                <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <div class="flex items-start gap-3">
                    <span class="text-yellow-400 text-xl">⚠️</span>
                    <div>
                      <h5 class="text-yellow-300 font-bold text-sm mb-1">Missing Framework</h5>
                      <p class="text-gray-400 text-xs">Specify the UI framework (React, Vue, Angular) for better code generation.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <div class="flex items-start gap-3">
                    <span class="text-yellow-400 text-xl">⚠️</span>
                    <div>
                      <h5 class="text-yellow-300 font-bold text-sm mb-1">Undefined Chart Type</h5>
                      <p class="text-gray-400 text-xs">What kind of charts? (Line, bar, pie). Consider mentioning a charting library (Chart.js, Recharts).</p>
                    </div>
                  </div>
                </div>

                <div class="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <div class="flex items-start gap-3">
                    <span class="text-blue-400 text-xl">💡</span>
                    <div>
                      <h5 class="text-blue-300 font-bold text-sm mb-1">Suggestion</h5>
                      <p class="text-gray-400 text-xs">Add data source details (API endpoint, mock data) and responsive design requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 class="text-green-400 font-bold mt-6 mb-3">✨ Improved Prompt (Score: 89/100):</h4>
              <pre class="bg-black/80 border border-green-500/30 rounded-lg p-4 text-sm text-gray-300"><code>Create a React user dashboard with:
- Line chart (user growth over time) using Recharts
- Bar chart (revenue by product category)
- Fetches data from /api/dashboard endpoint
- Loading skeleton while data loads
- Error boundary for API failures
- Responsive grid (mobile: stack, desktop: 2x2)
- Tailwind CSS, dark mode support</code></pre>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Diff View: Before vs After Enhancement</h2>
            <p class="text-gray-300 mb-6">ClarityAI shows exactly how prompt enhancement changes your request:</p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
              <div>
                <h4 class="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <span class="bg-red-500 w-6 h-6 rounded flex items-center justify-center text-white text-xs">−</span>
                  Original (Your Input)
                </h4>
                <div class="bg-black/80 border border-red-500/30 rounded-xl p-4 text-sm">
                  <pre class="text-gray-300"><code>build login page</code></pre>
                </div>
              </div>

              <div>
                <h4 class="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <span class="bg-green-500 w-6 h-6 rounded flex items-center justify-center text-white text-xs">+</span>
                  Enhanced (Sent to AI)
                </h4>
                <div class="bg-black/80 border border-green-500/30 rounded-xl p-4 text-sm">
                  <pre class="text-gray-300"><code><span class="text-gray-500">build login page</span>

<span class="text-green-400">TECHNICAL CONTEXT:</span>
<span class="text-green-400">- Framework: Next.js 14 (App Router)</span>
<span class="text-green-400">- State: React useState + Server Actions</span>
<span class="text-green-400">- Styling: Tailwind CSS v4</span>

<span class="text-green-400">REQUIREMENTS:</span>
<span class="text-green-400">- Email/password validation (Zod)</span>
<span class="text-green-400">- JWT auth via /api/login</span>
<span class="text-green-400">- Error states, loading spinner</span>
<span class="text-green-400">- Accessible (ARIA labels, keyboard nav)</span></code></pre>
                </div>
              </div>
            </div>

            <p class="text-gray-400 text-sm italic text-center my-6">Notice how ClarityAI inferred context from your workspace (Next.js, Tailwind) and added missing requirements automatically.</p>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Learn Prompt Engineering Through Feedback</h3>
              <p class="text-purple-100 mb-8 text-xl max-w-2xl mx-auto">See your score improve in real-time. Master the skill that 10x your AI productivity.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Install ClarityAI</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Deep Dive',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070',
          '17 min read',
          false
        ),
        (
          'smart-routing-fast-thinking',
          'Smart Routing Deep Dive: Fast vs Thinking Mode',
          'How ClarityAI automatically chooses between fast and deep-thinking AI models based on prompt complexity. Learn the routing algorithm, performance benchmarks, and when to override defaults.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070" alt="Speed and Performance" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">Not every prompt needs a PhD-level AI. "Fix this typo" doesn\'t require the same computational power as "Design a distributed caching system". ClarityAI Smart Routing automatically picks the right model for your task—balancing speed, cost, and quality.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Overkill Problem</h2>
            <p class="text-gray-300 mb-6">Most AI coding tools use heavyweight models for everything. Ask for a simple refactor? Wait 8 seconds while GPT-4 "thinks deeply" about renaming a variable. This wastes time, burns credits, and frustrates developers who need instant feedback.</p>

            <div class="bg-red-900/20 border-2 border-red-500/40 rounded-xl p-8 my-10">
              <h3 class="text-red-400 font-bold text-2xl mb-4">❌ Without Smart Routing</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">8s</div>
                  <div>
                    <p class="text-white font-bold">Simple typo fix</p>
                    <p class="text-gray-400 text-sm">Same response time as complex architecture design</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">$$</div>
                  <div>
                    <p class="text-white font-bold">Higher API costs</p>
                    <p class="text-gray-400 text-sm">Premium model pricing for trivial tasks</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">😤</div>
                  <div>
                    <p class="text-white font-bold">Developer frustration</p>
                    <p class="text-gray-400 text-sm">Wait for AI to "finish thinking" about simple requests</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Two-Tier Model System</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
              <div class="bg-gradient-to-br from-blue-900/30 to-blue-600/20 border-2 border-blue-500/50 rounded-2xl p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl">⚡</div>
                  <h3 class="text-blue-400 font-bold text-2xl">Fast Mode</h3>
                </div>
                
                <div class="space-y-4">
                  <div>
                    <h4 class="text-white font-bold mb-2">Model:</h4>
                    <p class="text-gray-300 text-sm">GPT-4o-mini / Claude Haiku</p>
                  </div>
                  
                  <div>
                    <h4 class="text-white font-bold mb-2">Response Time:</h4>
                    <p class="text-gray-300 text-sm">0.5-2 seconds</p>
                  </div>
                  
                  <div>
                    <h4 class="text-white font-bold mb-2">Best For:</h4>
                    <ul class="text-sm text-gray-300 space-y-1">
                      <li>• Code completion</li>
                      <li>• Simple refactoring</li>
                      <li>• Documentation generation</li>
                      <li>• Syntax fixes</li>
                      <li>• Variable renaming</li>
                      <li>• Import organization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-white font-bold mb-2">Cost:</h4>
                    <p class="text-green-400 text-sm font-bold">~10x cheaper per request</p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-900/30 to-purple-600/20 border-2 border-purple-500/50 rounded-2xl p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl">🧠</div>
                  <h3 class="text-purple-400 font-bold text-2xl">Thinking Mode</h3>
                </div>
                
                <div class="space-y-4">
                  <div>
                    <h4 class="text-white font-bold mb-2">Model:</h4>
                    <p class="text-gray-300 text-sm">GPT-4o / Claude Sonnet</p>
                  </div>
                  
                  <div>
                    <h4 class="text-white font-bold mb-2">Response Time:</h4>
                    <p class="text-gray-300 text-sm">3-8 seconds</p>
                  </div>
                  
                  <div>
                    <h4 class="text-white font-bold mb-2">Best For:</h4>
                    <ul class="text-sm text-gray-300 space-y-1">
                      <li>• System architecture design</li>
                      <li>• Complex debugging</li>
                      <li>• Performance optimization</li>
                      <li>• Security analysis</li>
                      <li>• Multi-file refactoring</li>
                      <li>• Algorithm design</li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="text-white font-bold mb-2">Cost:</h4>
                    <p class="text-purple-400 text-sm font-bold">Premium pricing, worth it for complex tasks</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Routing Algorithm</h2>
            <p class="text-gray-300 mb-6">ClarityAI analyzes 4 complexity signals to route your prompt:</p>

            <div class="space-y-6 my-10">
              <div class="bg-gradient-to-r from-green-900/30 to-green-600/10 border border-green-500/30 rounded-xl p-6">
                <h3 class="text-green-400 font-bold text-xl mb-4">1. Scope Detection (40% weight)</h3>
                <p class="text-gray-300 mb-4">How many files/components affected?</p>
                <div class="grid grid-cols-3 gap-4">
                  <div class="bg-black/40 rounded-lg p-4 text-center">
                    <div class="text-blue-400 font-bold mb-1">Single Line</div>
                    <div class="text-2xl">⚡</div>
                    <div class="text-xs text-gray-400 mt-2">Fast Mode</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-4 text-center">
                    <div class="text-yellow-400 font-bold mb-1">Single File</div>
                    <div class="text-2xl">⚡</div>
                    <div class="text-xs text-gray-400 mt-2">Fast Mode</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-4 text-center">
                    <div class="text-purple-400 font-bold mb-1">Multi-File</div>
                    <div class="text-2xl">🧠</div>
                    <div class="text-xs text-gray-400 mt-2">Thinking Mode</div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-900/30 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
                <h3 class="text-blue-400 font-bold text-xl mb-4">2. Task Complexity (30% weight)</h3>
                <p class="text-gray-300 mb-4">Keyword analysis for complexity signals</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-black/40 rounded-lg p-4">
                    <h4 class="text-blue-300 font-bold text-sm mb-2">Simple Keywords (Fast ⚡)</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">rename</span>
                      <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">fix typo</span>
                      <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">add comment</span>
                      <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">format code</span>
                    </div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-4">
                    <h4 class="text-purple-300 font-bold text-sm mb-2">Complex Keywords (Thinking 🧠)</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">architecture</span>
                      <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">optimize</span>
                      <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">refactor</span>
                      <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">design system</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-900/30 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
                <h3 class="text-purple-400 font-bold text-xl mb-4">3. Code Context Size (20% weight)</h3>
                <p class="text-gray-300 mb-4">Token count of code being analyzed</p>
                <div class="space-y-2">
                  <div class="flex items-center justify-between bg-black/40 rounded-lg p-3">
                    <span class="text-gray-300 text-sm">&lt; 500 tokens (~100 lines)</span>
                    <span class="text-blue-400 font-bold">⚡ Fast</span>
                  </div>
                  <div class="flex items-center justify-between bg-black/40 rounded-lg p-3">
                    <span class="text-gray-300 text-sm">500-2000 tokens (~100-400 lines)</span>
                    <span class="text-yellow-400 font-bold">⚡ Fast (with monitoring)</span>
                  </div>
                  <div class="flex items-center justify-between bg-black/40 rounded-lg p-3">
                    <span class="text-gray-300 text-sm">&gt; 2000 tokens (~400+ lines)</span>
                    <span class="text-purple-400 font-bold">🧠 Thinking</span>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-pink-900/30 to-pink-600/10 border border-pink-500/30 rounded-xl p-6">
                <h3 class="text-pink-400 font-bold text-xl mb-4">4. Expert Persona Trigger (10% weight)</h3>
                <p class="text-gray-300 mb-4">Specialized personas force Thinking mode</p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div class="bg-black/40 rounded-lg p-3 text-center">
                    <code class="text-blue-300 text-xs">/architect</code>
                    <div class="text-purple-400 mt-1">🧠</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-center">
                    <code class="text-red-300 text-xs">/security</code>
                    <div class="text-purple-400 mt-1">🧠</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-center">
                    <code class="text-yellow-300 text-xs">/performance</code>
                    <div class="text-purple-400 mt-1">🧠</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-center">
                    <code class="text-purple-300 text-xs">/reviewer</code>
                    <div class="text-purple-400 mt-1">🧠</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-center">
                    <code class="text-pink-300 text-xs">/frontend</code>
                    <div class="text-blue-400 mt-1">⚡</div>
                  </div>
                  <div class="bg-black/40 rounded-lg p-3 text-center">
                    <code class="text-green-300 text-xs">/tester</code>
                    <div class="text-blue-400 mt-1">⚡</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Performance Benchmarks</h2>

            <div class="overflow-x-auto my-10">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b-2 border-gray-800">
                    <th class="text-left p-4 text-white font-bold">Task Type</th>
                    <th class="text-center p-4 text-blue-400 font-bold">Fast Mode</th>
                    <th class="text-center p-4 text-purple-400 font-bold">Thinking Mode</th>
                    <th class="text-center p-4 text-green-400 font-bold">Routing Decision</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Fix typo in variable name</td>
                    <td class="p-4 text-center text-blue-300">0.8s</td>
                    <td class="p-4 text-center text-gray-500">5.2s (overkill)</td>
                    <td class="p-4 text-center text-green-400">⚡ Fast</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Add JSDoc comments</td>
                    <td class="p-4 text-center text-blue-300">1.2s</td>
                    <td class="p-4 text-center text-gray-500">6.1s (overkill)</td>
                    <td class="p-4 text-center text-green-400">⚡ Fast</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Refactor function (single file)</td>
                    <td class="p-4 text-center text-blue-300">1.9s</td>
                    <td class="p-4 text-center text-gray-500">7.3s (overkill)</td>
                    <td class="p-4 text-center text-green-400">⚡ Fast</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Design REST API architecture</td>
                    <td class="p-4 text-center text-gray-500">2.1s (shallow)</td>
                    <td class="p-4 text-center text-purple-300">6.8s</td>
                    <td class="p-4 text-center text-purple-400">🧠 Thinking</td>
                  </tr>
                  <tr class="border-b border-gray-800">
                    <td class="p-4 text-gray-300">Optimize database queries</td>
                    <td class="p-4 text-center text-gray-500">1.8s (misses issues)</td>
                    <td class="p-4 text-center text-purple-300">7.5s</td>
                    <td class="p-4 text-center text-purple-400">🧠 Thinking</td>
                  </tr>
                  <tr>
                    <td class="p-4 text-gray-300">Security audit (OWASP check)</td>
                    <td class="p-4 text-center text-gray-500">2.3s (surface-level)</td>
                    <td class="p-4 text-center text-purple-300">8.2s</td>
                    <td class="p-4 text-center text-purple-400">🧠 Thinking</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Manual Override</h2>
            <p class="text-gray-300 mb-6">ClarityAI lets you force a specific mode when needed:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div class="bg-gradient-to-br from-blue-900/30 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
                <h4 class="text-blue-400 font-bold mb-3">Force Fast Mode</h4>
                <pre class="bg-black/60 rounded-lg p-4 text-sm text-gray-300 mb-4"><code>@clarity --fast design a simple homepage</code></pre>
                <p class="text-gray-400 text-xs">Use when you want quick iteration, even for complex tasks. Trades depth for speed.</p>
              </div>

              <div class="bg-gradient-to-br from-purple-900/30 to-purple-600/20 border border-purple-500/30 rounded-xl p-6">
                <h4 class="text-purple-400 font-bold mb-3">Force Thinking Mode</h4>
                <pre class="bg-black/60 rounded-lg p-4 text-sm text-gray-300 mb-4"><code>@clarity --deep fix this typo</code></pre>
                <p class="text-gray-400 text-xs">Use when even simple tasks need maximum quality (e.g., public-facing code, critical bugs).</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Cost Savings Analysis</h2>
            <p class="text-gray-300 mb-6">Real-world impact of Smart Routing on API costs:</p>

            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 my-10">
              <h3 class="text-white font-bold text-xl mb-6">📊 Typical Developer (100 prompts/day)</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h4 class="text-red-400 font-bold mb-4">Without Smart Routing</h4>
                  <div class="space-y-2 text-sm text-gray-300">
                    <div class="flex justify-between">
                      <span>100 prompts × GPT-4o pricing</span>
                      <span class="text-red-300 font-bold">$3.50/day</span>
                    </div>
                    <div class="flex justify-between border-t border-gray-700 pt-2">
                      <span>Monthly cost</span>
                      <span class="text-red-300 font-bold text-lg">$105/month</span>
                    </div>
                  </div>
                </div>

                <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h4 class="text-green-400 font-bold mb-4">With Smart Routing</h4>
                  <div class="space-y-2 text-sm text-gray-300">
                    <div class="flex justify-between">
                      <span>70 prompts × GPT-4o-mini</span>
                      <span class="text-gray-400">$0.21/day</span>
                    </div>
                    <div class="flex justify-between">
                      <span>30 prompts × GPT-4o</span>
                      <span class="text-gray-400">$1.05/day</span>
                    </div>
                    <div class="flex justify-between border-t border-gray-700 pt-2">
                      <span>Monthly cost</span>
                      <span class="text-green-300 font-bold text-lg">$37.80/month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <div class="text-green-400 font-bold text-3xl mb-2">64% Cost Reduction</div>
                <p class="text-gray-300 text-sm">Saving $67.20/month per developer without sacrificing quality</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Right Model, Right Time, Every Time</h3>
              <p class="text-blue-100 mb-8 text-xl max-w-2xl mx-auto">Stop waiting for AI to overthink simple tasks. Let Smart Routing optimize for you.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Get ClarityAI</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Technical',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070',
          '19 min read',
          false
        ),
        (
          'one-shot-website-development',
          'One-Shot Website Development: From Idea to Production in 5 Minutes',
          'Real walkthrough of using ClarityAI to build a complete production-ready landing page with a single comprehensive prompt. Code, styling, deployment—all in under 5 minutes.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072" alt="Fast Development" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">What if you could build an entire website with one prompt? Not a prototype. Not a skeleton. A production-ready site with responsive design, animations, SEO, and accessibility. ClarityAI makes this possible through comprehensive prompt enhancement and intelligent context awareness.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Traditional Web Dev Timeline</h2>
            <p class="text-gray-300 mb-6">Building even a simple landing page traditionally takes hours:</p>

            <div class="bg-gray-900 border border-gray-800 rounded-xl p-8 my-10">
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold">30m</div>
                  <div>
                    <h4 class="text-white font-bold">Setup & Boilerplate</h4>
                    <p class="text-gray-400 text-sm">npm create, configure Tailwind, setup routes</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold">90m</div>
                  <div>
                    <h4 class="text-white font-bold">Build Components</h4>
                    <p class="text-gray-400 text-sm">Hero, features, pricing, testimonials, footer</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold">45m</div>
                  <div>
                    <h4 class="text-white font-bold">Styling & Responsive</h4>
                    <p class="text-gray-400 text-sm">Make it look good on mobile, tablet, desktop</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold">30m</div>
                  <div>
                    <h4 class="text-white font-bold">SEO & Meta Tags</h4>
                    <p class="text-gray-400 text-sm">OpenGraph, Twitter cards, sitemap</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold">20m</div>
                  <div>
                    <h4 class="text-white font-bold">Deployment</h4>
                    <p class="text-gray-400 text-sm">Vercel setup, environment variables, domain</p>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-700 mt-6 pt-6 text-center">
                <div class="text-red-400 font-bold text-3xl">3h 35m Total</div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The ClarityAI One-Shot Workflow</h2>
            <p class="text-gray-300 mb-6">Here\'s the same landing page, built start-to-finish with ONE comprehensive prompt:</p>

            <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 rounded-2xl p-8 my-10">
              <h3 class="text-purple-400 font-bold text-2xl mb-4">The Magic Prompt</h3>
              <pre class="bg-black/80 border border-gray-800 rounded-xl p-6 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap"><code>@clarity Create a complete SaaS landing page for "TaskFlow" - a project management tool.

TECH STACK:
- Next.js 14 (App Router)
- TypeScript strict mode
- Tailwind CSS v4
- Framer Motion for animations

SECTIONS REQUIRED:
1. Hero: Gradient background, animated headline, CTA buttons (Start Free Trial + Watch Demo)
2. Features: 6 cards with icons (Tasks, Team Collaboration, Time Tracking, Reports, Integrations, Mobile App)
3. Pricing: 3 tiers (Starter $0, Pro $29, Enterprise $99) with feature comparison
4. Testimonials: 3 customer quotes with avatars
5. FAQ: 6 common questions accordion
6. Footer: Links, social icons, newsletter signup

DESIGN SYSTEM:
- Primary color: Blue (#3B82F6)
- Dark mode enabled
- Glassmorphism cards
- Smooth scroll behavior
- Micro-interactions on hover

REQUIREMENTS:
- Fully responsive (mobile-first)
- WCAG 2.1 AA accessibility
- SEO optimized (meta tags, structured data)
- Performance: Lighthouse score 95+
- Loading states for CTA buttons
- Form validation (email newsletter)

FILE STRUCTURE:
- app/page.tsx (main landing)
- components/Hero.tsx
- components/Features.tsx
- components/Pricing.tsx
- components/Testimonials.tsx
- components/FAQ.tsx
- components/Footer.tsx
- tailwind.config.ts (custom theme)

Include mock data for testimonials and FAQs.</code></pre>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">What ClarityAI Does Automatically</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div class="bg-gradient-to-br from-green-900/30 to-green-600/20 border border-green-500/30 rounded-xl p-6">
                <h3 class="text-green-400 font-bold text-xl mb-4">✅ Context Enhancement</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Detects your Next.js version from package.json</li>
                  <li>• Reads existing Tailwind config for consistency</li>
                  <li>• Checks installed dependencies (Framer Motion)</li>
                  <li>• Infers project structure conventions</li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-blue-900/30 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
                <h3 class="text-blue-400 font-bold text-xl mb-4">🎨 Design Intelligence</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Generates cohesive color palette from primary</li>
                  <li>• Adds spacing/sizing scale (4px grid system)</li>
                  <li>• Includes typography hierarchy</li>
                  <li>• Applies consistent border radius</li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-purple-900/30 to-purple-600/20 border border-purple-500/30 rounded-xl p-6">
                <h3 class="text-purple-400 font-bold text-xl mb-4">♿ Accessibility Baked In</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• ARIA labels on all interactive elements</li>
                  <li>• Keyboard navigation (Tab, Enter, Esc)</li>
                  <li>• Focus indicators with proper contrast</li>
                  <li>• Screen reader announcements</li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-pink-900/30 to-pink-600/20 border border-pink-500/30 rounded-xl p-6">
                <h3 class="text-pink-400 font-bold text-xl mb-4">🚀 Performance Optimizations</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Image optimization with next/image</li>
                  <li>• Lazy loading for below-fold content</li>
                  <li>• Code splitting per component</li>
                  <li>• Minified animations (GPU-accelerated)</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Timeline: 5 Minutes Breakdown</h2>

            <div class="space-y-4 my-10">
              <div class="bg-gradient-to-r from-blue-900/30 to-blue-600/10 border border-blue-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-xl">0:00</div>
                <div>
                  <h4 class="text-blue-400 font-bold mb-2">Paste Prompt, Hit Enter</h4>
                  <p class="text-gray-300 text-sm">ClarityAI analyzes requirements, enhances prompt with workspace context</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-900/30 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-xl">0:15</div>
                <div>
                  <h4 class="text-purple-400 font-bold mb-2">AI Generates All 7 Files</h4>
                  <p class="text-gray-300 text-sm">Complete components with TypeScript types, Tailwind classes, Framer Motion animations</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-900/30 to-green-600/10 border border-green-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-xl">2:30</div>
                <div>
                  <h4 class="text-green-400 font-bold mb-2">Review + One-Click Accept</h4>
                  <p class="text-gray-300 text-sm">Scan generated code, ClarityAI shows diff view. Click "Apply All Changes"</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-pink-900/30 to-pink-600/10 border border-pink-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-xl">3:00</div>
                <div>
                  <h4 class="text-pink-400 font-bold mb-2">npm run dev</h4>
                  <p class="text-gray-300 text-sm">Verify locally—animations smooth, responsive design perfect, no console errors</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-yellow-900/30 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-xl">4:30</div>
                <div>
                  <h4 class="text-yellow-400 font-bold mb-2">Deploy to Vercel</h4>
                  <p class="text-gray-300 text-sm">git push → automatic Vercel deployment. Site live in 30 seconds.</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-500 to-blue-500 border-2 border-green-400/50 rounded-xl p-6 flex items-start gap-4">
                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0 text-xl">5:00</div>
                <div>
                  <h4 class="text-white font-bold mb-2">✅ Production Site Live</h4>
                  <p class="text-gray-100 text-sm">Fully responsive, accessible, SEO-optimized landing page. Ready for customers.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Before vs After Code Quality</h2>
            <p class="text-gray-300 mb-6">What you get isn\'t prototype code. It\'s production-ready:</p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
              <div>
                <h4 class="text-red-400 font-bold mb-3 flex items-center gap-2">
                  ❌ Typical AI Output (Without ClarityAI)
                </h4>
                <pre class="bg-black/80 border border-red-500/30 rounded-xl p-4 text-xs overflow-x-auto"><code className="text-gray-300">// Hero.jsx (no types, no a11y)
export default function Hero() {
  return (
    &lt;div className="hero"&gt;
      &lt;h1&gt;Welcome to TaskFlow&lt;/h1&gt;
      &lt;button&gt;Get Started&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
                <ul class="mt-4 space-y-1 text-xs text-gray-400">
                  <li>❌ No TypeScript</li>
                  <li>❌ Generic class names</li>
                  <li>❌ Missing accessibility</li>
                  <li>❌ No responsive design</li>
                  <li>❌ No animations</li>
                </ul>
              </div>

              <div>
                <h4 class="text-green-400 font-bold mb-3 flex items-center gap-2">
                  ✅ ClarityAI Output (Production-Ready)
                </h4>
                <pre class="bg-black/80 border border-green-500/30 rounded-xl p-4 text-xs overflow-x-auto"><code className="text-gray-300">// Hero.tsx (typed, accessible, animated)
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    &lt;section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-blue-800" aria-label="Hero section"&gt;
      &lt;motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4"&gt;
        &lt;h1 className="text-5xl md:text-7xl font-bold text-white mb-6"&gt;
          Welcome to TaskFlow
        &lt;/h1&gt;
        &lt;button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform focus:ring-4 focus:ring-blue-300" aria-label="Start free trial"&gt;
          Get Started
        &lt;/button&gt;
      &lt;/motion.div&gt;
    &lt;/section&gt;
  );
}</code></pre>
                <ul class="mt-4 space-y-1 text-xs text-gray-300">
                  <li>✅ TypeScript strict mode</li>
                  <li>✅ Tailwind utility classes</li>
                  <li>✅ ARIA labels, semantic HTML</li>
                  <li>✅ Responsive (md: breakpoint)</li>
                  <li>✅ Framer Motion animations</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Results</h2>

            <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 my-10">
              <h3 class="text-white font-bold text-xl mb-6">📊 Lighthouse Performance Audit</h3>
              
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center">
                  <div class="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3">98</div>
                  <div class="text-gray-400 text-sm">Performance</div>
                </div>
                <div class="text-center">
                  <div class="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3">100</div>
                  <div class="text-gray-400 text-sm">Accessibility</div>
                </div>
                <div class="text-center">
                  <div class="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3">100</div>
                  <div class="text-gray-400 text-sm">Best Practices</div>
                </div>
                <div class="text-center">
                  <div class="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3">100</div>
                  <div class="text-gray-400 text-sm">SEO</div>
                </div>
              </div>

              <div class="mt-8 bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                <p class="text-green-400 font-bold">All from a single prompt. No manual optimization needed.</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">When to Use One-Shot Development</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h4 class="text-green-400 font-bold mb-3">✅ Perfect For</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Landing pages</li>
                  <li>• Portfolio sites</li>
                  <li>• Marketing pages</li>
                  <li>• Documentation sites</li>
                  <li>• MVP prototypes</li>
                  <li>• Internal tools</li>
                </ul>
              </div>

              <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
                <h4 class="text-yellow-400 font-bold mb-3">⚠️ Not Ideal For</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Complex SaaS dashboards (use iterative approach)</li>
                  <li>• E-commerce with payment flows (security review needed)</li>
                  <li>• Real-time collaborative apps (websocket complexity)</li>
                  <li>• Mission-critical systems (needs manual audit)</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Tips for Maximum One-Shot Success</h2>

            <div class="space-y-4 my-10">
              <div class="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                <h4 class="text-blue-400 font-bold mb-2">1. Be Comprehensive, Not Vague</h4>
                <p class="text-gray-300 text-sm">Don\'t say "make it look nice". Specify design system: colors, fonts, spacing, animations.</p>
              </div>

              <div class="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                <h4 class="text-purple-400 font-bold mb-2">2. Include Edge Cases</h4>
                <p class="text-gray-300 text-sm">Mention loading states, error handling, empty states, mobile behavior.</p>
              </div>

              <div class="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h4 class="text-green-400 font-bold mb-2">3. Specify Tech Stack Explicitly</h4>
                <p class="text-gray-300 text-sm">Even if ClarityAI detects it, confirm framework versions and preferred libraries.</p>
              </div>

              <div class="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6">
                <h4 class="text-pink-400 font-bold mb-2">4. Request Mock Data</h4>
                <p class="text-gray-300 text-sm">Ask AI to generate realistic placeholder content (testimonials, FAQs, features).</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-center my-16 shadow-2xl">
              <h3 class="text-4xl font-bold text-white mb-4">Ship Faster Than Ever</h3>
              <p class="text-purple-100 mb-8 text-xl max-w-2xl mx-auto">Stop spending days on boilerplate. Build production sites in minutes with ClarityAI.</p>
              <a href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai" class="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-lg inline-block">Install ClarityAI Now</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Tutorial',
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
          '20 min read',
          false
        )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content = EXCLUDED.content,
        updated_at = CURRENT_TIMESTAMP
    `;

    log.push('Successfully added new feature blog posts');
    
    return NextResponse.json({ 
      message: 'New blog posts added successfully', 
      steps: log 
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error adding blog posts:', error);
    return NextResponse.json({ 
      error: 'Failed to add blog posts', 
      details: error.message,
      partialLog: log
    }, { status: 500 });
  }
}
