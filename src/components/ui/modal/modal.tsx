import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import XMark from '@/assets/icons/XMark'
import ScrollArea from '@/components/ui/modal/scrollAreal'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalPropsType = {
  bodyText?: string
  bodyTextScroll?: boolean
  children?: ReactNode
  closeIcon?: boolean
  isOpen?: boolean
  onOpenChange: (open: boolean) => void
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Root>

const Modal = forwardRef<ElementRef<typeof Dialog.Root>, ModalPropsType>(
  (
    {
      bodyText,
      bodyTextScroll,
      children,
      closeIcon,
      isOpen = false,
      onOpenChange,
      title,
      ...restProps
    },
    ref
  ) => {
    return (
      <Dialog.Root onOpenChange={onOpenChange} open={isOpen} {...restProps}>
        <Dialog.Trigger asChild ref={ref}></Dialog.Trigger>
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
            {bodyText && bodyTextScroll ? (
              <div className={s.BodyTextScroll}>
                <ScrollArea text={bodyText} />
              </div>
            ) : (
              bodyText && (
                <div className={s.BodyText}>
                  <Typography variant={'body1'}>{bodyText}</Typography>
                </div>
              )
            )}
            {children && <div className={s.ChildrenContainer}>{children}</div>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)

export default Modal
