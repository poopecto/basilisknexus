'use client'

import { ExternalLink, Twitter, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const socialLinks = [
    {
      name: 'DEX',
      icon: ExternalLink,
      href: process.env.NEXT_PUBLIC_DEX_URL || '#',
      ariaLabel: 'Visit DEX'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
      ariaLabel: 'Visit Twitter'
    },
    {
      name: 'Telegram',
      icon: Send,
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL || '#',
      ariaLabel: 'Visit Telegram'
    }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-backgroundBlack/80 backdrop-blur-sm border-b border-primaryCyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#hero"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="Basilisk Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-primaryCyan font-orbitron text-lg tracking-wide group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(0,234,254,0.33)] transition-all duration-300">
              BASILISK
            </span>
          </motion.a>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-primaryCyan hover:text-secondaryMagenta transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.ariaLabel}
                >
                  <Icon size={20} className="stroke-primaryCyan hover:stroke-secondaryMagenta transition-colors" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}