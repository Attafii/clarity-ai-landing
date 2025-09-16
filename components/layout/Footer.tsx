import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const socialLinks = siteConfig.socialLinks.map(social => ({
    ...social,
    icon: social.icon === "Github" ? Github : social.icon === "Twitter" ? Twitter : Linkedin
  }));

  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-base max-w-md leading-relaxed">
              {siteConfig.shortDescription}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="font-medium mb-6 text-foreground">Navigation</h3>
            <ul className="space-y-4">
              {siteConfig.navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-6 text-foreground">Legal</h3>
            <ul className="space-y-4">
              {siteConfig.legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-6 text-foreground">Stay Updated</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Get updates on new features and improvements.
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {siteConfig.company.foundedYear} {siteConfig.company.name}. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
                  aria-label={social.name}
                >
                  <IconComponent className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}