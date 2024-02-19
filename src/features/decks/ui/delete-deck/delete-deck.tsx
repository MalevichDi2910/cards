import { useState } from 'react'

import Trash from '@/assets/icons/trash'
import { useDeleteDeckMutation } from '@/common/services/decks'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/modal/modal.module.scss'

type DeleteDeckProps = {
  deckId: string
}
export const DeleteDeck = ({ deckId }: DeleteDeckProps) => {
  const [deleteDeck] = useDeleteDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const removeDeck = async (deckId: string) => {
    try {
      await deleteDeck(deckId).then(() => onChangeOpen())
    } catch (error) {
      console.error('Error removing deck:', error)
    }
  }

  const trigger = <IconButton icon={<Trash />} size={1} />

  return (
    <>
      <Modal
        closeIcon
        isOpen={open}
        onOpenChange={onChangeOpen}
        title={'Delete Pack'}
        trigger={trigger}
      >
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
            <Button onClick={() => removeDeck(deckId)} type={'submit'} variant={'primary'}>
              Delete Pack
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
