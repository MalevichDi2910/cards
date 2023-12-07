import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBoxProps, Checkbox } from '@/components/ui/checkBox'

export type ControlledCheckboxProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name'
> &
  Omit<CheckBoxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...rest} checked={value} id={name} onValueChange={onChange} />
}
