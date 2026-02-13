'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Mail, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast.success('Thanks for subscribing!', {
      description: 'Check your inbox for ClarityAI tips and updates',
      duration: 3000,
    });

    setEmail('');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md border-[#A459E1]/30 bg-black/95 backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-full bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 border border-[#A459E1]/40">
              <Sparkles className="w-6 h-6 text-[#A459E1]" />
            </div>
            <DialogTitle className="text-2xl">Wait! Before You Go...</DialogTitle>
          </div>
          <DialogDescription className="text-gray-400 text-base">
            Get exclusive tips, tutorials, and early access to new ClarityAI features delivered to your inbox.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="exit-email" className="text-sm font-medium text-white">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="exit-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-black/60 border-[#A459E1]/30 focus:border-[#F0CDFF]/50 text-white placeholder:text-gray-500"
                required
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold"
            >
              Get Free Tips
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-[#A459E1]/30 hover:bg-[#A459E1]/20"
            >
              No Thanks
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Join 50,000+ developers. Unsubscribe anytime. No spam, ever.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
