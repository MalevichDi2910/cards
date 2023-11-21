import Check from '@/assets/icons/checkMark'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkBox.module.scss'

type CheckBoxPropsType = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id: string
  onCheckedHandler?: (checked: boolean) => void
  required?: boolean
  text?: string
}

export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  onCheckedHandler,
  required,
  text,
}: CheckBoxPropsType) => {
  const classNames = text
    ? clsx(s.MainBox, className, s.rightPaddingChange)
    : clsx(s.MainBox, className)

  return (
    <div className={s.wrapper}>
      <div className={classNames}>
        <CheckboxRadix.Root
          checked={checked}
          className={disabled ? clsx(s.CheckboxRoot, s.CheckBoxDisabled) : s.CheckboxRoot}
          disabled={disabled}
          id={id}
          onCheckedChange={onCheckedHandler}
          required={required}
        >
          <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
            {<Check disabled={disabled} />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {text && (
          <Typography as={'label'} className={s.Label} htmlFor={id} variant={'body2'}>
            {text}
          </Typography>
        )}
      </div>
    </div>
  )
}
