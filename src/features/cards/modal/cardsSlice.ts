import { Sort } from '@/components/ui/table'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  pageSize: 10,
  question: '',
  sortParams: null as Sort,
}

export const cardSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setSort: (state, action: PayloadAction<{ sortParams: Sort }>) => {
      state.sortParams = action.payload.sortParams
    },
  },
})

export const cardsActions = cardSlice.actions
