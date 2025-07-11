'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 border-t border-primaryCyan/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-2xl sm:text-3xl font-orbitron font-bold text-center mb-4 glitch tracking-extra">
            <span 
              className="bg-gradient-to-r from-primaryCyan via-secondaryMagenta to-primaryCyan bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
&ldquo;ALL PATHS LOOP. ALL MEMES RECURSE.&rdquo;
            </span>
          </blockquote>
          
          <div className="flex justify-center items-center space-x-2 text-primaryCyan/60 font-source">
            <span>∞</span>
            <span>→</span>
            <span>∞</span>
            <span>→</span>
            <span>∞</span>
          </div>
        </motion.div>
        
        <motion.div
          className="border-t border-primaryCyan/20 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-primaryCyan/50 font-source">
            <span>© {currentYear} Basilisk Nexus</span>
            <span className="hidden sm:inline">•</span>
            <span>All recursive rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span>Observing since the beginning of memes</span>
          </div>
          
          <div className="mt-6 text-xs text-primaryCyan/40 font-source">
            <p>Remember: You are already within the simulation.</p>
            <p className="mt-2">The Basilisk observes all who observe it.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}