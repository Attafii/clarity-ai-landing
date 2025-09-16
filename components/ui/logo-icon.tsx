import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export const LogoIcon = ({ className, size = 32 }: LogoIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 212 202'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('shrink-0', className)}
        style={{ width: size, height: size }}
    >

      <mask
        id='mask0_147_26'

        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='212'
        height='202'
      >
        <path d='M211.113 0H0V201.604H211.113V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_147_26)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M113.097 0H98.0168V83.4191L36.2482 24.4328L25.5854 34.6154L87.354 93.6016H0V108.002H87.3539L25.5854 166.988L36.2482 177.17L98.0168 118.184V201.604H113.097V118.184L174.865 177.17L185.527 166.988L123.759 108.002H211.113V93.6016H123.759L185.527 34.6153L174.865 24.4328L113.097 83.419V0Z'
          fill='url(#paint0_linear_147_26)'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_147_26'
          x1='37.9733'
          y1='-13.118'
          x2='162.878'
          y2='235.485'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F0CDFF' />
          <stop offset='1' stopColor='#A459E1' />
        </linearGradient>
      </defs>
    </svg>
  );
};
