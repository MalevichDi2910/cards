import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '../select.module.scss'

type SelectItemProps = {
  className?: string
  variant?: 'default' | 'pagination'
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ children, className, variant = 'default', ...restProps }, ref) => {
    const typographyVariant = variant === 'default' ? 'body1' : 'body2'

    const classNames = {
      selectItem: clsx(s[variant], s[`${variant}Paddings`], s.selectItem, className),
      text: s.text,
    }

    return (
      <RadixSelect.Item className={classNames.selectItem} ref={ref} {...restProps}>
        <RadixSelect.ItemText>
          <Typography className={classNames.text} variant={typographyVariant}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
