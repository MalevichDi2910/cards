import { RootState } from '@/common/services/store'

export const selectCardsQuestion = (state: RootState) => state.cards.question

export const selectCardsCurrentPage = (state: RootState) => state.cards.currentPage

export const selectCardsSortParams = (state: RootState) => state.cards.sortParams
export const selectCardsPageSize = (state: RootState) => state.cards.pageSize
export const selectSelectItems = (state: RootState) => state.cards.selectItems
