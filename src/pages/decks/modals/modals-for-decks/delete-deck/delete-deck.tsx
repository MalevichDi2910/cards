import { useState } from 'react'

import Trash from '@/assets/icons/trash'
import { useDeleteDeckMutation } from '@/common/services/decks'
// import { useAppDispatch, useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
// import { selectModalsOpen } from '@/features/modals/modalsSelector'
// import { modalsActions } from '@/features/modals/modalsSlice'

import s from '@/components/ui/modal/modal.module.scss'

type DeleteDeckProps = {
  deckId: string
}
export const DeleteDeck = ({ deckId }: DeleteDeckProps) => {
  // const dispatch = useAppDispatch()
  // const openModal = useAppSelector(selectOpenModal)

  const [deleteDeck] = useDeleteDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  // const onChangeOpen = (openModal: boolean) => {
  //   dispatch(modalsActions.setOpen({ openModal }))
  // }

  const onChangeOpen = (open: boolean) => {
    setOpen(open)
  }

  const removeDeck = async (deckId: string) => {
    try {
      await deleteDeck(deckId).then(() => onChangeOpen(!open))
    } catch (error) {
      console.error('Error removing deck:', error)
    }
  }

  return (
    <>
      <button onClick={() => onChangeOpen(!open)}>
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
            <Button onClick={() => onChangeOpen(!open)} type={'reset'} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button onClick={() => removeDeck(deckId)} type={'submit'} variant={'primary'}>
              Delete Pack
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
