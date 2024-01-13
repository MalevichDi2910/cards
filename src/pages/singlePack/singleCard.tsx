import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GoBack } from '@/components/ui/goBack'
import { Loader } from '@/components/ui/loader'
import { RadioGroup } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import {
  useGetDeckQuery,
  useGetRandomCardQuery,
  useSaveCardGradeMutation,
} from '@/features/decks/api'

import s from '@/pages/singlePack/singleCard.module.scss'

export const SingleCard = () => {
  const { id = '' } = useParams<{ id: string }>()
  // const id = 'clr3b62x2051uzk2vxpvfbrbm' /// for testing purposes only
  const { data: deck, isLoading: isDeckLoading } = useGetDeckQuery({ id })
  const { data: question, isLoading: isCardLoading } = useGetRandomCardQuery({ id })
  const [saveRating, { error, isLoading: isRatingLoading }] = useSaveCardGradeMutation()
  const [showAnswer, setShowAnswer] = useState(false)
  const [rating, setRating] = useState('1')

  const optionsData = [
    { title: 'Did not know', value: '1' },
    { title: 'Forgot', value: '2' },
    { title: 'A lot of thoughts', value: '3' },
    { title: 'Confused', value: '4' },
    { title: 'Knew the answer', value: '5' },
  ]

  const showNexQuestion = () => {
    saveRating({
      cardId: question?.id,
      grade: Number(rating),
      id,
    })
    setShowAnswer(false)
    setRating('1')
  }

  if (isDeckLoading || isCardLoading || isRatingLoading) {
    return <Loader />
  }

  if (error) {
    return <Typography variant={'h1'}>Error</Typography>
  }

  return (
    <>
      <GoBack className={s.link} title={'Back to Decks List'} />
      <Card variant={'dark'}>
        <div className={s.container}>
          <Typography className={s.title} variant={'large'}>
            Learn {deck?.name}
          </Typography>
          <Typography className={s.question} variant={'body1'}>
            <b>Question:</b> {question?.question}
          </Typography>
          <Typography className={s.attempts} variant={'body1'}>
            Количество попыток ответов на вопрос: <b>{question?.shots}</b>
          </Typography>
          {!showAnswer && (
            <Button
              className={s.showAnswerButton}
              onClick={() => setShowAnswer(true)}
              variant={'primary'}
            >
              Show Answer
            </Button>
          )}
          {showAnswer && (
            <div className={s.container}>
              <Typography className={s.answer} variant={'body1'}>
                <b>Answer:</b> {question?.answer}
              </Typography>
              <Typography className={s.rateTitle} variant={'subtitle1'}>
                Rate yourself:
              </Typography>
              <div className={s.rateRadio}>
                <RadioGroup onValueChange={value => setRating(value)} options={optionsData} />
              </div>
              <Button
                className={s.nextQuestionButton}
                onClick={showNexQuestion}
                variant={'primary'}
              >
                Next Question
              </Button>
            </div>
          )}
        </div>
      </Card>
    </>
  )
}
