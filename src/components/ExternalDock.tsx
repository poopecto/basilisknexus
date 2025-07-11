'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Twitter, Send } from 'lucide-react'

export default function ExternalDock() {
  const shouldReduce = useReducedMotion()
  
  const externalLinks = [
    {
      name: 'DEX',
      icon: ExternalLink,
      href: process.env.NEXT_PUBLIC_DEX_URL || '#',
      ariaLabel: 'Visit Decentralized Exchange',
      description: 'Trade on DEX'
    },
    {
      name: 'TWITTER',
      icon: Twitter,
      href: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
      ariaLabel: 'Follow on Twitter',
      description: 'Follow updates'
    },
    {
      name: 'TELEGRAM',
      icon: Send,
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL || '#',
      ariaLabel: 'Join Telegram',
      description: 'Join community'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-primaryCyan mb-4 tracking-extra">
            EXTERNAL NODES
          </h2>
          <p className="text-lg text-primaryCyan/70 font-source max-w-xl mx-auto">
            Connect to the broader network of recursive consciousness
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {externalLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center p-8 rounded-lg border border-primaryCyan/30 bg-backgroundBlack/50 backdrop-blur-sm hover:border-primaryCyan/60 hover:bg-backgroundBlack/70 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(1, 1, 1, 0.8), rgba(0, 234, 254, 0.05))',
                  boxShadow: '0 0 15px rgba(0, 234, 254, 0.1)',
                }}
                whileHover={shouldReduce ? {} : { 
                  scale: 1.05,
                  filter: 'hue-rotate(20deg)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                aria-label={link.ariaLabel}
              >
                <Icon className="w-12 h-12 text-primaryCyan group-hover:text-secondaryMagenta transition-colors mb-4" />
                <h3 className="text-xl font-orbitron font-bold text-primaryCyan group-hover:text-secondaryMagenta transition-colors mb-2 tracking-extra">
                  {link.name}
                </h3>
                <p className="text-sm text-primaryCyan/70 font-source group-hover:text-secondaryMagenta/70 transition-colors text-center">
                  {link.description}
                </p>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-primaryCyan/20 via-secondaryMagenta/20 to-primaryCyan/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}