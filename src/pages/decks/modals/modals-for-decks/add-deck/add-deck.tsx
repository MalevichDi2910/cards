import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { CreateDeckArgs } from '@/common/services/api'
import { useCreateDeckMutation } from '@/common/services/decks'
import { useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { modalsActions, selectNameDeck, selectPrivateDeck } from '@/features/modals'
import {
  DeckFormSchema,
  deckFormSchema,
} from '@/pages/decks/modals/modals-for-decks/deck-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/ui/modal/modal.module.scss'

export const AddDeck = () => {
  const {
    control,
    formState: { errors },
    reset,
  } = useForm<DeckFormSchema>({ resolver: zodResolver(deckFormSchema) })

  const dispatch = useDispatch()
  const nameDeck = useAppSelector(selectNameDeck)
  const isPrivate = useAppSelector(selectPrivateDeck)

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  const onAddDeck = async (body: CreateDeckArgs) => {
    try {
      await createDeck(body).then(() => {
        onChangeOpen()
        reset()
      })
    } catch (error) {
      console.error('Error adding deck:', error)
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
      <Button onClick={onChangeOpen} variant={'primary'}>
        <Typography variant={'subtitle2'}>Add New Deck</Typography>
      </Button>
      <Modal closeIcon isOpen={open} onOpenChange={onChangeOpen} title={'Add new pack'}>
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
          name={'privateDeck'}
          onValueChange={() => onChangePrivateDeck(!isPrivate)}
        ></ControlledCheckbox>
        <div className={s.FooterTwoButtonsContainer}>
          <div className={s.FooterTwoButtons}>
            <Button onClick={onChangeOpen} type={'reset'} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button
              disabled={deckCreationStatus.isLoading}
              onClick={() => onAddDeck({ isPrivate, name: nameDeck })}
              type={'submit'}
              variant={'primary'}
            >
              <Typography variant={'subtitle2'}>Add New Deck</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
