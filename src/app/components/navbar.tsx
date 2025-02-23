"use client";

import { Button } from "@/components/ui/button";
import { Bot, Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">4DEVDIGITAL</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="custom-nav-one">Why Choose Us</NavLink>
        <NavLink href="#how-it-works">Our Work</NavLink>
        <NavLink href="#examples">About Us</NavLink>
        <NavLink href="#pricing">Contact Us</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="text-white bg-purple-500/20 border-purple-500 hover:bg-purple-500/20"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Book a Strategy Call
          </Button>
        </motion.div>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80; // Adjust offset to avoid header overlap
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  );
}
