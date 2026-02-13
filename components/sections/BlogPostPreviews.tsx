'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/use-scroll-reveal';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishedAt: string;
  imageUrl: string;
}

const FEATURED_POSTS: BlogPost[] = [
  {
    slug: 'expert-personas-introduction',
    title: 'Introducing Expert Personas: Your AI Development Team',
    excerpt: 'Learn how to leverage specialized AI personas for code reviews, security audits, and architectural decisions.',
    category: 'Features',
    readTime: 14,
    publishedAt: '2026-02-01',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  },
  {
    slug: 'security-first-prompting',
    title: 'Security-First Prompting: Protecting Your Code',
    excerpt: 'Best practices for using AI assistants while maintaining enterprise-grade security and privacy standards.',
    category: 'Security',
    readTime: 16,
    publishedAt: '2026-01-28',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
  },
  {
    slug: 'one-shot-website-development',
    title: 'One-Shot Website Development: From Idea to Production',
    excerpt: 'Master the art of generating complete, production-ready websites with comprehensive single prompts.',
    category: 'Tutorial',
    readTime: 20,
    publishedAt: '2026-01-25',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
  },
];

export function BlogPostPreviews() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className={`relative py-24 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/30 mb-6">
              <BookOpen className="w-4 h-4 text-[#A459E1]" />
              <span className="text-sm font-medium text-[#F0CDFF]">Latest Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Learn & Grow
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Tutorials, best practices, and insights to master AI-assisted development
            </p>
          </div>
          <Link href="/blog">
            <Button
              variant="outline"
              className="hidden md:flex border-[#A459E1]/30 bg-black/40 hover:bg-[#A459E1]/20 hover:border-[#F0CDFF]/40 text-white"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full border-[#A459E1]/30 bg-gradient-to-br from-black/60 via-[#A459E1]/10 to-[#F0CDFF]/10 backdrop-blur-sm hover:border-[#F0CDFF]/40 transition-all duration-300 group overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x400/A459E1/FFFFFF?text=${encodeURIComponent(post.category)}`;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#F0CDFF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#A459E1]/20">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span>{post.readTime} min read</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#A459E1] group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-[#A459E1]/30 bg-black/40 hover:bg-[#A459E1]/20 hover:border-[#F0CDFF]/40 text-white"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
