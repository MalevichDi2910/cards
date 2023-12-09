import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'

type Props = {
  children: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropDownMenu = ({ children, trigger, ...rest }: Props) => {
  return (
    <DropdownMenuRadix.Root {...rest}>
      <DropdownMenuRadix.Trigger>{trigger}</DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align={'end'} className={s.dropdownMenuContent}>
          {children}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
