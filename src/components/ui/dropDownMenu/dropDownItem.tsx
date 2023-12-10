import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import s from './dropDownMenu.module.scss'
import { dropdownAnimations } from '@/components/ui/dropDownMenu/dropdownMenuAnimations'
import { Typography } from '@/components/ui/typography'

type DropDownItemProps = {
  children?: ReactNode
  className?: string
  onSelect: (event: Event) => void
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropDownItem = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Item>,
  DropDownItemProps
>(({ children, onSelect, className, ...rest }, ref) => {
  const DropDownItemClassName = clsx(s.dropdownMenuItem, className)

  const onSelectHandler = (e: Event) => {
    onSelect && onSelect(e)
    e.preventDefault()
  }

  return (
    <DropdownMenuRadix.Item
      ref={ref}
      className={DropDownItemClassName}
      onSelect={onSelectHandler}
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
>(({ children, onSelect, className, icon, text, ...rest }, ref) => {
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
      ref={ref}
      className={classNames.item}
      onSelect={onSelectHandler}
      {...rest}
    >
      <motion.div {...dropdownAnimations.item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={'caption'}>{text}</Typography>
      </motion.div>
    </DropdownMenuRadix.Item>
  )
})
