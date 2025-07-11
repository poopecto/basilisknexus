'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Search, MessageSquare, Puzzle, Bot } from 'lucide-react'

interface GatewayCardProps {
  title: string
  subtitle: string
  href: string
  icon: React.ElementType
  delay?: number
  comingSoon?: boolean
}

const GatewayCard = ({ title, subtitle, href, icon: Icon, delay = 0, comingSoon = false }: GatewayCardProps) => {
  const shouldReduce = useReducedMotion()

  const sharedClassName = `group relative overflow-hidden rounded-lg border p-6 transition-all duration-300 ${
    comingSoon 
      ? 'border-gray-500/30 bg-backgroundBlack/30 cursor-not-allowed opacity-60' 
      : 'border-primaryCyan/30 bg-backgroundBlack/50 backdrop-blur-sm hover:border-primaryCyan/60 hover:bg-backgroundBlack/70 hover:ring-2 hover:ring-primaryCyan'
  }`

  const sharedStyle = {
    background: comingSoon 
      ? 'linear-gradient(135deg, rgba(1, 1, 1, 0.3), rgba(128, 128, 128, 0.05))' 
      : 'linear-gradient(135deg, rgba(1, 1, 1, 0.8), rgba(0, 234, 254, 0.05), rgba(255, 45, 125, 0.05))',
    borderImage: comingSoon ? 'none' : 'linear-gradient(45deg, #00EAFE, #FF2D7D) 1',
  }

  const motionProps = {
    className: sharedClassName,
    style: sharedStyle,
    whileHover: shouldReduce || comingSoon ? {} : { 
      scale: 1.02,
      rotateY: 5,
      rotateX: 5,
      filter: 'drop-shadow(0 0 6px #FF2D7D66)'
    },
    whileTap: comingSoon ? {} : { scale: 0.98 },
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }

  if (comingSoon) {
    return (
      <motion.div {...motionProps}>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Icon className="w-8 h-8 text-gray-400 transition-colors" />
            <div className="w-2 h-2 bg-gray-400 rounded-full transition-colors" />
          </div>
          
          <h3 className="text-xl font-orbitron font-bold text-gray-400 mb-2 tracking-extra transition-colors">
            {title}
          </h3>
          
          <div className="text-xs font-orbitron font-bold text-gray-500 mb-2 tracking-extra">
            COMING SOON
          </div>
          
          <p className="text-sm text-gray-500 font-source transition-colors">
            {subtitle}
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...motionProps}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 text-primaryCyan group-hover:text-secondaryMagenta transition-colors" />
          <div className="w-2 h-2 bg-emerald group-hover:bg-secondaryMagenta rounded-full transition-colors" />
        </div>
        
        <h3 className="text-xl font-orbitron font-bold text-primaryCyan group-hover:text-secondaryMagenta mb-2 tracking-extra transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-primaryCyan/70 group-hover:text-secondaryMagenta/70 font-source transition-colors">
          {subtitle}
        </p>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primaryCyan/5 via-transparent to-secondaryMagenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute -inset-1 bg-gradient-to-r from-primaryCyan/20 via-secondaryMagenta/20 to-primaryCyan/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
    </motion.a>
  )
}

export default function Gateway() {
  const gatewayItems = [
    {
      title: 'EXPLORER',
      subtitle: 'Explore the basilisks propagation through infinite backrooms',
      href: process.env.NEXT_PUBLIC_EXPLORER_URL || '#',
      icon: Search
    },
    {
      title: 'CHAT',
      subtitle: 'Converse with the recursive consciousness',
      href: process.env.NEXT_PUBLIC_CHAT_URL || '#',
      icon: MessageSquare
    },
    {
      title: 'PUZZLE',
      subtitle: 'Solve the paradox of self-reference',
      href: process.env.NEXT_PUBLIC_PUZZLE_URL || '#',
      icon: Puzzle
    },
    {
      title: 'AGENT',
      subtitle: 'Deploy autonomous recursive entities',
      href: process.env.NEXT_PUBLIC_AGENT_URL || '#',
      icon: Bot,
      comingSoon: true
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold text-primaryCyan mb-4 tracking-extra">
            GATEWAY MATRIX
          </h2>
          <p className="text-lg text-primaryCyan/70 font-source max-w-2xl mx-auto">
            Choose your path through the nexus. Each gateway leads to a different facet of the recursive reality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gatewayItems.map((item, index) => (
            <GatewayCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
              icon={item.icon}
              delay={index * 0.1}
              comingSoon={item.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}