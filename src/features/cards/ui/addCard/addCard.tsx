import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/features/cards/api'
import { CardForm } from '@/features/cards/ui/cardForm/cardForm'
import { CardFormValues } from '@/features/cards/ui/cardForm/cardFormSchema'

export const AddCard = () => {
  const { id = '' } = useParams<{ id: string }>()
  const [createCard] = useCreateCardMutation()
  const { reset } = useForm<CardFormValues>()
  const [open, setOpen] = useState(false)

  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const onSubmit = async (body: FormData) => {
    try {
      await createCard({ body: body, id }).then(() => {
        closeModal()
        toast.success('Added')
        reset()
      })
    } catch (error: any) {
      toast.error(error?.data?.message ?? `the card hasn't been added`)
    }
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
