'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedShaderHero from '@/components/ui/animated-shader-hero';
import SimpleHeroTest from '@/components/ui/simple-hero-test';
import LogoLoop from '@/components/LogoLoop';
import { siteConfig } from '@/lib/site';
import { 
  SiGithub, 
  SiOpenai, 
  SiGoogle, 
  SiVercel, 
  SiNotion, 
  SiLinear,
  SiSlack,
  SiFigma,
  SiDiscord,
  SiSupabase,
  SiNetflix,
  SiSpotify,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

// Tech company logos with modern brands
const techLogos = [
  { node: <SiGithub className="text-gray-600 dark:text-gray-400" />, title: "GitHub", href: "https://github.com" },
  { node: <SiOpenai className="text-gray-600 dark:text-gray-400" />, title: "OpenAI", href: "https://openai.com" },
  { node: <SiGoogle className="text-gray-600 dark:text-gray-400" />, title: "Google", href: "https://google.com" },
  { node: <SiVercel className="text-gray-600 dark:text-gray-400" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNotion className="text-gray-600 dark:text-gray-400" />, title: "Notion", href: "https://notion.so" },
  { node: <SiLinear className="text-gray-600 dark:text-gray-400" />, title: "Linear", href: "https://linear.app" },
  { node: <SiSlack className="text-gray-600 dark:text-gray-400" />, title: "Slack", href: "https://slack.com" },
];

// Second row of logos for opposite direction scrolling
const techLogosRow2 = [
  { node: <SiFigma className="text-gray-600 dark:text-gray-400" />, title: "Figma", href: "https://figma.com" },
  { node: <SiDiscord className="text-gray-600 dark:text-gray-400" />, title: "Discord", href: "https://discord.com" },
  { node: <SiSupabase className="text-gray-600 dark:text-gray-400" />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiNetflix className="text-gray-600 dark:text-gray-400" />, title: "Netflix", href: "https://netflix.com" },
  { node: <SiSpotify className="text-gray-600 dark:text-gray-400" />, title: "Spotify", href: "https://spotify.com" },
  { node: <SiTailwindcss className="text-gray-600 dark:text-gray-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiTypescript className="text-gray-600 dark:text-gray-400" />, title: "TypeScript", href: "https://typescriptlang.org" },
];

export default function Hero() {
  const handlePrimaryClick = () => {
    // Add your logic here for primary CTA
    console.log('Install for VS Code clicked');
  };

  const handleSecondaryClick = () => {
    // Add your logic here for secondary CTA
    console.log('See How It Works clicked');
  };

  return (
    <main className='overflow-hidden'>
      {/* New Animated Shader Hero Section with brand colors */}
      <AnimatedShaderHero
        trustBadge={{
          text: "Supercharge Your Copilot Experience",
          icons: ["✨"]
        }}
        headline={{
          line1: "Elevate every prompt into a",
          line2: "breakthrough."
        }}
        subtitle="Improve your workflow with automatic prompt enhancement. Save time and effort while elevating AI response quality through intelligent prompt enhancement & planning that seamlessly integrates with GitHub Copilot."
        buttons={{
          primary: {
            text: "Install for VS Code",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "See How It Works",
            onClick: handleSecondaryClick
          }
        }}
      />
      
      {/* Trusted by Developers Section */}
      <section className='bg-background pb-16 pt-16 md:pb-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Trusted by developers at
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who rely on our AI-powered tools to enhance their workflow
            </p>
          </div>
          
          <div className="relative space-y-8">
            {/* First row - scrolling left */}
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={32}
              gap={80}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              ariaLabel="Technology partners and trusted companies"
              className="opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
            
            {/* Second row - scrolling right */}
            <LogoLoop
              logos={techLogosRow2}
              speed={35}
              direction="right"
              logoHeight={32}
              gap={80}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              ariaLabel="Technology partners and trusted companies"
              className="opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
