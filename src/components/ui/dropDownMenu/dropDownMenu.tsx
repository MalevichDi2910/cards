import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'
import { IconButton } from '@/components/ui/iconButton'
import MoreInfoIcon from '@/assets/icons/moreInfoIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { dropdownAnimations } from '@/components/ui/dropDownMenu/dropdownMenuAnimations'

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
        <AnimatePresence>
          {open && (
            <DropdownMenuRadix.Portal forceMount>
              <DropdownMenuRadix.Content
                align={align}
                ref={ref}
                className={s.dropdownMenuContent}
                forceMount
                onClick={event => event.stopPropagation()}
              >
                <motion.div animate={open ? 'open' : 'closed'} {...dropdownAnimations.menu}>
                  <div>{children}</div>
                  <DropdownMenuRadix.Arrow className={s.arrow} />
                </motion.div>
              </DropdownMenuRadix.Content>
            </DropdownMenuRadix.Portal>
          )}
        </AnimatePresence>
      </DropdownMenuRadix.Root>
    )
  }
)
