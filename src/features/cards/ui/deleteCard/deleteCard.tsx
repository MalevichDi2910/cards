import { useState } from 'react'
import { toast } from 'react-toastify'

import { Delete } from '@/assets/icons/delete'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardsMutation } from '@/features/cards/api'

import s from './deleteCard.module.scss'
type Props = {
  id: string
}
export const DeleteCard = ({ id }: Props) => {
  const [deleteCard] = useDeleteCardsMutation()
  const [open, setOpen] = useState(false)

  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const deleteCardCallback = async () => {
    try {
      await deleteCard({ id })
      toast.success('Deleted')
      closeModal()
    } catch (error: any) {
      toast.error(error?.data?.message ?? `the card wasn't deleted`)
    }
  }

  const trigger = <IconButton icon={<Delete />} size={1} />

  return (
    <>
      <Modal isOpen={open} onOpenChange={changeOpen} title={'Delete Card'} trigger={trigger}>
        <div className={s.root}>
          <Typography variant={'body1'}>
            Do you really want to remove this card from deck. <br></br>Card will be deleted.
          </Typography>
          <div className={s.buttonContainer}>
            <Button onClick={closeModal} type={'button'} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button onClick={deleteCardCallback}>
              <Typography variant={'subtitle2'}>Delete Card</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
