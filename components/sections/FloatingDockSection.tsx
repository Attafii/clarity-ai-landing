'use client';

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { motion, AnimatePresence } from "motion/react";
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
    const handleScroll = () => {
      // Show dock after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      title: "Sponsor",
      icon: (
        <IconHeart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/sponsors/Attafii",
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 z-50 pointer-events-auto"
        >
          <FloatingDock
            mobileClassName="translate-y-0"
            desktopClassName="backdrop-blur-md bg-black/80 border border-[#A459E1]/20 shadow-2xl shadow-[#A459E1]/10"
            items={navigationLinks}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}