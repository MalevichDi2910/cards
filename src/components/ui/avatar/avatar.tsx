import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = {
  size?: 'large' | 'small'
  src?: string
  userName: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size = 'small', src, userName, ...restProps }, ref) => {
    const classNames = {
      fallback: s.fallback,
      image: s.image,
      root: clsx(s.root, s[size], className),
    }

    const fallbackTitle = userName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()

    return (
      <AvatarPrimitive.Root className={classNames.root} ref={ref} {...restProps}>
        <AvatarPrimitive.Image alt={'avatar'} className={classNames.image} src={src} />
        <AvatarPrimitive.Fallback className={classNames.fallback}>
          <Typography variant={'body1'}>{fallbackTitle}</Typography>
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    )
  }
)
