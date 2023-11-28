import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabItem.module.scss'

export type TabItemProps = ComponentPropsWithoutRef<typeof RadixTabs.Trigger>

export const TabItem = forwardRef<ElementRef<typeof RadixTabs.Trigger>, TabItemProps>(
  ({ children, className, disabled, value }, ref) => {
    const triggerClassname = clsx(s.trigger, className)

    return (
      <RadixTabs.Trigger className={triggerClassname} disabled={disabled} ref={ref} value={value}>
        {children}
      </RadixTabs.Trigger>
    )
  }
)
