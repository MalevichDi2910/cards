import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixTabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type TabsProps = {
  children: ReactNode
  label?: string
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, className, label, ...restProps }, ref) => {
    const rootClassName = clsx(s.root, className)

    return (
      <RadixTabs.Root className={rootClassName} ref={ref} {...restProps}>
        {label && <Typography as={'label'} variant={'body2'} />}
        <RadixTabs.List loop>{children}</RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
