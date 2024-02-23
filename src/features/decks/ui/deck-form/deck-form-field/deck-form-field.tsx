import { ChangeEvent, ComponentPropsWithoutRef, useRef } from 'react'
import { Control } from 'react-hook-form'

import { Image } from '@/assets/icons/image'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { DeckFormValues } from '@/features/decks/ui/deck-form-schema'

import s from './deck-form-field.module.scss'

type Props = {
  control: Control<DeckFormValues>
  errors?: string | undefined
  imageURL: null | string | undefined
  onLoadFileCover: (data: File) => void
} & ComponentPropsWithoutRef<'input'>
export const DeckFormField = ({ control, errors, imageURL, onLoadFileCover }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  const onUploadFileCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    if (file) {
      onLoadFileCover(file)
    }

    return
  }

  return (
    <>
      <ControlledTextField
        control={control}
        errorMessage={errors}
        fullWidth
        label={'Name Deck'}
        name={'name'}
        placeholder={'Name'}
      />
      <>
        {imageURL && (
          <div className={s.imageField}>
            <img alt={'deck img'} src={imageURL} />
          </div>
        )}
        <Typography
          as={'label'}
          className={s.loader}
          onClick={() => ref.current?.click()}
          variant={'subtitle2'}
        >
          <Button fullWidth type={'button'} variant={'secondary'}>
            <Image />
            <Typography variant={'subtitle2'}>Upload Image</Typography>
          </Button>
          <input className={s.fileInput} onChange={onUploadFileCover} ref={ref} type={'file'} />
        </Typography>
        <ControlledCheckbox
          control={control}
          label={'Private deck'}
          name={'isPrivate'}
        ></ControlledCheckbox>
      </>
    </>
  )
}
