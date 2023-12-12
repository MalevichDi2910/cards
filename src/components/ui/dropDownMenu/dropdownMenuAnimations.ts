import { MotionProps } from 'framer-motion'

const menu = {
  exit: 'closed',
  initial: 'closed',
  variants: {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  },
} satisfies MotionProps

const item = {
  transition: { opacity: { duration: 0.15 } },
  variants: {
    closed: { opacity: 0, x: -12 },
    open: { opacity: 1, x: 0 },
  },
} satisfies MotionProps

export const dropdownAnimations = { item, menu }
