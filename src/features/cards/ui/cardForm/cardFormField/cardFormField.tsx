import { ChangeEvent, ComponentPropsWithoutRef, useRef } from 'react'
import { Control } from 'react-hook-form'

import { Image } from '@/assets/icons/image'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { CardFormValues } from '@/features/cards/ui/cardForm/cardFormSchema'

import s from './cardFormField.module.scss'

type Props = {
  control: Control<CardFormValues>
  errors?: string | undefined
  imageURL: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadFileCover: (data: File) => void
} & ComponentPropsWithoutRef<'input'>
export const CardFormField = ({
  control,
  errors,
  imageURL,
  label,
  name,
  onLoadFileCover,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeLoadFileCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    if (file) {
      onLoadFileCover(file)
    }

    return
  }

  return (
    <>
      <Typography as={'p'} className={s.label} variant={'subtitle2'}>
        {`${label}:`}
      </Typography>
      <ControlledTextField
        control={control}
        errorMessage={errors}
        fullWidth
        label={label}
        name={name}
        placeholder={'Name'}
      />
      <>
        {imageURL && (
          <div className={s.imageField}>
            <img alt={'card img'} src={imageURL} />
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
            <Typography as={'span'} variant={'subtitle2'}>
              {'Change Cover'}
            </Typography>
          </Button>
          <input className={s.fileInput} onChange={onChangeLoadFileCover} ref={ref} type={'file'} />
        </Typography>
      </>
    </>
  )
}
