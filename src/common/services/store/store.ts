import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { baseApi } from '@/common/services/api/baseApi'
import { cardSlice } from '@/features/cards/modal/cardsSlice'
import { decksSlice } from '@/features/decks/modal'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [cardSlice.reducerPath]: cardSlice.reducer,
    [decksSlice.reducerPath]: decksSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
