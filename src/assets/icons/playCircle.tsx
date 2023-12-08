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
              'M8.00001 1.33325C6.68147 1.33325 5.39254 1.72425 4.29621 2.45679C3.19988 3.18933 2.3454 4.23052 1.84082 5.4487C1.33623 6.66687 1.20421 8.00731 1.46144 9.30052C1.71868 10.5937 2.35362 11.7816 3.28597 12.714C4.21832 13.6463 5.4062 14.2813 6.69941 14.5385C7.99262 14.7957 9.33306 14.6637 10.5512 14.1591C11.7694 13.6545 12.8106 12.8 13.5431 11.7037C14.2757 10.6074 14.6667 9.31846 14.6667 7.99992C14.6667 7.12444 14.4942 6.25753 14.1592 5.4487C13.8242 4.63986 13.3331 3.90493 12.7141 3.28587C12.095 2.66682 11.3601 2.17575 10.5512 1.84072C9.7424 1.50569 8.87549 1.33325 8.00001 1.33325V1.33325ZM8.00001 13.3333C6.94518 13.3333 5.91403 13.0205 5.03697 12.4344C4.15991 11.8484 3.47632 11.0154 3.07266 10.0409C2.66899 9.06636 2.56337 7.994 2.76916 6.95944C2.97495 5.92487 3.4829 4.97456 4.22878 4.22868C4.97466 3.4828 5.92497 2.97485 6.95953 2.76906C7.9941 2.56328 9.06645 2.66889 10.041 3.07256C11.0155 3.47623 11.8485 4.15982 12.4345 5.03688C13.0206 5.91394 13.3333 6.94509 13.3333 7.99992C13.3333 9.41441 12.7714 10.771 11.7713 11.7712C10.7711 12.7713 9.4145 13.3333 8.00001 13.3333V13.3333Z'
            }
            fill={'currentColor'}
          />
          <path
            d={
              'M8.22666 4.96667C8.06331 4.81613 7.85932 4.71692 7.64004 4.68136C7.42077 4.6458 7.19588 4.67547 6.99333 4.76667C6.7967 4.84621 6.62825 4.98257 6.5095 5.15832C6.39075 5.33407 6.32709 5.54123 6.32666 5.75334V10.2467C6.32709 10.4588 6.39075 10.6659 6.5095 10.8417C6.62825 11.0174 6.7967 11.1538 6.99333 11.2333C7.13784 11.2989 7.29464 11.333 7.45333 11.3333C7.73927 11.3321 8.01467 11.2252 8.22666 11.0333L10.6667 8.78667C10.7758 8.68674 10.8629 8.56519 10.9226 8.42976C10.9822 8.29433 11.013 8.14798 11.013 8C11.013 7.85203 10.9822 7.70568 10.9226 7.57025C10.8629 7.43482 10.7758 7.31327 10.6667 7.21334L8.22666 4.96667ZM7.66666 9.73334V6.26667L9.53999 8L7.66666 9.73334Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

export const PlayCircle = memo(forwardRef(SvgComponent))
