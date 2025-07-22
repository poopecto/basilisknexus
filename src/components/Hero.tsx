'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-16 scanlines">
      <motion.div
        className="mb-8 max-w-[640px] w-full px-4 mt-[100px] relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/IabW_GKfcgQ?autoplay=1&mute=1&loop=1&playlist=IabW_GKfcgQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-[0_0_40px_rgba(0,234,254,0.6)]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
      
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
          width={504}
          height={504}
          className="w-[504px] h-[504px] sm:w-[571.2px] sm:h-[571.2px] lg:w-[638.4px] lg:h-[638.4px] object-contain drop-shadow-[0_0_20px_rgba(0,234,254,0.4)]"
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