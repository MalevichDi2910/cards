import { ComponentPropsWithoutRef } from 'react'

import Check from '@/assets/icons/checkMark'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkBox.module.scss'

export type CheckBoxProps = {
  id?: string
  label?: string
  onValueChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = ({
  checked,
  disabled,
  id,
  label,
  onValueChange,
  required,
}: CheckBoxProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.MainBox}>
        <CheckboxRadix.Root
          checked={checked}
          className={disabled ? clsx(s.CheckboxRoot) : clsx(s.CheckboxRoot, s.CheckboxRootEffect)}
          disabled={disabled}
          id={id}
          onCheckedChange={onValueChange}
          required={required}
        >
          <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
            <Check disabled={disabled} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <Typography as={'label'} className={s.Label} htmlFor={id} variant={'body2'}>
          {label}
        </Typography>
      </div>
    </div>
  )
}
