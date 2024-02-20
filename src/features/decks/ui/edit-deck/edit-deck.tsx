import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Edit } from '@/assets/icons/edit'
import { useUpdateDeckMutation } from '@/common/services/decks'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { DeckForm } from '@/features/decks/ui/deck-form'
import { modalsActions } from '@/features/modals'

type EditDeckProps = {
  deckId: string
}
export const EditDeck = ({ deckId }: EditDeckProps) => {
  const dispatch = useDispatch()

  const [updateDeck] = useUpdateDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const onChangeClear = () => {
    dispatch(modalsActions.setClearModal({}))
  }
  const onSubmit = async (body: FormData) => {
    try {
      await updateDeck({ body: body, id: deckId }).then(() => {
        closeModal()
        onChangeClear()
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
