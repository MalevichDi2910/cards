import { Sort } from '@/components/ui/table'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  pageSize: 10,
  question: '',
  sortParams: null as Sort,
}

export const cardSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {},
})
