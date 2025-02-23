"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import { FloatingPaper } from "./floating-paper";
import { RoboAnimation } from "./robo-animation";

export default function Hero() {
  return (
    <div className="relative  h-[500px] md:h-[600px] lg:h-[700px] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[40px] md:text-[40px] lg:text-[60px] font-bold  text-white mb-6  leading-[40px]   lg:leading-[60px]">
            Your vision, our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}creative expertise
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400  mb-8 max-w-2xl mx-auto sm:text-[16px] md:text-[18px]"
          >
We craft innovative websites and digital solutions.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-white text-[14px] bg-purple-500/20 border-purple-500 hover:bg-purple-500/20"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute right-[40px]  md:right-[100px] lg:w-96 lg:h-96">
        <RoboAnimation />
      </div>
    </div>
  );
}
