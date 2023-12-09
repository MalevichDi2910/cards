import { MotionProps } from 'framer-motion'

const menu = {
  initial: 'closed',
  exit: 'closed',
  variants: {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  },
} satisfies MotionProps

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.15 } },
} satisfies MotionProps

export const dropdownAnimations = { menu, item }
