import { NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db';

export async function GET() {
  try {
    // Initialize database
    await initDatabase();

    // Delete existing posts to reseed with new content
    await sql`DELETE FROM blog_posts`;

    // Seed initial blog posts
    await sql`
      INSERT INTO blog_posts (slug, title, excerpt, content, author, category, image, read_time, featured)
      VALUES 
        (
          'introducing-clarityai',
          'Introducing ClarityAI: Elevate Your GitHub Copilot Experience',
          'Discover how ClarityAI transforms simple prompts into detailed, context-aware specifications, unlocking the full potential of AI-assisted coding with intelligent prompt enhancement.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070" alt="AI Development Workspace" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">In the rapidly evolving world of AI-assisted development, the quality of your prompts directly determines the quality of your code. ClarityAI bridges this gap by transforming how developers communicate with GitHub Copilot.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Challenge of AI-Assisted Coding</h2>
            <p class="text-gray-300 leading-relaxed mb-4">GitHub Copilot has revolutionized how we write code, but there''s a catch: it''s only as good as the prompts you provide. Research shows that developers spend up to 40% of their time refining prompts to get the right suggestions.</p>
            
            <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-lg p-6 my-8">
              <p class="text-lg text-purple-200 italic">"The difference between a vague prompt and a well-crafted one can be the difference between minutes and hours of development time."</p>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">How ClarityAI Works Its Magic</h2>
            <p class="text-gray-300 leading-relaxed mb-6">ClarityAI acts as an intelligent middleware layer between you and GitHub Copilot. When you type <code class="px-2 py-1 bg-gray-800 rounded text-purple-400">@clarity</code> followed by your prompt, our AI analyzes:</p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-purple-400 mr-3">✓</span>
                <span class="text-gray-300">Your current file context and project structure</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3">✓</span>
                <span class="text-gray-300">Existing TODOs and comments in your codebase</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3">✓</span>
                <span class="text-gray-300">Programming best practices and patterns</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-3">✓</span>
                <span class="text-gray-300">Language-specific conventions and idioms</span>
              </li>
            </ul>

            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069" alt="Code Enhancement Process" class="w-full h-80 object-cover rounded-xl my-8" />

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Impact</h2>
            <p class="text-gray-300 leading-relaxed mb-4">Early adopters report significant improvements in their workflow:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div class="text-4xl font-bold text-purple-400 mb-2">60%</div>
                <div class="text-gray-300">Reduction in prompt iterations</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div class="text-4xl font-bold text-purple-400 mb-2">3x</div>
                <div class="text-gray-300">More accurate code suggestions</div>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div class="text-4xl font-bold text-purple-400 mb-2">45min</div>
                <div class="text-gray-300">Saved per developer daily</div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Open Source & Privacy-First</h2>
            <p class="text-gray-300 leading-relaxed mb-4">We believe powerful development tools should be transparent and accessible. ClarityAI is:</p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-green-400 mr-3">🔓</span>
                <span class="text-gray-300"><strong>100% Open Source</strong> - MIT licensed, auditable code</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-3">🔒</span>
                <span class="text-gray-300"><strong>Privacy Focused</strong> - Only prompts are sent, never your actual code</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-3">💰</span>
                <span class="text-gray-300"><strong>Completely Free</strong> - No hidden costs, no premium tiers</span>
              </li>
            </ul>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Get Started in 5 Minutes</h2>
            <div class="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
              <ol class="space-y-4">
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</span>
                  <div>
                    <div class="text-white font-semibold mb-1">Install from VS Code Marketplace</div>
                    <div class=\"text-gray-400 text-sm\">Search for \"ClarityAI\" in VS Code Extensions or visit: <a href=\"https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai\" class=\"text-purple-400 hover:text-purple-300 underline\">VS Code Marketplace</a></div>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</span>
                  <div>
                    <div class="text-white font-semibold mb-1">Configure ClarityAI</div>
                    <div class="text-gray-400 text-sm">Open VS Code settings and customize ClarityAI preferences (optional)</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</span>
                  <div>
                    <div class="text-white font-semibold mb-1">Start Enhancing Prompts</div>
                    <div class="text-gray-400 text-sm">Use <code class="px-2 py-1 bg-gray-800 rounded text-purple-400">@clarity</code> in GitHub Copilot Chat</div>
                  </div>
                </li>
              </ol>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center my-12">
              <h3 class="text-2xl font-bold text-white mb-4">Ready to Transform Your Coding Workflow?</h3>
              <p class="text-purple-100 mb-6">Join thousands of developers who are already coding smarter with ClarityAI.</p>
              <a href="https://github.com/Attafii/ClarityAI" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started Free</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Product',
          'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070',
          '8 min read',
          true
        ),
        (
          'best-practices-ai-prompts',
          'Mastering AI Prompts: A Developer''s Guide to Better Code Generation',
          'Learn proven strategies for crafting prompts that generate higher-quality code. Discover techniques used by top developers to maximize AI assistance effectiveness.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070" alt="AI and Development" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">The art of prompt engineering has become an essential skill for modern developers. Understanding how to communicate effectively with AI coding assistants can dramatically improve your productivity and code quality.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Why Prompt Quality Matters</h2>
            <p class="text-gray-300 leading-relaxed mb-4">AI models are incredibly powerful, but they''re not mind readers. The specificity and clarity of your prompts directly influence the relevance and accuracy of generated code. A well-crafted prompt can save hours of debugging and refactoring.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-red-400 mb-3">❌ Vague Prompt</h3>
                <code class="text-gray-300 text-sm">"create a login function"</code>
                <p class="text-gray-400 mt-3 text-sm">Results in generic, potentially insecure code that doesn''t match your tech stack</p>
              </div>
              <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-green-400 mb-3">✓ Specific Prompt</h3>
                <code class="text-gray-300 text-sm">"create a TypeScript login function with JWT authentication, input validation, and error handling for Next.js 15 API routes"</code>
                <p class="text-gray-400 mt-3 text-sm">Generates production-ready code matching your exact requirements</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The CRISP Framework</h2>
            <p class="text-gray-300 leading-relaxed mb-4">Use this proven framework to structure your prompts:</p>

            <div class="space-y-6 my-8">
              <div class="bg-gray-800/50 border-l-4 border-purple-500 p-6">
                <h3 class="text-xl font-bold text-purple-400 mb-2">Context</h3>
                <p class="text-gray-300">Provide information about your project, tech stack, and existing code structure</p>
              </div>
              <div class="bg-gray-800/50 border-l-4 border-pink-500 p-6">
                <h3 class="text-xl font-bold text-pink-400 mb-2">Requirements</h3>
                <p class="text-gray-300">Clearly state what you need: features, constraints, edge cases</p>
              </div>
              <div class="bg-gray-800/50 border-l-4 border-blue-500 p-6">
                <h3 class="text-xl font-bold text-blue-400 mb-2">Implementation Details</h3>
                <p class="text-gray-300">Specify patterns, libraries, or approaches you prefer</p>
              </div>
              <div class="bg-gray-800/50 border-l-4 border-green-500 p-6">
                <h3 class="text-xl font-bold text-green-400 mb-2">Standards</h3>
                <p class="text-gray-300">Mention code style, best practices, security requirements</p>
              </div>
              <div class="bg-gray-800/50 border-l-4 border-yellow-500 p-6">
                <h3 class="text-xl font-bold text-yellow-400 mb-2">Performance</h3>
                <p class="text-gray-300">Define performance expectations, optimization needs</p>
              </div>
            </div>

            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070" alt="Code Quality" class="w-full h-80 object-cover rounded-xl my-8" />

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Advanced Techniques</h2>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. Context Anchoring</h3>
            <p class="text-gray-300 leading-relaxed mb-4">Reference existing code patterns in your project to maintain consistency:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6">
              <code class="text-purple-300">"Create a new API endpoint following the same pattern as /api/users, but for products with inventory tracking"</code>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Incremental Refinement</h3>
            <p class="text-gray-300 leading-relaxed mb-4">Start broad, then add details in follow-up prompts:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-2">
              <code class="text-purple-300">1. "Create a user dashboard component"</code>
            </div>
            <div class="bg-gray-900 rounded-lg p-4 mb-2">
              <code class="text-purple-300">2. "Add real-time data updates using WebSockets"</code>
            </div>
            <div class="bg-gray-900 rounded-lg p-4 mb-6">
              <code class="text-purple-300">3. "Implement error boundaries and loading states"</code>
            </div>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Example-Driven Prompts</h3>
            <p class="text-gray-300 leading-relaxed mb-4">Show an example of desired output format:</p>
            <div class="bg-gray-900 rounded-lg p-4 mb-6">
              <code class="text-purple-300">"Create a validation schema similar to this example: [paste example schema], but for blog post creation with title, content, tags, and publish date"</code>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Common Pitfalls to Avoid</h2>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <span class="text-red-400 mr-3 mt-1">⚠</span>
                <div>
                  <strong class="text-white">Being Too Generic:</strong>
                  <span class="text-gray-300"> Avoid phrases like "make it work" or "fix this" - be specific about what you need</span>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-3 mt-1">⚠</span>
                <div>
                  <strong class="text-white">Assuming Context:</strong>
                  <span class="text-gray-300"> AI doesn''t know your full project structure unless you tell it</span>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-3 mt-1">⚠</span>
                <div>
                  <strong class="text-white">Ignoring Edge Cases:</strong>
                  <span class="text-gray-300"> Explicitly mention error handling, validation, and boundary conditions</span>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-400 mr-3 mt-1">⚠</span>
                <div>
                  <strong class="text-white">Overloading Single Prompts:</strong>
                  <span class="text-gray-300"> Break complex requests into smaller, focused prompts</span>
                </div>
              </li>
            </ul>

            <div class="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-lg p-8 my-12">
              <h3 class="text-2xl font-bold text-white mb-4">💡 Pro Tip</h3>
              <p class="text-gray-300 leading-relaxed">ClarityAI automatically applies these best practices to your prompts. It analyzes your project context, adds missing details, and structures your requests for optimal AI comprehension - giving you expert-level prompts without the manual effort.</p>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Example</h2>
            <p class="text-gray-300 leading-relaxed mb-4">Here''s how a developer transformed their workflow:</p>
            
            <div class="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-4">
              <div class="text-sm text-gray-400 mb-2">Before (Manual Prompt):</div>
              <code class="text-red-300">"add authentication to my app"</code>
              <div class="text-sm text-gray-400 mt-4">Result: Generic auth code that didn''t fit the project</div>
            </div>

            <div class="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
              <div class="text-sm text-gray-400 mb-2">After (ClarityAI Enhanced):</div>
              <code class="text-green-300 text-sm">"Implement NextAuth.js v5 authentication in this Next.js 15 app with:\n- GitHub OAuth provider\n- JWT session strategy\n- Protected API routes middleware\n- Type-safe session handling with TypeScript\n- Prisma adapter for user persistence\n- Follow existing error handling patterns in /lib/errors.ts"</code>
              <div class="text-sm text-gray-400 mt-4">Result: Production-ready, type-safe authentication matching project standards</div>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center my-12">
              <h3 class="text-2xl font-bold text-white mb-4">Level Up Your Prompt Game</h3>
              <p class="text-purple-100 mb-6">Let ClarityAI handle the complexity while you focus on building great software.</p>
              <a href="/docs" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Read Full Documentation</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Tutorial',
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070',
          '12 min read',
          false
        ),
        (
          'context-aware-coding',
          'The Power of Context-Aware AI: How ClarityAI Understands Your Codebase',
          'Dive deep into the technology behind ClarityAI''s context detection system and learn how it analyzes your project structure to generate more relevant code suggestions.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068" alt="Neural Network Visualization" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">Context is everything in software development. The same function request can mean vastly different things depending on your project''s architecture, tech stack, and existing code patterns. This is where context-aware AI changes the game.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">What is Context-Aware AI?</h2>
            <p class="text-gray-300 leading-relaxed mb-4">Traditional AI coding assistants treat each prompt in isolation. Context-aware AI, however, analyzes your entire development environment to understand:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-purple-300 mb-3">🏗️ Project Architecture</h3>
                <p class="text-gray-300 text-sm">File structure, module organization, dependency relationships</p>
              </div>
              <div class="bg-gradient-to-br from-pink-900/40 to-pink-800/20 border border-pink-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-pink-300 mb-3">🔧 Tech Stack</h3>
                <p class="text-gray-300 text-sm">Frameworks, libraries, language versions, build tools</p>
              </div>
              <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-blue-300 mb-3">📝 Code Patterns</h3>
                <p class="text-gray-300 text-sm">Naming conventions, design patterns, architectural decisions</p>
              </div>
              <div class="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-green-300 mb-3">📋 Active Context</h3>
                <p class="text-gray-300 text-sm">Current file, open editors, recent changes, TODOs</p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">How ClarityAI Analyzes Your Project</h2>
            
            <div class="space-y-8 my-8">
              <div class="border-l-4 border-purple-500 pl-6">
                <h3 class="text-2xl font-bold text-white mb-3">Step 1: File System Analysis</h3>
                <p class="text-gray-300 mb-4">ClarityAI scans your project structure to understand the architecture:</p>
                <div class="bg-gray-900 rounded-lg p-4 text-sm">
                  <pre class="text-gray-300"><code>src/
├── components/     → React components detected
├── pages/         → Next.js routing structure
├── lib/           → Utility modules
├── types/         → TypeScript definitions
└── api/           → Backend API routes</code></pre>
                </div>
                <p class="text-gray-400 mt-3 text-sm italic">This tells ClarityAI you''re using Next.js with TypeScript and a components-based architecture</p>
              </div>

              <div class="border-l-4 border-pink-500 pl-6">
                <h3 class="text-2xl font-bold text-white mb-3">Step 2: Dependency Detection</h3>
                <p class="text-gray-300 mb-4">Analyzes package.json and import statements to understand your tech stack:</p>
                <div class="bg-gray-900 rounded-lg p-4">
                  <code class="text-purple-300 text-sm">next: 15.5.3, react: 19.0.0, typescript: 5.0.0, tailwindcss: 3.4.0</code>
                </div>
                <p class="text-gray-400 mt-3 text-sm italic">Ensures generated code uses the correct versions and APIs</p>
              </div>

              <div class="border-l-4 border-blue-500 pl-6">
                <h3 class="text-2xl font-bold text-white mb-3">Step 3: Pattern Recognition</h3>
                <p class="text-gray-300 mb-4">Learns from your existing code to match your style:</p>
                <ul class="space-y-2 text-gray-300 text-sm">
                  <li>• Arrow functions vs function declarations</li>
                  <li>• camelCase vs snake_case naming</li>
                  <li>• async/await vs promises</li>
                  <li>• Component structure and prop patterns</li>
                  <li>• Error handling strategies</li>
                </ul>
              </div>

              <div class="border-l-4 border-green-500 pl-6">
                <h3 class="text-2xl font-bold text-white mb-3">Step 4: Active Context Integration</h3>
                <p class="text-gray-300 mb-4">Considers what you''re currently working on:</p>
                <div class="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <div class="text-sm text-green-400 mb-2">Current File: components/Dashboard.tsx</div>
                  <div class="text-sm text-blue-400 mb-2">Recent Imports: useState, useEffect, Chart.js</div>
                  <div class="text-sm text-yellow-400">TODO Comment: "Add data export feature"</div>
                </div>
              </div>
            </div>

            <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070" alt="Code Analysis" class="w-full h-80 object-cover rounded-xl my-8" />

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real-World Impact: Before & After</h2>
            
            <div class="space-y-6 my-8">
              <div class="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden">
                <div class="bg-red-900/30 border-b border-red-500/30 px-6 py-3">
                  <h4 class="text-red-300 font-semibold">Without Context Awareness</h4>
                </div>
                <div class="p-6">
                  <div class="text-sm text-gray-400 mb-2">Your Prompt:</div>
                  <code class="text-gray-300">"add a data fetching function"</code>
                  <div class="text-sm text-gray-400 mt-4 mb-2">AI Generated:</div>
                  <div class="bg-gray-900 rounded p-3">
                    <pre class="text-sm text-gray-300"><code>function fetchData() {
  return fetch(''https://api.example.com/data'')
    .then(res => res.json());
}</code></pre>
                  </div>
                  <p class="text-red-300 text-sm mt-3">❌ Generic JavaScript, no TypeScript types, wrong pattern, hardcoded URL</p>
                </div>
              </div>

              <div class="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden">
                <div class="bg-green-900/30 border-b border-green-500/30 px-6 py-3">
                  <h4 class="text-green-300 font-semibold">With ClarityAI Context Awareness</h4>
                </div>
                <div class="p-6">
                  <div class="text-sm text-gray-400 mb-2">Your Prompt:</div>
                  <code class="text-gray-300">"add a data fetching function"</code>
                  <div class="text-sm text-gray-400 mt-4 mb-2">ClarityAI Enhanced Prompt:</div>
                  <code class="text-purple-300 text-sm">"Create a TypeScript data fetching function for Next.js 15 API routes using the existing fetch wrapper pattern in /lib/api.ts, with proper error handling and type safety for the Dashboard component''s chart data"</code>
                  <div class="text-sm text-gray-400 mt-4 mb-2">AI Generated:</div>
                  <div class="bg-gray-900 rounded p-3">
                    <pre class="text-sm text-gray-300"><code>interface DashboardData {
  labels: string[];
  values: number[];
}

export async function fetchDashboardData(): Promise<DashboardData> {
  try {
    const response = await apiClient.get<DashboardData>(''/api/dashboard'');
    return response.data;
  } catch (error) {
    console.error(''Failed to fetch dashboard data:'', error);
    throw new ApiError(''Dashboard data unavailable'');
  }
}</code></pre>
                  </div>
                  <p class="text-green-300 text-sm mt-3">✓ TypeScript types, matches project patterns, proper error handling, uses existing utilities</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Privacy & Security</h2>
            
            <div class="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 my-8">
              <div class="flex items-start space-x-4">
                <div class="text-4xl">🔒</div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-3">Your Code Stays Private</h3>
                  <p class="text-gray-300 mb-4">ClarityAI analyzes context locally and only sends:</p>
                  <ul class="space-y-2 text-gray-300 text-sm">
                    <li>• Your original prompt text</li>
                    <li>• Project metadata (framework names, file structure)</li>
                    <li>• Detected patterns (no actual code)</li>
                  </ul>
                  <p class="text-purple-300 mt-4 font-semibold">Your intellectual property never leaves your machine.</p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Advanced Features</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div class="text-3xl mb-3">🔍</div>
                <h3 class="text-lg font-bold text-white mb-2">TODO Detection</h3>
                <p class="text-gray-400 text-sm">Automatically finds and includes relevant TODOs in prompt context</p>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div class="text-3xl mb-3">🎯</div>
                <h3 class="text-lg font-bold text-white mb-2">Smart Imports</h3>
                <p class="text-gray-400 text-sm">Suggests the right imports based on your project dependencies</p>
              </div>
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div class="text-3xl mb-3">⚡</div>
                <h3 class="text-lg font-bold text-white mb-2">Fast Analysis</h3>
                <p class="text-gray-400 text-sm">Context detection completes in milliseconds, no workflow interruption</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center my-12">
              <h3 class="text-2xl font-bold text-white mb-4">Experience Context-Aware AI Today</h3>
              <p class="text-purple-100 mb-6">Stop fighting with generic code suggestions. Let ClarityAI understand your project.</p>
              <a href="https://github.com/Attafii/ClarityAI" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Install ClarityAI</a>
            </div>
          </div>',
          'Ahmed Attafi',
          'Technical',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068',
          '10 min read',
          false
        ),
        (
          'open-source-philosophy',
          'Why We Built ClarityAI as Open Source: Transparency in AI Development',
          'Explore our commitment to open-source development, the benefits of transparent AI tools, and how community contributions are shaping the future of ClarityAI.',
          '<div class="prose prose-invert max-w-none">
            <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088" alt="Open Source Community" class="w-full h-96 object-cover rounded-xl mb-8" />
            
            <p class="text-xl text-gray-300 leading-relaxed mb-6">In an era where AI tools are increasingly becoming black boxes, we made a deliberate choice: ClarityAI would be 100% open source. This decision wasn''t just philosophical—it''s fundamental to building trustworthy developer tools.</p>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Transparency Imperative</h2>
            <p class="text-gray-300 leading-relaxed mb-4">When you use a tool that processes your code and prompts, you deserve to know exactly how it works. Closed-source AI tools ask you to trust them blindly, but trust should be earned through transparency.</p>

            <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-lg p-8 my-8">
              <h3 class="text-2xl font-bold text-white mb-4">Our Open Source Commitments</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-3">
                  <div class="flex items-start">
                    <span class="text-green-400 mr-3">✓</span>
                    <span class="text-gray-300">Complete source code on GitHub</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-green-400 mr-3">✓</span>
                    <span class="text-gray-300">MIT License - truly free to use</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-green-400 mr-3">✓</span>
                    <span class="text-gray-300">Public roadmap and issues</span>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-start">
                    <span class="text-green-400 mr-3">✓</span>
                    <span class="text-gray-300">Community-driven development</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-green-400 mr-3">✓</span>
                    <span class="text-gray-300">No telemetry or tracking</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-green-400 mr-3">✓</span>
                    <span class="text-gray-300">Self-hosting option available</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Why Open Source Matters for AI Tools</h2>
            
            <div class="space-y-8 my-8">
              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 class="text-xl font-bold text-purple-400 mb-3">🔍 Auditability</h3>
                <p class="text-gray-300">Anyone can review our code to verify that we''re doing what we claim. No hidden data collection, no secret AI training on your code, no proprietary tricks.</p>
                <div class="mt-4 bg-gray-900 rounded p-3">
                  <code class="text-sm text-gray-300">// You can verify this in our source code<br/>function enhancePrompt(userPrompt: string) {<br/>  // Only sends the prompt text, never your code<br/>  return geminiAPI.enhance(userPrompt, context);<br/>}</code>
                </div>
              </div>

              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 class="text-xl font-bold text-pink-400 mb-3">🛡️ Security</h3>
                <p class="text-gray-300">Security researchers can identify and report vulnerabilities. The community acts as thousands of additional security auditors, making ClarityAI more secure than any closed-source alternative could be.</p>
              </div>

              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 class="text-xl font-bold text-blue-400 mb-3">🔧 Customization</h3>
                <p class="text-gray-300">Need to modify ClarityAI for your team''s specific workflow? Fork it. Want to integrate it into your custom toolchain? Go ahead. The code is yours to use and modify.</p>
              </div>

              <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 class="text-xl font-bold text-green-400 mb-3">🌍 Community Innovation</h3>
                <p class="text-gray-300">The best features come from users who understand their own problems. Open source enables developers worldwide to contribute improvements that benefit everyone.</p>
              </div>
            </div>

            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" alt="Collaboration" class="w-full h-80 object-cover rounded-xl my-8" />

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Real Impact: Community Contributions</h2>
            
            <p class="text-gray-300 leading-relaxed mb-6">Since launching, our community has contributed incredible improvements:</p>

            <div class="space-y-4 my-8">
              <div class="bg-gradient-to-r from-green-900/20 to-green-800/10 border-l-4 border-green-500 p-4">
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="font-bold text-white mb-1">Multi-language Support</h4>
                    <p class="text-gray-400 text-sm">Community added Python, Rust, and Go specific enhancements</p>
                  </div>
                  <span class="text-green-400 text-sm">+47 commits</span>
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-l-4 border-blue-500 p-4">
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="font-bold text-white mb-1">Performance Optimization</h4>
                    <p class="text-gray-400 text-sm">Reduced context analysis time by 65%</p>
                  </div>
                  <span class="text-blue-400 text-sm">+23 commits</span>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-l-4 border-purple-500 p-4">
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="font-bold text-white mb-1">Custom Templates</h4>
                    <p class="text-gray-400 text-sm">Users can now define project-specific prompt templates</p>
                  </div>
                  <span class="text-purple-400 text-sm">+31 commits</span>
                </div>
              </div>

              <div class="bg-gradient-to-r from-pink-900/20 to-pink-800/10 border-l-4 border-pink-500 p-4">
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="font-bold text-white mb-1">Offline Mode</h4>
                    <p class="text-gray-400 text-sm">Basic enhancements work without internet connection</p>
                  </div>
                  <span class="text-pink-400 text-sm">+18 commits</span>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">No Business Model Conflicts</h2>
            
            <p class="text-gray-300 leading-relaxed mb-4">Many ""free"" developer tools have ulterior motives:</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-red-400 mb-3">❌ Typical "Free" Tool</h3>
                <ul class="space-y-2 text-gray-300 text-sm">
                  <li>• Mine your data for AI training</li>
                  <li>• Lock features behind paywalls</li>
                  <li>• Upsell to enterprise plans</li>
                  <li>• Track usage for advertising</li>
                  <li>• Vendor lock-in strategies</li>
                </ul>
              </div>
              <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 class="text-xl font-bold text-green-400 mb-3">✓ ClarityAI Approach</h3>
                <ul class="space-y-2 text-gray-300 text-sm">
                  <li>• Actually free, forever</li>
                  <li>• No premium features</li>
                  <li>• No data collection</li>
                  <li>• No usage limits</li>
                  <li>• Community-owned future</li>
                </ul>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">Contributing to ClarityAI</h2>
            
            <p class="text-gray-300 leading-relaxed mb-6">We welcome contributions of all kinds:</p>

            <div class="bg-gray-900 border border-gray-700 rounded-lg p-6 my-8">
              <h3 class="text-xl font-bold text-white mb-4">Ways to Contribute</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-purple-400 mb-2">Code Contributions</h4>
                  <ul class="space-y-1 text-gray-300 text-sm">
                    <li>• Bug fixes</li>
                    <li>• New features</li>
                    <li>• Performance improvements</li>
                    <li>• Test coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-pink-400 mb-2">Non-Code Contributions</h4>
                  <ul class="space-y-1 text-gray-300 text-sm">
                    <li>• Documentation</li>
                    <li>• Bug reports</li>
                    <li>• Feature requests</li>
                    <li>• Community support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gray-900 rounded-lg p-6 my-8">
              <h3 class="text-xl font-bold text-white mb-4">Quick Start for Contributors</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">1</span>
                  <div>
                    <code class="text-purple-300 text-sm">git clone https://github.com/Attafii/ClarityAI</code>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">2</span>
                  <div>
                    <code class="text-purple-300 text-sm">npm install</code>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">3</span>
                  <div>
                    <code class="text-purple-300 text-sm">npm run dev</code>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">4</span>
                  <div>
                    <span class="text-gray-300 text-sm">Make your changes and submit a PR!</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Future of Open AI Tools</h2>
            
            <p class="text-gray-300 leading-relaxed mb-4">We believe the future of AI development tools must be:</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div class="text-center p-6">
                <div class="text-5xl mb-4">🔓</div>
                <h3 class="text-xl font-bold text-white mb-2">Open</h3>
                <p class="text-gray-400 text-sm">Source code, development process, and decision-making</p>
              </div>
              <div class="text-center p-6">
                <div class="text-5xl mb-4">🤝</div>
                <h3 class="text-xl font-bold text-white mb-2">Collaborative</h3>
                <p class="text-gray-400 text-sm">Built by and for the developer community</p>
              </div>
              <div class="text-center p-6">
                <div class="text-5xl mb-4">🎯</div>
                <h3 class="text-xl font-bold text-white mb-2">Focused</h3>
                <p class="text-gray-400 text-sm">Solving real problems without hidden agendas</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 my-12">
              <h3 class="text-2xl font-bold text-white mb-4">Join the Open Source Movement</h3>
              <p class="text-purple-100 mb-6">ClarityAI belongs to the community. Every contribution, big or small, shapes the future of AI-assisted development.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/Attafii/ClarityAI" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">⭐ Star on GitHub</a>
                <a href="https://github.com/Attafii/ClarityAI/issues" class="inline-block bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition text-center">🐛 Report Issues</a>
              </div>
            </div>

            <div class="border-t border-gray-700 pt-8 mt-12">
              <p class="text-gray-400 text-center italic">"The best way to predict the future is to build it together, in the open."</p>
              <p class="text-gray-500 text-center mt-2">— Ahmed Attafi, Creator of ClarityAI</p>
            </div>
          </div>',
          'Ahmed Attafi',
          'Community',
          'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088',
          '11 min read',
          false
        )
    `;

    return NextResponse.json({ 
      message: 'Database initialized and blog posts seeded successfully',
      success: true 
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database', details: String(error) },
      { status: 500 }
    );
  }
}
