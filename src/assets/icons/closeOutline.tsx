import { Ref, SVGProps, forwardRef } from 'react'
export const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={'1em'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g id={'evaCloseOutline0'}>
      <g id={'evaCloseOutline1'}>
        <path
          d={
            'm13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z'
          }
          fill={'var(--color-light-100)'}
          id={'evaCloseOutline2'}
        />
      </g>
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ReactComponent }
