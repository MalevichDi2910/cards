import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  CSSProperties,
  cloneElement,
  ReactElement,
} from 'react'

type Props = {
  icon: ReactNode
  size?: number
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<ElementRef<'button'>, Props>(
  ({ className, icon, size: sizeProp, ...restProps }, ref) => {
    const size = sizeProp ? `${sizeProp}rem` : '1rem'

    const buttonStyle: CSSProperties = {
      width: size,
      height: size,
    }

    return (
      <button style={buttonStyle} ref={ref} {...restProps}>
        {cloneElement(icon as ReactElement, { size })}
      </button>
    )
  }
)
