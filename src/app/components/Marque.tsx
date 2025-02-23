"use client"

import { motion } from "framer-motion";
import { Code, Globe, Brush, ShoppingCart, Layers, Search, Database, Server, Terminal, Cpu } from "lucide-react";

export default function Marquee() {
  return (
    <>
      {/* First Marquee - Text */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 from-background via-transparent to-background z-10" />
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
        >
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center mx-4">
              <span
                className=" text-[30px] md:text-[40px] lg:text-[60px] font-bold text-transparent px-4 uppercase"
                style={{ WebkitTextStroke: "1px rgb(156 163 175)" }}
              >
                Web Design &nbsp; Development &nbsp; SEO &nbsp; Branding &nbsp; WordPress &nbsp; E-commerce
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Marquee - Icons */}
      <div className="relative w-full overflow-hidden mt-6">
        <div className="absolute inset-0 from-background via-transparent to-background z-10" />
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
        >
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center space-x-12 mx-4">
              <Code className="text-gray-400 w-20 h-20" />
              <Globe className="text-gray-400  w-20 h-20" />
              <Search className="text-gray-400  w-20 h-20" />
              <Brush className="text-gray-400  w-20 h-20" />
              <Layers className="text-gray-400  w-20 h-20" />
              <ShoppingCart className="text-gray-400  w-20 h-20" />
              <Database className="text-gray-400  w-20 h-20" />
              <Server className="text-gray-400  w-20 h-20" />
              <Terminal className="text-gray-400  w-20 h-20" />
              
              <Cpu className="text-gray-400  w-20 h-20" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}