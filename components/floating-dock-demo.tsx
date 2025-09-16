import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrain,
    IconRocket,
    IconShield,
    IconSparkles,
    IconUsers,
    IconChartBar,
    IconMail,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "AI Solutions",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#solutions",
    },
    {
      title: "Products",
      icon: (
        <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#products",
    },
    {
      title: "Innovation",
      icon: (
        <IconSparkles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#innovation",
    },
    {
      title: "Clarity AI",
      icon: (
        <div className="h-full w-full flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
        </div>
      ),
      href: "#home",
    },
    {
      title: "Analytics",
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#analytics",
    },
    {
      title: "Security",
      icon: (
        <IconShield className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#security",
    },
    {
      title: "About",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}