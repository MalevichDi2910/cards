import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardPropsType = {
  children?: ReactNode
  className?: string
  variant: 'dark' | 'light'
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, variant, ...rest }: CardPropsType) => {
  const classNames = clsx(s[variant], className)

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  )
}
