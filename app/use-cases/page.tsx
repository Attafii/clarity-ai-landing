import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Shield, Users, Zap, GitBranch, FileCode, TrendingUp, Sparkles, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Use Cases | ClarityAI - Real-World Applications',
  description: 'Discover how developers use ClarityAI for code reviews, security audits, team collaboration, and more.',
};

interface UseCase {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  example: string;
  usedBy: string;
}

const USE_CASES: UseCase[] = [
  {
    id: 'code-review',
    icon: Code2,
    title: 'Automated Code Reviews',
    description: 'Get instant, expert-level code reviews before pushing to production. ClarityAI analyzes your code for best practices, potential bugs, and performance issues.',
    benefits: [
      'Catches bugs before they reach production',
      'Enforces coding standards automatically',
      'Reduces PR review time by 60%',
      'Educational feedback for junior developers',
    ],
    example: '/expert code-reviewer @file auth.ts --depth comprehensive',
    usedBy: 'Used by 20,000+ developers at Google, Microsoft, and Stripe',
  },
  {
    id: 'security-audit',
    icon: Shield,
    title: 'Security Vulnerability Scanning',
    description: 'Protect your codebase with enterprise-grade security scanning. Detect SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities automatically.',
    benefits: [
      'Real-time vulnerability detection',
      'OWASP Top 10 compliance checking',
      'Dependency security audit',
      'Privacy leak prevention',
    ],
    example: '/security-scan @workspace --severity high --fix-suggestions',
    usedBy: 'Trusted by security teams at Fortune 500 companies',
  },
  {
    id: 'team-collaboration',
    icon: Users,
    title: 'Team Knowledge Sharing',
    description: 'Build a shared library of prompts and best practices across your engineering team. Ensure consistent code quality and reduce onboarding time.',
    benefits: [
      'Centralized prompt templates',
      'Team-wide coding standards',
      'Faster developer onboarding',
      'Knowledge retention and sharing',
    ],
    example: '/vault save "API Error Handler" @prompt handle-errors --team-share',
    usedBy: 'Adopted by 500+ engineering teams worldwide',
  },
  {
    id: 'rapid-prototyping',
    icon: Zap,
    title: 'Rapid Feature Development',
    description: 'Generate complete features, APIs, and UI components with comprehensive single-shot prompts. From idea to working code in minutes.',
    benefits: [
      'Full-stack feature generation',
      'Responsive UI scaffolding',
      'API endpoints with tests',
      'Database schema creation',
    ],
    example: '/create-feature user-dashboard --stack nextjs --db postgres --auth clerk',
    usedBy: 'Accelerating development at startups and agencies',
  },
  {
    id: 'architecture-planning',
    icon: GitBranch,
    title: 'System Architecture Design',
    description: 'Visualize complex system architectures with auto-generated Mermaid diagrams. Plan, communicate, and document your technical decisions.',
    benefits: [
      'Automatic diagram generation',
      'Multiple diagram types (sequence, flowchart, ER)',
      'Export to PNG/SVG/Markdown',
      'Version control integration',
    ],
    example: '/mermaid-diagram --type sequence @feature payment-flow --output docs/',
    usedBy: 'Helping architects design at scale',
  },
  {
    id: 'code-quality',
    icon: TrendingUp,
    title: 'Quality Metrics & Improvement',
    description: 'Track code quality metrics with educational insights. Understand complexity, maintainability, and technical debt in real-time.',
    benefits: [
      'Cyclomatic complexity analysis',
      'Maintainability index scoring',
      'Technical debt tracking',
      'Educational improvement tips',
    ],
    example: '/analyze @workspace --metrics all --trend 30days --report pdf',
    usedBy: 'Maintaining quality at enterprise scale',
  },
  {
    id: 'refactoring',
    icon: FileCode,
    title: 'Safe Code Refactoring',
    description: 'Refactor legacy code with confidence. ClarityAI suggests improvements while preserving functionality and adding tests.',
    benefits: [
      'Automated refactoring suggestions',
      'Test generation for legacy code',
      'Breaking change detection',
      'Migration path planning',
    ],
    example: '/refactor @file legacy-api.js --target typescript --add-tests --preserve-behavior',
    usedBy: 'Modernizing codebases at established companies',
  },
  {
    id: 'learning',
    icon: Sparkles,
    title: 'Learn by Building',
    description: 'Educational AI that explains every suggestion. Perfect for junior developers learning best practices and senior developers exploring new technologies.',
    benefits: [
      'Explanations for every suggestion',
      'Interactive learning prompts',
      'Technology comparison insights',
      'Best practice recommendations',
    ],
    example: '/explain @code async-await --compare promises --show-examples',
    usedBy: 'Upskilling 50,000+ developers globally',
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#A459E1] hover:text-[#F0CDFF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#A459E1]" />
              <span className="text-sm font-medium text-[#F0CDFF]">Use Cases</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              How Developers Use ClarityAI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From code reviews to security audits, discover real-world applications that transform development workflows
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {USE_CASES.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <Card
                  key={useCase.id}
                  className="border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10 border border-[#A459E1]/40">
                        <Icon className="w-8 h-8 text-[#A459E1]" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                        <p className="text-sm text-gray-500">{useCase.usedBy}</p>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-300">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] mt-1.5 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Example Command:</h4>
                        <div className="p-4 rounded-lg bg-black/60 border border-[#A459E1]/30">
                          <code className="text-xs font-mono text-[#F0CDFF] break-all">
                            {useCase.example}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join 50,000+ developers using ClarityAI to write better code, faster.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              asChild
            >
              <a
                href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install ClarityAI - It's Free
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
