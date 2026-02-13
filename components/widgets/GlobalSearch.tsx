'use client';

import { useEffect, useState, useCallback } from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Search, FileCode, BookOpen, HelpCircle } from 'lucide-react';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';

interface SearchableItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'feature' | 'doc' | 'blog';
}

const SEARCHABLE_CONTENT: SearchableItem[] = [
  { id: '1', title: 'Introduction to ClarityAI', description: 'Learn about the vision and core features of ClarityAI.', url: '/blog/introducing-clarity-ai', category: 'blog' },
  { id: '2', title: 'Mastering Expert Personas', description: 'Learn how to use /architect, /security, and other specialized AI roles.', url: '/blog/mastering-expert-personas', category: 'blog' },
  { id: '3', title: 'Security & Privacy First', description: 'How we protect your code with secret masking and local-first analysis.', url: '/blog/security-and-privacy-first', category: 'blog' },
  { id: '4', title: 'Intelligent Routing Engine', description: 'Understanding how ClarityAI chooses between speed and deep thinking.', url: '/blog/intelligent-routing-engine', category: 'blog' },
  { id: '5', title: 'Team and Local Vaults', description: 'Standardize your prompt engineering across your team and projects.', url: '/blog/team-and-local-vaults', category: 'blog' },
  { id: '6', title: 'Visual Architecture (Mermaid)', description: 'Generating flowcharts and sequence diagrams directly in your chat.', url: '/blog/visual-architecture-mermaid', category: 'blog' },
  { id: '7', title: 'Syncing Your Tech Stack', description: 'How ClarityAI detects your framework versions for better code accuracy.', url: '/blog/syncing-your-tech-stack', category: 'blog' },
  { id: '8', title: 'Getting Started Guide', description: 'Quick start guide to get ClarityAI up and running in minutes.', url: '/docs#getting-started', category: 'doc' },
  { id: '9', title: 'Installation Guide', description: 'Step-by-step instructions for VS Code, Cursor, and JetBrains.', url: '/docs#installation', category: 'doc' },
  { id: '10', title: 'Setup & Configuration', description: 'Customize ClarityAI settings to match your workflow.', url: '/docs#configuration', category: 'doc' },
  { id: '11', title: 'IDE Integrations', description: 'Connect ClarityAI with VS Code, JetBrains, and CI/CD pipelines.', url: '/docs#integrations', category: 'doc' },
  { id: '12', title: 'Contributing to ClarityAI', description: 'Join the open-source community and help improve the extension.', url: '/docs#contributing', category: 'doc' },
];

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableItem[]>(SEARCHABLE_CONTENT);
  const router = useRouter();

  const fuse = new Fuse(SEARCHABLE_CONTENT, {
    keys: ['title', 'description'],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setResults(SEARCHABLE_CONTENT);
    } else {
      const fuseResults = fuse.search(searchQuery);
      setResults(fuseResults.map((result) => result.item));
    }
  }, [fuse]);

  const handleSelect = (url: string) => {
    setOpen(false);
    setQuery('');
    router.push(url);
  };

  const getCategoryIcon = (category: SearchableItem['category']) => {
    switch (category) {
      case 'feature':
        return <FileCode className="w-4 h-4 text-[#A459E1]" />;
      case 'doc':
        return <HelpCircle className="w-4 h-4 text-[#F0CDFF]" />;
      case 'blog':
        return <BookOpen className="w-4 h-4 text-green-400" />;
    }
  };

  const getCategoryLabel = (category: SearchableItem['category']) => {
    switch (category) {
      case 'feature':
        return 'Feature';
      case 'doc':
        return 'Documentation';
      case 'blog':
        return 'Blog Post';
    }
  };

  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchableItem[]>);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold shadow-2xl transition-all duration-300 group"
        aria-label="Open search"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search</span>
        <kbd className="hidden sm:inline px-2 py-1 text-xs bg-black/20 rounded border border-black/20">
          Ctrl K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 gap-0 max-w-2xl border-[#A459E1]/30 bg-black/95 backdrop-blur-xl">
          <Command className="bg-transparent">
            <div className="flex items-center border-b border-[#A459E1]/20 px-3">
              <Search className="w-5 h-5 text-[#A459E1] mr-2 shrink-0" />
              <CommandInput
                placeholder="Search features, docs, and blog posts..."
                value={query}
                onValueChange={handleSearch}
                className="h-12 border-0 focus:ring-0 bg-transparent text-white placeholder:text-gray-500"
              />
            </div>
            <CommandList className="max-h-96 overflow-y-auto p-2">
              {results.length === 0 ? (
                <CommandEmpty className="py-6 text-center text-gray-500">
                  No results found for "{query}"
                </CommandEmpty>
              ) : (
                Object.entries(groupedResults).map(([category, items]) => (
                  <CommandGroup
                    key={category}
                    heading={getCategoryLabel(category as SearchableItem['category'])}
                    className="text-gray-400 font-semibold text-xs mb-2"
                  >
                    {items.map((item) => (
                      <CommandItem
                        key={item.id}
                        onSelect={() => handleSelect(item.url)}
                        className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-br hover:from-[#A459E1]/20 hover:to-[#F0CDFF]/20 transition-colors"
                      >
                        <div className="mt-0.5">{getCategoryIcon(item.category)}</div>
                        <div className="flex-1">
                          <div className="font-medium text-white mb-1">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))
              )}
            </CommandList>
          </Command>

          <div className="border-t border-[#A459E1]/20 p-3 bg-gradient-to-r from-[#A459E1]/5 to-[#F0CDFF]/5">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-black/60 border border-[#A459E1]/30 rounded">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-black/60 border border-[#A459E1]/30 rounded">↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-black/60 border border-[#A459E1]/30 rounded">Enter</kbd>
                  Select
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-black/60 border border-[#A459E1]/30 rounded">Esc</kbd>
                Close
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
