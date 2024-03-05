import { useState } from 'react'
import { toast } from 'react-toastify'

import { Edit } from '@/assets/icons/edit'
import { useUpdateDeckMutation } from '@/common/services/decks'
import { IconButton } from '@/components/ui/iconButton'
import Modal from '@/components/ui/modal/modal'
import { DeckForm } from '@/features/decks/ui/deck-form'

type EditDeckProps = {
  deckId: string
  isPrivate: boolean
  name: string
}
export const EditDeck = ({ deckId, isPrivate, name }: EditDeckProps) => {
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
        toast.success('Changed')
      })
    } catch (error: any) {
      toast.error(error?.data?.message ?? `the change wasn't saved`)
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
        <DeckForm
          buttonTitle={'Save Changes'}
          closeModal={closeModal}
          defaultValues={{ isPrivate, name }}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}
