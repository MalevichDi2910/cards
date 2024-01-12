import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import Modal from '@/components/ui/modal/modal'
import {
  PackFormValues,
  packFormSchema,
} from '@/pages/decks/modals/modals-for-decks/pack-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/components/ui/modal/modal.module.scss'

type AddPackProps = {
  disabled: boolean
  onCreateDeck: () => void
}

export const AddPack = ({ disabled, onCreateDeck }: AddPackProps) => {
  const {
    control,
    formState: { errors },
  } = useForm<PackFormValues>({ resolver: zodResolver(packFormSchema) })
  const [open, setOpen] = useState<boolean>(false)
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  return (
    <>
      <Button disabled={disabled} onClick={() => setOpen(true)} variant={'primary'}>
        Add new pack
      </Button>
      <Modal closeIcon isOpen={open} onOpenChange={changeOpen} title={'Add new pack'}>
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
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={onCreateDeck} onSubmit={undefined} variant={'primary'}>
              Add new pack
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
