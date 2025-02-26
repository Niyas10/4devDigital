"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Menu, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="flex items-center justify-between px-4 md:px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex align-middle items-center space-x-2">
          <Bot className="w-10 h-10 text-purple-500" />
          <span className="text-white font-medium text-xl">4DEVDIGITAL</span>
        </Link>

        <div className="hidden lg:flex items-center text-[14px] space-x-8">
          <NavLink href="#custom-nav-one">Why Choose Us</NavLink>
          <NavLink href="#how-it-works">Our Work</NavLink>
          <NavLink href="#examples">About Us</NavLink>
          <NavLink href="#pricing">Contact Us</NavLink>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed top-0 right-0 w-64 h-full backdrop-blur-lg p-6 shadow-lg z-50"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-white text-lg font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-4">
            <NavLink href="#custom-nav-one" onClick={() => setIsOpen(false)}>Why Choose Us</NavLink>
            <NavLink href="#how-it-works" onClick={() => setIsOpen(false)}>Our Work</NavLink>
            <NavLink href="#examples" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink href="#pricing" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          </nav>
        </motion.div>
      )}
    </>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={() => {
        if (onClick) onClick();
      }}
      className="text-gray-300 hover:text-white transition-colors relative group text-[14px]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  );
}
