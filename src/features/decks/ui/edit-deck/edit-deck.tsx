import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Edit } from '@/assets/icons/edit'
import { ArgUpdateDeckType } from '@/common/services/api'
import { useUpdateDeckMutation } from '@/common/services/decks'
import { useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { DeckFormSchema, deckFormSchema } from '@/features/decks/ui/deck-form-schema'
import { modalsActions, selectNameDeck, selectPrivateDeck } from '@/features/modals'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/ui/modal/modal.module.scss'

type EditDeckProps = {
  deckId: string
}
export const EditDeck = ({ deckId }: EditDeckProps) => {
  const {
    control,
    formState: { errors },
    reset,
  } = useForm<DeckFormSchema>({ resolver: zodResolver(deckFormSchema) })

  const dispatch = useDispatch()
  const nameDeck = useAppSelector(selectNameDeck)
  const isPrivate = useAppSelector(selectPrivateDeck)

  const [updateDeck] = useUpdateDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }
  const onUpdateDeck = async (body: ArgUpdateDeckType, id: string) => {
    try {
      await updateDeck({ body, id }).then(() => {
        onChangeOpen()
        reset()
      })
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  const onChangeNameDeck = (nameDeck: string) => {
    dispatch(modalsActions.setNameDeck({ nameDeck }))
  }

  const onChangePrivateDeck = (isPrivate: boolean) => {
    dispatch(modalsActions.setPrivateDeck({ isPrivate }))
  }

  return (
    <>
      <button onClick={onChangeOpen}>
        <Edit />
      </button>
      <Modal closeIcon isOpen={open} onOpenChange={onChangeOpen} title={'Edit Pack'}>
        <ControlledTextField
          control={control}
          errorMessage={errors.nameDeck?.message}
          fullWidth
          label={'Name Deck'}
          name={'nameDeck'}
          onChange={e => onChangeNameDeck(e.currentTarget.value)}
          placeholder={'Name'}
          type={'text'}
          value={nameDeck}
        />
        <ControlledCheckbox
          checked={isPrivate}
          control={control}
          label={'Private deck'}
          name={'isPrivate'}
          onValueChange={() => onChangePrivateDeck(!isPrivate)}
        ></ControlledCheckbox>
        <div className={s.FooterTwoButtonsContainer}>
          <div className={s.FooterTwoButtons}>
            <Button onClick={onChangeOpen} type={'reset'} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button
              onClick={() => onUpdateDeck({ isPrivate, name: nameDeck }, deckId)}
              type={'submit'}
              variant={'primary'}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
