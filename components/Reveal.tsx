"use client"

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const r = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: r ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
