import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { EmptyStar } from '@/assets/icons/emptyStar'
import { FilledStar } from '@/assets/icons/filledStar'

type Props = {
  className?: string
  maxRating?: number
  rating: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<ElementRef<'div'>, Props>(
  ({ className, maxRating = 5, rating, ...restProps }, ref) => {
    const stars = [...Array(maxRating)].map((_, index) => index + 1)

    return (
      <div ref={ref} {...restProps}>
        {stars.map((star, index) => {
          const isFilled = rating >= star

          return (
            <div key={index}>
              {isFilled ? <FilledStar key={index} size={1} /> : <EmptyStar key={index} size={1} />}
            </div>
          )
        })}
      </div>
    )
  }
)
