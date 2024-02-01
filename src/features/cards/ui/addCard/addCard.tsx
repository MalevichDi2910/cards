import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/features/cards/api'
import { addCardFormValues } from '@/features/cards/ui/addCard/addCardFormSchema'
import { CardForm } from '@/features/cards/ui/cardForm/cardForm'

export const AddCard = () => {
  const { id = '' } = useParams<{ id: string }>()
  const [createCard] = useCreateCardMutation()
  const { reset } = useForm<addCardFormValues>()
  const [open, setOpen] = useState(false)

  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const onSubmit = async (body: FormData) => {
    await createCard({ body: body, id }).then(() => {
      closeModal()
      reset()
    })
  }
  const trigger = (
    <Button>
      <Typography as={'span'} variant={'subtitle2'}>
        Add New Card
      </Typography>
    </Button>
  )

  return (
    <>
      <Modal isOpen={open} onOpenChange={changeOpen} title={'Add New Card'} trigger={trigger}>
        <CardForm buttonTitle={'Add New Card'} closeModal={closeModal} onSubmit={onSubmit} />
      </Modal>
    </>
  )
}
