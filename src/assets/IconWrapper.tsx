import * as React from 'react'

export type IconProps = {
  autoSize?: boolean
  color?: string
  size?: number
  svgProps?: React.SVGProps<SVGSVGElement>
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>
export const IconWrapper: React.FC<{ icon: React.ReactNode } & IconProps> = ({
  autoSize,
  color: colorProp,
  icon,
  size: sizeProp,
  ...restProps
}) => {
  const color = colorProp ? colorProp : 'currentColor'
  const size = sizeProp ? `${sizeProp}rem` : '1rem'

  return (
    <span
      aria-hidden={'true'}
      role={'img'}
      style={{
        color: color,
        display: 'inline-flex',
        fontSize: 'inherit',
        height: restProps.height ?? size,
        width: restProps.width ?? size,
      }}
      {...restProps}
    >
      {icon}
    </span>
  )
}
