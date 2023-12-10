import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'
import { IconButton } from '@/components/ui/iconButton'
import MoreInfoIcon from '@/assets/icons/moreInfoIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { dropdownAnimations } from '@/components/ui/dropDownMenu/dropdownMenuAnimations'
import { clsx } from 'clsx'

type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  className?: string
  align?: 'center' | 'end' | 'start'
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropDownMenu = forwardRef<ElementRef<typeof DropdownMenuRadix.Root>, DropdownProps>(
  ({ children, trigger, align, className = 'end', ...rest }, ref) => {
    const [open, setOpen] = useState(false)
    const classNames = {
      trigger: s.trigger,
      content: clsx(s.content, align === 'start' && s.contentStart, className),
      arrow: clsx(s.arrow, align === 'start' && s.arrowStart),
    }
    return (
      <DropdownMenuRadix.Root {...rest} onOpenChange={setOpen} open={open}>
        <DropdownMenuRadix.Trigger className={classNames.trigger} asChild>
          {trigger ?? <IconButton icon={<MoreInfoIcon />} size={1.5} />}
        </DropdownMenuRadix.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownMenuRadix.Portal forceMount>
              <DropdownMenuRadix.Content
                align={align}
                ref={ref}
                className={classNames.content}
                asChild
                forceMount
                onClick={event => event.stopPropagation()}
              >
                <motion.div animate={open ? 'open' : 'closed'} {...dropdownAnimations.menu}>
                  <div>{children}</div>
                  <DropdownMenuRadix.Arrow className={classNames.arrow} />
                </motion.div>
              </DropdownMenuRadix.Content>
            </DropdownMenuRadix.Portal>
          )}
        </AnimatePresence>
      </DropdownMenuRadix.Root>
    )
  }
)
