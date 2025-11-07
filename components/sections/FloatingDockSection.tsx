'use client';

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconCurrencyDollar,
    IconBook,
    IconArticle,
    IconHeart,
    IconBrandGithub,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export default function FloatingDockSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Always show dock bar on all pages
    setIsVisible(true);
  }, []);

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
      href: "https://github.com/Attafii/ClarityAI",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/clarityai-extension",
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