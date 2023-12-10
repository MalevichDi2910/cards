import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropDownMenu.module.scss'

type DropDownItemProps = ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropDownItem = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Item>,
  DropDownItemProps
>(({ className, ...rest }, ref) => {
  return (
    <DropdownMenuRadix.Item ref={ref} className={clsx(s.dropdownMenuItem, className)} {...rest} />
  )
})
