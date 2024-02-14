import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './iconButton.module.scss'

type Props = {
  icon: ReactNode
  size?: number
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<ElementRef<'button'>, Props>(
  ({ className, icon, size: sizeProp, ...restProps }, ref) => {
    const size = sizeProp ? `${sizeProp}rem` : '1rem'

    const buttonStyle: CSSProperties = {
      height: size,
      width: size,
    }
    const IconButtonClassName = clsx(s.root, className)

    return (
      <button className={IconButtonClassName} ref={ref} style={buttonStyle} {...restProps}>
        {cloneElement(icon as ReactElement, { size })}
      </button>
    )
  }
)
