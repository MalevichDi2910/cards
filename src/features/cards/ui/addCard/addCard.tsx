import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { ControlledSelect } from '@/components/ui/controlled/controlledSelect'
import Modal from '@/components/ui/modal/modal'
import { Option } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/features/cards/api'
import { AddCardFormField } from '@/features/cards/ui/addCard/addCardFormField/addCardFormField'
import { addCardFormSchema, addCardFormValues } from '@/features/cards/ui/addCard/addCardFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'

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
  const options: Option[] = [
    { title: 'Text', value: 'text' },
    { title: 'Picture', value: 'picture' },
  ]

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
  const { control, handleSubmit, watch } = useForm<addCardFormValues>({
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
    await createCard({ body: formData, id }).then(() => {
      closeModal()
    })
  }

  const questionFormat = watch('questionFormat')
  const answerFormat = watch('answerFormat')

  const onChangeQuestionCover = (data: File) => {
    setQuestionCover(data)
  }
  const onChangeAnswerCover = (data: File) => {
    setAnswerCover(data)
  }
  const questionImage = questionCover ? URL.createObjectURL(questionCover) : cardValues?.questionImg
  const answerImage = answerCover ? URL.createObjectURL(answerCover) : cardValues?.answerImg

  return (
    <Modal isOpen={open} onOpenChange={changeOpen} title={'Add New Card'}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ControlledSelect
          control={control}
          fullWidth
          label={'Choose a question format'}
          name={'questionFormat'}
          options={options}
          placeholder={'Data format type'}
        />
        <AddCardFormField
          control={control}
          fieldFormat={questionFormat}
          imageURL={questionImage}
          label={'Question'}
          name={'question'}
          onLoadFileCover={onChangeQuestionCover}
        />
        <AddCardFormField
          control={control}
          fieldFormat={answerFormat}
          imageURL={answerImage}
          label={'Answer'}
          name={'answer'}
          onLoadFileCover={onChangeAnswerCover}
        />
        <div>
          <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button type={'submit'}>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
        </div>
      </form>
    </Modal>
  )
}
