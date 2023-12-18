import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

export type ControlledRadioGroupProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name'
> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} {...field} onValueChange={onChange} value={value} />
}
