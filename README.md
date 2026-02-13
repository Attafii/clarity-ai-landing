# ClarityAI Landing Page

Modern, high-performance landing page for [ClarityAI](https://www.clarity-ai.app/) - an intelligent prompt enhancement extension for GitHub Copilot.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + custom components
- **Animations**: Framer Motion
- **Analytics**: Plausible Analytics (privacy-focused)
- **Database**: Neon PostgreSQL (Serverless)
- **Deployment**: Vercel

## ✨ Features & Components

### Priority 1: High-Impact Sections (5 Components)

1. **Interactive Demo Playground** (`components/sections/InteractiveDemoPlayground.tsx`)
   - 6 real preset ClarityAI command examples
   - Syntax highlighting with copy-to-clipboard
   - Responsive tabbed interface
   - Scroll reveal animations

2. **Feature Spotlight Carousel** (`components/sections/FeatureSpotlightCarousel.tsx`)
   - Auto-rotating carousel (9 features)
   - Manual navigation + dot indicators
   - Glassmorphism cards with hover effects
   - Built with embla-carousel-react

3. **Live Metrics Dashboard** (`components/sections/LiveMetricsDashboard.tsx`)
   - Real-time GitHub API integration
   - Animated counters (@number-flow/react)
   - Displays: stars, downloads, forks, issues
   - 5-minute revalidation (ISR)

4. **Video Demo Section** (`components/sections/VideoDemo.tsx`)
   - YouTube iframe embed
   - Custom play/pause controls
   - Auto-play on scroll visibility
   - Feature highlights below video

5. **Comparison Table** (`components/sections/ComparisonTable.tsx`)
   - Compares 4 AI tools (ClarityAI, Copilot, Cursor, Tabnine)
   - 11 feature criteria
   - Sticky column for mobile scroll
   - "Recommended" badge

### Priority 2: UX Enhancements (5 Components)

6. **Sticky Feature Tabs** (`components/sections/StickyFeatureTabs.tsx`)
   - 6 tabbed sections with code examples
   - Sticky header on scroll (z-50 layering)
   - Dark backdrop blur
   - Responsive grid layout

7. **Animated Statistics** (`components/sections/AnimatedStatistics.tsx`)
   - 4 key metrics with count-up animation
   - Staggered reveal (100ms delays)
   - Custom icons + colors per stat

8. **Dark/Light Mode Toggle** (`components/layout/Header.tsx`)
   - Sun/Moon icon toggle in header
   - Persists theme in localStorage
   - Uses next-themes provider

9. **Video Testimonials** (`components/sections/VideoTestimonials.tsx`)
   - 6 testimonials with avatars
   - Metrics badges (Time Saved, Accuracy, etc.)
   - Fallback to ui-avatars.com
   - 3-column responsive grid

10. **Command Cheat Sheet Widget** (`components/widgets/CommandCheatSheet.tsx`)
    - Floating widget (bottom-right)
    - 6 keyboard shortcuts
    - Appears after 3 seconds
    - Minimizes to circular button

### Priority 3: Content Features (4 Components)

11. **Blog Post Previews** (`components/sections/BlogPostPreviews.tsx`)
    - 3 featured blog posts from database
    - Category badges, read time, publish date
    - Image hover effects
    - Links to `/blog`

12. **Global Search (Cmd+K)** (`components/widgets/GlobalSearch.tsx`)
    - Full-screen command palette
    - Fuzzy search with Fuse.js
    - 12 searchable items (features, docs, blog)
    - Keyboard navigation support

13. **Use Case Gallery Page** (`app/use-cases/page.tsx`)
    - 8 comprehensive use cases
    - Benefits + example commands
    - 2-column responsive grid
    - SEO metadata

14. **IDE Integration Guides** (`app/docs/page.tsx`)
    - 4 platform guides (VS Code, Cursor, JetBrains, CI/CD)
    - Code snippets for each
    - Beta badges + warning callouts

### Priority 4: Conversion Widgets (4 Components)

15. **Exit-Intent Popup** (`components/widgets/ExitIntentPopup.tsx`)
    - Triggers on mouse leave
    - Email capture form
    - Shows once per session

16. **Email Capture Widget** (`components/widgets/EmailCaptureWidget.tsx`)
    - Full-width section with gradient card
    - Scroll reveal animation
    - Dismissable with localStorage persistence

17. **Social Proof Notifications** (`components/widgets/SocialProofNotifications.tsx`)
    - Toast notifications (sonner)
    - 3 activity types (signup, download, star)
    - Appears every 45 seconds

18. **GitHub Star CTA Banner** (`components/widgets/GitHubStarBanner.tsx`)
    - Sticky banner at top
    - Purple gradient border
    - Dismissable with localStorage
    - Slide-down animation

### Priority 5: Technical Excellence (2 Features)

19. **Performance Optimization**
    - Lazy loading for all heavy components (dynamic imports)
    - Homepage bundle: 93.3kB (33% reduction from 140kB)
    - Code splitting at route level
    - ISR caching for GitHub API

20. **Analytics Integration** (`lib/analytics.ts`)
    - Plausible Analytics script in layout
    - Event tracking on CTA clicks
    - Privacy-focused (no cookies, GDPR compliant)
    - Page view tracking

## 📂 Project Structure

```
clarity-ai-landing/
├── app/
│   ├── api/
│   │   ├── seed-new-features/      # Blog post seeding endpoint
│   │   └── ...
│   ├── blog/                        # Blog listing + individual posts
│   ├── docs/                        # Documentation + IDE guides
│   ├── use-cases/                   # Use case gallery page
│   ├── layout.tsx                   # Root layout with analytics
│   └── page.tsx                     # Homepage (18 new components integrated)
├── components/
│   ├── sections/                    # Page sections (14 new)
│   ├── widgets/                     # Floating widgets (6 new)
│   ├── layout/                      # Header, Footer
│   └── ui/                          # shadcn/ui + custom UI
├── lib/
│   ├── analytics.ts                 # Analytics helper functions
│   └── ...
└── public/                          # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database (Neon recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Attafii/clarity-ai-landing.git
cd clarity-ai-landing

# Install dependencies
npm install
# or
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your:
# - DATABASE_URL (Neon PostgreSQL)
# - Other API keys if needed
```

### Database Setup

```bash
# Seed the database with blog posts
curl -X POST http://localhost:3000/api/seed-new-features
```

### Development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Production Build

```bash
npm run build
npm run start
```

## 📊 Performance Metrics

- **Lighthouse Score Target**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: 93.3kB (homepage, gzipped)
- **First Load JS**: 221kB (shared chunks included)
- **Build Time**: ~6 seconds (with Turbopack)

## 🎨 Design System

### Brand Colors
```typescript
{
  primary: '#A459E1',      // Purple
  secondary: '#F0CDFF',    // Light Purple
  borderRadius: '0.625rem' // 10px
}
```

### Typography
- **Sans-serif**: Geist Sans (Vercel)
- **Monospace**: Geist Mono (Vercel)

### Animation Patterns
- Scroll reveal: 700ms duration, ease-out
- Hover effects: 300ms transition
- Counter animations: 1500ms (NumberFlow)

## 🧪 Testing Checklist

- [ ] Lighthouse audit (95+ target)
- [ ] WCAG 2.1 AA accessibility audit
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (iOS Safari, Android Chrome)
- [ ] Analytics event tracking verification

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

## 🔗 Links

- **Website**: [https://www.clarity-ai.app/](https://www.clarity-ai.app/)
- **VS Code Extension**: [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=AhmedAttafii.clarityai)
- **GitHub Repo**: [ClarityAI Extension](https://github.com/Attafii/ClarityAI)
