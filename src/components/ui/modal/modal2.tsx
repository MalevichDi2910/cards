import { ReactNode } from 'react'

import XMark from '@/assets/icons/XMark'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalPropsType = {
  bodyText?: string
  children?: ReactNode
  closeIcon?: boolean
  text?: string
  title?: string
}

const Modal = ({ children, closeIcon, text, title }: ModalPropsType) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${s.Button} ${s.violet}`}>Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          {title && (
            <div className={s.ContentHeader}>
              <Dialog.Title className={s.DialogTitle}>
                <Typography variant={'h2'}>{title}</Typography>
              </Dialog.Title>
            </div>
          )}
          {title && closeIcon && (
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={s.IconButton}>
                {<XMark size={1.5} />}
              </button>
            </Dialog.Close>
          )}
          {text && (
            <div className={s.BodyText}>
              <Typography className={s.Text} variant={'body1'}>
                {text}
              </Typography>
            </div>
          )}
          <div className={s.ChildrenContainer}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
