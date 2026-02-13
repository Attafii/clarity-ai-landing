'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Sparkles } from 'lucide-react';
import useScrollReveal from '@/hooks/use-scroll-reveal';

interface ComparisonFeature {
  name: string;
  clarityai: boolean | string;
  copilot: boolean | string;
  cursor: boolean | string;
  tabnine: boolean | string;
}

const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    name: 'Expert Personas',
    clarityai: true,
    copilot: false,
    cursor: false,
    tabnine: false,
  },
  {
    name: 'Security Scanning',
    clarityai: true,
    copilot: 'Limited',
    cursor: false,
    tabnine: 'Basic',
  },
  {
    name: 'Team Prompt Library',
    clarityai: true,
    copilot: false,
    cursor: false,
    tabnine: false,
  },
  {
    name: 'Mermaid Diagrams',
    clarityai: true,
    copilot: false,
    cursor: false,
    tabnine: false,
  },
  {
    name: 'Quality Scoring',
    clarityai: true,
    copilot: false,
    cursor: false,
    tabnine: false,
  },
  {
    name: 'Privacy-First (Local)',
    clarityai: true,
    copilot: false,
    cursor: false,
    tabnine: true,
  },
  {
    name: 'One-Shot Development',
    clarityai: true,
    copilot: false,
    cursor: 'Limited',
    tabnine: false,
  },
  {
    name: 'Code Completion',
    clarityai: true,
    copilot: true,
    cursor: true,
    tabnine: true,
  },
  {
    name: 'Chat Interface',
    clarityai: true,
    copilot: true,
    cursor: true,
    tabnine: true,
  },
  {
    name: 'Multi-File Context',
    clarityai: true,
    copilot: 'Limited',
    cursor: true,
    tabnine: 'Limited',
  },
  {
    name: 'Pricing (Core)',
    clarityai: 'Free',
    copilot: '$10/mo',
    cursor: '$20/mo',
    tabnine: '$12/mo',
  },
];

const TOOLS = [
  { name: 'ClarityAI', color: '#A459E1', highlight: true },
  { name: 'GitHub Copilot', color: '#6e40c9', highlight: false },
  { name: 'Cursor', color: '#000000', highlight: false },
  { name: 'Tabnine', color: '#4d7ef7', highlight: false },
];

export function ComparisonTable() {
  const [ref, isVisible] = useScrollReveal(0.1);

  const getCellValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-400 mx-auto" aria-label="Yes" />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" aria-label="No" />
      );
    }
    return <span className="text-sm text-gray-300">{value}</span>;
  };

  return (
    <section
      ref={ref}
      className={`relative py-24 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#A459E1]" />
            <span className="text-sm font-medium text-[#F0CDFF]">Feature Comparison</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            How ClarityAI Stacks Up
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how we compare to other popular AI coding assistants
          </p>
        </div>

        <Card className="border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-center md:text-left">
              Feature-by-Feature Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#A459E1]/20">
                    <th className="text-left p-4 font-semibold text-gray-400 text-sm sticky left-0 bg-black/80 backdrop-blur-sm z-10">
                      Feature
                    </th>
                    {TOOLS.map((tool) => (
                      <th
                        key={tool.name}
                        className={`p-4 font-semibold text-sm text-center min-w-[120px] ${
                          tool.highlight
                            ? 'bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20'
                            : ''
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          {tool.highlight && (
                            <div className="px-2 py-1 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-[10px] font-bold text-black">
                              RECOMMENDED
                            </div>
                          )}
                          <span className="text-white">{tool.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((feature, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#A459E1]/10 hover:bg-[#A459E1]/5 transition-colors"
                    >
                      <td className="p-4 text-sm font-medium text-gray-300 sticky left-0 bg-black/80 backdrop-blur-sm">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10">
                        {getCellValue(feature.clarityai)}
                      </td>
                      <td className="p-4 text-center">{getCellValue(feature.copilot)}</td>
                      <td className="p-4 text-center">{getCellValue(feature.cursor)}</td>
                      <td className="p-4 text-center">{getCellValue(feature.tabnine)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            ClarityAI offers unique features like expert personas, security scanning, and team
            collaboration tools—completely free for core features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a
                href="https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try ClarityAI Free
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#A459E1]/30 bg-black/40 hover:bg-[#A459E1]/20 hover:border-[#F0CDFF]/40 text-white"
              asChild
            >
              <a href="/pricing">View Pricing Details</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-black/40 border border-[#A459E1]/20">
          <p className="text-xs text-gray-500 text-center">
            * Comparison based on publicly available information as of February 2026. Features and
            pricing may change.
          </p>
        </div>
      </div>
    </section>
  );
}
