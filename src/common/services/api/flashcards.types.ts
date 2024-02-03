export type GetDecksResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksResponseItemsAuthor = {
  id: string
  name: string
}

export type GetDecksResponseItems = {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted?: boolean | null
  isPrivate: boolean
  name: string
  shots: number
  updated: string
  userId: string
}

export type GetDecksResponse = {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}

export type GetDeckLearnResponse = {
  answer: string
  answerImg?: string
  answerVideo?: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
  shots: number
  updated: string
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}

export type CreateDeckArgs = {
  cover?: null | string
  isPrivate?: boolean
  name: string
}
