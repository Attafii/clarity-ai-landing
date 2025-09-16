import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';
import { LogoIcon } from './logo-icon';

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconSize?: number;
}

export const Logo = ({ className, showText = true, iconSize = 32 }: LogoProps) => {
  return (
    <div className={cn('flex items-center space-x-3', className)}>
      <LogoIcon size={iconSize} />
      {showText && (
        <span className="text-xl font-semibold text-foreground">
          {siteConfig.name}
        </span>
      )}
    </div>
  );
};