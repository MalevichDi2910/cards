import { useState } from 'react'
import { toast } from 'react-toastify'

import Trash from '@/assets/icons/trash'
import { useDeleteDeckMutation } from '@/common/services/decks'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/modal/modal.module.scss'

type DeleteDeckProps = {
  deckId: string
  name: string
}
export const DeleteDeck = ({ deckId, name }: DeleteDeckProps) => {
  const [deleteDeck] = useDeleteDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const removeDeck = async (deckId: string) => {
    try {
      await deleteDeck({ id: deckId }).then(() => {
        onChangeOpen()
        toast.success('Deleted')
      })
    } catch (error: any) {
      toast.error(error?.data?.message ?? `the deck wasn't deleted`)
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
            Do you really want to remove <Typography variant={'subtitle1'}>{name}</Typography>?
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
