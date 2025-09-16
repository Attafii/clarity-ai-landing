'use client';

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrain,
    IconRocket,
    IconShield,
    IconSparkles,
    IconUsers,
    IconChartBar,
    IconMail,
    IconHome,
} from "@tabler/icons-react";

export default function FloatingDockSection() {
  const handleSmoothScroll = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "AI Solutions",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#solutions",
    },
    {
      title: "Products",
      icon: (
        <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#products",
    },
    {
      title: "Innovation",
      icon: (
        <IconSparkles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#innovation",
    },
    
    {
      title: "Analytics",
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#analytics",
    },
    {
      title: "Security",
      icon: (
        <IconShield className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#security",
    },
    {
      title: "About",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  // Convert links to handle smooth scrolling
  const navigationLinks = links.map(link => ({
    ...link,
    href: link.href,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      handleSmoothScroll(link.href);
    }
  }));
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        mobileClassName="translate-y-0"
        desktopClassName="backdrop-blur-md bg-white/80 dark:bg-black/80 border border-white/20 dark:border-white/10 shadow-2xl"
        items={navigationLinks}
      />
    </div>
  );
}