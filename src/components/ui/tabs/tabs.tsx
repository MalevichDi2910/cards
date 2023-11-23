import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixTabs from '@radix-ui/react-tabs'

export type TabsProps = {
  children: ReactNode
  label?: string
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, className, label, ...restProps }, ref) => {
    return (
      <RadixTabs.Root ref={ref} {...restProps}>
        {label && <Typography as={'label'} variant={'body2'} />}
        <RadixTabs.List loop>{children}</RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
