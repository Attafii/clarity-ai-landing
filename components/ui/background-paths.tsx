"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BlurText } from "@/components/ui/animated-blur-text";
import { MoveRight } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(147,51,234,${0.1 + i * 0.02})`, // Purple color
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-purple-600 dark:text-purple-400"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function PurplePathsHero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const aiTitles = ["intelligent", "fast", "innovative", "adaptive", "reliable"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleNumber((prev) => (prev + 1) % aiTitles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Paths */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto flex flex-col items-center gap-12"
                >
                    {/* Badge */}
                    <Button variant="secondary" size="sm" className="gap-4 bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20">
                        Supercharge Your Copilot Experience <MoveRight className="w-4 h-4" />
                    </Button>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter font-regular">
                        <span className="text-white">Elevate</span>
                        <Image
                            alt='Clarity AI'
                            width={70}
                            height={70}
                            className='rounded-md inline-block mx-2'
                            src={'/flower.webp'}
                        />
                        <span className="text-white">every prompt into a</span>
                        <span className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-1">
                            &nbsp;
                            {aiTitles.map((title, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute font-semibold text-purple-400"
                                    initial={{ opacity: 0, y: "-100" }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                    animate={
                                        titleNumber === index
                                            ? { y: 0, opacity: 1 }
                                            : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                                    }
                                >
                                    {title}
                                </motion.span>
                            ))}
                        </span>
                        <span className="text-white">breakthrough.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-2xl text-center">
                        Improve your workflow with automatic prompt enhancement. Save time and effort while elevating AI response quality through intelligent prompt enhancement & planning that seamlessly integrates with GitHub Copilot.
                    </p>

                    {/* CTA Buttons with HoverBorderGradient */}
                    <div className="flex flex-row gap-6 flex-wrap justify-center items-center">
                        {/* Primary CTA Button - Black with Gradient */}
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-gradient-to-r from-black to-gray-900 text-white px-8 py-3 text-base font-semibold hover:from-gray-900 hover:to-black transition-all duration-300"
                            innerBackground="bg-gradient-to-r from-black to-gray-900"
                            duration={2}
                        >
                            <span className="flex items-center gap-3">
                                Install for VS Code
                                <MoveRight className="w-4 h-4" />
                            </span>
                        </HoverBorderGradient>

                        {/* Secondary CTA Button - White Background */}
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-all duration-300"
                            innerBackground="bg-white"
                            duration={2.5}
                            clockwise={false}
                        >
                            <span className="flex items-center gap-3">
                                See How It Works
                                <MoveRight className="w-4 h-4" />
                            </span>
                        </HoverBorderGradient>
                    </div>

                    {/* Animated Blur Text */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="mt-8"
                    >
                        <BlurText
                            text="✨ Join 10,000+ developers already using our AI tools"
                            delay={120}
                            animateBy="words"
                            direction="bottom"
                            className="text-sm text-purple-200/80 font-light tracking-wide justify-center"
                            threshold={0.3}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}