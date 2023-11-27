import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

type SelectItemProps = {
  className?: string
  variant?: 'default' | 'pagination'
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ children, className, variant = 'default', ...restProps }, ref) => {
    const typographyVariant = variant === 'default' ? 'body1' : 'body2'

    return (
      <RadixSelect.Item ref={ref} {...restProps}>
        <RadixSelect.ItemText>
          <Typography variant={typographyVariant}>{children}</Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
