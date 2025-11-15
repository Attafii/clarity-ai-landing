import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDockSection from "@/components/sections/FloatingDockSection";
import { Button } from "@/components/ui/button";
import { getBlogPosts, getFeaturedPost } from "@/lib/db";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Learn about prompt engineering, AI-assisted development, and get the most out of ClarityAI with tutorials, guides, and insights.',
  openGraph: {
    title: 'ClarityAI Blog - AI Development Insights & Tutorials',
    description: 'Learn about prompt engineering, AI-assisted development, and get the most out of ClarityAI.',
  },
};

export default async function BlogPage() {
  const [featuredPostData, allPosts] = await Promise.all([
    getFeaturedPost(),
    getBlogPosts()
  ]);

  const posts = allPosts.filter(p => !p.featured);
  
  // Map database post to component format
  const featuredPost = featuredPostData ? {
    id: featuredPostData.slug,
    title: featuredPostData.title,
    excerpt: featuredPostData.excerpt,
    content: featuredPostData.content,
    author: featuredPostData.author,
    date: new Date(featuredPostData.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: featuredPostData.read_time,
    category: featuredPostData.category,
    image: featuredPostData.image,
    featured: true
  } : null;

  // Extract unique categories from posts
  const categorySet = new Set(allPosts.map(post => post.category));
  const categories = ["All", ...Array.from(categorySet)];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#A459E1] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-md border border-[#A459E1]/30 rounded-full mb-6">
              <span className="text-sm font-medium text-[#F0CDFF]">✍️ Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#F0CDFF] via-white to-[#A459E1] bg-clip-text text-transparent">
              Clarity AI Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn about ClarityAI features, best practices, tutorials, and insights on AI-assisted development.
            </p>
          </div>

          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Featured Article
              </h2>
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="group relative bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/10 border-2 border-[#A459E1]/50 rounded-2xl p-8 md:p-12 hover:border-[#A459E1]/70 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A459E1]/5 to-[#F0CDFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] rounded-full mb-6">
                      <Tag className="h-3 w-3 text-black" />
                      <span className="text-xs font-bold text-black">{featuredPost.category}</span>
                    </div>

                    <div className="mb-8 rounded-xl overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-[#F0CDFF] transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

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

                    <div className="mt-6 inline-flex items-center gap-2 text-[#F0CDFF] font-semibold group-hover:gap-3 transition-all">
                      <span>Read Article</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group h-full bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-[#A459E1]/40 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#A459E1]/20">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#A459E1]/20 rounded-full mb-3">
                      <span className="text-xs font-medium text-muted-foreground">{post.category}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-[#F0CDFF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-col gap-2 text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>{post.read_time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#A459E1]/30 transition-all duration-300 hover:scale-105"
            >
              Load More Articles
            </Button>
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/10 border-2 border-[#A459E1]/50 rounded-2xl p-8 md:p-12 text-center">
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
