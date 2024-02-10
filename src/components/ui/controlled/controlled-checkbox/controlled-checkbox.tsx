import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBoxProps, Checkbox } from '@/components/ui/checkBox'

export type ControlledCheckboxProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name'
> &
  Omit<CheckBoxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...CheckBoxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <Checkbox {...{ checked: value, id: name, onChange, ...CheckBoxProps }} />
}
