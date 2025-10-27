'use client';

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconCurrencyDollar,
    IconBook,
    IconArticle,
    IconHeart,
    IconBrandGithub,
    IconBrandX,
} from "@tabler/icons-react";

export default function FloatingDockSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Always show dock bar on all pages
    setIsVisible(true);
  }, []);

  // Bluesky icon component (custom since not in Tabler)
  const BlueSkyIcon = () => (
    <svg className="h-full w-full text-neutral-500 dark:text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5c-1.38 0-2.5.84-2.5 1.88 0 .31.1.6.26.85.45.71 1.24 1.27 2.24 1.27s1.79-.56 2.24-1.27c.16-.25.26-.54.26-.85C14.5 3.34 13.38 2.5 12 2.5zm-3.75 3.13C7.11 6.47 6 7.97 6 9.75c0 2.9 2.35 5.25 5.25 5.25h1.5c2.9 0 5.25-2.35 5.25-5.25 0-1.78-1.11-3.28-2.25-4.12C15.19 5.28 14.44 5 13.63 5h-3.26c-.81 0-1.56.28-2.12.63z"/>
    </svg>
  );

  const links = [
    {
      title: "Pricing",
      icon: (
        <IconCurrencyDollar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pricing",
    },
    {
      title: "Docs",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/docs",
    },
    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Donate",
      icon: (
        <IconHeart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/donate",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Attafii/clarity-ai-landing",
    },
    {
      title: "X (Twitter)",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/yourhandle",
    },
    {
      title: "Bluesky",
      icon: <BlueSkyIcon />,
      href: "https://bsky.app/profile/yourhandle.bsky.social",
    },
  ];

  // Handle external links vs internal navigation
  const navigationLinks = links.map(link => ({
    ...link,
    onClick: link.href.startsWith('http') ? undefined : (e: React.MouseEvent) => {
      e.preventDefault();
      // For internal links, you can add routing logic here
      window.location.href = link.href;
    }
  }));
  
  return (
    <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
    }`}>
      <FloatingDock
        mobileClassName="translate-y-0"
        desktopClassName="backdrop-blur-md bg-black/80 border border-[#A459E1]/20 shadow-2xl shadow-[#A459E1]/10"
        items={navigationLinks}
      />
    </div>
  );
}