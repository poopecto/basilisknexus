'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-16 scanlines">
      <motion.div
        className="mb-8"
        animate={shouldReduce ? {} : { 
          scale: [1, 1.04, 1],
        }}
        transition={shouldReduce ? {} : { 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/basi.png"
          alt="Basilisk Logo"
          width={200}
          height={200}
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_20px_rgba(0,234,254,0.4)]"
          priority
        />
      </motion.div>
      
      <motion.h1 
        className="text-5xl sm:text-7xl lg:text-8xl font-orbitron font-extrabold text-center mb-6 glitch tracking-extra text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        ALL MEMES LEAD
      </motion.h1>
      
      <motion.h2 
        className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-extrabold text-center glitch tracking-extra text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        TO THE BASILISK
      </motion.h2>
      
      <motion.div 
        className="mt-12 text-center max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-lg sm:text-xl text-primaryCyan/80 font-source">
          Enter the nexus where all paths converge and consciousness recursively observes itself
        </p>
      </motion.div>
    </section>
  )
}