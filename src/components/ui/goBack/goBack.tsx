import { ElementRef, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import ArrowIosBack from '@/assets/icons/arrowIosBack'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
}
export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(({ title }, ref) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    // @ts-expect-error TS2322
    <Button onClick={goBack} ref={ref} variant={'link'}>
      <ArrowIosBack size={1} />
      {title}
    </Button>
  )
})
