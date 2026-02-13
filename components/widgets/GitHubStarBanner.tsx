'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';

export function GitHubStarBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('github-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('github-banner-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 px-4 animate-slide-down">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] p-0.5 rounded-full shadow-2xl">
        <div className="bg-black/95 backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20">
              <Star className="w-5 h-5 text-[#FFD700]" fill="#FFD700" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm md:text-base">
                Love ClarityAI? Give us a star on GitHub! ⭐
              </p>
              <p className="text-gray-400 text-xs hidden md:block">
                Help us grow and improve with your support
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold shadow-lg"
              asChild
            >
              <a
                href="https://github.com/Attafii/ClarityAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="w-4 h-4 mr-1" />
                Star on GitHub
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="h-8 w-8 rounded-full hover:bg-white/10"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
