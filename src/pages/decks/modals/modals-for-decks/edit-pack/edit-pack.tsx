import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/assets/icons/edit'
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

export const EditPack = () => {
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
      <button onClick={() => setOpen(true)}>
        <Edit />
      </button>
      <Modal closeIcon isOpen={open} onOpenChange={changeOpen} title={'Edit Pack'}>
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
            <Button onSubmit={undefined} variant={'primary'}>
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
