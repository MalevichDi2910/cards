import { GetDecksResponsePagination } from '@/common/services/api/flashcards.types'

type CardGradeType = 0 | 1 | 2 | 3 | 4 | 5

export type Card = {
  answer: string
  answerImg: null | string
  answerVideo: string
  created: string
  deckId: string
  grade: CardGradeType
  id: string
  question: string
  questionImg: null | string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type CardsResponseType = {
  items: Card[]
  pagination: GetDecksResponsePagination
}

export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
}
