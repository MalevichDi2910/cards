import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { useCreateDeckMutation } from '@/common/services/decks'
import { useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { DeckForm } from '@/features/decks/ui/deck-form'
import { modalsActions, selectOpenModal } from '@/features/modals'

export const AddDeck = () => {
  const dispatch = useDispatch()
  const open = useAppSelector(selectOpenModal)

  const [createDeck] = useCreateDeckMutation()

  const onChangeOpen = (openModal: boolean) => {
    dispatch(modalsActions.setOpenModal({ openModal }))
  }

  const onChangeClear = () => {
    dispatch(modalsActions.setClearModal({}))
  }

  const onSubmit = async (body: FormData) => {
    try {
      await createDeck({ body }).then(() => {
        onChangeClear()
        toast.success('Added')
      })
    } catch (error: any) {
      toast.error(error?.data?.message ?? `the deck hasn't been added`)
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
        onOpenChange={() => onChangeOpen(!open)}
        title={'Add new deck'}
        trigger={trigger}
      >
        <DeckForm
          buttonTitle={'Add New Deck'}
          closeModal={() => onChangeOpen(!open)}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}
