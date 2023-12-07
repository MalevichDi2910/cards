import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {
  onRangeChange: (range: number[]) => void
  range: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>
export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, SliderProps>(
  ({ disabled, onRangeChange, range }, ref) => {
    return (
      <form className={s.container}>
        <Typography as={'div'} className={s.values} variant={'body1'}>
          {range[0]}
        </Typography>
        <RadixSlider.Root
          className={s.SliderRoot}
          defaultValue={range}
          disabled={disabled}
          onValueChange={onRangeChange}
          value={range}
        >
          <RadixSlider.Track className={s.SliderTrack} ref={ref}>
            <RadixSlider.Range className={s.SliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb className={s.SliderThumb} />
          <RadixSlider.Thumb className={s.SliderThumb} />
        </RadixSlider.Root>
        <Typography as={'div'} className={s.values} variant={'body1'}>
          {range[1]}
        </Typography>
      </form>
    )
  }
)
