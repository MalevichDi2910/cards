import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import {
  DeckFormSchema,
  deckFormSchema,
} from '@/pages/decks/modals/modals-for-decks/deck-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/ui/modal/modal.module.scss'

type AddPackProps = {
  disabled: boolean
  onCreateDeck: () => void
}

export const AddDeck = ({ disabled, onCreateDeck }: AddPackProps) => {
  const {
    control,
    formState: { errors },
  } = useForm<DeckFormSchema>({ resolver: zodResolver(deckFormSchema) })
  const [open, setOpen] = useState<boolean>(false)
  const onAddDeckHandler = () => {
    setOpen(!open)
    onCreateDeck()
  }

  const onChangeOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Button disabled={disabled} onClick={onChangeOpen} variant={'primary'}>
        <Typography variant={'subtitle2'}>Add New Deck</Typography>
      </Button>
      <Modal closeIcon isOpen={open} onOpenChange={onChangeOpen} title={'Add new pack'}>
        <ControlledTextField
          control={control}
          errorMessage={errors.namePack?.message}
          fullWidth
          label={'Name Pack'}
          name={'namePack'}
          placeholder={'Name'}
          type={'text'}
        />
        <ControlledCheckbox
          control={control}
          label={'Private pack'}
          name={'privatePack'}
        ></ControlledCheckbox>
        <div className={s.FooterTwoButtonsContainer}>
          <div className={s.FooterTwoButtons}>
            <Button onClick={onChangeOpen} type={'reset'} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button onClick={onAddDeckHandler} type={'submit'} variant={'primary'}>
              <Typography variant={'subtitle2'}>Add New Deck</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
