import { Option } from '@/components/ui/select'
import { Sort } from '@/components/ui/table'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  pageSize: 10,
  range: [0, 100],
  search: '',
  selectItems: [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ] as Option[],
  showMyDecks: false,
  sort: null as Sort,
}

export const decksSlice = createSlice({
  initialState,
  name: 'decks',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setRange: (state, action: PayloadAction<{ range: number[] }>) => {
      state.range = action.payload.range
    },
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search
    },
    setShowMyDecks: (state, action: PayloadAction<{ showMyDecks: boolean }>) => {
      state.showMyDecks = action.payload.showMyDecks
    },
    setSort: (state, action: PayloadAction<{ sortParams: Sort }>) => {
      state.sort = action.payload.sortParams
    },
  },
})
export const decksActions = decksSlice.actions
