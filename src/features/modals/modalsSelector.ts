import { RootState } from '@/common/services/store'

export const selectOpenModal = (state: RootState) => state.modals.openModal
