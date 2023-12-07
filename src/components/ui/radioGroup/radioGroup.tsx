import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Option } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type RadioGroupProps = {
  options: Option[]
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ defaultValue, disabled, id, onValueChange, options, value, ...restProps }, ref) => (
    <form>
      <RadixRadioGroup.Root
        aria-label={'View density'}
        className={s.RadioGroupRoot}
        defaultValue={options[0].value}
        disabled={disabled}
        ref={ref}
        {...restProps}
      >
        {options.map(option => (
          <div
            key={option.value}
            style={{ alignItems: 'center', display: 'flex', marginLeft: '10px' }}
          >
            <RadixRadioGroup.Item
              className={s.RadioGroupItem}
              id={option.value}
              key={option.value}
              value={option.value}
            >
              <RadixRadioGroup.Indicator className={s.RadioGroupIndicator} />
            </RadixRadioGroup.Item>
            <Typography as={'label'} className={s.Label} htmlFor={option.value} variant={'body2'}>
              {option.title}
            </Typography>
          </div>
        ))}
      </RadixRadioGroup.Root>
    </form>
  )
)
