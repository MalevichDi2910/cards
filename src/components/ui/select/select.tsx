import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosDown } from '@/assets/icons/arrowIosDown'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

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
    const classNames = {
      content: clsx(s.content),
      icon: s.icon,
      label: clsx(s.text, disabled && s.disabled),
      trigger: clsx(
        s.trigger,
        s[variant],
        s[`${variant}Paddings`],
        fullWidth && s.fullWidth,
        className
      ),
    }
    const typographyVariant = variant === 'default' ? 'body1' : 'body2'

    return (
      <RadixSelect.Root
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger aria-label={'select'} className={classNames.trigger} ref={ref}>
          <Typography className={s.text} variant={typographyVariant}>
            <RadixSelect.Value placeholder={placeholder} />
          </Typography>
          <RadixSelect.Icon className={s.icon}>
            <ArrowIosDown size={1} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={classNames.content} position={'popper'} ref={ref}>
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
