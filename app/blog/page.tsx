'use client';

import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const featuredPost = {
    id: "one-shot-prompts-revolution",
    title: "The One-Shot Prompt Revolution: Building Complete Apps in Minutes",
    excerpt: "Discover how one-shot prompts are transforming software development and why Clarity AI is at the forefront of this movement.",
    content: "The way we build software is changing. Traditional development cycles of planning, coding, testing, and iteration are being compressed into single, comprehensive prompts that generate complete, production-ready applications...",
    author: "Clarity AI Team",
    date: "October 25, 2025",
    readTime: "8 min read",
    category: "Product",
    image: "🚀",
    featured: true
  };

  const posts = [
    {
      id: "mastering-prompt-engineering",
      title: "Mastering Prompt Engineering: A Developer's Guide",
      excerpt: "Learn the art and science of crafting effective prompts that get you exactly what you need from AI coding assistants.",
      author: "Sarah Chen",
      date: "October 20, 2025",
      readTime: "12 min read",
      category: "Tutorial",
      image: "📚"
    },
    {
      id: "clarity-ai-vs-raw-copilot",
      title: "Clarity AI vs Raw Copilot: A Real-World Comparison",
      excerpt: "We tested both approaches on 50 real-world coding tasks. The results surprised even us.",
      author: "Mike Rodriguez",
      date: "October 18, 2025",
      readTime: "10 min read",
      category: "Analysis",
      image: "📊"
    },
    {
      id: "open-source-ai-tools",
      title: "Why Open Source Matters for AI Development Tools",
      excerpt: "The case for transparent, community-driven AI tools and what it means for developers.",
      author: "Alex Thompson",
      date: "October 15, 2025",
      readTime: "7 min read",
      category: "Opinion",
      image: "💭"
    },
    {
      id: "team-productivity-boost",
      title: "How Teams Are Achieving 10x Productivity with AI",
      excerpt: "Real stories from development teams who transformed their workflow with enhanced AI prompts.",
      author: "Emma Wilson",
      date: "October 12, 2025",
      readTime: "9 min read",
      category: "Case Study",
      image: "👥"
    },
    {
      id: "future-of-coding",
      title: "The Future of Coding: AI as Your Pair Programmer",
      excerpt: "What happens when AI assistants become sophisticated enough to understand not just code, but intent?",
      author: "David Park",
      date: "October 8, 2025",
      readTime: "11 min read",
      category: "Future",
      image: "🔮"
    },
    {
      id: "prompt-templates-library",
      title: "Building Your Personal Prompt Templates Library",
      excerpt: "Create a collection of reusable prompt patterns that supercharge your daily development work.",
      author: "Lisa Anderson",
      date: "October 5, 2025",
      readTime: "6 min read",
      category: "Tutorial",
      image: "📝"
    },
    {
      id: "context-matters",
      title: "Why Context is Everything in AI-Assisted Development",
      excerpt: "Understanding how context transforms generic AI suggestions into precisely what you need.",
      author: "James Mitchell",
      date: "October 1, 2025",
      readTime: "8 min read",
      category: "Technical",
      image: "🎯"
    },
    {
      id: "clarity-ai-roadmap",
      title: "Clarity AI Roadmap: What's Coming in 2025",
      excerpt: "A peek into upcoming features, improvements, and our vision for the future of prompt enhancement.",
      author: "Clarity AI Team",
      date: "September 28, 2025",
      readTime: "5 min read",
      category: "Product",
      image: "🗺️"
    },
    {
      id: "security-best-practices",
      title: "Security Best Practices for AI Coding Assistants",
      excerpt: "Keep your code secure while leveraging the power of AI. Essential security tips every developer should know.",
      author: "Security Team",
      date: "September 25, 2025",
      readTime: "10 min read",
      category: "Security",
      image: "🔒"
    }
  ];

  const categories = ["All", "Product", "Tutorial", "Analysis", "Opinion", "Case Study", "Future", "Technical", "Security"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#A459E1] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-md border border-[#A459E1]/30 rounded-full mb-6">
              <span className="text-sm font-medium text-[#F0CDFF]">✍️ Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
              Clarity AI Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Insights, tutorials, and stories about AI-assisted development, prompt engineering, and the future of coding.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Featured Article
            </h2>
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="group relative bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/10 border-2 border-[#A459E1]/50 rounded-2xl p-8 md:p-12 hover:border-[#A459E1]/70 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] rounded-full mb-6">
                    <Tag className="h-3 w-3 text-black" />
                    <span className="text-xs font-bold text-black">{featuredPost.category}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6">{featuredPost.image}</div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-[#F0CDFF] transition-colors">
                    {featuredPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-6 inline-flex items-center gap-2 text-[#F0CDFF] font-semibold group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === "All"
                      ? 'bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="group h-full bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-[#A459E1]/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                  {/* Image/Icon */}
                  <div className="bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 p-8 flex items-center justify-center border-b border-border group-hover:from-[#A459E1]/20 group-hover:to-[#F0CDFF]/20 transition-colors">
                    <span className="text-6xl">{post.image}</span>
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full mb-4">
                      <span className="text-xs font-medium text-muted-foreground">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-[#F0CDFF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-col gap-2 text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/30 transition-all duration-300 hover:scale-105"
            >
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-br from-[#A459E1]/10 to-[#F0CDFF]/10 border border-[#A459E1]/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] to-[#A459E1] bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A459E1] focus:border-transparent"
              />
              <Button
                className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold px-6 rounded-lg"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingDockSection />
    </div>
  );
}
