"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

// Projects data with proper typing
const projects: Project[] = [
  {
    id: 1,
    title: "Atropz Training Institute",
    description: "Kerala top german language training center. We provide comprehensive German language courses with experienced instructors, cultural immersion programs, and exam preparation services.",
    imageUrl: "/project/1.png",
    category: "Websites",
    link: "https://atropz.com",
  },
  {
    id: 2,
    title: "Code Coders Web Compiler",
    description: "Web Compiler with lots of patterns questions. An interactive platform for developers to practice coding patterns, test solutions in real-time, and enhance their programming skills with a wide range of challenges.",
    imageUrl: "/project/2.png",
    category: "Compiler",
    link: "https://codecoders.in/",
  },
  {
    id: 3,
    title: "Concept Map",
    description: "Social media application with e-commerce capabilities. Users can connect with friends, share content, and shop from integrated stores all in one platform. Features include personalized feeds, messaging, and secure checkout.",
    imageUrl: "/project/3.png",
    category: "Websites",
    link: "https://concept-map-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Visting Card",
    description: "Kerala top german language training center. We provide comprehensive German language courses with experienced instructors, cultural immersion programs, and exam preparation services.",
    imageUrl: "/project/card.jpg",
    category: "Visting Card",
    link: "",
  },
  {
    id: 5,
    title: "Seo-Friendly Applications",
    description: "Kerala top german language training center. We provide comprehensive German language courses with experienced instructors, cultural immersion programs, and exam preparation services.",
    imageUrl: "/project/seo.jpeg",
    category: "Seo",
    link: "",
  }
  
]

// Extract unique categories with proper typing
const categories: string[] = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((project) => project.category === filter)

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
      // You may need to add padding to prevent layout shift when scrollbar disappears
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300) // Clear after animation completes
  }

  return (
    <section className="py-[20px] md:pt-[50px] lg:py-[80px] from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-4xl">Our Work</h2>
          <p className="sm:text-[16px] md:text-[18px] text-gray-300">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

        {/* Modified category buttons container to allow horizontal scrolling */}
        <div className="flex overflow-x-auto pb-2 mb-8 hide-scrollbar justify-center">
          <div className="flex space-x-2 min-w-min">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-[14px] md:text-[16px] font-medium transition-colors duration-300 whitespace-nowrap ${
                  filter === category
                    ? "bg-[#2E2E2E] text-white border-[1px] border-purple-500"
                    : "bg-[#2E2E2E]/30 text-gray-300 hover:bg-[#2E2E2E]/50 border-2 border-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
                className="group rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg border-2 border-[#2E2E2E]/50 hover:border-purple-500 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    className="transition-transform duration-300 object-cover ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-white text-center px-4">Click to see details</p>
                  </div>
                </div>
                <div className="p-6 bg-[#2E2E2E]/30 backdrop-blur-lg">
                  <div className="text-sm font-medium text-transparent mb-1 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{project.category}</div>
                  <h3 className="text-xl font-semibold text-white ">{project.title}</h3>
          
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm cursor-pointer"
                onClick={closeModal}
              />
              
              <motion.div 
                className="relative bg-[#1E1E1E] rounded-2xl overflow-hidden max-w-lg w-full shadow-xl border-2 border-purple-500/50 z-10"
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="relative h-52">
                  <Image
                    src={selectedProject.imageUrl || "/placeholder.svg"}
                    alt={selectedProject.title}
                    layout="fill"
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 p-2">
                    <button 
                      onClick={closeModal}
                      className="bg-black/50 hover:bg-black/80 rounded-full p-2 text-white transition-colors duration-300 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-sm font-medium text-purple-400">{selectedProject.category}</div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                    <p className="text-gray-300">{selectedProject.description}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 cursor-pointer"
                      >
                        Visit Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add a style tag to hide scrollbar but maintain functionality */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  )
}