'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Users, Download, Star } from 'lucide-react';

interface Activity {
  id: string;
  type: 'signup' | 'download' | 'star';
  message: string;
  timestamp: number;
}

const ACTIVITY_TEMPLATES = [
  { type: 'signup' as const, messages: ['Someone in San Francisco just installed ClarityAI', 'A developer in London started using ClarityAI', 'New user from Tokyo joined ClarityAI'] },
  { type: 'download' as const, messages: ['5 new downloads in the last hour', '10+ developers downloaded ClarityAI today', 'ClarityAI reached 50K downloads!'] },
  { type: 'star' as const, messages: ['Someone just starred ClarityAI on GitHub', '3 new GitHub stars in the past hour', 'ClarityAI trending on GitHub!'] },
];

export function SocialProofNotifications() {
  const [activities] = useState<Activity[]>([]);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomTemplate = ACTIVITY_TEMPLATES[Math.floor(Math.random() * ACTIVITY_TEMPLATES.length)];
      const randomMessage = randomTemplate.messages[Math.floor(Math.random() * randomTemplate.messages.length)];

      const getIcon = () => {
        switch (randomTemplate.type) {
          case 'signup':
            return <Users className="w-4 h-4 text-[#A459E1]" />;
          case 'download':
            return <Download className="w-4 h-4 text-[#F0CDFF]" />;
          case 'star':
            return <Star className="w-4 h-4 text-[#FFD700]" />;
        }
      };

      toast(randomMessage, {
        icon: getIcon(),
        duration: 4000,
        className: 'bg-black/95 border-[#A459E1]/30 text-white',
      });
    };

    const initialDelay = setTimeout(() => {
      showRandomNotification();

      const interval = setInterval(() => {
        showRandomNotification();
      }, 45000);

      return () => clearInterval(interval);
    }, 10000);

    return () => clearTimeout(initialDelay);
  }, []);

  return null;
}
