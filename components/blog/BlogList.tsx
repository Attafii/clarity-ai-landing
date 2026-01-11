'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  image: string;
  read_time: string;
  published_at: string;
  featured: boolean;
}

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <div className="mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] text-black shadow-lg shadow-[#A459E1]/20'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-transparent hover:border-[#A459E1]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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

                  <div className="flex flex-col gap-2 text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
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
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-muted-foreground">
            No articles found in this category.
          </div>
        )}
      </div>
    </>
  );
}
