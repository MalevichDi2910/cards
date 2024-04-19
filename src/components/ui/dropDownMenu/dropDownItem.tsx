import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { dropdownAnimations } from '@/components/ui/dropDownMenu/dropdownMenuAnimations'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import s from './dropDownMenu.module.scss'

type DropDownItemProps = {
  children?: ReactNode
  className?: string
  disable: boolean
  onSelect: (event: Event) => void
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropDownItem = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Item>,
  DropDownItemProps
>(({ children, className, disable, onSelect, ...rest }, ref) => {
  const classNames = {
    item: clsx(disable ? s.disableItem : s.item, className),
  }
  const onSelectHandler = (e: Event) => {
    onSelect && onSelect(e)
    e.preventDefault()
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      onSelect={onSelectHandler}
      ref={ref}
      {...rest}
    >
      <motion.div {...dropdownAnimations.item}>{children}</motion.div>
    </DropdownMenuRadix.Item>
  )
})

type DropDownItemWithIconProps = Omit<DropDownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropDownItemWithIcon = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Item>,
  DropDownItemWithIconProps
>(({ children, className, icon, onSelect, text, ...rest }, ref) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  const onSelectHandler = (e: Event) => {
    onSelect && onSelect(e)
    e.preventDefault()
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      onSelect={onSelectHandler}
      ref={ref}
      {...rest}
    >
      <motion.div {...dropdownAnimations.item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={'caption'}>{text}</Typography>
      </motion.div>
    </DropdownMenuRadix.Item>
  )
})
