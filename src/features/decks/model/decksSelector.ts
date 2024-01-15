import { RootState } from '@/common/services/store'

export const selectDecksCurrentPage = (state: RootState) => state.decks.currentPage

export const selectDecksPageSize = (state: RootState) => state.decks.pageSize

export const selectDecksRange = (state: RootState) => state.decks.range

export const selectDecksSort = (state: RootState) => state.decks.sort

export const selectDecksSelectItems = (state: RootState) => state.decks.selectItems

export const selectShowMyDecks = (state: RootState) => state.decks.showMyDecks

export const selectSearch = (state: RootState) => state.decks.search
