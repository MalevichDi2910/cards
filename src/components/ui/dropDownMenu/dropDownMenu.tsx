import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'

type DropdownProps = {
  children: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropDownMenu = forwardRef<ElementRef<typeof DropdownMenuRadix.Root>, DropdownProps>(
  ({ children, trigger, ...rest }, ref) => {
    return (
      <DropdownMenuRadix.Root {...rest}>
        <DropdownMenuRadix.Trigger>{trigger}</DropdownMenuRadix.Trigger>
        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content ref={ref} align={'end'} className={s.dropdownMenuContent}>
            {children}
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    )
  }
)
