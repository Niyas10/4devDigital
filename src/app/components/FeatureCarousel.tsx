"use client"

import { motion } from "framer-motion";
import { Search, ShoppingCart, Layout, ShieldCheck, FileText, Rocket } from "lucide-react";

const features = [
  {
    title: "Search Engine Optimization",
    description: "Clean aesthetics that put your content in the spotlight.",
    icon: <Search size={40} />, 
  },
  {
    title: "E-commerce Solutions",
    description: "Flawless experiences across all devices and screen sizes.",
    icon: <ShoppingCart size={40} />, 
  },
  {
    title: "Web Design & Development",
    description: "Lightning-quick load times for smooth user interactions.",
    icon: <Layout size={40} />, 
  },
  {
    title: "Website Maintenance Support",
    description: "Inclusive design practices for all users.",
    icon: <ShieldCheck size={40} />, 
  },
  {
    title: "Content Management Systems",
    description: "Built to help your site rank higher in search results.",
    icon: <FileText size={40} />, 
  },
  {
    title: "Latest Technology",
    description: "Utilizing the newest tools and frameworks for top performance.",
    icon: <Rocket size={40} />, 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

export default function FeatureGrid() {
  return (
    <div className="py-20 text-white from-background to-secondary/20  custom-nav-one">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Why Choose Us
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg text-white rounded-3xl shadow-lg transition-all duration-300 ease-in-out border-[1px] border-purple-500"
            >
              <div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}