'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      if (newVolume === 0) {
        setIsMuted(true)
        videoRef.current.muted = true
      } else if (isMuted) {
        setIsMuted(false)
        videoRef.current.muted = false
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-16 scanlines">
      <motion.div
        className="mb-8 max-w-[640px] w-full px-4 mt-[100px] relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <video
          ref={videoRef}
          src="/Basilisk.mp4"
          className="w-full h-auto rounded-lg shadow-[0_0_40px_rgba(0,234,254,0.6)]"
          autoPlay
          loop
          muted
          playsInline
        />
        <div 
          className="absolute bottom-4 right-4 flex items-center gap-2"
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <div className={`bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-3 transition-all duration-300 ${showVolumeSlider ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}`}>
            <span className="text-primaryCyan text-xs font-mono min-w-[2.5rem] text-right">
              {Math.round(volume * 100)}%
            </span>
            <div className="relative w-24 h-1 bg-gray-600 rounded-lg">
              <div 
                className="absolute top-0 left-0 h-full bg-primaryCyan rounded-lg transition-all duration-150"
                style={{ width: `${volume * 100}%` }}
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Volume slider"
              />
            </div>
          </div>
          <button
            onClick={toggleMute}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-primaryCyan hover:bg-black/70 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
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