import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCreateDeckMutation } from '@/common/services/decks'
import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { DeckForm } from '@/features/decks/ui/deck-form'
import { DeckFormSchema } from '@/features/decks/ui/deck-form-schema'

export const AddDeck = () => {
  const { reset } = useForm<DeckFormSchema>()

  const [createDeck] = useCreateDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const onSubmit = async (body: FormData) => {
    try {
      await createDeck({ body }).then(() => {
        closeModal()
        reset()
      })
    } catch (error) {
      console.error('Error adding deck:', error)
    }
  }

  const trigger = (
    <Button>
      <Typography as={'span'} variant={'subtitle2'}>
        Add New Deck
      </Typography>
    </Button>
  )

  return (
    <>
      <Modal
        closeIcon
        isOpen={open}
        onOpenChange={onChangeOpen}
        title={'Add new deck'}
        trigger={trigger}
      >
        <DeckForm buttonTitle={'Add New Deck'} closeModal={closeModal} onSubmit={onSubmit} />
      </Modal>
    </>
  )
}
