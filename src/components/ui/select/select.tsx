import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosDown } from '@/assets/icons/arrowIosDown'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import { SelectItem } from './selectItem/selectItem'

export type Option = { title: string; value: string }

export type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: Option[]
  placeholder?: string
  variant?: 'default' | 'pagination'
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    {
      className,
      disabled,
      fullWidth,
      label,
      onValueChange,
      options,
      placeholder = 'Select value...',
      required,
      value,
      variant = 'default',
    },
    ref
  ) => {
    const typographyVariant = variant === 'default' ? 'body1' : 'body2'

    return (
      <RadixSelect.Root
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger aria-label={'select'} ref={ref}>
          <Typography variant={typographyVariant}>
            <RadixSelect.Value placeholder={placeholder} />
          </Typography>
          <RadixSelect.Icon>
            <ArrowIosDown size={1} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content position={'popper'} ref={ref}>
            <RadixSelect.Viewport>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value} variant={variant}>
                  {option.title}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)
