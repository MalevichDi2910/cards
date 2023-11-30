import { Typography } from '@/components/ui/typography'
import * as ScrollAreaRadix from '@radix-ui/react-scroll-area'

import s from './scrollArea.module.css'

type ScrollAreaPropsType = {
  text: string
}

const ScrollArea = ({ text }: ScrollAreaPropsType) => (
  <ScrollAreaRadix.Root className={s.ScrollAreaRoot} type={'always'}>
    <ScrollAreaRadix.Viewport className={s.ScrollAreaViewport}>
      <Typography variant={'body1'}>{text}</Typography>
    </ScrollAreaRadix.Viewport>
    <ScrollAreaRadix.Scrollbar className={s.ScrollAreaScrollbar} orientation={'vertical'}>
      <ScrollAreaRadix.Thumb className={s.ScrollAreaThumb} />
    </ScrollAreaRadix.Scrollbar>
  </ScrollAreaRadix.Root>
)

export default ScrollArea
