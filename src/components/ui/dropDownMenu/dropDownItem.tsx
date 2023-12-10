import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropDownMenu.module.scss'

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
      {children}
    </DropdownMenuRadix.Item>
  )
})
