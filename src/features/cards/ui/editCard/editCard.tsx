import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/assets/icons/edit'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { Card, useUpdateCardMutation } from '@/features/cards/api'
import { CardForm } from '@/features/cards/ui/cardForm/cardForm'
import { CardFormValues } from '@/features/cards/ui/cardForm/cardFormSchema'

type Props = {
  card: Card
}
export const EditCard = ({ card }: Props) => {
  const [updateCard] = useUpdateCardMutation()
  const { reset } = useForm<CardFormValues>()
  const { answer, answerImg, id, question, questionImg } = card
  const [open, setOpen] = useState(false)
  const cardValues = { answer, answerImg, question, questionImg }
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const onSubmit = async (body: FormData) => {
    await updateCard({ body: body, id }).then(() => {
      closeModal()
      reset()
    })
  }
  const trigger = <IconButton icon={<Edit />} size={1} />

  return (
    <>
      <Modal isOpen={open} onOpenChange={changeOpen} title={'Edit Card'} trigger={trigger}>
        <CardForm
          buttonTitle={'Save Changes'}
          cardValues={cardValues}
          closeModal={closeModal}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}
