'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { siteConfig } from '@/lib/site';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function Hero() {
  return (
    <main className='overflow-hidden'>
      <section>
        <div className='relative pt-24 md:pt-36'>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring' as const,
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className='absolute inset-0 -z-20'
          >
            <img
              src='https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=3840&q=75'
              alt='background'
              className='absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-full object-cover'
              width='3276'
              height='4095'
            />
          </AnimatedGroup>
          <div
            aria-hidden
            className='absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]'
          />
          <div className='mx-auto max-w-7xl px-6'>
            <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0'>
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href='#link'
                  className='hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950'
                >
                  <span className='text-foreground text-sm'>
                    Supercharge Your Copilot Experience
                  </span>
                  <span className='dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700'></span>

                  <div className='bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500'>
                    <div className='flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0'>
                      <span className='flex size-6'>
                        <ArrowRight className='m-auto size-3' />
                      </span>
                      <span className='flex size-6'>
                        <ArrowRight className='m-auto size-3' />
                      </span>
                    </div>
                  </div>
                </Link>

                <h1 className='mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]'>
                  Elevate
                  <Image
                    alt='Clarity AI'
                    width={70}
                    height={70}
                    className='rounded-md inline-block mx-2'
                    src={'/flower.webp'}
                  />
                  every prompt into a breakthough.
                </h1>
                {/* // todo: investigate this, but for now keep both classes. */}
                <p className='mx-auto mt-8 max-w-2xl text-balance text-lg text-pretty text-muted-foreground'>
                  Improve your workflow with automatic prompt enhancement. Save
                  time and effort while elevating AI response quality through
                  intelligent prompt enhancement & planning that seamlessly
                  integrates with GitHub Copilot.
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className='mt-12 flex flex-col items-center justify-center gap-2 md:flex-row'
              >
                <div
                  key={1}
                  className='bg-foreground/10 rounded-lg border p-0.5'
                >
                  <Button
                    asChild
                    size='lg'
                    className='rounded-md px-5 text-base'
                  >
                    <Link href={siteConfig.urls.marketplace}>
                      <span className='text-nowrap'>Install for VS Code</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size='lg'
                  variant='ghost'
                  className='h-10.5 rounded-md px-5'
                >
                  <Link href={siteConfig.urls.docs}>
                    <span className='text-nowrap'>See How It Works</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className='relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20'>
              <div
                aria-hidden
                className='bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%'
              />
              <div className='inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-4xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1'>
                <img
                  className='bg-background aspect-15/8 relative hidden rounded-2xl dark:block w-full h-auto object-cover'
                  src='https://images.unsplash.com/photo-1551650975-87deedd944c3?w=2700&q=75'
                  alt='app screen'
                  width='2700'
                  height='1440'
                />
                <img
                  className='z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden w-full h-auto object-cover'
                  src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2700&q=75'
                  alt='app screen'
                  width='2700'
                  height='1440'
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
      
      <section className='bg-background pb-16 pt-16 md:pb-32'>
        <div className='group relative m-auto max-w-5xl px-6'>
          <div className='absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100'>
            <Link
              href='/'
              className='block text-sm duration-150 hover:opacity-75'
            >
              <span> Trusted by Developers</span>

              <ChevronRight className='ml-1 inline-block size-3' />
            </Link>
          </div>
          <div className='group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14'>
            <div className='flex'>
              <img
                className='mx-auto h-5 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/nvidia.svg'
                alt='Nvidia Logo'
                height='20'
                width='auto'
              />
            </div>

            <div className='flex'>
              <img
                className='mx-auto h-4 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/column.svg'
                alt='Column Logo'
                height='16'
                width='auto'
              />
            </div>
            <div className='flex'>
              <img
                className='mx-auto h-4 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/github.svg'
                alt='GitHub Logo'
                height='16'
                width='auto'
              />
            </div>
            <div className='flex'>
              <img
                className='mx-auto h-5 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/nike.svg'
                alt='Nike Logo'
                height='20'
                width='auto'
              />
            </div>
            <div className='flex'>
              <img
                className='mx-auto h-5 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/lemonsqueezy.svg'
                alt='Lemon Squeezy Logo'
                height='20'
                width='auto'
              />
            </div>
            <div className='flex'>
              <img
                className='mx-auto h-4 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/laravel.svg'
                alt='Laravel Logo'
                height='16'
                width='auto'
              />
            </div>
            <div className='flex'>
              <img
                className='mx-auto h-7 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/lilly.svg'
                alt='Lilly Logo'
                height='28'
                width='auto'
              />
            </div>

            <div className='flex'>
              <img
                className='mx-auto h-6 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/openai.svg'
                alt='OpenAI Logo'
                height='24'
                width='auto'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
