'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, X } from 'lucide-react';
import { toast } from 'sonner';
import useScrollReveal from '@/hooks/use-scroll-reveal';

export function EmailCaptureWidget() {
  const [ref, isVisible] = useScrollReveal(0.3);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Successfully subscribed!', {
        description: 'You\'ll receive exclusive ClarityAI updates and tips',
        duration: 3000,
      });

      setEmail('');
      setIsDismissed(true);
    } catch (error) {
      toast.error('Subscription failed', {
        description: 'Please try again later',
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="relative border-[#A459E1]/30 bg-gradient-to-br from-[#A459E1]/20 to-[#F0CDFF]/20 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A459E1]/10 to-[#F0CDFF]/10 blur-3xl" />
          
          <CardContent className="relative p-8 md:p-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-white/10"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-gray-400" />
            </Button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[#F0CDFF]/10 to-[#A459E1]/10 border border-[#A459E1]/40">
                    <Mail className="w-6 h-6 text-[#A459E1]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Stay Updated
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  Get exclusive tips, tutorials, and early access to new ClarityAI features. Join 50,000+ developers.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>

              <div className="flex-1 w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-black/60 border-[#A459E1]/30 focus:border-[#F0CDFF]/50 text-white placeholder:text-gray-500 text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-[#A459E1] to-[#F0CDFF] hover:from-[#9147d4] hover:to-[#e8b7ff] text-black font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe for Free'}
                  </Button>

                  <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      ✓ Free forever
                    </span>
                    <span className="flex items-center gap-1">
                      ✓ Weekly tips
                    </span>
                    <span className="flex items-center gap-1">
                      ✓ Early access
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
