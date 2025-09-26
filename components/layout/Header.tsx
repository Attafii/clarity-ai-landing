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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-[#A459E1]/20 py-2' 
        : 'bg-transparent py-6'
    }`}>
      <div className="flex justify-center">
        <Link
          href='/'
          aria-label='home'
          className={`flex items-center space-x-2 transition-all duration-300 ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}
        >
          <Logo />
        </Link>
      </div>
    </header>
  );
}