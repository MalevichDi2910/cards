import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react'

import MoreInfoIcon from '@/assets/icons/moreInfoIcon'
import { dropdownAnimations } from '@/components/ui/dropDownMenu/dropdownMenuAnimations'
import { IconButton } from '@/components/ui/iconButton'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './dropDownMenu.module.scss'

type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropDownMenu = forwardRef<ElementRef<typeof DropdownMenuRadix.Root>, DropdownProps>(
  ({ align, children, className = 'end', trigger, ...rest }, ref) => {
    const [open, setOpen] = useState(false)
    const classNames = {
      arrow: clsx(s.arrow, align === 'start' && s.arrowStart),

      content: clsx(s.content, align === 'start' && s.contentStart, className),
      trigger: s.trigger,
    }

    return (
      <DropdownMenuRadix.Root {...rest} onOpenChange={setOpen} open={open}>
        <DropdownMenuRadix.Trigger asChild className={classNames.trigger}>
          {trigger ?? <IconButton icon={<MoreInfoIcon />} size={1.5} />}
        </DropdownMenuRadix.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownMenuRadix.Portal forceMount>
              <DropdownMenuRadix.Content
                align={align}
                asChild
                className={classNames.content}
                forceMount
                onClick={event => event.stopPropagation()}
                ref={ref}
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
