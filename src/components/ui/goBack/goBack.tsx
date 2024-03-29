import { ElementRef, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons/arrowBackOutline'
import { Button } from '@/components/ui/button'

import s from './goBack.module.scss'

type Props = {
  className?: string
  title: string
}
export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(({ title }, ref) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    // @ts-expect-error TS2322
    <Button className={s.goBack} onClick={goBack} ref={ref} variant={'link'}>
      <ArrowBackOutline size={1} />
      {title}
    </Button>
  )
})
