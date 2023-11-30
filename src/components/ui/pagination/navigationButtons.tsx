import { FC } from 'react'

import ArrowIosBack from '@/assets/icons/arrowIosBack'
import ArrowIosForward from '@/assets/icons/arrowIosForward'

import s from '@/components/ui/pagination/pagination.module.scss'

export type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

export const PrevButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={s.item} disabled={disabled} onClick={onClick}>
      <ArrowIosBack />
    </button>
  )
}

export const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={s.item} disabled={disabled} onClick={onClick}>
      <ArrowIosForward />
    </button>
  )
}
