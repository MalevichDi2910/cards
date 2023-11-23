import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

export type TabItemProps = ComponentPropsWithoutRef<typeof RadixTabs.Trigger>

export const TabItem = forwardRef<ElementRef<typeof RadixTabs.Trigger>, TabItemProps>(
  ({ children, disabled, value }, ref) => {
    return (
      <RadixTabs.Trigger disabled={disabled} ref={ref} value={value}>
        {children}
      </RadixTabs.Trigger>
    )
  }
)
