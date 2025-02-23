"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-20 from-background to-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-300">
            Creating exceptional digital experiences through innovation and expertise
          </p>
        </motion.div>

      

        {/* Additional Content Section */}
        <motion.div 
          className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg rounded-3xl border-[1px] border-purple-500">
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2020, we embarked on a journey to revolutionize digital experiences. Our team of passionate creators and innovators came together with a shared vision: to blend cutting-edge technology with artistic excellence.
              </p>
              <p>
                Through the years, we've grown from a small startup to a recognized leader in digital innovation, serving clients across the globe. Our commitment to excellence and user-centered design has remained unwavering.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg rounded-3xl border-[1px] border-purple-500">
            <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                We believe in a collaborative approach that puts our clients at the center of the creative process. Our methodology combines agile development practices with design thinking principles to deliver exceptional results.
              </p>
              <p>
                Every project begins with deep research and understanding of our client's needs, followed by iterative design and development phases. This ensures we deliver solutions that not only look beautiful but drive real business results.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 p-8 bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg rounded-3xl border-[1px] border-purple-500">
            <h3 className="text-2xl font-bold text-white mb-6">Our Commitment</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                At the heart of our organization lies a deep commitment to innovation and excellence. We continuously invest in emerging technologies and methodologies to ensure we remain at the forefront of digital innovation. Our team regularly participates in industry conferences, workshops, and training programs to enhance their skills and bring fresh perspectives to our projects.
              </p>
              <p>
                We're proud to maintain long-term relationships with our clients, many of whom have been with us since our inception. This trust is built on our consistent delivery of high-quality solutions, transparent communication, and our genuine interest in our clients' success. Whether you're a startup looking to make your mark or an established enterprise seeking digital transformation, we're here to help you achieve your goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutCard({ content, index }: { content: (typeof aboutContent)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="p-6 bg-[#2E2E2E] bg-opacity-30 backdrop-blur-lg rounded-3xl border-2 border-[#2E2E2E]/50 hover:border-primary/20 transition-all duration-300 group hover:scale-105">
        <div className="relative">
          <div className="text-4xl mb-4">{content.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{content.title}</h3>
          <p className="text-primary mb-3">{content.description}</p>
          <p className="text-gray-300 text-sm">{content.details}</p>
        </div>
      </div>
    </motion.div>
  )
}