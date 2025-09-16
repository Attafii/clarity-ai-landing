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
      href: 'https://github.com/clarityai/vscode-extension',
      icon: 'Github',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/clarityai',
      icon: 'Twitter',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/clarityai',
      icon: 'Linkedin',
    },
  ],

  // Navigation Links
  navLinks: [
    { name: 'Features', href: '#features' },
    { name: 'Install', href: '#install' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ],

  // Legal Links
  legalLinks: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Security', href: '#security' },
  ],

  // URLs
  urls: {
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=clarityai.prompt-enhancer',
    github: 'https://github.com/clarityai/vscode-extension',
    docs: 'https://docs.clarityai.dev',
    support: 'mailto:support@clarityai.dev',
  },

  // Company Info
  company: {
    name: 'Clarity AI',
    foundedYear: 2025,
    location: 'San Francisco, CA',
  },
};

export type SiteConfig = typeof siteConfig;
