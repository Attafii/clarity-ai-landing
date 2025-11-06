export const siteConfig = {
  name: 'Clarity AI',
  description:
    'Intelligent Prompt Enhancement for VS Code. Transform your simple prompts into professional, detailed specifications using advanced AI technology. Get better results from GitHub Copilot Chat with enhanced, structured prompts.',
  tagline: 'Intelligent Prompt Enhancement for VS Code',
  shortDescription:
    'Advanced AI technology that transforms your simple prompts into professional, detailed specifications for better GitHub Copilot Chat results.',

  // Features
  features: [
    {
      title: 'AI-Powered Enhancement',
      description: 'Advanced AI technology for intelligent prompt improvement',
      icon: '🤖',
    },
    {
      title: 'Grammar & Spelling Correction',
      description: 'Automatically fixes typos and grammatical errors',
      icon: '📝',
    },
    {
      title: 'Smart Enhancement',
      description:
        'Transforms vague prompts into detailed, actionable specifications',
      icon: '🎯',
    },
    {
      title: 'Seamless Copilot Integration',
      description: 'Works directly with GitHub Copilot Chat',
      icon: '🔗',
    },
    {
      title: 'One-Click Operation',
      description: 'Simple @clarity command in VS Code Chat',
      icon: '⚡',
    },
    {
      title: 'Context-Aware Follow-ups',
      description: 'Smart suggestions based on your enhanced prompts',
      icon: '🔄',
    },
  ],

  // Social Links
  socialLinks: [
    {
      name: 'GitHub',
      href: 'https://github.com/Attafii/ClarityAI',
      icon: 'Github',
    },
  ],

  // Navigation Links
  navLinks: [
    { name: 'Features', href: '#features' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'GitHub', href: 'https://github.com/Attafii/ClarityAI' },
  ],

  // Legal Links
  legalLinks: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'MIT License', href: 'https://github.com/Attafii/ClarityAI/blob/main/LICENSE' },
    { name: 'Support', href: 'https://github.com/Attafii/ClarityAI/issues' },
  ],

  // URLs
  urls: {
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=clarityai.prompt-enhancer',
    github: 'https://github.com/Attafii/ClarityAI',
    docs: 'https://docs.clarityai.dev',
    support: 'https://github.com/Attafii/ClarityAI/issues',
  },

  // Company Info
  company: {
    name: 'ClarityAI',
    foundedYear: 2025,
    author: 'Ahmed Attafi',
    authorUrl: 'https://attafii.dev',
  },
};

export type SiteConfig = typeof siteConfig;
