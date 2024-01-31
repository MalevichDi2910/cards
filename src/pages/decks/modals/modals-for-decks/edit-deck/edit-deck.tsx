import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/assets/icons/edit'
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

export const EditDeck = () => {
  const {
    control,
    formState: { errors },
  } = useForm<DeckFormSchema>({ resolver: zodResolver(deckFormSchema) })

  const [open, setOpen] = useState<boolean>(false)

  const onChangeOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <button onClick={onChangeOpen}>
        <Edit />
      </button>
      <Modal closeIcon isOpen={open} onOpenChange={onChangeOpen} title={'Edit Pack'}>
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
            <Button type={'submit'} variant={'primary'}>
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
