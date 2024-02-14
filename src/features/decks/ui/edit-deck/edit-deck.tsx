import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/assets/icons/edit'
import { useUpdateDeckMutation } from '@/common/services/decks'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { DeckForm } from '@/features/decks/ui/deck-form'
import { DeckFormSchema } from '@/features/decks/ui/deck-form-schema'

type EditDeckProps = {
  deckId: string
}
export const EditDeck = ({ deckId }: EditDeckProps) => {
  const { reset } = useForm<DeckFormSchema>()

  const [updateDeck] = useUpdateDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const onSubmit = async (body: FormData) => {
    try {
      await updateDeck({ body: body, id: deckId }).then(() => {
        closeModal()
        reset()
      })
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  const trigger = <IconButton icon={<Edit />} size={1} />

  return (
    <>
      <Modal
        closeIcon
        isOpen={open}
        onOpenChange={onChangeOpen}
        title={'Edit Pack'}
        trigger={trigger}
      >
        <DeckForm buttonTitle={'Save Changes'} closeModal={closeModal} onSubmit={onSubmit} />
      </Modal>
    </>
  )
}
