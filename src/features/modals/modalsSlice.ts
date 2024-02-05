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
    setNameDeck: (state, action: PayloadAction<{ nameDeck: string }>) => {
      state.deck.nameDeck = action.payload.nameDeck
    },
    setOpenModal: (state, action: PayloadAction<{ openModal: boolean }>) => {
      state.openModal = action.payload.openModal
    },
    setPrivateDeck: (state, action: PayloadAction<{ isPrivate: boolean }>) => {
      state.deck.isPrivate = action.payload.isPrivate
    },
  },
})

export const modalsActions = modalsSlice.actions
