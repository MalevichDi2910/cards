import { ChangeEvent, ComponentPropsWithoutRef, useRef } from 'react'
import { Control } from 'react-hook-form'

import { Image } from '@/assets/icons/image'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { addCardFormValues } from '@/features/cards/ui/addCard/addCardFormSchema'

type Props = {
  control: Control<addCardFormValues>
  imageURL: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadFileCover: (data: File) => void
} & ComponentPropsWithoutRef<'input'>
export const AddCardFormField = ({ control, imageURL, label, name, onLoadFileCover }: Props) => {
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
      <ControlledTextField control={control} label={label} name={name} />
      <>
        {imageURL && (
          <div>
            <img alt={'card img'} src={imageURL} />
          </div>
        )}
        <Typography as={'label'} onClick={() => ref.current?.click()} variant={'subtitle2'}>
          <Button fullWidth type={'button'} variant={'secondary'}>
            <Image />
            <Typography as={'span'} variant={'subtitle2'}>
              {'Change Cover'}
            </Typography>
          </Button>
          <input onChange={onChangeLoadFileCover} ref={ref} type={'file'} />
        </Typography>
      </>
    </>
  )
}
