import { Ref, forwardRef, memo } from 'react'

import { IconProps, IconWrapper } from '@/assets/IconWrapper'

const SvgCheckMark = (allProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { disabled, svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={''}
          ref={ref}
          viewBox={'0 0 24 24'}
          width={''}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <rect
            fill={disabled ? 'var(--color-light-700)' : 'var(--color-dark-900)'}
            height={'12'}
            width={'16'}
            x={'4'}
            y={'6'}
          />
          <path
            d={
              'M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z'
            }
            fill={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
          />
        </svg>
      }
      size={1.5}
      {...restProps}
    />
  )
}
const ForwardRef = forwardRef(SvgCheckMark)

export default memo(ForwardRef)
