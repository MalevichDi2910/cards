import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { addCardFormSchema, addCardFormValues } from '@/features/cards/ui/addCard/addCardFormSchema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/features/cards/ui/addCard/addCard.module.scss'

import { CardFormField } from './cardFormField'

export type CardValues = {
  answer: string
  answerImg: null | string | undefined
  question: string
  questionImg: null | string | undefined
}

type Props = {
  buttonTitle: string
  cardValues?: CardValues
  closeModal: () => void
  onSubmit: (data: FormData) => void
}
export const CardForm = ({ buttonTitle, cardValues, closeModal, onSubmit }: Props) => {
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)
  const { control, handleSubmit } = useForm<addCardFormValues>({
    defaultValues: {
      answer: cardValues?.answer || '',
      question: cardValues?.question || '',
    },
    resolver: zodResolver(addCardFormSchema),
  })
  const onSubmitHandler = async (data: addCardFormValues) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    questionCover && formData.append('questionImg', questionCover)
    answerCover && formData.append('answerImg', answerCover)
    onSubmit(formData)
  }

  const onChangeQuestionCover = (data: File) => {
    setQuestionCover(data)
  }
  const onChangeAnswerCover = (data: File) => {
    setAnswerCover(data)
  }
  const questionImage = questionCover ? URL.createObjectURL(questionCover) : cardValues?.questionImg
  const answerImage = answerCover ? URL.createObjectURL(answerCover) : cardValues?.answerImg

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <DevTool control={control} />
        <CardFormField
          control={control}
          imageURL={questionImage}
          label={'Question'}
          name={'question'}
          onLoadFileCover={onChangeQuestionCover}
        />
        <CardFormField
          control={control}
          imageURL={answerImage}
          label={'Answer'}
          name={'answer'}
          onLoadFileCover={onChangeAnswerCover}
        />
        <div className={s.actionBlock}>
          <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button type={'submit'}>
            <Typography variant={'subtitle2'}>{buttonTitle}</Typography>
          </Button>
        </div>
      </form>
    </>
  )
}
