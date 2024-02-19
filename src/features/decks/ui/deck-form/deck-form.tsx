import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DeckFormField } from '@/features/decks/ui/deck-form/deck-form-field'
import { DeckFormSchema, deckFormSchema } from '@/features/decks/ui/deck-form-schema'
import { selectNameDeck, selectPrivateDeck } from '@/features/modals'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/features/cards/ui/cardForm/cardForm.module.scss'

type Props = {
  buttonTitle: string
  closeModal: () => void
  onSubmit: (data: FormData) => void
}
export const DeckForm = ({ buttonTitle, closeModal, onSubmit }: Props) => {
  const nameDeck = useAppSelector(selectNameDeck)
  const isPrivate = useAppSelector(selectPrivateDeck)
  const [image, setImage] = useState<File | null>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DeckFormSchema>({
    defaultValues: {
      isPrivate,
      nameDeck,
    },
    resolver: zodResolver(deckFormSchema),
  })
  const onSubmitHandler = async () => {
    const formData = new FormData()

    formData.append('name', nameDeck)
    formData.append('isPrivate', String(isPrivate))
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
        <DevTool control={control} />
        <DeckFormField
          control={control}
          errors={errors.nameDeck?.message}
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
