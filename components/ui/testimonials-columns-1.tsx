"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-sm shadow-lg shadow-purple-500/10 max-w-xs w-full hover:border-purple-400/30 transition-all duration-300" key={i}>
                  <div className="text-gray-200 text-sm leading-relaxed mb-4">{text}</div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="h-10 w-10 rounded-full border-2 border-purple-500/30 overflow-hidden bg-purple-500/10 flex items-center justify-center">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-xs font-bold text-purple-300">${name.split(' ').map(n => n[0]).join('')}</span>`;
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-white tracking-tight leading-5 text-sm">{name}</div>
                      <div className="leading-5 text-purple-300/80 tracking-tight text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Clarity AI has completely transformed my development workflow. The prompt enhancement feature saves me hours every day.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Senior Developer at Google",
  },
  {
    text: "The AI-powered code suggestions are incredibly accurate. It's like having a senior developer pair programming with me 24/7.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Marcus Rodriguez",
    role: "Tech Lead at Microsoft",
  },
  {
    text: "Integration with GitHub Copilot is seamless. Our team's productivity has increased by 40% since using Clarity AI.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Watson",
    role: "Engineering Manager at Vercel",
  },
  {
    text: "The intelligent prompt planning feature helps me break down complex problems into manageable tasks effortlessly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "Full Stack Developer at OpenAI",
  },
  {
    text: "Best AI coding assistant I've ever used. The context awareness and code quality suggestions are outstanding.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Principal Engineer at GitHub",
  },
  {
    text: "Clarity AI understands my coding style and provides personalized suggestions that actually make sense.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Alex Johnson",
    role: "Software Architect at Notion",
  },
  {
    text: "The prompt enhancement feature has improved my AI interactions dramatically. Every response is more accurate now.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Green",
    role: "DevOps Engineer at Linear",
  },
  {
    text: "Amazing tool for rapid prototyping. It helps me translate ideas into working code faster than ever before.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    name: "Michael Chang",
    role: "Product Engineer at Supabase",
  },
  {
    text: "The AI suggestions are contextually aware and help me write cleaner, more maintainable code consistently.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    name: "Jennifer Park",
    role: "Senior Developer at Discord",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-purple-950/10 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      
      <div className="container z-10 mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm py-2 px-4 rounded-full text-sm text-purple-300 font-medium">
              ✨ Testimonials
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            What developers say
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
            Join thousands of developers who have transformed their workflow with our AI-powered tools.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </motion.div>
      </div>
    </section>
  );
};