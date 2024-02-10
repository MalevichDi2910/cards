import { ChangeEvent, ComponentPropsWithoutRef, useRef } from 'react'
import { Control } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Image } from '@/assets/icons/image'
import { useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { DeckFormSchema } from '@/features/decks/ui/deck-form-schema'
import { modalsActions, selectNameDeck, selectPrivateDeck } from '@/features/modals'

import s from './deck-form-field.module.scss'

type Props = {
  control: Control<DeckFormSchema>
  errors?: string | undefined
  imageURL: null | string | undefined
  label: string
  name: 'nameDeck'
  onLoadFileCover: (data: File) => void
} & ComponentPropsWithoutRef<'input'>
export const DeckFormField = ({
  control,
  errors,
  imageURL,
  label,
  name,
  onLoadFileCover,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const nameDeck = useAppSelector(selectNameDeck)
  const isPrivate = useAppSelector(selectPrivateDeck)
  const onUploadFileCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    if (file) {
      onLoadFileCover(file)
    }

    return
  }

  const onChangeNameDeck = (nameDeck: string) => {
    dispatch(modalsActions.setNameDeck({ nameDeck }))
  }

  const onChangePrivateDeck = (isPrivate: boolean) => {
    dispatch(modalsActions.setPrivateDeck({ isPrivate }))
  }

  return (
    <>
      <ControlledTextField
        control={control}
        errorMessage={errors}
        fullWidth
        label={label}
        name={name}
        onChange={e => onChangeNameDeck(e.currentTarget.value)}
        placeholder={'Name'}
        value={nameDeck}
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
          checked={isPrivate}
          control={control}
          label={'Private deck'}
          name={'isPrivate'}
          onValueChange={() => onChangePrivateDeck(!isPrivate)}
        ></ControlledCheckbox>
      </>
    </>
  )
}
