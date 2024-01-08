import { Sort } from '@/components/ui/table'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SelectItems = { title: string; value: string }[]

const initialState = {
  currentPage: 1,
  pageSize: 10,
  question: '',
  selectItems: [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ] as SelectItems,
  sortParams: null as Sort,
}

export const cardSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSort: (state, action: PayloadAction<{ sortParams: Sort }>) => {
      state.sortParams = action.payload.sortParams
    },
  },
})

export const cardsActions = cardSlice.actions
