import { Ref, forwardRef, memo } from 'react'

import { IconProps, IconWrapper } from '@/assets/IconWrapper'

export const SvgComponent = (allProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          ref={ref}
          viewBox={'0 0 16 16'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M12.5 2H4.5C3.96957 2 3.46086 2.21071 3.08579 2.58579C2.71071 2.96086 2.5 3.46957 2.5 4V12C2.5 12.5304 2.71071 13.0391 3.08579 13.4142C3.46086 13.7893 3.96957 14 4.5 14H12.5C13.0304 14 13.5391 13.7893 13.9142 13.4142C14.2893 13.0391 14.5 12.5304 14.5 12V4C14.5 3.46957 14.2893 2.96086 13.9142 2.58579C13.5391 2.21071 13.0304 2 12.5 2ZM4.5 3.33333H12.5C12.6768 3.33333 12.8464 3.40357 12.9714 3.5286C13.0964 3.65362 13.1667 3.82319 13.1667 4V9.57333L11.0333 7.75333C10.7028 7.48136 10.288 7.33266 9.86 7.33266C9.43195 7.33266 9.0172 7.48136 8.68667 7.75333L3.83333 11.8V4C3.83333 3.82319 3.90357 3.65362 4.0286 3.5286C4.15362 3.40357 4.32319 3.33333 4.5 3.33333ZM12.5 12.6667H4.87333L9.54 8.77333C9.62965 8.70677 9.73834 8.67083 9.85 8.67083C9.96166 8.67083 10.0704 8.70677 10.16 8.77333L13.1667 11.3333V12C13.1667 12.1768 13.0964 12.3464 12.9714 12.4714C12.8464 12.5964 12.6768 12.6667 12.5 12.6667Z'
            }
            fill={'currentColor'}
          />
          <path
            d={
              'M5.83333 6.66663C6.38561 6.66663 6.83333 6.21891 6.83333 5.66663C6.83333 5.11434 6.38561 4.66663 5.83333 4.66663C5.28104 4.66663 4.83333 5.11434 4.83333 5.66663C4.83333 6.21891 5.28104 6.66663 5.83333 6.66663Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export const Image = memo(forwardRef(SvgComponent))
