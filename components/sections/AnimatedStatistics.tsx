'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Star, Code2 } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import useScrollReveal from '@/hooks/use-scroll-reveal';

interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

const STATISTICS: Statistic[] = [
  {
    id: 'productivity',
    label: 'Productivity Boost',
    value: 85,
    suffix: '%',
    icon: TrendingUp,
    color: '#A459E1',
    description: 'Average increase in coding speed reported by users',
  },
  {
    id: 'developers',
    label: 'Active Developers',
    value: 50000,
    suffix: '+',
    icon: Users,  
    color: '#F0CDFF',
    description: 'Developers using ClarityAI worldwide',
  },
  {
    id: 'satisfaction',
    label: 'User Satisfaction',
    value: 98,
    suffix: '%',
    icon: Star,
    color: '#FFD700',
    description: '5-star ratings on VS Code Marketplace',
  },
  {
    id: 'prompts',
    label: 'Prompts Generated',
    value: 2500000,
    suffix: '+',
    icon: Code2,
    color: '#4CAF50',
    description: 'Total AI-assisted code generations',
  },
];

export function AnimatedStatistics() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className={`relative py-24 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Proven Impact on Developer Productivity
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of developers who've transformed their workflow with ClarityAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.id}
                className="border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div
                      className="p-4 rounded-full bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10 border border-[#A459E1]/40 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-8 h-8" style={{ color: stat.color }} />
                    </div>
                  </div>

                  <div className="mb-2">
                    {isVisible ? (
                      <div className="flex items-baseline justify-center gap-1">
                        <NumberFlow
                          value={stat.value}
                          format={{
                            notation: stat.value >= 1000 ? 'compact' : 'standard',
                            compactDisplay: 'short',
                          }}
                          className="text-5xl font-bold text-white"
                          transformTiming={{
                            duration: 1500,
                            easing: 'ease-out',
                          }}
                        />
                        <span className="text-3xl font-semibold text-white">
                          {stat.suffix}
                        </span>
                      </div>
                    ) : (
                      <div className="h-14 w-32 mx-auto bg-gray-700/50 animate-pulse rounded" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-white">{stat.label}</h3>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Statistics updated monthly based on user feedback and marketplace data
          </p>
        </div>
      </div>
    </section>
  );
}
