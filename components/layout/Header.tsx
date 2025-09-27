'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <Link
        href='/'
        aria-label='home'
        className={`flex items-center space-x-2 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-black/70 backdrop-blur-md border border-[#A459E1]/30 rounded-full px-4 py-2 shadow-lg shadow-[#A459E1]/10' 
            : 'bg-transparent px-2 py-2'
        }`}
      >
        <Logo />
      </Link>
    </header>
  );
}