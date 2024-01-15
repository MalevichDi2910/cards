import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image } from '@/assets/icons/image'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { ControlledSelect } from '@/components/ui/controlled/controlledSelect'
import Modal from '@/components/ui/modal/modal'
import { Option } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

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

  const [open, setOpen] = useState(false)
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)
  const changeOpen = (open: boolean) => {
    setOpen(open)
  }

  const closeModal = () => {
    setOpen(false)
  }
  const { control, handleSubmit, watch } = useForm({})

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  const questionFormat = watch('questionFormat')
  const answerFormat = watch('answerFormat')

  const onChangeQuestionCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    setQuestionCover(file)
    if (!file) {
      return
    }
  }
  const onChangeAnswerCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    setAnswerCover(file)
    if (!file) {
      return
    }
  }
  const questionImage = questionCover ? URL.createObjectURL(questionCover) : cardValues?.questionImg
  const answerImage = answerCover ? URL.createObjectURL(answerCover) : cardValues?.answerImg

  return (
    <Modal isOpen={open} onOpenChange={changeOpen} title={'Add New Card'}>
      <form onSubmit={onSubmit}>
        <ControlledSelect
          control={control}
          fullWidth
          label={'Choose a question format'}
          name={'questionFormat'}
          options={options}
          placeholder={'Data format type'}
        />
        {questionFormat === 'text' && (
          <ControlledTextField control={control} fullWidth label={'Question'} name={'question'} />
        )}
        {questionFormat === 'picture' && (
          <>
            {questionImage && (
              <div>
                <img alt={'card img'} src={questionImage} />
              </div>
            )}
            <Typography as={'label'} htmlFor={'questionImageInput'} variant={'subtitle2'}>
              <Button fullWidth type={'button'} variant={'secondary'}>
                <Image />
                <Typography as={'span'} variant={'subtitle2'}>
                  {'Change Cover'}
                </Typography>
              </Button>
              <input id={'questionImageInput'} onChange={onChangeQuestionCover} type={'file'} />
            </Typography>
          </>
        )}

        {answerFormat === 'text' && (
          <ControlledTextField control={control} fullWidth label={'Answer'} name={'answer'} />
        )}
        {answerFormat === 'picture' && (
          <>
            {answerImage && (
              <div>
                <img alt={'card img'} src={answerImage} />
              </div>
            )}
            <Typography as={'label'} htmlFor={'answerImageInput'} variant={'subtitle2'}>
              <Button fullWidth type={'button'} variant={'secondary'}>
                <Image />
                <Typography as={'span'} variant={'subtitle2'}>
                  {'Change Cover'}
                </Typography>
              </Button>
              <input id={'answerImageInput'} onChange={onChangeAnswerCover} type={'file'} />
            </Typography>
          </>
        )}
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
