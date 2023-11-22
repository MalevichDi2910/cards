import { Ref, forwardRef, memo } from 'react'

import { IconProps, IconWrapper } from '@/assets/IconWrapper'

const LogOut = (allProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={16}
          ref={ref}
          viewBox={'0 0 16 16'}
          width={16}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <g clipPath={'url(#a)'} fill={'currentColor'}>
            <path
              d={
                'M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6h1Zm13.82 5.42-2.82-4a1 1 0 1 0-1.63 1.16L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 .02-1.18Z'
              }
            />
          </g>
          <defs>
            <clipPath id={'a'}>
              <path d={'M0 0h24v24H0z'} fill={'currentColor'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

const ForwardRef = forwardRef(LogOut)
const Memo = memo(ForwardRef)

export default Memo
