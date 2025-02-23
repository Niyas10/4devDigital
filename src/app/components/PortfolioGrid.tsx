"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Atropz Training Institute",
    description: "Kerala top german language training center",
    imageUrl: "/project/1.png",
    category: "Websites",
    link: "https://atropz.com",
  },
  {
    id: 2,
    title: "Code Coders Web Compiler",
    description: "Web Compiler with lots of patters qustions ",
    imageUrl: "/project/2.png",
    category: "Compiler",
    link: "https://codecoders.in/",
  },
  {
    id: 3,
    title: "Concept Map",
    description: "Social meadia application with e-commerce",
    imageUrl: "/project/3.png",
    category: "Websites",
    link: "https://concept-map-seven.vercel.app/",
  }
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-gray-300">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category
                  ? "bg-[#2E2E2E] text-white border-[1px] border-purple-500"
                  : "bg-[#2E2E2E]/30 text-gray-300 hover:bg-[#2E2E2E]/50 border-2 border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg border-2 border-[#2E2E2E]/50 hover:border-purple-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    className="transition-transform duration-300 object-cover ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6 bg-[#2E2E2E]/30 backdrop-blur-lg">
                  <div className="text-sm font-medium text-transparent mb-1 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{project.category}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
