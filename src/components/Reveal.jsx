import { motion, useReducedMotion } from 'motion/react'

/**
 * Scroll-triggered fade/rise. Replaces AOS.
 * When the OS asks for reduced motion this renders a plain, static element.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
}) {
  const reduced = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
