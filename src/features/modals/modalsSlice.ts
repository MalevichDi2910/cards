import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  deck: {
    isPrivate: false,
    nameDeck: '',
  },
  openModal: false,
}

export const modalsSlice = createSlice({
  initialState,
  name: 'modals',
  reducers: {
    setClearModal: (state, _) => {
      state.openModal = false
      state.deck.isPrivate = false
      state.deck.nameDeck = ''
    },
    setOpenModal: (state, action: PayloadAction<{ openModal: boolean }>) => {
      state.openModal = action.payload.openModal
    },
  },
})

export const modalsActions = modalsSlice.actions
