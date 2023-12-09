import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'
import { IconButton } from '@/components/ui/iconButton'
import MoreInfoIcon from '@/assets/icons/moreInfoIcon'

type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  className?: string
  align?: 'center' | 'end' | 'start'
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropDownMenu = forwardRef<ElementRef<typeof DropdownMenuRadix.Root>, DropdownProps>(
  ({ children, trigger, align = 'end', ...rest }, ref) => {
    const [open, setOpen] = useState(false)

    return (
      <DropdownMenuRadix.Root {...rest} onOpenChange={setOpen} open={open}>
        <DropdownMenuRadix.Trigger>
          {trigger ?? <IconButton icon={<MoreInfoIcon />} size={1.5} />}
        </DropdownMenuRadix.Trigger>
        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content align={align} ref={ref} className={s.dropdownMenuContent}>
            {children}
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    )
  }
)
