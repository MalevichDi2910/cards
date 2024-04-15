import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DeckFormField } from '@/features/decks/ui/deck-form/deck-form-field'
import { DeckFormValues, deckFormSchema } from '@/features/decks/ui/deck-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/features/cards/ui/cardForm/cardForm.module.scss'

type Props = {
  buttonTitle: string
  closeModal: () => void
  defaultValues?: {
    isPrivate: boolean
    name: string
  }
  onSubmit: (data: FormData) => void
}
export const DeckForm = ({ buttonTitle, closeModal, defaultValues, onSubmit }: Props) => {
  const [image, setImage] = useState<File | null>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DeckFormValues>({
    defaultValues,
    resolver: zodResolver(deckFormSchema),
  })
  const onSubmitHandler = async (data: DeckFormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', String(data.isPrivate))
    image && formData.append('cover', image)
    onSubmit(formData)
  }

  const onSetUploadImage = (data: File) => {
    setImage(data)
  }

  const uploadImage = image ? URL.createObjectURL(image) : undefined

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <DeckFormField
          control={control}
          errors={errors.name?.message}
          imageURL={uploadImage}
          onLoadFileCover={onSetUploadImage}
        />
        <div className={s.actionBlock}>
          <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button type={'submit'} variant={'primary'}>
            <Typography variant={'subtitle2'}>{buttonTitle}</Typography>
          </Button>
        </div>
      </form>
    </>
  )
}
