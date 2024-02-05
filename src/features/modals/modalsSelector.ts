import { RootState } from '@/common/services/store'

export const selectOpenModal = (state: RootState) => state.modals.openModal

export const selectPrivateDeck = (state: RootState) => state.modals.deck.isPrivate

export const selectNameDeck = (state: RootState) => state.modals.deck.nameDeck
