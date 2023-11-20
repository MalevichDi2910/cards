import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import Check from '@/assets/icons/checkMark'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkBoxEX.module.scss'

type CheckBoxPropsType<T extends ElementType = 'form'> = {
  as?: T
  children?: ReactNode
  className?: string
  disabled?: boolean
  onCheckedHandler?: (checked: boolean) => void
  text?: string
} & ComponentPropsWithoutRef<T>

export const Checkbox = ({
  className,
  defaultChecked,
  disabled,
  onCheckedHandler,
  text,
}: CheckBoxPropsType) => {
  const classNames = text
    ? clsx(s.MainBox, className, s.rightPaddingChange)
    : clsx(s.MainBox, className)

  return (
    <div className={s.wrapper}>
      <div className={classNames}>
        <CheckboxRadix.Root
          className={disabled ? clsx(s.CheckboxRoot, s.CheckBoxDisabled) : s.CheckboxRoot}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={'c1'}
          onCheckedChange={onCheckedHandler}
        >
          <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
            {<Check disabled={disabled} />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {text && (
          <label className={s.Label} htmlFor={'c1'}>
            {text}
          </label>
        )}
      </div>
    </div>
  )
}
