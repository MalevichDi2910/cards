import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/features/cards/api'
import { AddCardFormField } from '@/features/cards/ui/addCard/addCardFormField/addCardFormField'
import { addCardFormSchema, addCardFormValues } from '@/features/cards/ui/addCard/addCardFormSchema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './addCard.module.scss'

export type CardValues = {
  answer: string
  answerImg: null | string | undefined
  question: string
  questionImg: null | string | undefined
}
type Props = {
  cardValues?: CardValues
}
export const AddCard = ({ cardValues }: Props) => {
  const { id = '' } = useParams<{ id: string }>()
  const [createCard] = useCreateCardMutation()

  const [open, setOpen] = useState(false)
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const { control, handleSubmit } = useForm<addCardFormValues>({
    defaultValues: {
      answer: cardValues?.answer || '',
      question: cardValues?.question || '',
    },
    resolver: zodResolver(addCardFormSchema),
  })
  const onSubmitHandler = async (data: addCardFormValues) => {
    console.log('FFFFFF')
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    questionCover && formData.append('questionImg', questionCover)
    answerCover && formData.append('answerImg', answerCover)
    await createCard({ body: formData, id }).then(() => {
      closeModal()
    })
  }

  const onChangeQuestionCover = (data: File) => {
    setQuestionCover(data)
  }
  const onChangeAnswerCover = (data: File) => {
    setAnswerCover(data)
  }
  const questionImage = questionCover ? URL.createObjectURL(questionCover) : cardValues?.questionImg
  const answerImage = answerCover ? URL.createObjectURL(answerCover) : cardValues?.answerImg
  const trigger = (
    <Button>
      <Typography as={'span'} variant={'subtitle2'}>
        Add New Card
      </Typography>
    </Button>
  )

  return (
    <>
      <Modal isOpen={open} onOpenChange={changeOpen} title={'Add New Card'} trigger={trigger}>
        <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
          <DevTool control={control} />
          <AddCardFormField
            control={control}
            imageURL={questionImage}
            label={'Question'}
            name={'question'}
            onLoadFileCover={onChangeQuestionCover}
          />
          <AddCardFormField
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
              <Typography variant={'subtitle2'}>Add New Card</Typography>
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}
