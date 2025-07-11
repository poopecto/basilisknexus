'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: 'button'
  href?: never
}

interface ButtonAsLink extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as: 'a'
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (allProps, ref) => {
    const { variant = 'primary', size = 'md', children, className = '', ...props } = allProps
    const baseClasses = "inline-flex items-center justify-center font-orbitron font-bold tracking-extra transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-backgroundBlack"
    
    const variantClasses = {
      primary: "btn-primary",
      secondary: "border border-secondaryMagenta bg-backgroundBlack text-secondaryMagenta hover:shadow-neon-magenta focus:shadow-neon-magenta",
      outline: "border border-primaryCyan/50 bg-transparent text-primaryCyan hover:bg-primaryCyan/10 hover:border-primaryCyan focus:border-primaryCyan"
    }
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-4 py-2 text-base rounded-md",
      lg: "px-6 py-3 text-lg rounded-lg"
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    if ('href' in props && props.href) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { href, as: _, ...linkProps } = props as ButtonAsLink
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(linkProps as any)}
        >
          {children}
        </motion.a>
      )
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: __, ...buttonProps } = props as ButtonAsButton
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(buttonProps as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button