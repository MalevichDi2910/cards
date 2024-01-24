import { useState } from 'react'

import Trash from '@/assets/icons/trash'
import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/modal/modal.module.scss'

type DeletePackProps = {
  removeDeck: () => void
}

export const DeleteDeck = ({ removeDeck }: DeletePackProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const onDeleteDeckHandler = () => {
    setOpen(!open)
    removeDeck()
  }

  const onChangeOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <button onClick={onChangeOpen}>
        <Trash />
      </button>
      <Modal closeIcon isOpen={open} onOpenChange={onChangeOpen} title={'Delete Pack'}>
        <div>
          <Typography as={'p'} variant={'body1'}>
            Do you really want to remove <Typography variant={'subtitle1'}>Pack Name</Typography>?
          </Typography>
          <Typography as={'p'} variant={'body1'}>
            All cards will be deleted.
          </Typography>
        </div>
        <div className={s.FooterTwoButtonsContainer}>
          <div className={s.FooterTwoButtons}>
            <Button onClick={onChangeOpen} type={'reset'} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button onClick={onDeleteDeckHandler} type={'submit'} variant={'primary'}>
              Delete Pack
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
